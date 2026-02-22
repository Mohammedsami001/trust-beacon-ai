# 🧠 Deepfake Trust Hub  
### Intelligent Multi-Modal Deepfake Detection & Trust Verification System

> **Verify Reality. Defend Digital Trust.**

Deepfake Trust Hub is an AI-powered media authenticity verification system designed to detect manipulated content across images, videos, and audio. The platform analyzes spatial inconsistencies using deep learning and generates a transparent **Trust Score (0–100%)** along with an explainable verdict.

This prototype demonstrates a secure, scalable, and production-oriented architecture integrating deep learning inference, API security, and modular system design.

---

## 🌍 The Problem

Synthetic media (deepfakes) pose serious threats to:

- Journalism credibility  
- Digital evidence integrity  
- Social media authenticity  
- Political and public trust  
- Cybersecurity ecosystems  

As generative AI becomes more advanced, automated and explainable detection systems are essential.

Deepfake Trust Hub addresses this challenge by combining deep learning with secure API infrastructure.

---

## 🚀 Core Capabilities

### 🖼 Image Deepfake Detection (Fully Implemented)

- Custom-trained **ResNet-50 CNN**
- Binary classification (Real vs Manipulated)
- Spatial artifact detection
- Sigmoid-based probability scoring
- Trust Score generation (0–100%)
- Human-readable explanation output

---

### 🎥 Video Detection (Architecture Ready)

- Frame-level spatial analysis pipeline
- Temporal inconsistency detection design
- Timestamp-based anomaly highlighting
- Aggregated trust scoring model (planned)

---

### 🎧 Audio Detection (Architecture Ready)

- Spectrogram-based preprocessing pipeline
- Synthetic voice anomaly modeling roadmap
- Frequency-domain artifact detection design

---

## 🏗 System Architecture

```mermaid
flowchart LR
    A[User Upload Media] --> B[Authentication Layer]
    B --> C[FastAPI Backend]
    C --> D[Deep Learning Model]
    D --> E[Trust Score Engine]
    E --> F[Verdict + Explainability]
```

---

## 🧠 AI Model Architecture

### Backbone
- ResNet-50
- Custom fully connected classification head
- No pretrained weights used

### Custom Classification Head

```
Linear (2048 → 1024)
BatchNorm1d
ReLU
Dropout (0.5)

Linear (1024 → 512)
BatchNorm1d
ReLU
Dropout (0.5)

Linear (512 → 1)
Sigmoid Activation
```

### Inference Logic

- Output: Single logit
- Activation: Sigmoid
- Threshold: 0.5
- Trust Score = `probability_real × 100`

---

## 📊 API Response Format

```json
{
  "trust_score": 87,
  "verdict": "AUTHENTIC",
  "explanation": "No significant spatial manipulation artifacts detected"
}
```

---

## 🔐 Security & Authentication

- JWT-based authentication
- Protected inference endpoints
- Secure middleware verification
- Stateless backend architecture
- CORS-enabled configuration

All detection endpoints require authentication to ensure controlled inference access.

---

## ⚙️ Technology Stack

| Layer | Technology |
|--------|------------|
| Backend API | FastAPI |
| Deep Learning | PyTorch |
| Model Backbone | ResNet-50 |
| Image Processing | Pillow + TorchVision |
| Authentication | JWT-based system |
| Deployment | Cloud-based Python service |

---

## 📂 Project Structure

```
deepfake-backend/
│
├── main.py                 # FastAPI entry point
├── models/
│   └── image_detector.py   # Model loading & inference logic
├── auth/
│   └── supabase_auth.py    # JWT verification middleware
├── requirements.txt
└── best_resnet50.pth       # Trained model weights
```

---

## 🧪 Running Locally

### 1. Create Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Start the Server

```bash
uvicorn main:app --reload
```

### 4. Access API Documentation

```
http://127.0.0.1:8000/docs
```

---

## 📈 Design Principles

### ✅ Accuracy  
Custom-trained CNN optimized for spatial manipulation detection.

### ✅ Explainability  
Returns interpretable trust scores and reasoning outputs.

### ✅ Security  
Authenticated API endpoints ensure protected inference access.

### ✅ Scalability  
Modular architecture prepared for multi-modal expansion.

### ✅ Extensibility  
Future-ready pipeline for video and audio detection.

---

## 🔮 Future Roadmap

- Temporal modeling for video deepfake detection  
- Spectrogram-based CNN for audio deepfake detection  
- Cross-modal consistency engine  
- Attention heatmaps for visual explainability  
- Confidence calibration and uncertainty modeling  
- Edge inference optimization  
- Enterprise API integration  

---

## 🎯 Target Applications

- Media authentication platforms  
- Journalism verification tools  
- Social media moderation systems  
- Digital forensics workflows  
- Legal evidence validation  
- Cybersecurity intelligence systems  

---

## 🛡 Why This Matters

Deepfake Trust Hub restores digital trust by:

- Detecting manipulation artifacts  
- Quantifying authenticity confidence  
- Providing explainable AI decisions  
- Ensuring secure and scalable infrastructure  

This prototype demonstrates how deep learning, API security, and modular architecture can work together to combat synthetic media threats.

---

## 👨‍💻 Prototype Status

The repository contains a working prototype with fully implemented image deepfake detection and architecture-ready support for video and audio detection.

---

## 📜 License

MIT License

---

⭐ If this project interests you, consider giving it a star.
