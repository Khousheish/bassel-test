// 1. Define User Types:
type IUser = {
  name: string;
  email: string;
}

interface Admin extends IUser {
  createUser(user: User): void;
}

interface Moderator extends IUser {
  banUser(user: User): void;
}

interface RegularUser extends IUser {
  viewContent(): void;
}

// 2. Create Union Types for Users

type User = Admin | Moderator | RegularUser;

// 3. Type Guards

function isAdmin(user: User): user is Admin {
  return "createUser" in user;
  //return typeof user === "Admin"; // This won't work as expected since interfaces do not exist at runtime}
}

function isModerator(user: User): user is Moderator {
  return "banUser" in user;
}

function isRegularUser(user: User): user is RegularUser {
  return "viewContent" in user;
}

// 4. User Management Functions

function performAdminTask(user: User, task: () => void): void {
  if (isAdmin(user)) {
    task();
  } else {
    console.error(`Permission denied: ${user.name} is not an Admin.`);
  }
}

function moderateContent(user: User, contentId: string): void {
  if (isModerator(user)) {
    console.log(`${user.name} (Moderator) banned content: ${contentId}`);
  } else {
    console.error(`Permission denied: ${user.name} is not a Moderator.`);
  }
}

function viewContentAsUser(user: User): void {
  if (isRegularUser(user)) {
    user.viewContent();
  } else {
    console.error(`Permission denied: ${user.name} is not a RegularUser.`);
  }
}

// 5. Type Combinations (SuperUser)

type SuperUser = Admin & Moderator;

function superUserTask(user: SuperUser, task: () => void): void {
  // SuperUser can perform either admin or moderator actions; we just run the task.
  console.log(`${user.name} (SuperUser) is executing a privileged task...`);
  task();
}

