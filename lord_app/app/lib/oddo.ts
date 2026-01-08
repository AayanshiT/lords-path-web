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
      "res.partner",
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
      "res.partner",
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
      "res.partner",
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

// Fetch body organs

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


// Fetch lab packages with enriched test names
export async function fetchLabPackages() {
  const uid = await odooLogin();

  // Fetch packages
  const packages = await jsonRpcRequest<any[]>("object", "execute_kw", [
    DB,
    uid,
    PASSWORD,
    "lp.lab.test.package",
    "search_read",
    [[]],
    {
      fields: ["id", "name", "price", "test_ids", "display_name"],
    },
  ]);

  if (packages.length === 0) return [];

  // Collect all unique test_ids
  const allTestIds = Array.from(
    new Set(packages.flatMap((pkg) => pkg.test_ids || []))
  );

  let testNameMap: Record<number, string> = {};

  if (allTestIds.length > 0) {
    // Fetch test names
    const tests = await jsonRpcRequest<any[]>("object", "execute_kw", [
      DB,
      uid,
      PASSWORD,
      "product.template",
      "read",
      [allTestIds],
      { fields: ["id", "name", "display_name"] },
    ]);

    testNameMap = tests.reduce((map, test) => {
      map[test.id] = test.display_name || test.name || `Test ID ${test.id}`;
      return map;
    }, {} as Record<number, string>);
  }

  // Enrich packages
  const enrichedPackages = packages.map((pkg) => ({
    id: pkg.id,
    name: pkg.name || pkg.display_name || "Unnamed Package",
    price: pkg.price || 0,
    test_ids: pkg.test_ids || [],
    included_tests: (pkg.test_ids || []).map(
      (id: number) => testNameMap[id] || `Test ID ${id}`
    ),
  }));

  return enrichedPackages;
}


// Fetch testimonials
export async function fetchTestimonials(): Promise<OdooRecord[]> {
  const uid = await odooLogin();

  const res = await jsonRpcRequest<OdooRecord[]>("object", "execute_kw", [
    DB,
    uid,
    PASSWORD,
    "lab.testimonial",
    "search_read",
    [[]],
    {},
  ]);

  console.log("Fetched testimonials:", res);
  return res;
}


export async function fetchCompanies(): Promise<OdooRecord[]> {
  const uid = await odooLogin();

  const res = await jsonRpcRequest<OdooRecord[]>(
    "object",
    "execute_kw",
    [
      DB,
      uid,
      PASSWORD,
      "res.partner",
      "search_read",
      [
        [["category_id", "=", "LABS"]],
      ],
      {
        fields: [
          "name",
          "street",
          "street2",
          "city",
          "state_id",
          "zip",
          "country_id",
        ],
      },
    ]
  );

  return res;
}

// -----------------------------
// Create Appointment in Odoo
// -----------------------------
export async function odooExecuteCreateAppointment(
  values: Record<string, any>
): Promise<number> {
  try {
    const uid = await odooLogin();

    const result = await jsonRpcRequest<number>("object", "execute_kw", [
      DB,
      uid,
      PASSWORD,
      "lab.appointment", // 👈 CONFIRM MODEL NAME
      "create",
      [values],
    ]);

    if (!result) {
      throw new Error("Appointment creation failed");
    }

    return result;
  } catch (error: any) {
    console.error("Odoo create appointment error:", error?.data || error);
    throw error;
  }
}


// -----------------------------
// Update Appointment in Odoo
// -----------------------------
export async function odooExecuteUpdateAppointment(
  id: number,
  values: { [key: string]: any }
): Promise<boolean> {
  try {
    const uid = await odooLogin();

    const result = await jsonRpcRequest<boolean>("object", "execute_kw", [
      DB,
      uid,
      PASSWORD,
      "lp.appointment",
      "write",
      [[id], values],
    ]);

    return result;
  } catch (error) {
    console.error("Odoo update appointment error:", error);
    throw error;
  }
}

// -----------------------------
// Post message on Appointment
// -----------------------------
export async function odooExecutePostAppointmentMessage(
  appointmentId: number,
  message: string
): Promise<boolean> {
  try {
    const uid = await odooLogin();

    return await jsonRpcRequest<boolean>("object", "execute_kw", [
      DB,
      uid,
      PASSWORD,
      "lp.appointment",
      "message_post",
      [
        [appointmentId],
        {
          body: message,
          message_type: "comment",
          subtype_xmlid: "mail.mt_note",
        },
      ],
    ]);
  } catch (error) {
    console.error("Odoo appointment message error:", error);
    throw error;
  }
}
