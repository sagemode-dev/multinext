# Contributing to Multinext

First off, thanks for taking the time to contribute! 🎉 

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a new branch: `git checkout -b my-feature-branch`
4. Make your changes
5. Test your changes
6. Push to your fork
7. Submit a Pull Request

## Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Setup local testing domains in /etc/hosts
127.0.0.1 client1.localhost
127.0.0.1 client2.localhost
```

## Project Structure
```
src/
├── components/       # React components
├── hooks/           # Custom hooks
├── lib/             # Utilities
├── pages/           # Next.js pages
└── types/           # TypeScript types
```

## Coding Standards

- Use TypeScript for all new code
- Follow existing code style
- Write meaningful commit messages following [Conventional Commits](https://www.conventionalcommits.org/)
- Add tests for new features
- Update documentation for significant changes

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update documentation for any changed functionality
3. Add yourself to contributors list if you aren't already there
4. The PR will be merged once you have the sign-off of at least one maintainer

## Local Development

1. Create a `.env.local` file:
```env
MONGODB_URI=your_mongodb_uri
MONGODB_DB=multitenant-demo
```

2. Seed the database:
```bash
npm run seed
```

## Questions?

Feel free to open an issue for:
- 🐛 Bug reports
- 💡 Feature suggestions
- 🤔 Questions about the code
- 📝 Documentation improvements

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
