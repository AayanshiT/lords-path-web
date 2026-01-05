// -----------------------------
// Odoo API Config
// -----------------------------
const ODOO_URL = "https://lordspatherp.nians.in/jsonrpc";
const DB = "odoo19_test";
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

// Odoo Login (Typed)

export async function odooLogin(): Promise<number> {
  return await jsonRpcRequest<number>("common", "login", [DB, USER, PASSWORD]);
}

// Search Read (Typed)

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

export async function odooCreateUsers(
  values: Record<string, any>
): Promise<number> {
  try {
    const uid = await odooLogin();
    console.log("Logged in with UID:", uid);

    console.log(
      "Attempting to create user with values:",
      JSON.stringify(values, null, 2)
    );

    const result = await jsonRpcRequest<any>("object", "execute_kw", [
      DB,
      uid,
      PASSWORD,
      "res.users",
      "create",
      [values], // This wraps values in an array
      {}, // Empty options dict
    ]);

    console.log("Odoo create users raw result:", result);
    console.log("Result type:", typeof result);

    if (!result || result === false) {
      throw new Error("User creation failed - no ID returned from Odoo");
    }

    return result;
  } catch (error) {
    console.error("Error creating user:", error);

    if (error && typeof error === "object" && "data" in error) {
      console.error("Error data:", JSON.stringify(error.data, null, 2));
    }

    throw error;
  }
}

// Update users in Odoo
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
      { raise_exception: false },
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
    ["active", "=", true],
  ];

  const fields = ["id", "name", "list_price", "type"];

  return await odooSearchRead(
    "product.template", // 🔑 main model
    domain,
    fields
  );
}

//lab tests paginated fetch
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
    [
      [
        ["sale_ok", "=", true],
        ["active", "=", true],
      ],
    ],
    {
      fields: ["id", "name", "list_price", "type"],
      offset,
      limit,
      order: "name asc",
    },
  ]);
}

// cities fetch
export async function fetchCities() {
  const uid = await odooLogin();

  return await jsonRpcRequest("object", "execute_kw", [
    DB,
    uid,
    PASSWORD,
    "res.country.state.city",
    "search_read",
    [[["state_id", "!=", false]]],
    {
      fields: ["id", "name", "state_id"],
      order: "name asc",
    },
  ]);
}

// Create partner in Odoo (form submission)

export async function odooCreatePartner(
  values: Record<string, any>
): Promise<number> {
  try {
    const uid = await odooLogin();

    const result = await jsonRpcRequest<number>("object", "execute_kw", [
      DB,
      uid,
      PASSWORD,
      "res.partner",
      "create",
      [values],
      {},
    ]);

    if (!result) {
      throw new Error("Partner creation failed");
    }

    return result;
  } catch (error) {
    console.error("Odoo create partner error:", error);
    throw error;
  }
}

// export async function fetchOrgans(): Promise<OdooRecord[]>{
//  const uid = await odooLogin();

//   const organs = await jsonRpcRequest<OdooRecord[]>("object", "execute_kw", [
//     DB,
//     uid,
//     PASSWORD,
//     "body.organ",
//     "search_read",
//     [
//       [
//         ["active", "=", true],
//       ],
//     ],
//     {
//       fields: ["id", "name", ],
//       order: "name asc",
//     },
//   ]);
//   console.log("Fetched organs:", organs);
//   return organs;

// }

export async function fetchOrgans(): Promise<OdooRecord[]> {
  try {
    const uid = await odooLogin();
    // console.log("Logged in UID:", uid);
    const records = await jsonRpcRequest<OdooRecord[]>("object", "execute_kw", [
      DB,
      uid,
      PASSWORD,
      "body.organ",
      "search_read",
      [[]],
      {
        fields: ["id", "body_organ"], // ✅ REQUIRED
        order: "body_organ asc",
      },
    ]);

    // console.log("Raw records from Odoo:", records);
    return records;
  } catch (error) {
    console.error("Error fetching organs:", error);
    throw error;
  }
}

// Fetch survey questions based on organId
export async function fetchSurveyQuestions(organId: number) {
  try {
    const uid = await odooLogin();
    const questions = await jsonRpcRequest("object", "execute_kw", [
      DB,
      uid,
      PASSWORD,
      "health.survey.quertion",
      "search_read",
      [[["organ_id", "=", organId]]],
      {
        fields: ["id", "name", "organ_id"],
      },
    ]);
    return questions;
  } catch (error) {
    console.error("Error fetching organs:", error);
    throw error;
  }
}
