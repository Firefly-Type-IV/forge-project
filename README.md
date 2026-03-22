# forge-project agile approach

## Requirement Analysis

### Ideation

The initial stage defines the purpose, scope (boundaries & deliverables), feasibility

#### Purpose - focus on the How and What: We will [what] by [how:action] through [how:method]

- "The purpose of this system is to provide a reliable platform on the web so that enables users to log workouts with minimal hindrance, and generate sharable reports for social integration"

- "To track progress at the gym and make sharing workout data **simple, fast and aesthetically** pleasing."
- The interface 'must' be consistent (Design Thinking)
- The database 'should' be able to support different datatypes, encrypt user credentials
- The app must allow users to log a set (complete an action) in three steps, or see a page load within three seconds.

#### Boundaries

#### Feasibility

Can it be done, and how long
1 month for mvp basic requirements for mvp

### User Story

Who is it for, how does it benefit them? End users are the gym goers including newbies amongst others. Shouldn't discriminate between groups but promote a healthy fitness community. Think about context and boundaries defined earlier.

Independent
Negotiable
Valuable
Estimatable
Small
Testable

Consider people who may be off put by social media, ensure privacy by design. Only take the bare minimum data for core functionality. Minimalistic UI to reduce cognitive overload, and avoid overwhelming the user with multi-step forms and animations that lead to task abandonment.

- "As a user, I want to log my sets, reps, and weights, so that I can track my progress over time and ensure I am hitting my goals."
- "As a user, I want to populate a workout plan with excercises"
- "As a user, I want to create an account using my email and password, so that I can access my data securely."

### Functional Requirements

What does it do?

- CRUD actionable on workouts and sets
- Users can save a workout as a template tso reuse later i.e. 'Push Day'
- Authenticate login via email and password
- Users can view other user's workouts, but only the author/admin can edit or delete.
- Use a exercise library api

### Non-functional Requirements

How does it perform?

- bcrypt password encryption
- process of build a workout should be like that of a form, three steps

### Acceptance Criteria - What does done mean?

Expand the user stories, to actionable steps for developers to implement. AC should cover expected behaviour, validations and performance.
Can I edit or delete a set? system validates

"As a user, I want to log my sets, reps, and weights, so that I can track my progress over time and ensure I am hitting my goals."
AC1: User should enter numerical values for weight and reps, to build personal record trackers. Inflexible prevent ranges or text
AC2: System should validate that weights, reps, sets are non-negative
AC3: Maintain data integrity, if a user deletes a workout all exercise entries associated with it should be automatically deleted
AC4: Pressing save button updates the database.

- "As a user, I want to create an account using my email and password, so that I can access my data securely."
  AC1: User must enter a valid email address and strong password
  AC2: System validates username or email not already in use
  AC3: Passwords are hashed before being written to the database.
