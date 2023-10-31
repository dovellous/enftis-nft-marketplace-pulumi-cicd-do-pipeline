import { Space } from "antd";

interface WalletCardWrapperProps {
    children?: React.ReactNode;
}

export const SettingsWrapper: React.FC<WalletCardWrapperProps> = ({
    children,
    ...props
}): any | null => {

    const { } = props;

    return (
        <>
            <Space direction="vertical" size={5}>
                <h2>Setttings</h2>
            </Space>
        </>

    );
};
