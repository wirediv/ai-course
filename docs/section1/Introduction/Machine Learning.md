---
sidebar_position: 4
---

## Machine Learning: Concepts, Types, and Applications

:::tip
You can listen and follow along with your reading.
<audio controls>
  <source src="/audio/Machine Learning.wav" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
:::

**Machine learning (ML)** is a **subset of artificial intelligence (AI)** that focuses on enabling computers and machines to **learn from data and improve their performance on specific tasks without being explicitly programmed for every scenario**. Instead of following fixed, explicit instructions, ML systems use algorithms to **analyse large volumes of data, identify patterns, and then make predictions or decisions based on what they learn**.

### How Machine Learning Works

At its essence, the core principle of AI, including ML, revolves around data. ML models are "trained" by being exposed to vast amounts of data. During this **training phase**, algorithms—which are sets of rules or instructions—guide the AI's analysis and decision-making. The machine "learns" by adjusting its **internal parameters**, such as weights and biases in mathematical functions, to **minimise errors** between its predictions and the actual outcomes. This **iterative process** of evaluation and optimisation allows the model to continuously refine its understanding and become more accurate over time.

Once a model is properly trained, it can then perform **inference**, which is the process of using the trained model to draw conclusions, make predictions, or generate outputs from **new, unseen data**. For example, a machine learning model trained on historical sports performance data could predict a player's future performance, or a self-driving car could recognise a stop sign on an unfamiliar road.

### Relationship to Artificial Intelligence and Deep Learning

ML is a **core discipline within the broader field of AI**. AI is the overarching concept of enabling machines to simulate human intelligence to solve problems. ML is a **specific application of AI** that allows machines to extract knowledge from data and learn autonomously.

**Deep learning (DL)** is, in turn, a **subset of machine learning**. DL uses **multi-layered artificial neural networks** (also known as deep neural networks) to simulate the complex decision-making power of the human brain. The "deep" refers to the presence of three or more hidden layers between the input and output layers, which can number in the hundreds or even thousands. This architecture enables DL models to automatically learn complex patterns and hierarchical representations directly from **large amounts of raw, unstructured data** without human intervention in feature engineering. Most of the AI applications we interact with today are powered by some form of deep learning.

### Types of Machine Learning

Machine learning models primarily fall into three categories based on their learning approach:

- **Supervised Learning**: This is the **most common type** and involves training algorithms on **labelled datasets** (structured data) where the correct output for each input is known. The model learns to map specific inputs to desired outputs. An example is feeding an algorithm pictures labelled as "cats" to train it to recognise cats. Supervised learning underpins most state-of-the-art AI models today and is primary for tasks requiring accuracy like classification or regression.
- **Unsupervised Learning**: This approach uses **unlabelled data** (unstructured data) to discover hidden patterns, relationships, or groupings within the data without pre-defined outputs. It is particularly effective for tasks like pattern matching, descriptive modelling, and customer segmentation.
- **Reinforcement Learning**: In this "learn by doing" model, an "agent" learns to perform a defined task through **trial and error**. It receives positive "rewards" for good performance and negative "penalties" for poor performance, continuously adjusting its actions to maximise the reward. IBM Watson's victory on _Jeopardy!_ in 2011 is a good example of reinforcement learning.
- **Semi-supervised Learning**: This is a mixed approach that uses a **smaller labelled dataset to guide classification and feature extraction from a larger, unlabelled dataset**. It helps when there isn't enough labelled data for pure supervised learning or when labelling is too costly.

### Common Machine Learning Algorithms/Models

ML uses various algorithms and model architectures. Neural networks, modeled after the human brain, are a popular type of ML algorithm. Other common algorithms include:

- **Linear Regression**: Predicts numerical values based on linear relationships.
- **Logistic Regression**: Predicts for categorical response variables (e.g., "yes/no").
- **Decision Trees**: Used for both numerical predictions and classification, represented by a branching sequence of decisions.
- **Random Forests**: Combines results from multiple decision trees for predictions.
- **Clustering (e.g., K-means)**: Identifies patterns in data to group them.
- **Support Vector Machines (SVMs)**: Used for classification and regression tasks.
- **Naive Bayes**: A probabilistic classifier based on Bayes' theorem.

Deep learning further specialises in neural network architectures, including:

- **Feedforward Neural Networks (FFNN)**: Data flows one way through layers.
- **Recurrent Neural Networks (RNN) and Long Short-Term Memory (LSTM)**: Designed for sequential data, maintaining "memory" of previous inputs.
- **Convolutional Neural Networks (CNN)**: Most common for image recognition, using distinct layers to filter image parts.
- **Generative Adversarial Networks (GAN)**: Involve two competing neural networks (generator and discriminator) to create realistic output.
- **Transformers**: Powerful for processing sequences, foundational for modern Large Language Models (LLMs).

### Benefits of Machine Learning

Machine learning offers significant benefits to organisations, particularly in handling large and complex datasets:

- **Automation**: Automates tasks and workflows that previously required human intervention.
- **Actionable Insights**: Identifies patterns and trends in massive volumes of data that humans might miss, enabling data-driven decision-making.
- **Predictive Capabilities**: Enables accurate predictions and forecasting across various domains.
- **Efficiency and Productivity**: Streamlines processes and improves productivity.
- **Personalisation**: Provides personalised experiences for users as models learn from individual interactions.
- **Accessibility**: Pre-trained models and modular platforms make ML more accessible to a wider range of users and businesses.

### Applications of Machine Learning

ML is widely applied across numerous industries and everyday technologies:

- **Speech Recognition**: Converts spoken language into text, used in virtual assistants like Siri and Alexa.
- **Image Recognition and Computer Vision**: Identifies and categorises aspects of images and videos, used in facial recognition, self-driving cars, and medical image analysis.
- **Natural Language Processing (NLP)**: Trains computers to understand, interpret, and generate human language, powering chatbots, summarisers, and translation services.
- **Generative AI**: Creates original content like text, images, video, and code in response to user prompts, leveraging deep learning models.
- **Recommendation Systems**: Suggests products, content, or services based on past behaviour and preferences.
- **Fraud Detection**: Analyses transaction patterns to flag anomalies indicative of fraud.
- **Predictive Maintenance**: Forecasts equipment failures using sensor data.
- **Healthcare**: Analyses patient records, aids in diagnostics, and accelerates drug development.
- **Cybersecurity**: Continuously monitors and analyses network traffic to detect threats.
- **Financial Services**: Used for algorithmic trading and assessing business risks.
- **Robotics**: Enables robots to learn new tasks through observation and feedback.

### Challenges and Limitations

Despite its advancements, machine learning faces several challenges:

- **Data Requirements**: ML, especially deep learning, requires **vast amounts of high-quality, accurate, and unbiased training data**. "Garbage in, garbage out" is a key concern.
- **Computational Resources**: Training complex models, particularly deep neural networks, demands **significant computing power**, often requiring high-performance GPUs and considerable energy.
- **Interpretability ("Black Box" Problem)**: Many complex ML and deep learning models are often considered "black boxes," making it **difficult to understand _why_ they make specific decisions** or how their inner workings lead to a particular output.
- **Bias and Unintended Outcomes**: Since models are trained by humans on human-generated data, they can **inherit and perpetuate human biases and existing inequities**, leading to discriminatory or problematic outputs.
- **Accuracy Limitations**: While highly accurate, ML models are not always perfect, and their level of acceptable accuracy depends on the application. For critical tasks like self-driving cars or medical diagnostics, very high accuracy is required.
- **Technological Singularity**: While not an immediate concern for most researchers, the theoretical idea of **AI surpassing human intelligence** (often termed strong AI or superintelligence) raises ethical and societal questions.