INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Marketing'),
    ('Finance'),
    ('IT');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Salesperson', 50000.00, 1),
    ('Marketing Manager', 100000.00, 2),
    ('Finance Manager', 100000.00, 3),
    ('IT Manager', 100000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Emmett', 'Brown', 1, NULL),
    ('Marty', 'McFly', 2, 1),
    ('Victor', 'Frankenstein', 3, NULL),
    ('Rintarou', 'Okabe', 4, NULL),
    ('Robert', 'Neville', 2, 1),
    ('Lex', 'Luthor', 2, 2),
    ('Hubert', 'Farnsworth', 4, 2),
    ('Henry', 'Wu', 1, 1),
    ('Frank', 'Furter', 1, 2),
    ('Wayne', 'Szalinski', 2, 2),
    ('Reed', 'Richards', 4, 2);