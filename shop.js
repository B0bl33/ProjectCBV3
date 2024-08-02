const dogs = [
    {name: 'Buddy', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900913433422069761', img: 'dog1.png'},
    {name: 'Max', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900920030491836417', img: 'dog2.png'},
    {name: 'Bella', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900954115352297473', img: 'dog3.png'},
    {name: 'Charlie', link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17724726967227728016275983348478245643021567349390441874912900788089096503297', img: 'dog4.png'},
    {name: 'Luna', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900959612910436353', img: 'dog5.png'},
    {name: 'Lucy', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900905736840675329', img: 'dog6.png'},
    {name: 'Daisy', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900881547584864257', img: 'dog7.png'},
    {name: 'Bailey', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900900239282536449', img: 'dog8.png'},
    {name: 'Molly', link: 'https://opensea.io/collection/crypto-brothers-v2', img: 'dog9.png'},
    {name: 'Sadie', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900865054910447617', img: 'dog10.png'},
    {name: 'Rocky', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900910134887186433', img: 'dog11.png'},
    {name: 'Teddy', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900922229515091969', img: 'dog12.png'},
    {name: 'Buster', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900899139770908673', img: 'dog13.png'},
    {name: 'Maggie', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900879348561608705', img: 'dog14.png'},
    {name: 'Oscar', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900856258817425409', img: 'dog15.png'},
    {name: 'Jack', link: 'https://opensea.io/collection/crypto-brothers-v2', img: 'dog16.png'},
    {name: 'Duke', link: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/17724726967227728016275983348478245643021567349390441874912900801283236036609', img: 'dog17.png'},
    {name: 'Riley', link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/17724726967227728016275983348478245643021567349390441874912900978304608108545', img: 'dog18.png'}
  ];
  
  const shopSection = document.querySelector('.shop-section .row:last-child');
  
  dogs.forEach((dog, index) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-6 col-md-4 col-lg-3 mb-4';
    colDiv.innerHTML = `
      <a href="${dog.link}">
        <div class="nft-item">
          <img src="${dog.img}" alt="${dog.name}" class="img-fluid rounded">
          <div class="nft-name">${dog.name}</div>
        </div>
      </a>
    `;
    shopSection.appendChild(colDiv);
  });
  