# Tokenization: Building Blocks for Language Models

**Tokenization** in language models is the process of **converting a sequence of text into smaller, discrete components known as tokens**. These tokens serve as the **basic building blocks that a language model processes and understands**. The primary reason for tokenization is to help machines understand human language by breaking it down into manageable units that are easier to analyze.

### Why Tokenization is Important

Tokenization is a **crucial first step in training Large Language Models (LLMs)** and is foundational for artificial intelligence (AI). It matters for several reasons:

- **Makes text machine-readable** Machine learning algorithms, including LLMs and deep learning models, are generally incapable of processing plain text in its raw form; they require numbers as input. Tokenization converts raw text into a numerical format, allowing models to process it mathematically.
- **Facilitates pattern recognition** By breaking text into tokens, algorithms can more easily identify patterns, relationships, and context within language. This pattern recognition is essential for machines to understand and respond to human input.
- **Defines the model's vocabulary** The set of unique tokens an LLM is trained on forms its vocabulary. This vocabulary determines what kinds of things a model is trained to recognise and produce.

### How Tokenization Works in Practice

The process typically involves several steps:

1. **Conversion to Numerical Format** Text is first transformed into a numerical format that the machine learning model can understand.
2. **Vocabulary Creation and ID Assignment** The LLM is trained on a **vocabulary of unique tokens** derived from large text corpora. As training continues, any new tokens encountered are added to this vocabulary and assigned a **unique numerical ID**. For example, "I heard a dog bark loudly at a cat" could be tokenized and assigned IDs like `I (1), heard (2), a (3), dog (4), bark (5), loudly (6), at (7), cat (8)`, resulting in a sequence like ``.
3. **Creation of Embeddings** After tokenization, **multi-valued numeric vectors, known as embeddings, are used to represent these semantic relationships**. An embedding is assigned to each token based on how commonly it's used together with, or in similar contexts to, other tokens. Words with similar meanings or contexts are expected to have similar vector representations, with distance and direction between vectors encoding their similarity. For LLMs, the **context of every word becomes an embedding**, in addition to the word itself, allowing the meanings of entire sentences, paragraphs, and articles to be searched and analysed. Embeddings are foundational for AI as they enable machine learning models to find similar objects.
4. **Output Generation** During output generation, the model predicts a vector value for the next token in the sequence. It then selects the most probable token from its vocabulary based on this vector value. This is an **iterative process**: the predicted token is appended to the sequence so far and used as input for the next iteration, building the final output one token at a time.

It is important to note that the **correlation between words and tokens is complex**. Sometimes a single word is broken into multiple tokens, or the same word might be tokenized differently depending on context or surrounding words. Spaces, newline characters, and punctuation may or may not be included in tokens.

### Common Tokenization Methods

Tokenization methods vary based on the granularity of the text breakdown and the specific requirements of the task. Common methods include:

- **Word tokenization**: Splits text into individual words, typically based on delimiters like spaces. This is most effective for languages with clear word boundaries like English.
- **Character tokenization**: Splits text into individual characters. This method is useful for languages lacking clear word boundaries or for tasks requiring granular analysis, such as spelling correction.
- **Subword tokenization**: Breaks text into units larger than a single character but smaller than a full word. This approach balances the need for a manageable vocabulary size with the ability to handle unknown words or complex syntax. Examples include **Byte-Pair Encoding (BPE)**, which merges frequent pairs of characters or bytes to form tokens until a set vocabulary size is reached, and **WordPiece**. GPT models developed by OpenAI use Byte-Pair Encoding.

The choice of token size affects model efficiency and language coverage:

- **Smaller tokens** (character or subword tokenization) enable the model to handle a wider range of inputs, including unknown words, typos, or complex syntax. This might also reduce vocabulary size, requiring fewer memory resources. However, a given text is broken into more tokens, requiring additional computational resources and reducing the maximum input/output size for a fixed token limit.
- **Larger tokens** (word tokenization) result in fewer tokens per text, requiring fewer computational resources. However, this might increase vocabulary size and limit the model's ability to handle unknown words or typos.

### Tokenization Challenges

The nuances of human language present unique challenges for tokenization:

- **Ambiguity**: Language is inherently ambiguous, and tokenization can lead to different interpretations of a sentence.
- **Languages without clear boundaries**: Some languages, like Chinese, Japanese, or Thai, lack clear spaces between words, making word tokenization more complex. Multilingual tokenization models like XLM-R and mBERT use subword tokenization to handle these languages.
- **Special characters**: Handling email addresses, URLs, or special symbols can be tricky, requiring advanced models to incorporate rules for consistent processing.
- **Morphology**: While subword tokenization aims to capture frequent substrings, it does not guarantee decomposition into linguistic morphemes (smallest meaningful units). Research is mixed on whether the lack of morphology in subword tokenizers impairs model performance, particularly for languages with complex morphology like German.
- **Understanding character-level information**: It is not trivial for a model to "look inside" a token to know its constituent characters (e.g., that "dog" contains "d", "o", "g"). Though state-of-the-art LLMs can perform well on some character-level tasks, they may struggle with others like counting character occurrences. Some variability in how a root word is tokenized can actually improve predictions about contained characters.
- **Token limits and context window**: LLMs have limitations on the maximum number of input and output tokens, often combined into a "context window". Larger context windows significantly increase computational complexity quadratically, making it costly and inefficient. This also affects the maximum length of text that can be provided as input or generated as output.
- **Computational Cost**: Tokenization and subsequent processing require significant computational resources. Training large language models involves processing petabytes of data.

### Use Cases for Tokenization

Tokenization forms the backbone for a wide array of AI applications by enabling machines to process and understand vast amounts of text data:

- **Search engines**: Tokenization dissects user queries to sift through documents and retrieve relevant results.
- **Machine translation**: It segments sentences in a source language for translation and reconstruction in the target language, retaining original context.
- **Speech recognition**: Spoken words are converted into text and then tokenized, allowing systems like Siri or Alexa to process and act upon commands.
- **Sentiment analysis**: Tokenization extracts insights from user content like reviews to determine sentiments (positive, neutral, negative).
- **Chatbots and virtual assistants**: Tokenization enables chatbots to understand user intent and respond appropriately.
- **Named Entity Recognition (NER)**: It identifies and classifies entities like names, places, or organisations in text.
- **Text classification**: LLMs can classify text based on similar meanings or sentiments for tasks like spam detection or moderating user-generated content.

### Tools and Future Directions

Prominent tools for tokenization include NLTK (Natural Language Toolkit), spaCy, and Hugging Face Transformers. Hugging Face Transformers provides fast tokenizers built using Rust and supports various subword tokenization methods like BPE and WordPiece. BERT tokenizer, for example, excels in context-aware tokenization.

Future research aims to explore more efficient model architectures that can handle longer sequences with lower computational complexity, and design new self-supervised pre-training tasks. There's also ongoing interest in understanding how morphological structure impacts language model performance and whether incorporating such information can lead to better generalisation, particularly for languages with complex morphology.