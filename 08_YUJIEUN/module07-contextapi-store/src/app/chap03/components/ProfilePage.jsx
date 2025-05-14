"use client";
import useTheme from "../hooks/useTheme";

export default function ProfilePage() {
  const { theme, toggleTheme } = useTheme();

  const{user,handleSetUser} =useUser();

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Theme : {theme}</p>

      <button onClick={toggleTheme}>현재 토클의 테마 : ✅{theme}</button>
      <button onClick={()=>handleSetUser(user)}>{user ? 'Logout' :'Login'}</button>
      {user&& <p>Welcome,{user}</p>}
    </div>
  );
}
