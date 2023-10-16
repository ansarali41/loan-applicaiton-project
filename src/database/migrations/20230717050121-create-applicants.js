"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Applicants", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING },
      pan_number: { type: Sequelize.STRING },
      adhar_number: { type: Sequelize.STRING },
      district_of_birth: { type: Sequelize.STRING },
      date_of_birth: { type: Sequelize.DATEONLY },
      spouse_name: { type: Sequelize.STRING },
      children: { type: Sequelize.INTEGER },
      residential_address: { type: Sequelize.TEXT },
      no_of_year_in_resident: { type: Sequelize.INTEGER },
      residential_status: { type: Sequelize.STRING },
      mobile: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      business_name: { type: Sequelize.STRING },
      nature_of_business: { type: Sequelize.STRING },
      business_address: { type: Sequelize.TEXT },
      business_email_id: { type: Sequelize.STRING },
      monthly_income: { type: Sequelize.DECIMAL(10, 2) },
      credit_card_status: {
        type: Sequelize.STRING,
        get() {
          const value = this.getDataValue("credit_card_status");
          return value ? JSON.parse(value) : null;
        },
        set(value) {
          this.setDataValue(
            "credit_card_status",
            value ? JSON.stringify(value) : null
          );
        },
      },
      // jo biji loan hoy to teni detail avse aetle object rakhvo padse
      any_kind_of_loan: {
        type: Sequelize.STRING,
        get() {
          const value = this.getDataValue("any_kind_of_loan");
          return value ? JSON.parse(value) : null;
        },
        set(value) {
          this.setDataValue(
            "any_kind_of_loan",
            value ? JSON.stringify(value) : null
          );
        },
      },
      bank_name: { type: Sequelize.STRING },
      loan_type: { type: Sequelize.STRING },
      loan_amount: { type: Sequelize.DECIMAL(10, 2) },
      emi_amount: { type: Sequelize.DECIMAL(10, 2) },
      tenure: { type: Sequelize.INTEGER },
      property_address: { type: Sequelize.TEXT },
      satakhat_amount: { type: Sequelize.DECIMAL(10, 2) },
      loan_required: { type: Sequelize.STRING },
      sq_feet: { type: Sequelize.FLOAT },
      ref_1_name: { type: Sequelize.STRING },
      ref_1_phone: { type: Sequelize.STRING },
      address: { type: Sequelize.STRING },
      ref_2_name: { type: Sequelize.STRING },
      ref_2_phone: { type: Sequelize.STRING },
      asset_base: { type: Sequelize.STRING },
      applicant_type: {
        type: Sequelize.ENUM,
        values: ["applicant", "co_applicant"],
        defaultValue: "applicant",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Applicants");
  },
};
