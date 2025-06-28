--scenario-1
CREATE TABLE SavingsAccounts (
    account_id NUMBER PRIMARY KEY,
    balance NUMBER
);
INSERT INTO SavingsAccounts VALUES (1, 1000);
INSERT INTO SavingsAccounts VALUES (2, 1500);
INSERT INTO SavingsAccounts VALUES (3, 2000);
select * from SavingsAccounts;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE SavingsAccounts
    SET balance = balance + (balance * 0.01);
END;
BEGIN
    ProcessMonthlyInterest;
END;
select * from SavingsAccounts;

--scenario-2
CREATE TABLE Employees (
    emp_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    department VARCHAR2(100),
    salary NUMBER
);
INSERT INTO Employees VALUES (1, 'John', 'HR', 50000);
INSERT INTO Employees VALUES (2, 'Jane', 'IT', 60000);
INSERT INTO Employees VALUES (3, 'Bob', 'IT', 55000);
select * from Employees;
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET salary = salary + (salary * p_bonus_percent / 100)
    WHERE department = p_department;
END;
BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
select * from Employees;

--scenario-3
CREATE TABLE BankAccounts (
    account_id NUMBER PRIMARY KEY,
    balance NUMBER
);
INSERT INTO BankAccounts VALUES (101, 5000);
INSERT INTO BankAccounts VALUES (102, 3000);
select * from BankAccounts;
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    SELECT balance INTO v_balance FROM BankAccounts WHERE account_id = p_from_account;
    
    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance');
    END IF;

    UPDATE BankAccounts
    SET balance = balance - p_amount
    WHERE account_id = p_from_account;

    UPDATE BankAccounts
    SET balance = balance + p_amount
    WHERE account_id = p_to_account;
    
END;
BEGIN
    TransferFunds(101, 102, 1000);
END;
SELECT * FROM BankAccounts;