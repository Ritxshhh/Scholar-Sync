import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import GlobalStyles from "./components/GlobalStyles";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import InstructorDashboardLayout from "./layouts/InstructorDashboardLayout";

// Public pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import InstructorLoginPage from "./pages/InstructorLoginPage";
import InstructorSignupPage from "./pages/InstructorSignupPage";

// Student pages
import DashboardPage from "./pages/DashboardPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import AssignmentDetailPage from "./pages/AssignmentDetailPage";
import GradesPage from "./pages/GradesPage";
import LibraryPage from "./pages/LibraryPage";
import LibraryItemPage from "./pages/LibraryItemPage";

// Instructor pages
import InstructorDashboardPage from "./pages/instructor/InstructorDashboardPage";
import InstructorCoursesPage from "./pages/instructor/InstructorCoursesPage";
import InstructorCourseDetailPage from "./pages/instructor/InstructorCourseDetailPage";
import InstructorAssignmentsPage from "./pages/instructor/InstructorAssignmentsPage";
import InstructorSubmissionsPage from "./pages/instructor/InstructorSubmissionsPage";
import InstructorLibraryPage from "./pages/instructor/InstructorLibraryPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
          <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
          <Route path="/signup" element={<PublicLayout><SignupPage /></PublicLayout>} />
          <Route path="/instructor/login" element={<InstructorLoginPage />} />
          <Route path="/instructor/signup" element={<InstructorSignupPage />} />

          {/* Student Dashboard Routes */}
          <Route path="/dashboard" element={<ProtectedRoute roles={["student"]}><DashboardLayout><DashboardPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/courses" element={<ProtectedRoute roles={["student"]}><DashboardLayout><CoursesPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/courses/:courseId" element={<ProtectedRoute roles={["student"]}><DashboardLayout><CourseDetailPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/assignments" element={<ProtectedRoute roles={["student"]}><DashboardLayout><AssignmentsPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/assignments/:assignmentId" element={<ProtectedRoute roles={["student"]}><DashboardLayout><AssignmentDetailPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/grades" element={<ProtectedRoute roles={["student"]}><DashboardLayout><GradesPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/library" element={<ProtectedRoute roles={["student"]}><DashboardLayout><LibraryPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/library/:itemId" element={<ProtectedRoute roles={["student"]}><DashboardLayout><LibraryItemPage /></DashboardLayout></ProtectedRoute>} />

          {/* Instructor Dashboard Routes */}
          <Route path="/instructor/dashboard" element={<ProtectedRoute roles={["instructor"]}><InstructorDashboardLayout><InstructorDashboardPage /></InstructorDashboardLayout></ProtectedRoute>} />
          <Route path="/instructor/courses" element={<ProtectedRoute roles={["instructor"]}><InstructorDashboardLayout><InstructorCoursesPage /></InstructorDashboardLayout></ProtectedRoute>} />
          <Route path="/instructor/courses/:courseId" element={<ProtectedRoute roles={["instructor"]}><InstructorDashboardLayout><InstructorCourseDetailPage /></InstructorDashboardLayout></ProtectedRoute>} />
          <Route path="/instructor/assignments" element={<ProtectedRoute roles={["instructor"]}><InstructorDashboardLayout><InstructorAssignmentsPage /></InstructorDashboardLayout></ProtectedRoute>} />
          <Route path="/instructor/submissions" element={<ProtectedRoute roles={["instructor"]}><InstructorDashboardLayout><InstructorSubmissionsPage /></InstructorDashboardLayout></ProtectedRoute>} />
          <Route path="/instructor/library" element={<ProtectedRoute roles={["instructor"]}><InstructorDashboardLayout><InstructorLibraryPage /></InstructorDashboardLayout></ProtectedRoute>} />

          {/* Catch-all: redirect unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

