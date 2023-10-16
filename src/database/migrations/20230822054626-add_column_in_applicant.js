"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Applicants", "loan_type", {
      type: Sequelize.ENUM,
      values: ["Secured", "Unsecured", "Government"],
      // defaultValue: "Secured",
    });
    await queryInterface.addColumn("Applicants", "father_name", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "mother_name", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "education", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "landline_no", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "no_of_year_in_business", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Applicants", "no_of_employees", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Applicants", "ref_2_address", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "other_income", {
      type: Sequelize.DECIMAL(10, 2),
    });
    await queryInterface.addColumn("Applicants", "car_year", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Applicants", "car_make", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "car_model", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Applicants", "car_insurance", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn("Applicants", "is_puc", {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn("Applicants", "is_commercial", {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn("Applicants", "satakhat", {
      type: Sequelize.DECIMAL(10, 2),
    });
    await queryInterface.addColumn("Applicants", "square_foot", {
      type: Sequelize.FLOAT,
    });
    await queryInterface.addColumn("Applicants", "is_subsidy", {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn("Applicants", "secured_type", {
      type: Sequelize.ENUM,
      values: ["Property", "FD", "Gold"],
    });
    await queryInterface.addColumn("Applicants", "gov_name", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "gov_village", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "gov_taluka", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "gov_district", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "gov_landArea", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "edu_country", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Applicants", "edu_university", {
      type: Sequelize.STRING,
    });

    await queryInterface.addColumn("Applicants", "edu_course", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Applicants", "loan_type", {
      type: Sequelize.STRING,
    });
    await queryInterface.removeColumn("Applicants", "father_name");
    await queryInterface.removeColumn("Applicants", "mother_name");
    await queryInterface.removeColumn("Applicants", "education");
    await queryInterface.removeColumn("Applicants", "landline_no");
    await queryInterface.removeColumn("Applicants", "no_of_year_in_business");
    await queryInterface.removeColumn("Applicants", "no_of_employees");
    await queryInterface.removeColumn("Applicants", "ref_2_address");
    await queryInterface.removeColumn("Applicants", "other_income");
    await queryInterface.removeColumn("Applicants", "car_year");
    await queryInterface.removeColumn("Applicants", "car_make");
    await queryInterface.removeColumn("Applicants", "car_model");
    await queryInterface.removeColumn("Applicants", "car_insurance");
    await queryInterface.removeColumn("Applicants", "is_puc");
    await queryInterface.removeColumn("Applicants", "is_commercial");
    await queryInterface.removeColumn("Applicants", "satakhat");
    await queryInterface.removeColumn("Applicants", "square_foot");
    await queryInterface.removeColumn("Applicants", "is_subsidy");
    await queryInterface.removeColumn("Applicants", "secured_type");
    await queryInterface.removeColumn("Applicants", "gov_name");
    await queryInterface.removeColumn("Applicants", "gov_village");
    await queryInterface.removeColumn("Applicants", "gov_taluka");
    await queryInterface.removeColumn("Applicants", "gov_district");
    await queryInterface.removeColumn("Applicants", "gov_landArea");
    await queryInterface.removeColumn("Applicants", "edu_country");
    await queryInterface.removeColumn("Applicants", "edu_university");
    await queryInterface.removeColumn("Applicants", "edu_course");
  },
};
