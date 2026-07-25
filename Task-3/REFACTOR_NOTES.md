# Refactor Notes

Task-3 was reviewed after the Route 1 and Route 2 implementation. The following refactor items were identified and applied.

1. The default route redirected directly to Route 1, which made Route 2 less discoverable when opening the project. A Home route was added so the root path presents both Route 1 and Route 2 as explicit choices.

2. UserCard calculated display values with template-facing getters such as initials, role, URLs, and details. These values were moved to computed signals so derived UI data is cached and aligned with the signal-based state used in the project.

3. Route 2 calculated the user avatar initial directly in the template with user.name.slice(0, 1). That view formatting was moved into the TypeScript layer by mapping API users to UserListItem objects.

4. The App component test still expected Angular's starter "Hello, Task-3" screen even though the starter screen had been replaced. The test now checks the actual shell navigation.
