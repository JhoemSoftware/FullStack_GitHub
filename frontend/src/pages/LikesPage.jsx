import { FaHeart } from "react-icons/fa6";

export const LikesPage = () => {
    return (
        <div class="w-11/12 mx-auto my-5 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-16 py-3">
                            <span class="sr-only">Image</span>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="flex justify-center py-2">
                            <img src="jhoemGitHub.jpg" class="w-14 h-14 border rounded-full" alt="Apple Watch"/>
                        </td>
                        <td class="px-6 py-4 text-gray-900 dark:text-white">
                            Jhoem Software
                        </td>
                        <td class="px-6 py-4 text-gray-900 dark:text-white">
                            2024, March 24
                        </td>
                        <td class="px-6 py-4">
                            <FaHeart size={24} className="text-red-700 inline mx-2" /> Liked your profile
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
