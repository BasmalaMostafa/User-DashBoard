# Users Dashhboard System

![Capture](https://github.com/user-attachments/assets/d2269312-068f-4879-bfcd-ea226940a8c5)

![Capture3](https://github.com/user-attachments/assets/0a16aa72-aab4-48e5-82d5-10a327e37362)

![Capture1](https://github.com/user-attachments/assets/3ac50362-6e46-4fff-a086-1a5fe0d50039)

![Capture2](https://github.com/user-attachments/assets/3f8fc5fa-f178-4389-b93a-cabbd0354a87)

![Capture4](https://github.com/user-attachments/assets/19288d1c-9943-4bbf-ad9e-d414909e8c43)

![Capture5](https://github.com/user-attachments/assets/ab75842e-f6e2-4205-8cea-896d79452525)

![Capture6](https://github.com/user-attachments/assets/8b7ef343-f30c-47a7-aa29-9cf59b582d7e)

## Overveiw
Page Layout:
● Developing a page layout comprising a header and a horizontally centered, paginated users list.
Data Retrieval:
      ● Utilize the HTTP endpoints:
      ● Fetch user card data (including avatar image, first_name, last_name, and id) from https://reqres.in/api/users?page={page} for pagination.
      ● Fetch details for a single user via https://reqres.in/api/users/{id}.

Navigation:
● Enable click functionality on the user cards to navigate to a new page displaying detailed information about the selected user.
Search Functionality:
● Implement an instant search field within the header to search for users by ID without requiring a separate button. Display search results and allow navigation to the user details page if the user exists.
User Details Page:
● Include a back button on each individual user's page to navigate back to the main user list.

Caching Implementation:
● Introduce caching mechanisms to avoid redundant HTTP requests, optimizing the application's performance.
User Experience Enhancements:
● Display a loading bar to indicate pending network requests, ensuring a smoother user experience during data retrieval.

## Angular project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
