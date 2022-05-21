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
        ('HR Manager', 3500,1),
        ('Sales Manager', 3500,2),
        ('Marketing Manager', 3500,3),
        ('IT Manager', 3500,4),
        ('Fianance Manager', 3500,5),
        ('Engeneering Manager', 3500,6),
        ('HR Level 1', 1000,1),
        ('Sales Level 1', 1000,2),
        ('Marketing Level 1', 1000,3),
        ('IT Level 1', 1000,4),
        ('Fianance Level 1', 1000,5),
        ('Engeneering Level 1', 1000,6),
        ('HR Level 2', 1800,1),
        ('Sales Level 2', 1800,2),
        ('Marketing Level 2', 1800,3),
        ('IT Level 2', 1800,4),
        ('Fianance Level 2', 1800,5),
        ('Engeneering Level 2', 1800,6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('Ronald', 'Firbank', 1, 0),
        ('Virginia', 'Woolf', 2, 0),
        ('Piers', 'Gaveston', 3, 0),
        ('Charles', 'LeRoi', 4, 0),
        ('Katherine', 'Mansfield', 5, 0),
        ('Dora', 'Carrington', 6, 0),
        ('Edward', 'Bellamy', 7, 1),
        ('Montague', 'Summers', 8, 2),
        ('Octavia', 'Butler', 9, 3),
        ('Unica', 'Zurn', 10, 4),
        ('James', 'Fraser', 11,5),
        ('Jack', 'London', 12, 6),
        ('Robert', 'Bruce', 13, 1),
        ('Peter', 'Greenaway', 14, 2),
        ('Derek', 'Jarman', 15, 3),
        ('Paolo', 'Pasolini', 16, 4),
        ('Heathcote', 'Williams', 17, 5),
        ('Sandy', 'Powell', 18, 6);