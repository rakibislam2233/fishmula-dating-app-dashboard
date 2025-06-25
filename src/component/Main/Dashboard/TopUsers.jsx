import { FaUser } from "react-icons/fa";

// Sample user data - replace with your API data
const sampleUsers = [
  {
    id: 1,
    name: "Iva Ryan",
 avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face&auto=format",
    earnings: 2540.58,
    followers: 150,
    lomi: 105,
    date: "5 May, 2025",
  },
  {
    id: 2,
    name: "John Dukes",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face&auto=format",
    earnings: 2540.58,
    followers: 150,
    lomi: 105,
    date: "5 May, 2025",
  },
  {
    id: 3,
    name: "Mary Freund",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face&auto=format",
    earnings: 2540.58,
    followers: 150,
    lomi: 105,
    date: "5 May, 2025",
  },
  {
    id: 4,
    name: "Patricia Sanders",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face&auto=format",
    earnings: 2540.58,
    followers: 150,
    lomi: 105,
    date: "5 May, 2025",
  },
  {
    id: 5,
    name: "Dennis Callis",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face&auto=format",
    earnings: 2540.58,
    followers: 150,
    lomi: 105,
    date: "5 May, 2025",
  },
  {
    id: 6,
    name: "Daniel Hamilton",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=50&h=50&fit=crop&crop=face&auto=format",
    earnings: 2540.58,
    followers: 150,
    lomi: 105,
    date: "5 May, 2025",
  },
  {
    id: 7,
    name: "Iva Ryan",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=50&h=50&fit=crop&crop=face&auto=format",
    earnings: 2540.58,
    followers: 150,
    lomi: 105,
    date: "5 May, 2025",
  },
];

const TopUsers = () => {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-xl md:text-2xl text-gray-600  notranslate">
        Top Users
      </h1>
      {/* User List */}
      <div className="space-y-3">
        {sampleUsers.length === 0 ? (
          <div className="px-6 py-12 text-center text-gray-500">
            <FaUser className="mx-auto text-4xl text-gray-300 mb-4" />
            <p className="text-lg font-medium">No users found</p>
            <p className="text-sm">Try adjusting your search criteria</p>
          </div>
        ) : (
          sampleUsers.map((user) => (
            <div
              key={user.id}
              className={`px-6 py-4 bg-white hover:bg-gray-50 transition-colors duration-200 border border-gray-200 rounded-2xl flex items-center gap-4`}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* User Info */}
                <div className="col-span-4 flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{user.name}</h3>

                  </div>
                </div>

                {/* Earnings */}
                <div className="col-span-2 text-right">
                  <span className="text-sm text-gray-800">
                    ${user.earnings.toFixed(2)}
                  </span>
                </div>

                {/* Followers */}
                <div className="col-span-2 text-center">
                  <div className="inline-flex items-center gap-1 px-3 py-1 text-sm">
                    {user.followers} Flower
                  </div>
                </div>

                {/* LOMI */}
                <div className="col-span-2 text-center">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ">
                    {user.lomi} LOMI
                  </div>
                </div>

                {/* Date */}
                <div className="col-span-2 text-center">
                  <span className="text-gray-600 text-sm">{user.date}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopUsers;
