const ImagemPortfolio = (sequelize, DataTypes) => {
    let imagemPortfolio = sequelize.define(
        'ImagemPortfolio',
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            imagem: {
              type: DataTypes.STRING(300),
              allowNull: false
            },
            fk_registro_portfolio: {
              type: DataTypes.INTEGER,
              allowNull: false
            }
        },
        { 
            tableName: "imagem_portfolio",
            timestamps: false 
        }
    );

    imagemPortfolio.associate = (models) => {
        
        // imagemPortfolio.belongsTo(models.registro_portfolio, {
        //     foreignKey:'fk_registro_portfolio', as: 'registro_portfolio'
        // });

        imagemPortfolio.belongsTo(models.RegistroPortfolio, {
            foreignKey:'id', as:'RegistroPortfolio'
        })

    };

    return imagemPortfolio;
}

module.exports = ImagemPortfolio;