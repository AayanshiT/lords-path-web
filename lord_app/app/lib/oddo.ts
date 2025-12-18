// -----------------------------
// Odoo API Config
// -----------------------------
const ODOO_URL = "https://lordspatherp.nians.in/jsonrpc";
const DB = "odoo19";
const USER = "admin";
const PASSWORD = "admin";

// -----------------------------
// JSON-RPC Request (Typed)
// ------------------------------
interface JsonRpcResponse<T> {
  jsonrpc: string;
  id: number;
  result: T;
}

async function jsonRpcRequest<T>(
  service: string,
  method: string,
  params: any[]
): Promise<T> {
  const body = {
    jsonrpc: "2.0",
    method: "call",
    params: { service, method, args: params },
    id: Date.now(),
  };

  const response = await fetch(ODOO_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data: JsonRpcResponse<T> = await response.json();
  return data.result;
}

// -----------------------------
// Odoo Login (Typed)
// -----------------------------
export async function odooLogin(): Promise<number> {
  return await jsonRpcRequest<number>("common", "login", [
    DB,
    USER,
    PASSWORD,
  ]);
}

// -----------------------------
// Search Read (Typed)
// -----------------------------
export interface OdooRecord {
  id: number;
  [key: string]: any;
}

export async function odooSearchRead(
  model: string,
  domain: any[] = [],
  fields: string[] = []
): Promise<OdooRecord[]> {
  const uid = await odooLogin();

  return await jsonRpcRequest<OdooRecord[]>("object", "execute_kw", [
    DB,
    uid,
    PASSWORD,
    model,
    "search_read",
    [domain],
    { fields },
  ]);
}

export async function odooCreateUsers(values: Record<string, any>): Promise<number> {
  try {
    const uid = await odooLogin();
    console.log("Logged in with UID:", uid);

    console.log("Attempting to create user with values:", JSON.stringify(values, null, 2));

    const result = await jsonRpcRequest<any>("object", "execute_kw", [
      DB,
      uid,
      PASSWORD,
      "res.users",
      "create",
      [values],  // This wraps values in an array
      {}  // Empty options dict
    ]);

    console.log("Odoo create users raw result:", result);
    console.log("Result type:", typeof result);

    if (!result || result === false) {
      throw new Error("User creation failed - no ID returned from Odoo");
    }

    return result;
  } catch (error) {
    console.error("Error creating user:", error);

    if (error && typeof error === 'object' && 'data' in error) {
      console.error("Error data:", JSON.stringify(error.data, null, 2));
    }

    throw error;
  }
}
// -----------------------------
// Update users in Odoo
// -----------------------------
export async function odooExecuteUpdateUsers(
  id: number,
  values: { [key: string]: any }
): Promise<boolean> {
  try {
    const uid = await odooLogin();

    // 'write' method updates existing records
    const result = await jsonRpcRequest<boolean>("object", "execute_kw", [
      DB,
      uid,
      PASSWORD,
      "res.users",
      "write",
      [[id], values], // first argument: array of IDs, second: values to update
    ]);
    return result; // true if successful
  } catch (error) {
    console.error("Odoo update users error:", error);
    throw error;
  }
}

export async function checkUserCreationPermission(): Promise<boolean> {
  try {
    const uid = await odooLogin();

    const hasAccess = await jsonRpcRequest<boolean>("object", "execute_kw", [
      DB,
      uid,
      PASSWORD,
      "res.users",
      "check_access_rights",
      ["create"],
      { raise_exception: false }
    ]);

    console.log("User creation permission:", hasAccess);
    return hasAccess;
  } catch (error) {
    console.error("Permission check error:", error);
    return false;
  }
}
export async function fetchLabTests(): Promise<OdooRecord[]> {
  const domain = [
    ["sale_ok", "=", true],
    ["active", "=", true]
  ];

  const fields = [
    "id",
    "name",
    "list_price",
    "type"
  ];

  return await odooSearchRead(
    "product.template",   // 🔑 main model
    domain,
    fields
  );
}


export async function fetchLabTestsPaginated(
  offset = 0,
  limit = 80
): Promise<OdooRecord[]> {
  const uid = await odooLogin();

  return await jsonRpcRequest<OdooRecord[]>("object", "execute_kw", [
    DB,
    uid,
    PASSWORD,
    "product.template",
    "search_read",
    [[
      ["sale_ok", "=", true],
      ["active", "=", true]
    ]],
    {
      fields: ["id", "name", "list_price", "type"],
      offset,
      limit,
      order: "name asc"
    }
  ]);
}