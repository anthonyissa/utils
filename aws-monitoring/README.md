# AWS Controller

This package contains AWS controllers to monitor your apps.

[Installation](#installation)

[Usage](#usage)

[Contributing](#contributing)

[License](#license)

## Installation

`
npm i @aitox/aws-monitoring
`

## Usage

I would recommend putting the call for the cost watcher at the beginning of the main file of your app. 

Will print in the console when the 10$ threshold is reached.
watchAWSCost(10);

Will exit when the 10$ threshold is reached.
watchAWSCost(10, true);

Will exit when the 10$ threshold is reached. The watcher will be launched every 6 hours.
watchAWSCost(10, true, 1000 * 60 * 60 * 6);

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
