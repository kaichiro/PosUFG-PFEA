import * as React from "react";
import { Card } from "semantic-ui-react";

import CardComponent from "../card/CardComponent";

const divStyle = { padding: 5 };

function CardGroupComponent() {
  return (
    <div style={divStyle}>
      <Card.Group stackable={true} centered={true} /*itemsPerRow={2}*/>
        <CardComponent
          description="Mochila Dell Professional - 15,6''"
          oldPrice="R$ 178,99"
          image="https://i.dell.com/das/xa.ashx/global-site-design%20WEB/27483abe-314a-2e35-b584-c09a4f61fa30/1/OriginalPng?id=Dell/Product_Images/Peripherals/Carrying_Cases/Backpacks/dell-professional-backpack-15-hero-504x350.jpg"
          newPrice="149,99"
          plots="2 x 74,99"
          rating={3}
        />
        <CardComponent
          description="Mochila com Rodas Swiss Digital 17''"
          oldPrice="R$ 288,99"
          image="https://snpi.dell.com/snp/images2/300/pt-br~AA188364_V1/AA188364_V1.jpg"
          newPrice="199,99"
          plots="3 x 66,66"
          rating={2}
        />
        <CardComponent
          description="Mochila Dell Professional - 15,6''"
          oldPrice="R$ 178,99"
          image="https://i.dell.com/das/xa.ashx/global-site-design%20WEB/27483abe-314a-2e35-b584-c09a4f61fa30/1/OriginalPng?id=Dell/Product_Images/Peripherals/Carrying_Cases/Backpacks/dell-professional-backpack-15-hero-504x350.jpg"
          newPrice="149,99"
          plots="2 x 74,99"
          rating={3}
        />
        <CardComponent
          description="Mochila com Rodas Swiss Digital 17''"
          oldPrice="R$ 288,99"
          image="https://snpi.dell.com/snp/images2/300/pt-br~AA188364_V1/AA188364_V1.jpg"
          newPrice="199,99"
          plots="3 x 66,66"
          rating={2}
        />
        <CardComponent
          description="Mochila Dell Professional - 15,6''"
          oldPrice="R$ 178,99"
          image="https://i.dell.com/das/xa.ashx/global-site-design%20WEB/27483abe-314a-2e35-b584-c09a4f61fa30/1/OriginalPng?id=Dell/Product_Images/Peripherals/Carrying_Cases/Backpacks/dell-professional-backpack-15-hero-504x350.jpg"
          newPrice="149,99"
          plots="2 x 74,99"
          rating={3}
        />
        <CardComponent
          description="Mochila com Rodas Swiss Digital 17''"
          oldPrice="R$ 288,99"
          image="https://snpi.dell.com/snp/images2/300/pt-br~AA188364_V1/AA188364_V1.jpg"
          newPrice="199,99"
          plots="3 x 66,66"
          rating={2}
        />
        <CardComponent
          description="Mochila Dell Professional - 15,6''"
          oldPrice="R$ 178,99"
          image="https://i.dell.com/das/xa.ashx/global-site-design%20WEB/27483abe-314a-2e35-b584-c09a4f61fa30/1/OriginalPng?id=Dell/Product_Images/Peripherals/Carrying_Cases/Backpacks/dell-professional-backpack-15-hero-504x350.jpg"
          newPrice="149,99"
          plots="2 x 74,99"
          rating={3}
        />
        <CardComponent
          description="Mochila com Rodas Swiss Digital 17''"
          oldPrice="R$ 288,99"
          image="https://snpi.dell.com/snp/images2/300/pt-br~AA188364_V1/AA188364_V1.jpg"
          newPrice="199,99"
          plots="3 x 66,66"
          rating={2}
        />
        <CardComponent
          description="Mochila Dell Professional - 15,6''"
          oldPrice="R$ 178,99"
          image="https://i.dell.com/das/xa.ashx/global-site-design%20WEB/27483abe-314a-2e35-b584-c09a4f61fa30/1/OriginalPng?id=Dell/Product_Images/Peripherals/Carrying_Cases/Backpacks/dell-professional-backpack-15-hero-504x350.jpg"
          newPrice="149,99"
          plots="2 x 74,99"
          rating={3}
        />
        <CardComponent
          description="Mochila com Rodas Swiss Digital 17''"
          oldPrice="R$ 288,99"
          image="https://snpi.dell.com/snp/images2/300/pt-br~AA188364_V1/AA188364_V1.jpg"
          newPrice="199,99"
          plots="3 x 66,66"
          rating={2}
        />
      </Card.Group>
    </div>
  );
}

export default CardGroupComponent;
