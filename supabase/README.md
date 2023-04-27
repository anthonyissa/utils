# Supabase

A simple package to connect and initialize a Supabase client.

## Installation

```Bash
npm i @aitox/supabase
```

## Usage

Make sure to set the following environment variables in your .env file:

```Java
SUPABASE_URL=<YOUR_SUPABASE_URL>
SUPABASE_KEY=<YOUR_SUPABASE_KEY>
```

Here is an example to call your supabase database using the client.

```Javascript
const supabase = require("@aitox/supabase");

(async () => {
  const { data, error } = await supabase.from("users").select("*").limit(1);
  if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log("Data:", data);
  }
})();
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
