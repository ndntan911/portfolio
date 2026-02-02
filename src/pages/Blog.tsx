import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, User, Search, ArrowRight } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured: boolean
}

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "Learn the essential patterns and techniques for building maintainable React applications that can grow with your team and user base.",
      content: `
# Building Scalable React Applications: Best Practices

React has revolutionized the way we build user interfaces, but as applications grow in complexity, maintaining scalability becomes crucial. In this post, I'll share key practices for building React applications that remain maintainable and performant as they scale.

## 1. Component Architecture

### Atomic Design Principles
Break down your UI into small, reusable components following the atomic design methodology:

- **Atoms**: Basic building blocks (buttons, inputs, labels)
- **Molecules**: Groups of atoms working together (search bars, form fields)
- **Organisms**: Complex components (headers, sidebars)
- **Templates**: Page layouts
- **Pages**: Specific implementations

### Component Composition
Prefer composition over inheritance:

\`\`\`jsx
// Good: Composition
const Card = ({ children, title }) => (
  <div className="card">
    <h3>{title}</h3>
    {children}
  </div>
);

// Usage
<Card title="User Profile">
  <UserInfo user={user} />
  <UserActions />
</Card>
\`\`\`

## 2. State Management

### Local State vs Global State
Choose the right state management approach:

- **Local State**: useState, useReducer for component-specific state
- **Global State**: Context API, Redux, Zustand for application-wide state
- **Server State**: React Query, SWR for API data

### State Management Pattern
\`\`\`jsx
// Custom hook for complex state logic
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);
  
  return { count, increment, decrement };
};
\`\`\`

## 3. Performance Optimization

### Code Splitting
Implement lazy loading for better performance:

\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

### Memoization
Use React.memo and useMemo strategically:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveCalculation(item));
  }, [data]);
  
  return <div>{processedData}</div>;
});
\`\`\`

## 4. Testing Strategy

### Testing Pyramid
- **Unit Tests**: Individual components and functions
- **Integration Tests**: Component interactions
- **E2E Tests**: User workflows

### Component Testing
\`\`\`jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter when button is clicked', () => {
  render(<Counter />);
  
  const button = screen.getByRole('button', { name: /increment/i });
  const count = screen.getByText(/count: 0/i);
  
  fireEvent.click(button);
  
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
\`\`\`

## Conclusion

Building scalable React applications requires thoughtful architecture, proper state management, performance optimization, and comprehensive testing. By following these practices, you'll create applications that are maintainable, performant, and ready to grow with your needs.

Remember, scalability is not just about handling more users—it's about maintaining developer productivity as your codebase grows.
      `,
      author: "Your Name",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "JavaScript", "Web Development", "Best Practices"],
      image: "⚛️",
      featured: true
    },
    {
      id: 2,
      title: "TypeScript in 2024: Why You Should Make the Switch",
      excerpt: "Discover how TypeScript can improve your development experience with better type safety, IDE support, and code maintainability.",
      content: `
# TypeScript in 2024: Why You Should Make the Switch

TypeScript has become the de facto standard for large-scale JavaScript applications. Let's explore why it's essential for modern web development.

## Benefits of TypeScript

### Type Safety
Catch errors at compile time instead of runtime:

\`\`\`typescript
// JavaScript - Error at runtime
function add(a, b) {
  return a + b;
}
add("hello", 5); // "hello5" - unexpected behavior

// TypeScript - Error at compile time
function add(a: number, b: number): number {
  return a + b;
}
add("hello", 5); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
\`\`\`

### Better IDE Support
Enjoy improved autocompletion, refactoring, and documentation.

### Enhanced Code Documentation
Types serve as documentation that's always up to date.

## Getting Started

Installation and setup is straightforward:

\`\`\`bash
npm install -D typescript @types/node @types/react @types/react-dom
npx tsc --init
\`\`\`

## Advanced Features

### Generics
Write reusable, type-safe code:

\`\`\`typescript
interface Repository<T> {
  findById(id: string): Promise<T>;
  save(entity: T): Promise<T>;
}

class UserRepository implements Repository<User> {
  async findById(id: string): Promise<User> {
    // Implementation
  }
  
  async save(user: User): Promise<User> {
    // Implementation
  }
}
\`\`\`

## Conclusion

TypeScript provides numerous benefits that make it worth the learning curve. Start small and gradually adopt more advanced features.
      `,
      author: "Your Name",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Type Safety"],
      image: "📘",
      featured: true
    },
    {
      id: 3,
      title: "Modern CSS Techniques for Better UI/UX",
      excerpt: "Explore the latest CSS features and techniques that can help you create stunning user interfaces with less code.",
      content: `
# Modern CSS Techniques for Better UI/UX

CSS has evolved significantly with new features that make complex layouts and animations easier to implement.

## CSS Grid and Flexbox

Modern layout systems have revolutionized how we structure web pages:

\`\`\`css
/* CSS Grid for complex layouts */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  min-height: 100vh;
}

.sidebar { grid-area: sidebar; }
.header { grid-area: header; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## CSS Custom Properties

Variables make your CSS more maintainable:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --border-radius: 8px;
  --transition: all 0.3s ease;
}

.button {
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.button:hover {
  background-color: var(--primary-hover);
}
\`\`\`

## Container Queries

Responsive components based on their container:

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
}
\`\`\`

## Conclusion

Modern CSS provides powerful tools for creating responsive, maintainable interfaces. Stay updated with the latest features to improve your development workflow.
      `,
      author: "Your Name",
      date: "2024-01-05",
      readTime: "5 min read",
      category: "CSS",
      tags: ["CSS", "UI/UX", "Web Design", "Responsive Design"],
      image: "🎨",
      featured: false
    },
    {
      id: 4,
      title: "The Future of Web Development: WebAssembly",
      excerpt: "WebAssembly is changing how we think about web performance. Learn what it is and how it impacts modern web development.",
      content: `
# The Future of Web Development: WebAssembly

WebAssembly (Wasm) is revolutionizing web performance by enabling near-native execution speeds in the browser.

## What is WebAssembly?

WebAssembly is a binary instruction format that allows code written in languages like C++, Rust, and Go to run in web browsers at near-native speed.

## Benefits

### Performance
- 10x faster than JavaScript for compute-intensive tasks
- Ideal for gaming, video editing, and scientific computing

### Language Flexibility
- Use your favorite programming language for web development
- Leverage existing codebases

## Use Cases

### High-Performance Applications
\`\`\`c++
// C++ code compiled to WebAssembly
#include <emscripten/bind.h>

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::function("fibonacci", &fibonacci);
}
\`\`\`

### WebAssembly in React
\`\`\`jsx
import React, { useEffect, useState } from 'react';

const WasmComponent = () => {
  const [result, setResult] = useState(null);
  
  useEffect(() => {
    const loadWasm = async () => {
      const module = await import('./fibonacci.wasm');
      const result = module.fibonacci(40);
      setResult(result);
    };
    
    loadWasm();
  }, []);
  
  return <div>Fibonacci result: {result}</div>;
};
\`\`\`

## Getting Started

1. Write code in C++, Rust, or Go
2. Compile to WebAssembly using Emscripten or similar tools
3. Load and use in your web application

## Conclusion

WebAssembly opens new possibilities for web development, especially for performance-critical applications. While not a replacement for JavaScript, it's a powerful complement.
      `,
      author: "Your Name",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "WebAssembly",
      tags: ["WebAssembly", "Performance", "C++", "Rust"],
      image: "🚀",
      featured: false
    }
  ]

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'React', label: 'React' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'CSS', label: 'CSS' },
    { value: 'WebAssembly', label: 'WebAssembly' },
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Blog</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology, and software engineering. 
            I write about topics I'm passionate about and lessons learned from real-world projects.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {selectedCategory === 'all' && !searchTerm && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Posts
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="card group hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-6xl">{post.image}</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {selectedCategory === 'all' && !searchTerm ? 'All Posts' : 'Search Results'}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No posts found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="card group hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl">{post.image}</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </motion.div>

        {/* Blog Post Modal */}
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedPost.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {selectedPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(selectedPost.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {selectedPost.readTime}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {selectedPost.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('#')) {
                      const level = paragraph.match(/^#+/)?.[0].length || 1
                      const text = paragraph.replace(/^#+\s*/, '')
                      const Tag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements
                      return (
                        <Tag key={index} className="font-bold mt-6 mb-4">
                          {text}
                        </Tag>
                      )
                    }
                    if (paragraph.startsWith('```')) {
                      const code = paragraph.replace(/```\w*/, '').trim()
                      return (
                        <pre key={index} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                          <code className="text-sm">{code}</code>
                        </pre>
                      )
                    }
                    if (paragraph.trim()) {
                      return (
                        <p key={index} className="mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      )
                    }
                    return <br key={index} />
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Blog
