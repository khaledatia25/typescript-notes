type Primitive = string | number | boolean | null;
type JSONObject = {
    [k: string]: JSONValue;
};
type JSONArray = JSONValue[];
type JSONValue = Primitive | JSONArray | JSONObject;
declare function isJSON(arg: JSONValue): void;
