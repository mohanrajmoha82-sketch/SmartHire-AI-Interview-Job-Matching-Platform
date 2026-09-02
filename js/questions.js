const questions = [

    // PYTHON

    {
        role: "python",
        question: "What is Python?",
        options: [
            "A programming language",
            "A database",
            "An operating system",
            "A web browser"
        ],
        answer: 0
    },

    {
        role: "python",
        question: "Which keyword is used to define a function in Python?",
        options: [
            "function",
            "def",
            "func",
            "define"
        ],
        answer: 1
    },

    {
        role: "python",
        question: "Which data type is mutable?",
        options: [
            "Tuple",
            "String",
            "List",
            "Integer"
        ],
        answer: 2
    },

    {
        role: "python",
        question: "What is the output of len([1,2,3])?",
        options: [
            "2",
            "3",
            "4",
            "1"
        ],
        answer: 1
    },

    {
        role: "python",
        question: "Which symbol is used for comments in Python?",
        options: [
            "//",
            "/*",
            "#",
            "<!--"
        ],
        answer: 2
    },

    {
        role: "python",
        question: "What is a Python dictionary?",
        options: [
            "Key-value collection",
            "Only numbers",
            "Only strings",
            "A function"
        ],
        answer: 0
    },

    {
        role: "python",
        question: "Which keyword handles exceptions?",
        options: [
            "catch",
            "try",
            "error",
            "exception"
        ],
        answer: 1
    },

    {
        role: "python",
        question: "What does OOP stand for?",
        options: [
            "Object Oriented Programming",
            "Object Operating Program",
            "Open Object Programming",
            "Only Object Program"
        ],
        answer: 0
    },

    {
        role: "python",
        question: "Which keyword creates a class?",
        options: [
            "object",
            "class",
            "struct",
            "create"
        ],
        answer: 1
    },

    {
        role: "python",
        question: "Which function is used to get user input?",
        options: [
            "get()",
            "input()",
            "read()",
            "scan()"
        ],
        answer: 1
    },


    // DJANGO

    {
        role: "django",
        question: "What is Django?",
        options: [
            "Python web framework",
            "Database",
            "JavaScript library",
            "Operating system"
        ],
        answer: 0
    },

    {
        role: "django",
        question: "What architecture does Django follow?",
        options: [
            "MVC",
            "MVT",
            "MVVM",
            "MVP"
        ],
        answer: 1
    },

    {
        role: "django",
        question: "What is Django ORM?",
        options: [
            "Object Relational Mapper",
            "Online Request Manager",
            "Object Request Model",
            "Online Resource Manager"
        ],
        answer: 0
    },

    {
        role: "django",
        question: "Which command creates a Django project?",
        options: [
            "django startproject",
            "django-admin startproject",
            "django createproject",
            "python create"
        ],
        answer: 1
    },

    {
        role: "django",
        question: "Which file contains Django project settings?",
        options: [
            "views.py",
            "models.py",
            "settings.py",
            "urls.py"
        ],
        answer: 2
    },

    {
        role: "django",
        question: "Which file defines database models?",
        options: [
            "models.py",
            "views.py",
            "admin.py",
            "forms.py"
        ],
        answer: 0
    },

    {
        role: "django",
        question: "What is a Django migration?",
        options: [
            "Database schema change",
            "HTML page",
            "Python function",
            "URL"
        ],
        answer: 0
    },

    {
        role: "django",
        question: "Which command creates migrations?",
        options: [
            "python manage.py makemigrations",
            "python manage.py migration",
            "django migration",
            "python migration"
        ],
        answer: 0
    },

    {
        role: "django",
        question: "Which file handles URL routing?",
        options: [
            "views.py",
            "urls.py",
            "models.py",
            "admin.py"
        ],
        answer: 1
    },

    {
        role: "django",
        question: "What is middleware?",
        options: [
            "Request/response processing layer",
            "Database table",
            "Template",
            "Model"
        ],
        answer: 0
    },


    // FRONTEND

    {
        role: "frontend",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        answer: 0
    },

    {
        role: "frontend",
        question: "What is CSS used for?",
        options: [
            "Database",
            "Styling web pages",
            "Server programming",
            "API creation"
        ],
        answer: 1
    },

    {
        role: "frontend",
        question: "Which language adds interactivity to websites?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        role: "frontend",
        question: "What is DOM?",
        options: [
            "Document Object Model",
            "Data Object Method",
            "Document Output Model",
            "Design Object Model"
        ],
        answer: 0
    },

    {
        role: "frontend",
        question: "Which method selects an element by ID?",
        options: [
            "getElementById()",
            "getId()",
            "selectId()",
            "queryId()"
        ],
        answer: 0
    },

    {
        role: "frontend",
        question: "What is responsive design?",
        options: [
            "Design adapting to screen sizes",
            "Only mobile design",
            "Only desktop design",
            "Backend design"
        ],
        answer: 0
    },

    {
        role: "frontend",
        question: "Which CSS property changes text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "foreground"
        ],
        answer: 2
    },

    {
        role: "frontend",
        question: "Which CSS layout system is useful for one-dimensional layouts?",
        options: [
            "Flexbox",
            "Table",
            "Float",
            "Position"
        ],
        answer: 0
    },

    {
        role: "frontend",
        question: "Which JavaScript keyword declares a constant?",
        options: [
            "var",
            "let",
            "const",
            "constant"
        ],
        answer: 2
    },

    {
        role: "frontend",
        question: "What is localStorage?",
        options: [
            "Browser storage",
            "Database server",
            "Cloud storage",
            "CSS feature"
        ],
        answer: 0
    },


    // FULL STACK

    {
        role: "fullstack",
        question: "What is a REST API?",
        options: [
            "API following REST principles",
            "Database",
            "Frontend framework",
            "Operating system"
        ],
        answer: 0
    },

    {
        role: "fullstack",
        question: "Which HTTP method is commonly used to create data?",
        options: [
            "GET",
            "POST",
            "DELETE",
            "PUT"
        ],
        answer: 1
    },

    {
        role: "fullstack",
        question: "Which HTTP method retrieves data?",
        options: [
            "GET",
            "POST",
            "DELETE",
            "PATCH"
        ],
        answer: 0
    },

    {
        role: "fullstack",
        question: "What does JSON stand for?",
        options: [
            "JavaScript Object Notation",
            "Java Source Object Network",
            "JavaScript Online Network",
            "JSON Object Name"
        ],
        answer: 0
    },

    {
        role: "fullstack",
        question: "What is Git?",
        options: [
            "Version control system",
            "Database",
            "Programming language",
            "Web browser"
        ],
        answer: 0
    },

    {
        role: "fullstack",
        question: "What is GitHub?",
        options: [
            "Code hosting platform",
            "Programming language",
            "Database",
            "IDE"
        ],
        answer: 0
    },

    {
        role: "fullstack",
        question: "What is authentication?",
        options: [
            "Verifying user identity",
            "Deleting data",
            "Styling website",
            "Creating database"
        ],
        answer: 0
    },

    {
        role: "fullstack",
        question: "What is authorization?",
        options: [
            "Checking user permissions",
            "Checking password only",
            "Creating HTML",
            "Creating CSS"
        ],
        answer: 0
    },

    {
        role: "fullstack",
        question: "What is JWT?",
        options: [
            "JSON Web Token",
            "Java Web Tool",
            "JSON Web Technology",
            "JavaScript Web Token"
        ],
        answer: 0
    },

    {
        role: "fullstack",
        question: "What is MySQL?",
        options: [
            "Relational database",
            "Programming language",
            "Frontend framework",
            "Operating system"
        ],
        answer: 0
    },


    // GENERAL / ADVANCED

    {
        role: "python",
        question: "What is a lambda function?",
        options: [
            "Anonymous function",
            "Class",
            "Loop",
            "Module"
        ],
        answer: 0
    },

    {
        role: "django",
        question: "What is a QuerySet?",
        options: [
            "Collection of database query results",
            "HTML template",
            "Python class only",
            "URL configuration"
        ],
        answer: 0
    },

    {
        role: "frontend",
        question: "What is event bubbling?",
        options: [
            "Event propagates from child to parent",
            "Event disappears",
            "Page refresh",
            "CSS animation"
        ],
        answer: 0
    },

    {
        role: "fullstack",
        question: "What is CORS?",
        options: [
            "Cross-Origin Resource Sharing",
            "Code Origin Request System",
            "Cross Object Resource System",
            "Client Origin Request Service"
        ],
        answer: 0
    },

    {
        role: "python",
        question: "What is a virtual environment?",
        options: [
            "Isolated Python environment",
            "Cloud server",
            "Database",
            "Python class"
        ],
        answer: 0
    },

    {
        role: "django",
        question: "What is a Django template?",
        options: [
            "HTML with Django template syntax",
            "Database",
            "Python package",
            "URL"
        ],
        answer: 0
    },

    {
        role: "frontend",
        question: "What is an API?",
        options: [
            "Interface for software communication",
            "CSS property",
            "Database table",
            "HTML element"
        ],
        answer: 0
    },

    {
        role: "fullstack",
        question: "What is CRUD?",
        options: [
            "Create Read Update Delete",
            "Create Run Update Design",
            "Code Read User Data",
            "Create Request Update Data"
        ],
        answer: 0
    },

    {
        role: "python",
        question: "What is inheritance?",
        options: [
            "Child class acquiring parent properties",
            "Deleting a class",
            "Creating a database",
            "Calling an API"
        ],
        answer: 0
    },

    {
        role: "fullstack",
        question: "What is frontend development?",
        options: [
            "Development of user-facing interface",
            "Database management",
            "Server management",
            "Network administration"
        ],
        answer: 0
    }

];