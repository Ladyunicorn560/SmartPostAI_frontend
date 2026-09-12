# Third-Party APIs and SDKs Used

This document lists all third-party APIs, SDKs, and services used in SmartPostAI.

## APIs and SDKs

### 1. MNEE SDK
- **Package:** `@mnee/ts-sdk` (v1.0.3)
- **Purpose:** MNEE stablecoin integration for blockchain payments
- **License:** Check MNEE SDK license
- **Usage:** Payment processing, transaction creation, status checking
- **Documentation:** https://docs.mnee.io
- **Repository:** https://github.com/mnee/ts-sdk

### 2. Google Gemini AI API
- **Service:** Google Generative AI (Gemini 2.0 Flash)
- **Purpose:** AI-powered LinkedIn post generation
- **License:** Google Cloud Terms of Service
- **Usage:** Content generation, real-time web search, multi-language support
- **Documentation:** https://ai.google.dev/docs
- **API Endpoint:** https://generativelanguage.googleapis.com

### 3. LinkedIn API
- **Service:** LinkedIn OAuth 2.0 and Posting API
- **Purpose:** LinkedIn authentication and post publishing
- **License:** LinkedIn API Terms of Service
- **Usage:** OAuth authentication, post publishing, image upload, profile data
- **Documentation:** https://learn.microsoft.com/en-us/linkedin/
- **API Endpoint:** https://api.linkedin.com

### 4. Supabase
- **Service:** Supabase (PostgreSQL, Authentication, Storage)
- **Purpose:** Database, authentication, file storage
- **License:** Apache 2.0 (Supabase is open source)
- **Usage:** User authentication, data storage, image storage
- **Documentation:** https://supabase.com/docs
- **Website:** https://supabase.com

### 5. Azure Container Apps
- **Service:** Microsoft Azure Container Apps
- **Purpose:** Backend deployment and hosting
- **License:** Azure Terms of Service
- **Usage:** Backend API hosting
- **Documentation:** https://docs.microsoft.com/azure/container-apps/

## Frontend Libraries

### UI Component Libraries
- **shadcn/ui** - UI component library (MIT License)
- **Radix UI** - Accessible component primitives (MIT License)
  - @radix-ui/react-avatar
  - @radix-ui/react-checkbox
  - @radix-ui/react-dropdown-menu
  - @radix-ui/react-icons
  - @radix-ui/react-label
  - @radix-ui/react-separator
  - @radix-ui/react-slot

### Core Libraries
- **Next.js** (v16.0.10) - React framework (MIT License)
- **React** (v19.2.0) - UI library (MIT License)
- **TypeScript** (v5) - Type-safe JavaScript (Apache 2.0)
- **Tailwind CSS** (v3.4.18) - CSS framework (MIT License)
- **Framer Motion** (v11.18.2) - Animation library (MIT License)

### Utility Libraries
- **Axios** (v1.7.7) - HTTP client (MIT License)
- **date-fns** (v4.1.0) - Date utilities (MIT License)
- **react-markdown** (v10.1.0) - Markdown rendering (MIT License)
- **Sonner** (v2.0.7) - Toast notifications (MIT License)
- **Mermaid** (v11.12.2) - Diagram rendering (MIT License)

## Backend Libraries

### Core Backend
- **Python** (3.10+) - Programming language (PSF License)
- **uAgents Framework** (v0.23.4) - Agent-based architecture
- **FastAPI/Pydantic** - API framework and validation
- **aiohttp** (v3.9.0+) - Async HTTP client (Apache 2.0)

### AI and ML
- **LangChain** (v0.1.0+) - AI agent framework (MIT License)
- **langchain-google-genai** (v0.0.6+) - Google Gemini integration
- **langchain-core** (v0.1.0+) - LangChain core (MIT License)
- **langchain-community** (v0.0.20+) - LangChain community (MIT License)

### Database and Storage
- **Supabase Python Client** (v2.0.0+) - Supabase integration
- **Python Cryptography** (v41.0.0+) - Encryption (Apache 2.0 / BSD)

### Other Backend Libraries
- **croniter** (v2.0.0+) - Cron expression parsing (MIT License)
- **PyJWT** (v2.8.0+) - JWT token handling (MIT License)
- **bcrypt** (v4.0.0+) - Password hashing (Apache 2.0)
- **python-dotenv** (v1.0.0+) - Environment variable management (BSD-3-Clause)

## License Compliance

All third-party libraries used in this project are:
- Open source with permissive licenses (MIT, Apache 2.0, BSD)
- Properly attributed in package.json
- Used in compliance with their respective licenses

## API Keys and Credentials

The following APIs require API keys (stored as environment variables):
- **MNEE API Key** - For blockchain transactions
- **Google Gemini API Key** - For AI content generation
- **LinkedIn OAuth Credentials** - For LinkedIn integration
- **Supabase Credentials** - For database and authentication

All API keys are stored securely as environment variables and never committed to the repository.

## Attribution

We acknowledge and thank all the open-source projects and services that made SmartPostAI possible:
- MNEE for stablecoin infrastructure
- Google for Gemini AI
- LinkedIn for API access
- Supabase for database and authentication
- All open-source library maintainers

