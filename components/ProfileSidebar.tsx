import React from "react";
import Link from "next/link";


export default function ProfileSidebar() {
  return (
    <div className="profile-sidebar">
      <Link href="/profile">
        <a className="nav-selector">Your information</a>
      </Link>
      <Link href="/profile/password">
        <a className="nav-selector">Password</a>
      </Link>

      <style>
        {`
            .nav-selector {
                padding: 12px 8px;
                margin-bottom: 4px;
                border-radius: 4px;
                display: block;
            }
            .nav-selector:hover {
                background-color: #F4F4F4;
            }
            .nav-selector:active {
                background-color: #E5E9E8;
            }
            
            .profile-sidebar {
                width: 20%;
                display: inline-block;
            }

            .nav-selector:visited,
            .nav-selector:link {
                text-decoration: none;
                color: #1c1c1c;
                font-weight: 600;
            }
        `}
      </style>
    </div>
  );
}