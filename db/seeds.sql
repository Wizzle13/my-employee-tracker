INSERT INTO department (name)
    VALUES
    ('HR'),
    ('Sales'),
    ('Marketing'),
    ('IT'),
    ('Finance'),
    ('Engeneering');

INSERT INTO role(title, salary, department_id)
    VALUES
        ('Sales manager', 3500,2),
        ('Sales planner', 2500,2),
        ('Sales specialist', 1500,2),
        ('Account executive', 3000,3),
        ('Brand manager', 2000,3),
        ('Media buyer', 1000,3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('Ronald', 'Firbank', 1, 1),
        ('Virginia', 'Woolf', 2, 1),
        ('Piers', 'Gaveston', 3, 0),
        ('Charles', 'LeRoi', 4, 1),
        ('Katherine', 'Mansfield', 5, 1),
        ('Dora', 'Carrington', 6, 0),
        ('Edward', 'Bellamy', 6, 0),
        ('Montague', 'Summers', 3, 1),
        ('Octavia', 'Butler', 3, 1),
        ('Unica', 'Zurn', 3, 1);