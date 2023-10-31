import React, { useEffect, useState, useContext } from "react";

import { CartWidgetITypes } from ".";
import "./CartWidget.scss";
import { SketchOutlined, DollarOutlined, ShoppingCartOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Space, List, Col, Row, Divider, Button, Tooltip, Modal, Image, message } from "antd";
import { snippets } from "_helpers";
import { useSettingsDataContext } from "_services/providers/data";

const CartWidget: React.FC<CartWidgetITypes> = ({
  children,
  ...props
}): any | null => {

  const [messageApi, contextHolder] = message.useMessage();

  const { applicationSettings } = useSettingsDataContext();

  const data = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `NFT #${i + 1}34${i}`,
    image: `card-item-0${i + 1}.jpg`,
    href: 'https://ant.design',
    description: '0x53ab2056Ca70934d0e233E6b686EC20DE4101Ed9',
    content: 'Bored Ape Yatch Club',
    price: `${Math.floor(123.4567890 / (i + 1))}`
  }));

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const [removeCartItemConfirmModalOpened, setRemoveCartItemConfirmModalOpened] = useState<boolean>(false);

  const [removeCartItemConfirmModalContent, setRemoveCartItemConfirmModalContent] = useState<any>({
    title: '',
    content: '',
  });

  const removeItem = (item: any) => {

    setRemoveCartItemConfirmModalOpened(true);

    setRemoveCartItemConfirmModalContent(item);

  };

  const removeCartItem = (item: any) => {

    console.log("removeCartItem", item);

    messageApi.info(`Item '${item.title}' was removed from the cart.`);

    setRemoveCartItemConfirmModalOpened(false);

  };

  useEffect(() => {

    console.log("ETH", snippets.ethers.v6.ethersToWei(0.025));

  }, [])

  const [footerMaxHeight, setFooterMaxHeight] = useState<boolean>(false);

  return (
    <>
      <List
        itemLayout="vertical"
        size={applicationSettings.ui.drawers.cart.cartListSize}
        pagination={{
          onChange: (page: number) => {

            console.log(
              {
                applicationSettings: applicationSettings,
                dataLen: data.length,
                page: page,
                modulus: data.length % page,
                maxHeight: data.length % page !== 0


              }
            )

            setFooterMaxHeight(data.length % page !== 0);

          },
          pageSize: applicationSettings.ui.drawers.cart.cartPageSize,
        }}
        dataSource={data}
        footer={
          <>
            <Space style={
              {
                height: footerMaxHeight ?
                  applicationSettings.ui.drawers.cart.cartFooterMaxHeight :
                  applicationSettings.ui.drawers.cart.cartFooterHeight
              }}
              className={footerMaxHeight ? 'd-block' : 'd-none'}
            >
              {" "}
            </Space>
          </>
        }
        renderItem={(item) => (
          <List.Item
            key={item.title}
            title={item.title}
            actions={[
              <IconText icon={SketchOutlined} text={`${snippets.ethers.v6.weiToEthers(item.price)} ETH`} key="list-vertical-like-o" />,
            ]}
            extra={
              <Image
                width={applicationSettings.ui.drawers.cart.cartItemThumbnailWidth}
                title="item-preview"
                src={`/assets/images/box-item/${item.image}`}
                className={`border-radius-${applicationSettings.ui.drawers.cart.cartItemThumbnailBorderRadius}px`}
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={snippets.formatAddress(item.description, true)}
            />
            {item.content}
            <Space size={18} split={<Divider type="vertical" />} className={`remove-item border-radius-${applicationSettings.ui.drawers.cart.cartItemThumbnailBorderRadius}px`} direction="vertical" >
              <Tooltip title={`View '${item.title}' summary.`}>
                <Button icon={<SearchOutlined />} shape="circle" size="large" className="w-100 bg-transparent" onClick={() => removeItem(item)} />
              </Tooltip>
              <Tooltip title={`Remove '${item.title}' from the cart.`}>
                <Button icon={<DeleteOutlined />} shape="circle" size="large" className="w-100 bg-transparent" onClick={() => removeItem(item)} danger />
              </Tooltip>
            </Space>
          </List.Item>
        )}
      />
      <Divider />
      <Row>
        <Col span={12}>Destination Wallet:</Col>
        <Col span={12} className="text-right"><strong>{snippets.formatAddress('0x0BcEBD6Ce292721408eA6a40c9F1FA04C8bEFA9A')}</strong></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>Total Items:</Col>
        <Col span={12} className="text-right"><strong>{data.length}</strong></Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>Total Amount:</Col>
        <Col span={12} className="text-right"><strong>{snippets.ethers.v6.weiToEthers('123.4567890')} ETH</strong></Col>
      </Row>
      <Row>
        <Col span={12}></Col>
        <Col span={12} className="text-right">~ 34,632.59 USD</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Tooltip title="View Cart">
            <Button icon={<ShoppingCartOutlined />} className="w-100" size="large" >View Cart</Button>
          </Tooltip>
        </Col>
        <Col span={1}></Col>
        <Col span={11}>
          <Tooltip title="Checkout">
            <Button type="primary" icon={<DollarOutlined />} className="w-100" size="large">Checkout</Button>
          </Tooltip>
        </Col>
      </Row>
      <Modal
        title="Remove item from cart."
        centered
        open={removeCartItemConfirmModalOpened}
        onOk={() => removeCartItem(removeCartItemConfirmModalContent)}
        onCancel={() => setRemoveCartItemConfirmModalOpened(false)}
        okText="Remove Item"
        cancelText="Cancel"
        className="modal-remove-item"
      >
        <Divider />
        <Row className="details-wrapper">
          <Col span={5}>
            <img
              alt=""
              src={`/assets/images/box-item/${removeCartItemConfirmModalContent.image}`}
              className={`border-radius-${applicationSettings.ui.drawers.cart.cartItemThumbnailBorderRadius}px`}
              width={"100%"} />
          </Col>
          <Col span={1} />
          <Col span={16}>
            <Row>
              <Col>
                <h2 className="ant-list-item-title">{removeCartItemConfirmModalContent.title}</h2>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Space size={3} direction="vertical" className="details-container" >
                  <span className="ant-list-item-text"><strong>Collection:</strong></span>
                  <span className="ant-list-item-text"><strong>Address:</strong></span>
                  <span className="ant-list-item-text"><strong>Price:</strong></span>
                </Space>
              </Col>
              <Col flex={"auto"}>
                <Space size={3} direction="vertical" className="details-container" >
                  <span className="ant-list-item-text">{removeCartItemConfirmModalContent.content}</span>
                  <span className="ant-list-item-text">{snippets.formatAddress(removeCartItemConfirmModalContent.description, true)}</span>
                  <span className="ant-list-item-text">{snippets.ethers.v6.weiToEthers(removeCartItemConfirmModalContent.price)} ETH</span>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider />
      </Modal>
      {contextHolder}
    </>
  );
};

export { CartWidget };
