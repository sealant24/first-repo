# Job Payment Predictor

A machine learning script that uses a **Random Forest Classifier** to predict whether a customer will pay (`Paid`) or leave a balance (`Unpaid`) based on the quote amount (in KES) and the specific type of fabrication job.

## What it does

-Payment Risk Prediction - Classifies jobs into likely "Paid" or "Unpaid" groups.
-Feature Categorization - Accounts for job types like gates, window grills, door frames, and roof sheets.
-Production Evaluation  - Outputs a comprehensive classification report detailing precision, recall, and f1-score.

## Stack

Language: Python 3
Libraries: NumPy, scikit-learn (`RandomForestClassifier`, `train_test_split`, `classification_report`)

## Prerequisites

Ensure you have Python installed, then install the required dependencies:

```bash
pip install numpy scikit-learn
```

### Running the Script

1. Save the code into a file named `predictor.py`.
2. Execute the script in your terminal:


