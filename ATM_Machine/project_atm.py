# Mini ATM system
account ={
    "Name": "Denis Kamau",
    "Balance": 5000,
    "Pin": "1234",
    "Type":"Savings_account"
}
separator ="=" * 64

print(separator)

Pin = input("Enter your Pin: ")

if Pin == account["Pin"]:
    while True:
        print("\n****ATM MENU****")
        print()
        print("1. Check Balance: ")
        print("2. Deposit Money: ")
        print("3. Withdraw Money: ")
        print("4. Account Details: ")
        print("5. Exit")

        choice =input("Enter your choice: ")

        if choice == "1":
            print(f"Your account balance is: {account["Balance"]}")
            break

        elif choice == "2":
            Amount =int (input("Enter the amount you wish to Deposit: "))

            if Amount>0:
                account["Balance"] = account["Balance"] + Amount
                print("Money successfully deposited")
                print(f"New Balance: {account["Balance"]}")
            else:
                print("Invalid Amount")
                break

        elif choice == "3":
            Withdrawal_amount = int(input("Enter the amount you wish to withdraw: "))

            if Withdrawal_amount == 0:
                print("Invalid Amount, please try again: ")

            elif Withdrawal_amount > account["Balance"]:
                print("Insufficient funds in your account!")

            else:
                account["Balance"] = account["Balance"] - Withdrawal_amount
                print(f"Withdrawal successful, New balance is: {account["Balance"]}")
                break

        elif choice == "4":
            print(f"\n ACCOUNT NAME: {account["Name"]}")
            print(f"\n ACCOUNT BALANCE: {account["Balance"]}")
            print(f"\n ACCOUNT TYPE: {account["Type"]}")
            break

        elif choice == "5":
            print("Thankyou.")
            break
        else:
            print("Invalid Choice")
else:
    print("Invalid Pin")
    print("Access Denied!")




