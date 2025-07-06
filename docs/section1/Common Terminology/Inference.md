# AI Inference: From Training to Action

In artificial intelligence (AI), **inference** is the process where a **trained machine learning (ML) model** uses its learned knowledge to **draw conclusions or make predictions from new, unseen data**. This is distinct from the training phase, as inference involves the model **applying what it has learned** to make decisions or generate outputs **without requiring examples of the exact desired result**. Essentially, inference is the **AI model actively functioning or "in action"**.

For example, a self-driving car recognizing a stop sign on a road it has never encountered before is performing inference. Similarly, a machine learning model trained on historical sports performance can make predictions about a player's future performance before they are signed to a contract, which is another instance of inference.

### Inference vs. Training

It is crucial to understand that machine learning inference and training are distinct phases within any machine learning project.

- **Training**: This is the **initial phase** where an AI model learns patterns and correlations from large datasets, which can be structured or unstructured, labeled or unlabeled. Training often involves a process of trial and error, or showing the model examples of desired inputs and outputs. The model adjusts its internal parameters to optimize performance and minimise errors between its predictions and actual outcomes. Training is typically a **computationally intensive and expensive process**, but it is generally considered a one-time expense.
- **Inference**: This process **follows AI training**. Once a model is properly trained and fine-tuned, it applies that training to new data to make additional inferences. The **better trained and fine-tuned a model is, the better its inferences will be**, though they are never guaranteed to be perfect. Inference is an **ongoing process** and can also be very expensive in terms of compute power, as the model constantly applies its training to new data.

Understanding the difference between these two phases is important for allocating computational resources effectively. Using a pre-trained model for inference often requires fewer resources and can offer a competitive advantage in terms of time to market compared to training a model from scratch.

### How Machine Learning Inference Works

To deploy a machine learning inference environment, three main components are needed in addition to the trained ML model, which is typically software code implementing a mathematical algorithm:

1. **Data Sources**: These systems capture **live data** from the mechanism that generates it.
2. **Host System**: This system accepts data from the data sources and inputs it into the machine learning model.
3. **Data Destinations**: This is where the host system delivers the output or score from the ML model. For instance, if a model calculates a fraud score, the destination applications might send an "approve" or "decline" message back to the purchase site.

### The Role of Embeddings in Inference

A key factor in how AI models, especially Large Language Models (LLMs), perform inference is their use of **embeddings**.

- **Vector Embeddings** are numerical representations that convert various types of data—such as words, audio, or images—into **arrays of numbers (vectors)** that ML models can process. These vectors often have hundreds or thousands of dimensions, with each dimension representing a learned feature or attribute of the data.
- **Semantic Proximity**: Embeddings capture the **semantic relationships and patterns** in the data. This means that semantically similar data points (e.g., synonyms or related concepts) are mapped to vectors that are close together in a high-dimensional space, while dissimilar items are farther apart. For example, the words "car" and "vehicle" have similar meanings and their vector representations will capture this semantic similarity.
- **Querying for Inference**: When a user queries or prompts an AI model, the query itself is converted into a vector embedding. The vector database then calculates the distances between this query vector and the stored vectors to quickly find the most similar results, enabling fast and **context-aware retrieval**. This process, known as **similarity search**, allows searches based on the meaning or context of a query, rather than just keywords, leading to more precise and relevant results.

Embeddings are foundational for AI because they enable machine learning models to understand relationships between words and other objects, not just exact matches. They are the backbone of generative AI applications like ChatGPT.

### Use Cases for AI Inference

Almost any real-world application of AI relies on inference. Some common examples include:

- **Large Language Models (LLMs)**: LLMs can parse and interpret texts they have never seen before, leveraging their training to generate coherent and contextually relevant responses to user prompts. This includes tasks like answering questions, summarizing texts, translating languages, and generating creative writing or code.
- **Predictive Analytics**: Once trained on past data, models can make predictions based on incoming data, such as forecasting market performance in finance or identifying trends in business intelligence.
- **Email Security**: ML models can recognise spam emails or business email compromise attacks and make inferences about incoming messages to block malicious ones.
- **Driverless Cars**: Inference is crucial for autonomous vehicles to recognise objects like stop signs and navigate safely.
- **Research**: AI inference can be used to draw conclusions from scientific and medical data. For instance, deep learning models are used in medical imaging to support specialists in analysing images and assessing more images in less time.
- **Conversational AI and Chatbots**: Inference enables chatbots and virtual assistants to understand user intent and respond appropriately by efficiently accessing and parsing relevant knowledge bases.
- **Recommendation Engines**: These systems suggest products, movies, or articles by representing user preferences and item attributes as vectors and finding similar items based on vector similarity.
- **Computer Vision**: This technology allows systems to extract, analyse, and comprehend spatial information from visual data to recognise objects, classify images, and make recommendations or take actions based on visual inputs.
- **Retrieval-Augmented Generation (RAG)**: A key use case where LLMs retrieve relevant, up-to-date, and domain-specific information from external data sources (e.g., knowledge bases, databases) and integrate it into their responses, helping to overcome limitations like outdated knowledge or hallucinations.

### Specialized Inference Techniques

Beyond general inference, machine learning includes more specialised methods:

- **Bayesian Inference**: This technique allows algorithms to make predictions by **updating their prior knowledge based on new evidence** using Bayes' theorem. It's more intuitive as it mimics how humans update their beliefs with new information. Applications include credit card fraud detection, medical diagnosis, image processing (noise removal), and speech processing (emotion recognition).
- **Causal Inference**: This statistical approach is used in AI and machine learning to understand **cause-and-effect relationships** between attributes, rather than just correlations. It helps identify underlying causal relationships for more accurate predictions and can help mitigate bias by identifying its root causes in data. However, it requires large, high-quality data and strong statistical and domain expertise, and can be challenged by confounding variables.

### Challenges and Considerations

While inference is essential for making ML models useful in real-life applications, there are challenges:

- **Computational Intensity**: Inference is an ongoing process that can be **very expensive in terms of compute power**, especially for large-scale deployments.
- **Data Quality**: The effectiveness of inference heavily relies on the quality of the input data; poor source content can lead to inaccurate responses.
- **Approximate Results**: Vector databases, often used for inference, frequently provide **approximate results**, which might not be suitable for applications requiring higher accuracy [internal knowledge, not directly in sources].
- **Interpretability**: Some deep learning architectures, which underpin many modern AI systems, are considered "black boxes," making it difficult to fully understand why they produce certain results. This "lack of theory" surrounding some methods means confirmations are often empirical rather than theoretical.
- **Bias and Unintended Outcomes**: AI models are trained on human-generated data, which can naturally contain flaws and biases. If biased information is fed into a machine learning program, the program will learn to replicate and perpetuate discrimination. This highlights the need for careful vetting of training data and human-centred AI practices.