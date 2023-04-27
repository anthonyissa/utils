const dotenv = require("dotenv");
const supabase = require("../src/initClient");
dotenv.config();

describe("Supabase tests", () => {
    it("Should init a supabase client", async () => {
        expect(supabase).toBeDefined();
        const { error } = await supabase.from("users").select("*").limit(1);
        expect(error).toBeNull();        
    });
});