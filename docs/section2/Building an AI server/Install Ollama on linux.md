## How to install Ollama on a linux machine?

To install **Ollama** on a Linux machine, follow these steps:

**1. Check Prerequisites**

- Ensure your system meets the minimum requirements: **64-bit CPU**, at least **8GB RAM** (16GB recommended), and **10–12GB free disk space**. A **GPU** (NVIDIA or AMD) is strongly recommended for optimal performance, but Ollama can run on CPU if necessary.
- Make sure you have **curl** installed. If not, install it using:

```bash
sudo apt-get install curl
```

- For GPU support, verify your drivers (e.g., with `nvidia-smi` for NVIDIA GPUs).

**2. Install Ollama**

- The simplest way is to run the official installation script:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

This script will:
    - Download and install Ollama to `/usr/local/bin`
    - Create the `ollama` user and necessary groups
    - Set up and start the Ollama systemd service

**3. Verify Installation**

- Check that Ollama is installed and running:

```bash
ollama --version
systemctl status ollama
```

By default, Ollama runs as a service and listens on `localhost:11434`.

**4. (Optional) Manual or Docker Installation**

- For manual installation or advanced setups, you can download the binary or use Docker:
    - Manual:

```bash
curl -fsSL https://ollama.com/download/ollama-linux-amd64.tgz | sudo tar zx -C /usr
```

Then set up the systemd service as described in the documentation.
    - Docker:

```bash
docker pull ollama/ollama
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

This is useful for containerized environments.

**5. Pull and Run a Model**

- After installation, fetch a language model (e.g., Llama 2):

```bash
ollama pull llama2
```

- Run the model:

```bash
ollama run llama2
```


**6. Troubleshooting**

- If GPU support is not detected, ensure your drivers and toolkits (e.g., `nvidia-cuda-toolkit`) are installed and repeat the installation.

**Summary Table:**


| Step | Command/Action |
| :-- | :-- |
| Update system | `sudo apt-get update && sudo apt-get upgrade` |
| Install curl | `sudo apt-get install curl` |
| Install Ollama | `curl -fsSL https://ollama.com/install.sh | sh` |
| Verify installation | `ollama --version` and `systemctl status ollama` |
| Pull a model | `ollama pull llama2` |
| Run a model | `ollama run llama2` |

After these steps, Ollama should be ready to use on your Linux system.
