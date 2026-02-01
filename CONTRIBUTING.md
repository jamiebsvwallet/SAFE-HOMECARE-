# Contributing to SAFE HOMECARE

Thank you for your interest in contributing to SAFE HOMECARE! This document provides guidelines and instructions for contributing to the project.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)

## Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inclusive environment for all contributors.

### Expected Behavior
- Be respectful and professional
- Accept constructive criticism gracefully
- Focus on what's best for the project
- Show empathy towards other contributors

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Publishing private information
- Unprofessional conduct

## Getting Started

### Prerequisites
- Node.js v16 or higher
- npm or yarn
- Git
- React Native development environment
- Basic knowledge of JavaScript/React

### Setup Development Environment

1. **Fork the Repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/SAFE-HOMECARE-.git
   cd SAFE-HOMECARE-
   ```

2. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/jamiebsvwallet/SAFE-HOMECARE-.git
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the App**
   ```bash
   # Start Metro
   npm start
   
   # In another terminal
   npm run android  # or npm run ios
   ```

## Development Workflow

### Branching Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes

### Creating a Feature Branch

```bash
# Update your local main
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Making Changes

1. **Make Your Changes**
   - Write clean, readable code
   - Follow coding standards
   - Add comments where necessary

2. **Test Your Changes**
   ```bash
   # Run tests
   npm test
   
   # Run linter
   npm run lint
   ```

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

### Commit Message Format

Use conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(reports): add export to PDF functionality

fix(sensors): resolve Bluetooth connection timeout

docs(readme): update installation instructions

test(services): add unit tests for ReportService
```

## Coding Standards

### JavaScript/React Guidelines

#### File Naming
- Components: PascalCase (`Dashboard.js`)
- Services: PascalCase (`ReportService.js`)
- Utilities: camelCase (`dateFormatter.js`)
- Constants: UPPER_SNAKE_CASE (`API_ENDPOINTS.js`)

#### Code Style

**Use functional components:**
```javascript
// ✅ Good
const MyComponent = ({prop1, prop2}) => {
  return <View>...</View>;
};

// ❌ Avoid
class MyComponent extends React.Component {
  render() {
    return <View>...</View>;
  }
}
```

**Use hooks appropriately:**
```javascript
// ✅ Good
const [state, setState] = useState(initialValue);
useEffect(() => {
  // Side effects
}, [dependencies]);

// ❌ Avoid
this.state = {value: initialValue};
```

**Use arrow functions:**
```javascript
// ✅ Good
const handlePress = () => {
  // Handle press
};

// ❌ Avoid
function handlePress() {
  // Handle press
}
```

#### Formatting
- Indentation: 2 spaces
- Line length: Max 80-100 characters
- Semicolons: Optional but be consistent
- Quotes: Single quotes for strings
- Trailing commas: Yes

#### Component Structure
```javascript
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomComponent from './CustomComponent';

const MyComponent = ({prop1, prop2}) => {
  // 1. Hooks
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // Side effects
  }, []);
  
  // 2. Event handlers
  const handlePress = () => {
    // Handle event
  };
  
  // 3. Render helpers
  const renderItem = (item) => {
    return <Text>{item.name}</Text>;
  };
  
  // 4. Main render
  return (
    <View style={styles.container}>
      <Text>{prop1}</Text>
    </View>
  );
};

// 5. Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MyComponent;
```

### Service Guidelines

```javascript
class MyService {
  // Static methods for stateless operations
  static async fetchData() {
    try {
      // Implementation
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  // Instance methods for stateful operations
  async processData(data) {
    // Implementation
  }
}

export default MyService;
```

## Testing Guidelines

### Writing Tests

**Test file naming:**
- Component: `ComponentName.test.js`
- Service: `ServiceName.test.js`

**Test structure:**
```javascript
describe('ComponentName', () => {
  // Setup
  beforeEach(() => {
    // Reset state
  });
  
  // Tests
  it('should render correctly', () => {
    // Test implementation
  });
  
  it('should handle user interaction', () => {
    // Test implementation
  });
});
```

### Test Coverage

- Aim for 80%+ coverage
- Test critical paths
- Test error conditions
- Test edge cases

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage
```

## Submitting Changes

### Pull Request Process

1. **Update Your Branch**
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase main
   ```

2. **Push Your Branch**
   ```bash
   git push origin your-branch
   ```

3. **Create Pull Request**
   - Go to GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in PR template

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added new tests
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
```

### Review Process

1. Automated checks run
2. Code review by maintainers
3. Address feedback
4. Approval and merge

## Reporting Bugs

### Before Submitting

1. Check existing issues
2. Verify bug in latest version
3. Collect relevant information

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
- Device: [e.g. iPhone 12, Samsung S21]
- OS: [e.g. iOS 15, Android 12]
- App Version: [e.g. 1.0.0]

**Additional context**
Any other information
```

## Feature Requests

### Feature Request Template

```markdown
**Feature Description**
Clear description of the feature

**Problem to Solve**
What problem does this solve?

**Proposed Solution**
How should it work?

**Alternatives Considered**
Other approaches you've thought of

**Additional Context**
Mockups, examples, etc.
```

## Documentation

### Documentation Standards

- Write clear, concise documentation
- Include code examples
- Update README when needed
- Document API changes
- Add inline comments for complex logic

### Documentation Files

- `README.md` - Project overview
- `SETUP.md` - Installation guide
- `USER_GUIDE.md` - User documentation
- `API.md` - API reference
- `ARCHITECTURE.md` - Technical docs

## Release Process

### Version Numbers

Follow Semantic Versioning:
- MAJOR: Breaking changes
- MINOR: New features
- PATCH: Bug fixes

Example: `1.2.3`

### Release Checklist

- [ ] All tests pass
- [ ] Documentation updated
- [ ] CHANGELOG updated
- [ ] Version bumped
- [ ] Release notes written
- [ ] Tagged in Git
- [ ] Published to stores

## Getting Help

### Resources

- **Documentation**: Read the docs first
- **Issues**: Search existing issues
- **Email**: support@safehomecare.com
- **Community**: [Coming soon]

### Questions

For questions about contributing:
1. Check documentation
2. Search closed issues
3. Ask in new issue with "question" label

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Acknowledged in commits

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to SAFE HOMECARE! 🎉

Your contributions help make leak detection safer and easier for everyone.
