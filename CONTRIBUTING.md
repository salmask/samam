# Contributing to Samam

Thank you for your interest in contributing to Samam! Samam is an open source project aimed at developing a website for the Satyanveshana Mandali and creating tools to promote a better lifestyle and philosophy.

## How to Contribute

Contributions to Samam can take many forms. Here are some ways you can help:

### Reporting Bugs

Before creating bug reports, please check the [issue tracker](https://github.com/khuddus/samam/issues) to avoid duplicates. When you are creating a bug report, ensure you include as many details as possible and a code sample or an executable test case demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Samam, including completely new features and minor improvements to existing functionality. Again, please check the [issue tracker](https://github.com/khuddus/samam/issues) before creating enhancement suggestions to avoid duplicates. Fill in the template, including the steps that you imagine you would take if the feature you're requesting existed.

### Your First Code Contribution

Unsure where to begin contributing to Samam? You can start by looking through these `beginner` and `help-wanted` issues:

- Beginner issues - issues which should only require a few lines of code, and a test or two.
- Help wanted issues - issues which should be a bit more involved than `beginner` issues.

### Pull Requests

- Fork the repository and create your branch from `main`.
- Fill in the required template
- Follow the coding conventions (code style, feature documentation, etc.)
- Write and update tests, and ensure they pass
- Write or update documentation as necessary
- Ensure the build passes

### Setting Up Your Development Environment

To set up your development environment, you need to configure some environment variables and set up MongoDB:

1. **Create a `.env` file**: Copy the contents of `.env.example` to a new `.env` file in the root of the project.

    ```
    cp .env.example .env
    ```

2. **Fill in the environment variables**: The current required variables are:
    ```
    MONGODB_URI=
    JWT_SECRET=
    ```
   - **MONGODB_URI**: Set up MongoDB on your local machine or use a cloud MongoDB service, and put the connection string here.
   - **JWT_SECRET**: Generate a suitable string for JWT secret and add it here.

3. **Install dependencies and start the development server**:
    ```shell
    npm install
    npm run dev
    ```

## Code of Conduct

Samam has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text in our [Code of Conduct](./CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.


## Getting Started

Here are some resources to help you get started with open source development:

1. [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
2. [GitHub Flow](https://guides.github.com/introduction/flow/)

## Additional Resources

- [Project Website](https://samam.org)
- [GitHub Repository](https://github.com/khuddus/samam/)
- [Issue Tracker](https://github.com/khuddus/samam/issues)
- [Source Code](https://github.com/khuddus/samam/)

Thank you for contributing to Samam!
