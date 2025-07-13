CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    age NUMBER,
    balance NUMBER,
    isvip VARCHAR2(5) DEFAULT 'FALSE'  
);
CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    interest_rate NUMBER,        
    due_date DATE,
    CONSTRAINT fk_customer
        FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id)
);

-- Insert customers
INSERT INTO customers VALUES (1, 'Alice', 65, 12000, 'FALSE');
INSERT INTO customers VALUES (2, 'Bob', 45, 8000, 'FALSE');
INSERT INTO customers VALUES (3, 'Charlie', 70, 5000, 'FALSE');
select * from customers;

-- Insert loans
INSERT INTO loans VALUES (101, 1, 8.5, SYSDATE + 10);  
INSERT INTO loans VALUES (102, 2, 9.0, SYSDATE + 40); 
INSERT INTO loans VALUES (103, 3, 7.5, SYSDATE + 5);   
select * from loans;

--scenario-1
BEGIN
    FOR rec IN (
        SELECT c.customer_id, l.loan_id
        FROM customers c
        JOIN loans l ON c.customer_id = l.customer_id
        WHERE c.age > 60
    ) LOOP
        UPDATE loans
        SET interest_rate = interest_rate - 1
        WHERE loan_id = rec.loan_id;

        DBMS_OUTPUT.PUT_LINE('Discount applied: Customer ID ' || rec.customer_id || ', Loan ID ' || rec.loan_id);
    END LOOP;

    COMMIT;
END;
/
select * from loans;

--scenario-2
BEGIN
    FOR rec IN (
        SELECT customer_id
        FROM customers
        WHERE balance > 10000
    ) LOOP
        UPDATE customers
        SET isvip = 'TRUE'
        WHERE customer_id = rec.customer_id;

        DBMS_OUTPUT.PUT_LINE('VIP assigned: Customer ID ' || rec.customer_id);
    END LOOP;

    COMMIT;
END;
/
select * from customers;

--sceenario-3
BEGIN
    FOR rec IN (
        SELECT l.loan_id, l.due_date, c.customer_id, c.name
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date <= SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(' Reminder: Loan ' || rec.loan_id ||
                             ' for ' || rec.name ||
                             ' (Customer ID: ' || rec.customer_id || ')' ||
                             ' is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY'));
    END LOOP;
END;
/