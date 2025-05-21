
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getEvn } from "@/helpers/getEnv";
import { RouteBlog, RouteBlogByCategory, RouteCategoryDetails, RouteCommentDetails, RouteIndex, RouteUser } from "@/helpers/RouteName";
import { useFetch } from "@/hooks/useFetch";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { GrBlog } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AppSidebar = () => {
    const user = useSelector(state => state.user)
    const { data: categoryData } = useFetch(`${getEvn('VITE_API_BASE_URL || https://write-flow-api.onrender.com')}/category/all-category`, {
        method: 'get',
        credentials: 'include'
    })

    return (
        <Sidebar>
            <SidebarHeader className="bg-white">
                <div className='flex item-center justify-start gap-4 p-2'>
                    <div className='w-10 h-10 overflow-hidden rounded-lg object-center'>
                        <img src={"/logo.jpg"} width={120} />
                    </div>
                    <h1 className='text-black'>WriteFlow</h1>
                </div>

            </SidebarHeader>
            <SidebarContent className="bg-white">
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <IoHomeOutline />
                                <Link to={RouteIndex}>Home</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        {user && user.isLoggedIn
                            ? <>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <GrBlog />
                                        <Link to={RouteBlog}>Blogs</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <FaRegComments />
                                        <Link to={RouteCommentDetails}>Comments</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </>
                            :
                            <></>
                        }
                        {user && user.isLoggedIn && user.user.role === 'admin'
                            ? <>
                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <BiCategoryAlt />
                                        <Link to={RouteCategoryDetails}>Categories</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                                <SidebarMenuItem>
                                    <SidebarMenuButton>
                                        <LuUsers />
                                        <Link to={RouteUser}>Users</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </>
                            :
                            <></>
                        }

                    </SidebarMenu>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>
                        Categories
                    </SidebarGroupLabel>
                    <SidebarMenu>
                        {categoryData && categoryData.category.length > 0
                            && categoryData.category.map(category => <SidebarMenuItem key={category._id}>
                                <SidebarMenuButton>
                                    <GoDot />
                                    <Link to={RouteBlogByCategory(category.slug)}>{category.name}</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>)
                        }

                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

        </Sidebar>
    )
}

export default AppSidebar
