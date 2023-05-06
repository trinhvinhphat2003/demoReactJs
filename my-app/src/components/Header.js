import { Menu } from "antd"
const Header = () => {
    return (
        <div>
            <Menu
                mode="horizontal"
                items={[
                    {
                        label: "Home",
                        key: "home"
                    },
                    {
                        label: "Category",
                        key: "category",
                        children: [
                            {
                                label: "child 1"
                            },
                            {
                                label: "child 2"
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}

export default Header;