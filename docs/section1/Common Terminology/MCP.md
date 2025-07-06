# Model Context Protocol: AI's Universal Connector

The **Model Context Protocol (MCP)** is an **open standard** that standardises how Artificial Intelligence (AI) applications, particularly **Large Language Models (LLMs)**, connect and interact with external tools, data sources, and systems. Its main goal is to solve the complexity and fragmentation that arises from integrating multiple AI models with a wide range of external services by providing a **universal, modular, and context-aware interface**.

MCP is often compared to a **USB-C port for AI**, because it standardises connections between AI applications, LLMs, and external data sources, similar to how USB-C standardises how various peripherals connect to a laptop. This analogy highlights the adaptability MCP provides for connecting AI with different resources.

### Why MCP Matters

Generative AI models, including LLMs, are powerful but often **constrained by their isolation from external data**. LLMs are limited to the knowledge they acquired during their training, which can become outdated or lack specific domain information. Without external tools, an LLM cannot access real-time information. This can lead to generic or even incorrect responses, a phenomenon sometimes called "hallucinations".

MCP addresses these challenges by:

- **Providing access to specific and fresh information**. It enables AI systems, particularly **AI agents**, to retrieve and incorporate current, specific, and real-world data from various external sources such as databases, documentation, and APIs.
- **Improving relevance, accuracy, and quality** of LLM responses by "grounding" them in up-to-date information.
- **Reducing integration complexity**. Instead of needing custom integrations for every model-tool combination, MCP allows tool creators to build a single MCP server per tool and app developers to build a single MCP client per app, streamlining the process. It unifies LLMs and external services to communicate efficiently, offering a "plug-and-play" tool usage model.
- **Supporting persistent, context-aware AI**. It enables stateful, multi-turn, and collaborative interactions, overcoming the limitations of stateless, one-off prompt-response models.
- **Enabling modularity and reusability**. This makes it easier to integrate, debug, and extend AI capabilities across diverse workflows and systems.
- **Enhancing security and control**. It facilitates secure, role-based access to data and tools and helps reduce hallucinations by grounding model outputs in real data.

### Architecture and Components

MCP uses a **client-host-server architecture**.

| Component      | Role                                                                                                                     |
| :------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **MCP Host**   | The application the user interacts with (e.g., Claude Desktop, IDEs, custom agents).                                     |
| **MCP Client** | Lives within the host, managing a dedicated connection to one MCP server.                                                |
| **MCP Server** | Lightweight external program that exposes specific tools, resources, and prompts to the AI model via a standardized API. |


- **MCP Host**: This is the application that the user interacts with. It receives user requests and seeks access to context through the MCP. Examples include integrated development environments (IDEs) like Cursor or Claude Desktop apps. The host component contains the orchestration logic and can connect each client to a server.
- **MCP Client**: The client exists within the host and manages a dedicated connection to one MCP server. It converts user requests into a structured format that the protocol can process. Multiple clients can exist with a single MCP host, but each client has a 1:1 relationship with an MCP server. Clients also handle session management, interruptions, timeouts, reconnections, parse responses, perform error handling, and ensure responses are relevant and appropriate.
- **MCP Server**: This is a lightweight external program that exposes specific capabilities (tools, resources, and prompts) to the AI model via a standardised API. MCP servers act as middleware between AI models and their operational environment, parsing incoming context, storing relevant memory, and ensuring outputs align with the intended task. They can connect to both internal and external resources and tools. Examples of MCP server integrations include Slack, GitHub, Git, Docker, or web search.

### MCP Server Details and Capabilities

MCP servers expose capabilities through three main primitives:

- **Tools**: These are **discrete actions or functions** that the AI model can call, such as APIs or calculators. For example, a weather service might expose a "get weather" tool, or a calendar service might expose a "create event" tool. When an LLM uses an MCP client to invoke a tool, the MCP server executes the underlying function. Tools can perform side effects or fetch data via an API request.
- **Resources**: These are **read-only data items or documents** that the server can provide. Clients can retrieve these on demand. Examples include text files, database schemas, or file contents. Resources return data but do not execute actionable computations.
- **Prompts**: These are **pre-defined templates** providing suggested prompts for optimal tool or resource usage.

MCP servers also maintain a **context memory layer** that stores session, tool, and user-wise interactions, enabling persistent memory across sessions and collaborative workflows. They also define a **context schema**, typically in JSON, for representing contextual data to ensure interoperability and scalability.

### Communication and Transport Layer

Communication between MCP clients and servers occurs over a **JSON-RPC 2.0 session**. This transport layer is responsible for two-way message conversion, converting MCP protocol messages into JSON-RPC format for client-to-server communication, and back again for server-to-client messages.

Two main transport methods are used:

- **Standard Input/Output (stdio)**: Best for integrating **local resources** due to simple input/output transmission, used for lightweight, synchronous messaging.
- **Server-Sent Events (SSE)**: Best for integrating **remote resources**, handling multiple asynchronous, event-driven server calls. HTTP POST requests are used for client-to-server messages, with SSE for the reverse.

### Relationship with LLMs and AI Agents

LLMs, without external tools, are skilled at subsequent text prediction, basic Q&A within their training data, sentiment analysis, and language translation. MCP provides LLMs with access to real-time, external information, which is crucial for AI agents to perform tasks, solve problems, and adapt to changing circumstances. AI agents use LLMs along with available tools, allowing the model to determine appropriate tool use, adapt to a changing environment, and form synthesised conclusions based on tool output.

While traditional **Application Programming Interfaces (APIs)** also allow systems to access functionality or data, MCP is **purpose-built for LLM integration**. A key difference is that MCP supports **dynamic discovery**. An MCP client can ask an MCP server what functions and data it offers, allowing the LLM application to adapt to available capabilities without requiring a developer to update the client if the server's API changes. In contrast, traditional REST APIs don't typically expose such a runtime discovery mechanism. Furthermore, every MCP server follows the same protocol and patterns, regardless of the service or data it connects to, whereas each traditional API is unique.

Interestingly, **many MCP servers actually use traditional APIs to do their work**, acting as a wrapper that translates between the MCP format and the underlying service's native interface. This means MCP and APIs are not adversaries but rather **layers in an AI stack**, with MCP providing a more AI-friendly interface on top.

### Integration with RAG

MCP can **supplement Retrieval-Augmented Generation (RAG)**. Instead of just providing a retriever to search a vector store or knowledge base, MCP can connect to a vector database through a server action. Searching the database as a tool, rather than passing the retriever in every LLM invocation, allows for a more strategic use of the tool and enables further tool-calling upon data retrieval.

### Development and Community

Anthropic introduced MCP in 2024 and is committed to building it as a **collaborative, open-source project and ecosystem**. Developers can start building and testing MCP connectors today, and pre-built MCP servers for popular enterprise systems like Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer are available to help developers get started.