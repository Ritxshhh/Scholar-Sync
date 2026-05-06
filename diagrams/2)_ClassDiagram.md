# Class Diagram — ScholarSync LMS

## Design Principles Applied

### OOP Principles
- **Encapsulation**: All classes encapsulate their data with private fields and public methods
- **Inheritance**: `User` → `Student`, `Instructor`, `Admin`; `LibraryResource` → `Textbook`, `Journal`, `VideoLecture`
- **Polymorphism**: `calculateGrade()` behaves differently per grading strategy; `getProgress()` varies by resource type
- **Abstraction**: Abstract `User` and `LibraryResource` base classes define contracts

### SOLID Principles
- **S** — Single Responsibility: Each class has one reason to change (e.g., `GradeCalculator` only handles grade math)
- **O** — Open/Closed: `LibraryResource` is open for extension (new resource types) without modifying existing code
- **L** — Liskov Substitution: Any `LibraryResource` subclass can be used wherever `LibraryResource` is expected
- **I** — Interface Segregation: `ISubmittable`, `IGradable`, `ISearchable` are small, focused interfaces
- **D** — Dependency Inversion: Services depend on repository interfaces, not concrete implementations

### Design Patterns Used
- **Factory Pattern**: `ResourceFactory` creates `Textbook`, `Journal`, or `VideoLecture` based on type
- **Singleton Pattern**: `DatabaseConnection`, `ConfigManager`

---

## Class Diagram

This diagram presents a high-level structural view of core domain entities and their primary relationships.
Implementation-level classes (factories, repositories, notifiers, enums, and helper value objects) are intentionally omitted here to keep the diagram readable.

```mermaid
classDiagram
    direction LR

    %% Core abstractions
    class User {
        <<abstract>>
        +id: ObjectId
        +name: String
        +email: String
        +getRole() String
    }

    class LibraryResource {
        <<abstract>>
        +id: ObjectId
        +title: String
        +author: String
        +getType() String
    }

    %% User hierarchy
    class Student {
        +enrollInCourse(courseId: String) Enrollment
    }

    class Instructor {
        +createCourse(data: Object) Course
        +createAssignment(courseId: String, data: Object) Assignment
        +gradeSubmission(submissionId: String, grade: Grade) void
    }

    class Admin {
        +manageUsers() void
    }

    %% Course & enrollment
    class Course {
        +id: ObjectId
        +title: String
        -code: String
        +getProgress(studentId: String) Number
    }

    class Module {
        +id: ObjectId
        -title: String
        -orderIndex: Number
    }

    class Enrollment {
        +id: ObjectId
        -progress: Number
        +getCompletionPercentage() Number
    }

    %% Assignments & grading
    class Assignment {
        +id: ObjectId
        -title: String
        -deadline: Date
        -points: Number
        +isOverdue() Boolean
    }

    class Submission {
        +id: ObjectId
        -submittedAt: Date
        +isLate() Boolean
    }

    class Grade {
        +id: ObjectId
        -score: Number
        -maxScore: Number
        -feedback: String
        +getPercentage() Number
    }

    %% Library
    class Textbook {
        +getType() String
    }

    class VideoLecture {
        +getType() String
    }

    class NotificationService {
        +notify(eventType: String, payload: Object) void
    }

    %% Inheritance
    User <|-- Student
    User <|-- Instructor
    User <|-- Admin

    LibraryResource <|-- Textbook
    LibraryResource <|-- VideoLecture

    %% Core associations
    Course "1" --> "1" Instructor : taught by
    Course "1" --> "*" Module : contains
    Course "1" --> "*" Assignment : has

    Student "1" --> "*" Enrollment : has
    Enrollment "*" --> "1" Course : for

    Assignment "1" --> "*" Submission : receives

    Submission "1" --> "1" Student : by
    Submission "1" --> "0..1" Grade : has

    Grade "*" --> "1" Student : for
    Grade "*" --> "1" Instructor : by

    NotificationService ..> Assignment : deadline reminders
    NotificationService ..> Grade : grade notifications
    NotificationService ..> Course : announcement notifications
```

---

## Design Patterns Summary

| Pattern | Where Applied | Purpose |
|---------|--------------|---------|
| **Factory** | `ResourceFactory` | Creates `Textbook`, `Journal`, or `VideoLecture` without exposing creation logic |
| **Singleton** | `DatabaseConnection` (not shown) | Ensures single DB connection pool |

