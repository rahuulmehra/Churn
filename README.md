# Churnio – Retention Hub
### AI-Powered Customer Retention Platform

**B.Tech 3rd Year, 5th Semester &bull; KCC Institute of Technology and Management**
- **Team**: Sadaf (Leader), Shereya Verma, Rohan Singh Kholiya, Rahul Mehra
- **Guide**: Dr. Ojaswani &bull; **HOD**: Dr. Chetan Khemraj

---

## 🚀 How to Run the Website for Presentation Tomorrow

1. Simply double-click **`index.html`** in this folder to open it in Google Chrome, Microsoft Edge, or any modern web browser.
2. Alternatively, run a lightweight local web server in PowerShell:
   ```powershell
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## 🎯 Features Implemented (Matching 8-Page Guide 1:1)

### 1. Home Page
- **Hero Banner**: "Every lost customer is a lost sale. Find them before they leave."
- **Model Performance Widget**: Circular SVG gauge displaying **97.8% SVM Test Accuracy**, Recall (**94.0%**), F1 (**0.94**), and ROC-AUC (**0.99**).
- **Metric Cards**: 5,073 training records, 18 customer signals, 6 models compared, 95.6% core accuracy.
- **Workflow & Architecture Pipeline**: Visual flowchart of the 7-step data-to-UI pipeline with team roles.

### 2. Single Customer Prediction (Live Form & Calculator)
- Form with 18 input fields across **Orders**, **Experience**, and **Profile** cards.
- **Presentation Quick Demos** (1-click buttons):
  - **Critical Churn Demo (from PDF Page 5)**: Sets Tenure=0, Complain=1, Cashback=134.41 -> instantly calculates **99.5% churn risk**, Critical Risk Level, and 20% discount offer!
  - **Loyal Customer Demo**: Low risk baseline (~0.8%).
  - **Medium Risk Demo**: 50.0% probability.
- **Explainable ML Output**: Shows why the model made the prediction with comparison against leaving vs staying customer averages.

### 3. Bulk Analysis Dashboard
- **Dropzone & Benchmark Loader**: Click the **"Load Benchmark 200 Customers"** button to immediately populate the exact 200 presentation records!
- **Summary Metrics**: 200 customers, 36 likely to churn (18.0%), 35 Critical risk, Cashback at-risk Rs 6,029.
- **Interactive Offline Charts**:
  - Donut chart: *Churn vs Retained* (82.0% Stay vs 18.0% Churn).
  - Bar chart: *Customers by Risk Level* (Critical, High, Medium, Low, Very Low).
  - Histogram: *Churn Probability Distribution*.
- **Segments Analysis**: Breakdown by Product Category (Mobile Phone 26%), Complaint status, and Tenure.
- **Business Insights Tab**: The 7 auto-generated business insights with clear action plans and the *Plan by Risk Level* table.
- **Customer Table**: Search, filter by risk tier, pagination, and **"Download Processed CSV"** export.

### 4. Team & Presentation Assistant
- **12-Minute Presentation Countdown Stopwatch**: Built-in interactive timer for practicing and timing the presentation tomorrow.
- **Presentation Order Schedule**: Step-by-step 12-minute agenda specifying what Sadaf, Shereya, Rohan, and Rahul speak about.
- **Who-Does-What Role Cards**: Colored cards detailing each member's contributions, core tools, and topics they must know.
- **Viva Defense Q&A Cheat Sheet**: Interactive flashcards covering the 6 mandatory questions from the guide.

---

## 📁 File Structure
- `index.html` - The complete web application interface.
- `style.css` - Clean light theme matching the PDF screenshots.
- `app.js` - Real-time ML calculation engine, chart renderers, CSV processor, and presentation tools.
- `data.js` - Benchmark 200-customer dataset & presentation metadata.
- `sample_200_customers.csv` - Ready CSV file for live drag-and-drop presentation demo.
