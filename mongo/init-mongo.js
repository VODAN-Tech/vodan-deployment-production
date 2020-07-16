db.getCollection('appConfigs').insert(
{
    "organization" : {
        "organizationId" : "vodan",
        "name" : "VODAN IN",
        "affiliations" : [],
        "description" : "Virus Outbreak DAta Network Implementation Network "
    },
    "authentication" : {
        "defaultRole" : "researcher",
        "internal" : {
            "registration" : {
                "enabled" : true
            }
        },
        "external" : {
            "services" : []
        }
    },
    "privacyAndSupport" : {
        "privacyUrl" : null,
        "termsOfServiceUrl" : null,
        "supportEmail" : null,
        "supportRepositoryName" : null,
        "supportRepositoryUrl" : null
    },
    "dashboard" : {
        "widgets" : null,
        "welcomeWarning" : null,
        "welcomeInfo" : null
    },
    "lookAndFeel" : {
        "appTitle" : "CRF Wizard",
        "appTitleShort" : "CRF Wizard",
        "customMenuLinks" : [],
        "loginInfo" : null
    },
    "registry" : {
        "enabled" : false,
        "token" : ""
    },
    "questionnaire" : {
        "levels" : {
            "enabled" : false
        },
        "feedback" : {
            "enabled" : false,
            "token" : "",
            "owner" : "",
            "repo" : ""
        },
        "questionnaireVisibility" : {
            "enabled" : false,
            "defaultValue" : "PublicQuestionnaire"
        },
        "summaryReport" : {
            "enabled" : false
        }
    },
    "createdAt" : ISODate("2020-06-12T14:01:20.577Z"),
    "updatedAt" : ISODate("2020-06-12T14:01:20.577Z"),
    "submission" : {
        "enabled" : true,
        "services" : [
            {
                "id" : "vodanSubmission",
                "name" : "FAIR Data Storage",
                "description" : "Store data in configured triple store and update related metadata in FAIR Data Point.",
                "props" : [],
                "supportedFormats" : [
                    {
                        "templateId" : "vodan:ecrf-rdf:0.1.0",
                        "formatUuid" : "9c7d572e-c273-4323-97a4-ab38f943c33a"
                    }
                ],
                "request" : {
                    "method" : "POST",
                    "url" : "http://submission_service:8080/submit",
                    "headers" : {
                        "Content-Type" : "text/turtle"
                    },
                    "multipart" : {
                        "enabled" : false,
                        "fileName" : ""
                    }
                }
            }
        ]
    },
    "template" : {
        "recommendedTemplateId" : "vodan:ecrf-rdf:0.1.0"
    }
})

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

db.getCollection('users').insertMany([
{
    "uuid" : "3ef96067-8e7a-479e-ae18-1be47f0e2a5d",
    "email" : "albert.einstein@example.com",
    "passwordHash" : "sha256|17|KOj9LS2y8IXDvo0DG8EW8A==|rduRLWmC7xAKKPAV0DHK2LQiaptQ4Xn3cWZgwuXmqMc=",
    "role" : "admin",
    "permissions" : [
        "UM_PERM",
        "ORG_PERM",
        "KM_PERM",
        "KM_UPGRADE_PERM",
        "KM_PUBLISH_PERM",
        "PM_READ_PERM",
        "PM_WRITE_PERM",
        "QTN_PERM",
        "DMP_PERM",
        "CFG_PERM",
        "SUBM_PERM",
        "TML_PERM"
    ],
    "active" : true,
    "createdAt" : ISODate("2020-06-12T14:01:20.282Z"),
    "updatedAt" : ISODate("2020-06-12T14:01:20.557Z"),
    "firstName" : "Albert",
    "lastName" : "Einstein",
    "affiliation" : null,
    "sources" : [
        "internal"
    ],
    "submissionProps" : [],
    "imageUrl" : null
},
{
    "uuid" : "30d48cf4-8c8a-496f-bafe-585bd238f798",
    "email" : "nikola.tesla@example.com",
    "passwordHash" : "sha256|17|Nwafc2BQvbcbYdV/2m/xVQ==|Mjgj3wrtK21qIoSmz8ODiro8Yr6Upc6V27whAobIz5k=",
    "role" : "dataSteward",
    "permissions" : [
        "KM_PERM",
        "KM_UPGRADE_PERM",
        "KM_PUBLISH_PERM",
        "PM_READ_PERM",
        "QTN_PERM",
        "DMP_PERM",
        "PM_WRITE_PERM",
        "SUBM_PERM"
    ],
    "active" : true,
    "createdAt" : ISODate("2020-06-12T14:01:20.295Z"),
    "updatedAt" : ISODate("2020-06-12T14:01:20.557Z"),
    "firstName" : "Nikola",
    "lastName" : "Tesla",
    "affiliation" : null,
    "sources" : [
        "internal"
    ],
    "submissionProps" : [],
    "imageUrl" : null
},
{
    "uuid" : "e1c58e52-0824-4526-8ebe-ec38eec67030",
    "email" : "isaac.newton@example.com",
    "passwordHash" : "sha256|17|lWASjBQx215ktNe7mjaWHg==|btUAw+oFeBVR9bDXmoVGLMSIrGOjbs+CxC6SR7FqouQ=",
    "role" : "researcher",
    "permissions" : [
        "PM_READ_PERM",
        "QTN_PERM",
        "DMP_PERM",
        "SUBM_PERM"
    ],
    "active" : true,
    "createdAt" : ISODate("2020-06-12T14:01:20.297Z"),
    "updatedAt" : ISODate("2020-06-12T14:01:20.557Z"),
    "firstName" : "Isaac",
    "lastName" : "Newton",
    "affiliation" : null,
    "sources" : [
        "internal"
    ],
    "submissionProps" : [],
    "imageUrl" : null
}
])

db.getCollection("packages").insertMany([
{
    "id" : "vodan:who-covid19-crf:0.1.0",
    "name" : "WHO COVID-19 Case Report Form",
    "organizationId" : "vodan",
    "kmId" : "who-covid19-crf",
    "version" : "0.1.0",
    "metamodelVersion" : 5,
    "description" : "WHO COVID-19 Case Report Form",
    "readme" : "## 0.1.0\n\n- Initial version created based on PDF: *COVID-19 CASE RECORD FORM RAPID version 8APR2020*",
    "license" : "nolicense",
    "previousPackageId" : null,
    "forkOfPackageId" : null,
    "mergeCheckpointPackageId" : null,
    "events" : [
        {
            "eventType" : "AddKnowledgeModelEvent",
            "uuid" : "b81e11eb-c078-4e90-91fc-e47ae3093946",
            "parentUuid" : "00000000-0000-0000-0000-000000000000",
            "entityUuid" : "44052a8a-4f99-40bf-99f9-eb2f92b3a25c",
            "name" : "COVID-19 Case Report Form"
        },
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "b2893ba8-0e61-42c8-b839-4e6e3225b8e8",
            "parentUuid" : "44052a8a-4f99-40bf-99f9-eb2f92b3a25c",
            "entityUuid" : "99c13e26-8bf5-4c99-af29-908b9f36cdb2",
            "title" : "Introduction",
            "text" : "This is adjusted version of *COVID-19 CASE RECORD FORM RAPID version 8APR2020*.\n\nIn response to the coronavirus disease 2019 (COVID-19) epidemic, the World Health Organization (WHO) is launching a global COVID-19 Anonymized Clinical Data Platform (the “COVID-19 Data Platform”) to enable State Parties to the International Health Regulations (IHR) (2005) to share with WHO anonymized clinical data and information related to patients with suspected or confirmed infections with the 2019-nCoV (collectively “Anonymized COVID-19 Data”). The Anonymized COVID-19 data received from State Parties through the COVID-19 Data Platform will remain property of the contributing State Party and will be used by WHO for purposes of verification, assessment and assistance pursuant to the IHR (2005), including to inform the public health and clinical operation response in connection with the COVID-19 outbreak. To help achieve such purposes, WHO will establish an independent Clinical Advisory Group to advise WHO on global reporting and analysis of the Anonymized COVID-19 Data. State Parties are invited to contribute Anonymized COVID-19 Data to the COVID-19 Data Platform. State Parties should please contact WHO at to obtain more information about, including log-in credentials for, the COVID-19 Platform. To preserve the security and confidentiality of the Anonymized COVID-19 Data, State Parties are respectfully requested to take all necessary measures to protect their respective log-in credentials and passwords to the COVID-19 Data Platform.\n\n### Design of this Case Report Form\n\nThe CRF is designed to collect data obtained through examination, interview and review of hospital notes. Data may be collected retrospectively if the patient is enrolled after the admission date. The data collection period is defined as the period from hospital admission to discharge, transfer, death, or continued hospitalization without possibility of continued data collection.\n\nThis CRF has 3 modules:  \n- **Module 1** to be completed on the first day of admission to the health centre.  \n- **Module 2** to be completed on first day of admission to ICU or high dependency unit. Module 2 should also be completed daily for as many days as resources allow. Continue to follow-up patients who transfer between wards.  \n- **Module 3** to be completed at discharge or death. \n\n### General Guidance\n\n- Participant Identification Numbers consist of a site code and a participant number. You can register on the data management system by contacting [COVID_ClinPlatform@who.int](mailto:COVID_ClinPlatform@who.int), and our data management team will contact you with instructions for data entry and will assign you a 5-digit site code at that time.\n- Please contact us at [COVID_ClinPlatform@who.int](mailto:COVID_ClinPlatform@who.int) if we can help with databases, if you have comments and to let us know that you are using the forms.\n"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a575372a-a9e6-4364-9cef-12bb60c0ee83",
            "parentUuid" : "99c13e26-8bf5-4c99-af29-908b9f36cdb2",
            "entityUuid" : "76f89d67-0395-48c5-9f43-2cab7447b646",
            "title" : "Participant ID",
            "text" : "*Participant Identification Numbers* consist of a **site code** and a **participant number**.\n\nYou can obtain a site code and register on the data management system by contacting [EDCARN@who.int](mailto:EDCARN@who.int).\n\nParticipant numbers should be assigned sequentially for each site beginning with `00001`. In the case of a single site recruiting participants on different wards, or where it is otherwise difficult to assign sequential numbers, you can assign numbers in blocks or incorporate alpha characters. E.g. *Ward X* will assign numbers from `00001` or `A0001` onwards and *Ward Y* will assign numbers from `50001` or `B0001` onwards.\n",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "012eaec5-c4af-48a2-8112-9b7416a97a21",
            "parentUuid" : "44052a8a-4f99-40bf-99f9-eb2f92b3a25c",
            "entityUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "title" : "Module 1: Admission",
            "text" : "Complete on admission/enrolment"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "73f5143f-25d0-43d0-b8c7-0b62b119a9a1",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "cdb4f65b-67e0-4293-affc-2ff0531a38af",
            "title" : "Facility name",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a5ba0311-49ef-42c4-878f-b6c437b418ac",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "0b04e2c8-f721-46d0-a352-a226e1cf3ff5",
            "title" : "Country",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "06df72b3-d10b-4404-aeb7-67349ff0486d",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "334a2d12-e88d-435c-8a46-2e0d56d74ab5",
            "title" : "Date of enrolment",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "DateQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "14f1258f-d0f9-43e2-9e6d-11ec963abee9",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "7a17a237-b7e5-4a89-ac6e-3d6339624aac",
            "title" : "Clinical Inclusion Criteria",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b0dc71b2-6609-4f5c-a689-065c72f5e3ad",
            "parentUuid" : "7a17a237-b7e5-4a89-ac6e-3d6339624aac",
            "entityUuid" : "71798b78-db9f-44c9-908a-9d744858f6a6",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ed2d010b-ce61-4aa5-909f-3d979227b0e1",
            "parentUuid" : "71798b78-db9f-44c9-908a-9d744858f6a6",
            "entityUuid" : "1b9ea5d7-dbf7-4f7b-9d53-f01f04bde980",
            "title" : "Proven or suspected infection with pathogen of Public Health Interest",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cf9370c8-0345-487e-8f17-390bf3b66067",
            "parentUuid" : "1b9ea5d7-dbf7-4f7b-9d53-f01f04bde980",
            "entityUuid" : "6acbfc3a-5141-48fa-9a57-7d333890dc7e",
            "label" : "Yes",
            "advice" : "Check one or more of following during this illness",
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "53e101d9-8383-44cf-bbbe-b62ba99ba8b5",
            "parentUuid" : "6acbfc3a-5141-48fa-9a57-7d333890dc7e",
            "entityUuid" : "332edf23-dba0-4ff9-ab5a-ae60d80665ca",
            "title" : "A history of self-reported feverishness or measured fever of ≥ 38°C",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1b364a09-bb5c-4bc2-acd3-636f4c1b6c46",
            "parentUuid" : "332edf23-dba0-4ff9-ab5a-ae60d80665ca",
            "entityUuid" : "d06db09f-1938-4b53-bf2b-7015df8209e6",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b9653d5a-6422-4199-85a9-20a5462227cf",
            "parentUuid" : "332edf23-dba0-4ff9-ab5a-ae60d80665ca",
            "entityUuid" : "9aa9cd67-8089-4a6e-9d1b-49ebb23f337d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3ef75a3f-417e-4624-af51-a78e5a9140aa",
            "parentUuid" : "6acbfc3a-5141-48fa-9a57-7d333890dc7e",
            "entityUuid" : "49d1018f-d0de-4ad9-8469-3f97df927b6b",
            "title" : "Cough",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ba78b151-6d16-43b5-a65f-09a3ae250e72",
            "parentUuid" : "49d1018f-d0de-4ad9-8469-3f97df927b6b",
            "entityUuid" : "31987be5-e8fa-4e56-a063-43ac161de9a6",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "010a23a2-0e14-448a-b753-ef77541cca9b",
            "parentUuid" : "49d1018f-d0de-4ad9-8469-3f97df927b6b",
            "entityUuid" : "107d50fb-c898-4cf1-8cc2-910d5f2c4e78",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "85ce9ff2-beba-4fae-bb38-f2b0cb1569cd",
            "parentUuid" : "6acbfc3a-5141-48fa-9a57-7d333890dc7e",
            "entityUuid" : "78e16e5d-9160-4523-88f7-e02678f993a6",
            "title" : "Dyspnoea (shortness of breath) OR Tachypnoea*",
            "text" : "*respiratory rate ≥50 breaths/min for <1 year; ≥40 for 1-4 years; ≥30 for 5-12 years; ≥20 for ≥13 years",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7cae4a2a-dfaa-4b30-ba24-0b36820ed064",
            "parentUuid" : "78e16e5d-9160-4523-88f7-e02678f993a6",
            "entityUuid" : "4aa9288b-4072-41cb-86f5-557e558aae7c",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6f770ed1-5834-4630-9496-cd0aea78d9df",
            "parentUuid" : "78e16e5d-9160-4523-88f7-e02678f993a6",
            "entityUuid" : "4622ea7a-a78f-4ddf-8e88-f14da27c2826",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0b6d8486-53d7-4465-a244-37db7ddfeb40",
            "parentUuid" : "6acbfc3a-5141-48fa-9a57-7d333890dc7e",
            "entityUuid" : "75578b46-09b5-4960-848d-d4196f7fdf19",
            "title" : "Clinical suspicion of ARI despite not meeting criteria above",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c6f2afab-b980-4217-97f7-43909aeca1e4",
            "parentUuid" : "75578b46-09b5-4960-848d-d4196f7fdf19",
            "entityUuid" : "e76433a5-0503-4749-a28b-de3e24b8b774",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8db12548-2fc0-4efd-948e-80166f827dab",
            "parentUuid" : "75578b46-09b5-4960-848d-d4196f7fdf19",
            "entityUuid" : "4b8704d4-af9b-4dc3-bc9e-63da1aca40f2",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3d8882d3-493c-40ca-a36c-4a38d9084c2f",
            "parentUuid" : "1b9ea5d7-dbf7-4f7b-9d53-f01f04bde980",
            "entityUuid" : "b182f83b-d560-4245-bead-a18a303723ab",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "aa67c90f-7416-4a8a-8e91-60a45d879843",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "06f1daef-dfc7-4441-811f-053c5cc40e91",
            "title" : "Demographics",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "79a6d7bc-29e5-42a1-831b-07cf47a311c5",
            "parentUuid" : "06f1daef-dfc7-4441-811f-053c5cc40e91",
            "entityUuid" : "c2751f5a-22c3-4ed1-8495-46ea85485621",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "9e27dab8-5415-477e-b3d0-bc2ceec7f538",
            "parentUuid" : "c2751f5a-22c3-4ed1-8495-46ea85485621",
            "entityUuid" : "85fdb489-fab4-48c9-872e-2e755cbe852d",
            "title" : "Sex at Birth",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6e53f8c5-d07e-40c4-a4b5-d5af60dad348",
            "parentUuid" : "85fdb489-fab4-48c9-872e-2e755cbe852d",
            "entityUuid" : "b9d403c8-322c-4e16-a885-3423a4154c8d",
            "label" : "Male",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f17e2b20-10ad-49fb-9ac8-151c44586bb3",
            "parentUuid" : "85fdb489-fab4-48c9-872e-2e755cbe852d",
            "entityUuid" : "33f4f528-dda2-4470-a5fa-2332021e1487",
            "label" : "Female",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "71896222-2697-487c-b17a-e78488634f0d",
            "parentUuid" : "85fdb489-fab4-48c9-872e-2e755cbe852d",
            "entityUuid" : "194cc2d7-ee20-4b84-abf0-7f1ce4fd4295",
            "label" : "Not specified",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "35c072cc-ea71-4d7e-8a22-de68c00aee61",
            "parentUuid" : "c2751f5a-22c3-4ed1-8495-46ea85485621",
            "entityUuid" : "71a0caa1-20fb-4291-8615-f92e04190139",
            "title" : "Is date of birth known?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e1ebe1f2-59fa-48c3-a4db-74eb3ceca03a",
            "parentUuid" : "71a0caa1-20fb-4291-8615-f92e04190139",
            "entityUuid" : "d015b68f-04e4-4eb1-bb1c-f5df868def3a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "55547432-7351-46e3-b9de-e9cc87e3b8a4",
            "parentUuid" : "d015b68f-04e4-4eb1-bb1c-f5df868def3a",
            "entityUuid" : "86d83261-4e21-4289-856f-bbc994f57d9b",
            "title" : "Date of birth",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "DateQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "72684fec-11bc-4c59-bab5-c953b2300cb0",
            "parentUuid" : "71a0caa1-20fb-4291-8615-f92e04190139",
            "entityUuid" : "94ca4571-69d8-4bb8-ba96-2d2c0318289a",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8cfdea5b-9313-4fbc-b6dc-23ed0beabdc8",
            "parentUuid" : "94ca4571-69d8-4bb8-ba96-2d2c0318289a",
            "entityUuid" : "5d751f54-1fa1-4bbd-b153-2eb69d7cde18",
            "title" : "Age",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "15a5c183-d1af-4096-8bd7-2f89f9c8ef33",
            "parentUuid" : "94ca4571-69d8-4bb8-ba96-2d2c0318289a",
            "entityUuid" : "ee1e2970-af5e-485e-b925-864a2b344b75",
            "title" : "Units of age",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cf0a6067-a535-4321-9fc0-129b0c8ad6a1",
            "parentUuid" : "ee1e2970-af5e-485e-b925-864a2b344b75",
            "entityUuid" : "69c71d58-5483-4a36-b5eb-b4eb57a52631",
            "label" : "Years",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e0b013e5-a56b-4fcb-8d96-374c5fd3ca25",
            "parentUuid" : "ee1e2970-af5e-485e-b925-864a2b344b75",
            "entityUuid" : "be7fb12a-d876-44fb-8aea-7d5b54a92b36",
            "label" : "Months",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "1a78a7c5-9a2f-4291-a764-c27dbf85ab3c",
            "parentUuid" : "c2751f5a-22c3-4ed1-8495-46ea85485621",
            "entityUuid" : "bf4061f8-e8c9-4f42-82d6-2b6249b9b0df",
            "title" : "Healthcare Worker?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "fa22d7fc-48aa-4660-ab87-403716d59c02",
            "parentUuid" : "bf4061f8-e8c9-4f42-82d6-2b6249b9b0df",
            "entityUuid" : "72bbf5a1-f0eb-4a24-b52a-0dcc4b620f87",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "885e1e6c-242c-4ae4-9ebf-781ba28850ef",
            "parentUuid" : "bf4061f8-e8c9-4f42-82d6-2b6249b9b0df",
            "entityUuid" : "27aca994-d6a4-448b-8ea3-d3d89f5918ed",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "19b33a33-3a7b-4539-8532-51ee611e311e",
            "parentUuid" : "bf4061f8-e8c9-4f42-82d6-2b6249b9b0df",
            "entityUuid" : "cd315b94-871a-42c6-9e46-75b9918cba17",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fe760006-2c86-467b-8eb0-80407b6662f2",
            "parentUuid" : "c2751f5a-22c3-4ed1-8495-46ea85485621",
            "entityUuid" : "5835c0df-d0c3-4349-ba79-487407a385f9",
            "title" : "Laboratory Worker?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ceb46673-c62f-4350-a0c2-a04e38510fa4",
            "parentUuid" : "5835c0df-d0c3-4349-ba79-487407a385f9",
            "entityUuid" : "4f918b1a-6098-4ae8-ad0b-fa1b7f3932a9",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "39ddf295-7599-444e-961c-2cbb079ee04e",
            "parentUuid" : "5835c0df-d0c3-4349-ba79-487407a385f9",
            "entityUuid" : "d1f6f009-107a-4c9c-8c2d-7bdff7475348",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "be84d75f-928f-4d6f-99b8-410290b22b54",
            "parentUuid" : "5835c0df-d0c3-4349-ba79-487407a385f9",
            "entityUuid" : "be35ad50-6894-4359-96cb-2448c9e44f2b",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "bf181309-3c13-4f99-a3ed-affc9689c223",
            "parentUuid" : "c2751f5a-22c3-4ed1-8495-46ea85485621",
            "entityUuid" : "d345347d-59eb-4143-97d0-76800b59a830",
            "title" : "Pregnant?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4d55c699-712d-4951-9316-0c8f2359e229",
            "parentUuid" : "d345347d-59eb-4143-97d0-76800b59a830",
            "entityUuid" : "508db15a-7fec-4bfe-8b53-354339200e2d",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "99d629ce-3fb2-40df-b5d7-983ba10b3cac",
            "parentUuid" : "508db15a-7fec-4bfe-8b53-354339200e2d",
            "entityUuid" : "748efff1-5ded-4cb3-b8b3-c8f2bc0cd584",
            "title" : "Gestational weeks assessment",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "132657d2-af7c-458b-ab95-42d50d7048de",
            "parentUuid" : "d345347d-59eb-4143-97d0-76800b59a830",
            "entityUuid" : "3167c65c-e572-45be-976d-3f88db770b77",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6969a51c-5d0a-4f32-b14e-19f1d262e7cf",
            "parentUuid" : "d345347d-59eb-4143-97d0-76800b59a830",
            "entityUuid" : "c7e30555-0394-4c4f-9f13-b7674c385baa",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bba1b54a-7acf-4c3c-b133-94b8803862fc",
            "parentUuid" : "d345347d-59eb-4143-97d0-76800b59a830",
            "entityUuid" : "82e72d19-7da9-44bd-a791-03b461807150",
            "label" : "Not Applicable (N/A)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e8ba43f6-0bd5-4fa9-be47-b8f956175683",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd",
            "title" : "Date of onset and admission vital signs",
            "text" : "Fill first available data at presentation/admission",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1284ad43-aaeb-48f6-bf86-edca46947471",
            "parentUuid" : "5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd",
            "entityUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d65839ae-6f26-4b42-92dd-655c07e16e17",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "16672294-5061-4a6c-9490-f12df00ec7e7",
            "title" : "Symptom onset",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "DateQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3cf7ef0b-e392-4942-be42-faa84ee9ea5e",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "cebc9c1c-d449-4106-9c74-33aa63b55b1a",
            "title" : "Admission date at this facility",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "DateQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "714dd716-a2b5-48fa-a733-b0d850cc3c5a",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "58d588ac-e95c-49a0-a715-9d734e752f55",
            "title" : "Temperature [°C]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cb0244f5-0805-4af3-9aec-971b406bca82",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "0744ec5d-ac46-42ea-95db-3e1d694bcc74",
            "title" : "Heart rate [beats/min]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ca8d0de6-81d9-44b5-b0e8-b06b10b17cb3",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "e5330559-5c01-43b5-a809-f7ce8cfd73d4",
            "title" : "Respiratory rate [breaths/min]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "df80fbc5-b810-4c7d-978a-3a246ae41b88",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "e0d2fba0-0ebe-475d-a7f3-400f71ab232b",
            "title" : "Blood preassure (systolic) [mmHg]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cd88cf87-954c-40a4-9f99-8cec871594e3",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "c202b0c8-2d5d-4632-a90b-bccb2e13a85b",
            "title" : "Blood preassure (diastolic) [mmHg]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8ee2d62a-9605-4110-a7f4-b9b1e0a4f8bf",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "efc64449-7704-4a2f-b77d-fa183fe38083",
            "title" : "Severe dehydration",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bdaa714e-d3be-4271-bd7c-aaa74c1fd832",
            "parentUuid" : "efc64449-7704-4a2f-b77d-fa183fe38083",
            "entityUuid" : "0f3a3c4f-cfcb-4197-9274-4dabee47cb98",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "07fbae64-2d6c-4fc6-b56f-1eb325e514c2",
            "parentUuid" : "efc64449-7704-4a2f-b77d-fa183fe38083",
            "entityUuid" : "9fa0feca-6620-4ed0-8114-eb3c20fd378d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6c3a6d31-5db5-4f34-aac7-b1015458aac9",
            "parentUuid" : "efc64449-7704-4a2f-b77d-fa183fe38083",
            "entityUuid" : "139e0c21-ee23-4909-b5d1-362aabfe8769",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d7164571-91a0-407d-b512-1a7a9023121a",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "200abd9f-ca35-4351-b319-48d2d35b9f3c",
            "title" : "Sternal capillary refill time >2seconds",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "572ced20-f47b-4821-b80a-543a571f3cfd",
            "parentUuid" : "200abd9f-ca35-4351-b319-48d2d35b9f3c",
            "entityUuid" : "3df7fa13-879c-44aa-a334-93c370f70013",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7fe7bc9d-2129-4df7-9e9e-41423441f216",
            "parentUuid" : "200abd9f-ca35-4351-b319-48d2d35b9f3c",
            "entityUuid" : "feb26217-b49a-4754-9400-80cea285480d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ad8f6367-b2e7-4741-8449-e5f4ea7af4be",
            "parentUuid" : "200abd9f-ca35-4351-b319-48d2d35b9f3c",
            "entityUuid" : "c2c0be67-2729-49f0-854c-2275e0397c1f",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "45be6c48-21aa-4e61-b796-b9b2351800c0",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "e398c054-b607-49b0-ba77-0bcdbbace0eb",
            "title" : "Oxygen saturation (value) [%]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e44c117e-d57b-4e80-8c1c-25f56dd9dab1",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "b429e291-f268-4125-a1ef-04c5c272107b",
            "title" : "Oxygen saturation (condition)",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "175de3a0-ae8a-4425-bcb4-20056f573495",
            "parentUuid" : "b429e291-f268-4125-a1ef-04c5c272107b",
            "entityUuid" : "db9d0176-910a-44a4-bf6e-c12db004c578",
            "label" : "Room air",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "264166ce-16c4-4f2a-8ea4-ede7bc7ac4db",
            "parentUuid" : "b429e291-f268-4125-a1ef-04c5c272107b",
            "entityUuid" : "8b1aea52-f1c9-4fe2-bae9-1b37357e88d2",
            "label" : "Oxygen therapy",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "14fb48b8-14fc-4205-9896-041254dba9c2",
            "parentUuid" : "b429e291-f268-4125-a1ef-04c5c272107b",
            "entityUuid" : "a70f6543-0362-4973-8707-18728a56017f",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "bf16d564-f47b-48ca-bcb5-58563ab30e9a",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "9e5e4f5e-75be-40e9-a4df-31e173cfc65d",
            "title" : "AVPU scale",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a6431dde-6cee-4f6f-9cf1-cb640653fca6",
            "parentUuid" : "9e5e4f5e-75be-40e9-a4df-31e173cfc65d",
            "entityUuid" : "c4e3bce3-7ce4-4b6c-a970-637b86456e96",
            "label" : "A (alert)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "dc038f4d-a46a-40cc-99b5-6928b1b77991",
            "parentUuid" : "9e5e4f5e-75be-40e9-a4df-31e173cfc65d",
            "entityUuid" : "a7c6d958-2a46-4dae-9ec3-3321ff4e1fce",
            "label" : "V (verbal)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bb5979fa-98c4-4c49-aeed-ddbd35019bbb",
            "parentUuid" : "9e5e4f5e-75be-40e9-a4df-31e173cfc65d",
            "entityUuid" : "66e3169c-335f-4ca6-b045-cd48a2af378a",
            "label" : "P (pain)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f4657f46-6c14-4138-8ce8-b2820c189d16",
            "parentUuid" : "9e5e4f5e-75be-40e9-a4df-31e173cfc65d",
            "entityUuid" : "f3adf425-e2a0-4c46-8fd4-94e02c4c889e",
            "label" : "U (unresponsive)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f906ba5e-3fa8-40f8-811e-99cf2f357b85",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "ed4c987c-04ac-4301-bcf7-7a9a3f4aa664",
            "title" : "Glasgow Coma Score (GCS/15)",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3fc4b204-2310-4912-b566-989442f1aa1a",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "01f45192-1c2a-470a-af6c-77d6a926aee4",
            "title" : "Malnutrition",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c1b4f939-df89-40b6-b49d-c96ed02c5930",
            "parentUuid" : "01f45192-1c2a-470a-af6c-77d6a926aee4",
            "entityUuid" : "9b32884e-7057-449c-b9dc-70e2bde3948f",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "439cd720-ebf5-4ba7-a458-087be95d9b15",
            "parentUuid" : "01f45192-1c2a-470a-af6c-77d6a926aee4",
            "entityUuid" : "d32d0d28-a0ce-451a-830d-5cd414bfd963",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c8f49d6e-86f1-4a20-9d8b-1c411d61735a",
            "parentUuid" : "01f45192-1c2a-470a-af6c-77d6a926aee4",
            "entityUuid" : "03d40ec1-3384-4d77-929f-820f4499cb6d",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "7a593a31-c4bc-4b28-8b6d-c9aea63a4b97",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "e5cbc24e-6614-44a3-b5a6-feb83b874623",
            "title" : "Mid-upper arm circumference [mm]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "866b2b1b-b6d0-47c5-b7b5-696fddad93b0",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "55fd2449-9cfd-4d0c-81a9-5935bffd3e3a",
            "title" : "Height [cm]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d0ab5e7f-7005-4668-ab56-d3ec6335d0f8",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "d01bc5be-5f11-4385-a9be-cc78a660f333",
            "title" : "Weight [kg]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2e7d21c4-bc35-413b-ac57-ea8f6c15dcd2",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "b3b7fd3f-77db-490e-b3a6-0c450974f89d",
            "title" : "Co-morbidities",
            "text" : "Fill co-morbidities existing prior to admission",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5b3b4687-227c-40e3-a54c-5c782376c91c",
            "parentUuid" : "b3b7fd3f-77db-490e-b3a6-0c450974f89d",
            "entityUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c92074a8-0fe9-411e-9d03-23272a05c708",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "90832de0-f7b1-4dce-b2d9-4d1234c308db",
            "title" : "Chronic cardiac disease",
            "text" : "(not hypertension)",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "82078dee-d0d0-4a2a-bc1b-f241e37a60df",
            "parentUuid" : "90832de0-f7b1-4dce-b2d9-4d1234c308db",
            "entityUuid" : "a3aa7cf7-4c2f-4643-97a2-1674d18cd082",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2f98d214-65ae-44a1-80dc-0a620ef6c62b",
            "parentUuid" : "90832de0-f7b1-4dce-b2d9-4d1234c308db",
            "entityUuid" : "c8bce58c-e7f2-4eef-932a-e891be4d502f",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5ee17c44-3e1e-45d5-8e95-6dc4fa78205f",
            "parentUuid" : "90832de0-f7b1-4dce-b2d9-4d1234c308db",
            "entityUuid" : "d286de28-e41a-458e-b1c4-0e398ea27577",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c4e8d2a1-6ad7-44bb-be59-ae06ff024c20",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "45b34f4e-6f9e-4c7b-8bac-67c021f38c74",
            "title" : "Hypertension",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3a6a1b02-683c-4877-b0c8-0c474ecc0b16",
            "parentUuid" : "45b34f4e-6f9e-4c7b-8bac-67c021f38c74",
            "entityUuid" : "01234067-790a-47fc-bd67-e2c476f6ecb5",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6afef095-aa42-492e-a5ca-4d0c310d7b8a",
            "parentUuid" : "45b34f4e-6f9e-4c7b-8bac-67c021f38c74",
            "entityUuid" : "8e1501b1-62ca-46e9-8250-6feead7001c6",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0b53ab27-83f7-409f-9caa-4d306d9fb248",
            "parentUuid" : "45b34f4e-6f9e-4c7b-8bac-67c021f38c74",
            "entityUuid" : "a7e192a0-1133-4d53-b3e0-3154420fb693",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "022d7288-266f-4a98-853e-19aeff02db47",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "a6034c61-4413-48b9-8907-7d0a2fe442db",
            "title" : "Chronic pulmonary disease",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "af432996-c3a3-4f7c-ae5f-f6f235e74ca4",
            "parentUuid" : "a6034c61-4413-48b9-8907-7d0a2fe442db",
            "entityUuid" : "e402bdf3-cd49-464b-8f34-b94d728074c2",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bb61616f-8811-4008-883f-77f54f42310d",
            "parentUuid" : "a6034c61-4413-48b9-8907-7d0a2fe442db",
            "entityUuid" : "67238929-755c-4ad0-8f3f-282d04051e89",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e4c61258-eef5-4f74-babf-3841d9de816b",
            "parentUuid" : "a6034c61-4413-48b9-8907-7d0a2fe442db",
            "entityUuid" : "6a6703d7-123a-4029-8d76-a1942cd7a2b9",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "410d7701-e518-47d4-ba5d-1f6614680146",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "89d344a0-5c87-45ed-8b04-6f6e2f4f1541",
            "title" : "Asthma",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c9e6ada0-5f8b-4e18-bcd6-d18ad94c60af",
            "parentUuid" : "89d344a0-5c87-45ed-8b04-6f6e2f4f1541",
            "entityUuid" : "1ba5a177-7b0d-4f00-989a-a0e26bb30b45",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e1035a75-1858-4213-8ad7-d5dc36e7b477",
            "parentUuid" : "89d344a0-5c87-45ed-8b04-6f6e2f4f1541",
            "entityUuid" : "646244d1-da69-429f-a436-feb99ddc4932",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "821603e1-8ff3-4793-86bc-331c7b1ce870",
            "parentUuid" : "89d344a0-5c87-45ed-8b04-6f6e2f4f1541",
            "entityUuid" : "bded8755-baa0-4ffd-b356-af642786c5e3",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "938aa085-303d-49e3-80bb-a134eced4177",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "91840e25-395f-4667-b12b-b4328985ce4a",
            "title" : "Chronic kidney disease",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cf645502-ccd1-4aaa-af3a-f039cb85a042",
            "parentUuid" : "91840e25-395f-4667-b12b-b4328985ce4a",
            "entityUuid" : "b2827b20-99ae-4e6a-9a20-f535f785c2b9",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "23a7f5b9-f55b-403f-86b7-487891f02fe3",
            "parentUuid" : "91840e25-395f-4667-b12b-b4328985ce4a",
            "entityUuid" : "4591c9e4-6326-44c3-8041-49e7c05dea7b",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "aea6373c-7085-407d-bdf2-65e3e13a0858",
            "parentUuid" : "91840e25-395f-4667-b12b-b4328985ce4a",
            "entityUuid" : "a15cd180-93f9-4b94-a232-62a41f84a1b5",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5a716f18-86ea-48da-8984-5fe9e7b598a9",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "8af3da09-5ff8-47a9-9893-58deb8024736",
            "title" : "Chronic liver disease",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0a4daebe-ae09-4277-bb20-74d6188648aa",
            "parentUuid" : "8af3da09-5ff8-47a9-9893-58deb8024736",
            "entityUuid" : "d6778720-0988-4342-b4fa-36b01f537069",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1d3eec59-26be-4629-bc1e-09357abcdfe3",
            "parentUuid" : "8af3da09-5ff8-47a9-9893-58deb8024736",
            "entityUuid" : "e7c9a47b-e0d5-41cf-a84b-1ece0bd2a178",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "91fddcdc-ff94-4297-882f-afdc276085e6",
            "parentUuid" : "8af3da09-5ff8-47a9-9893-58deb8024736",
            "entityUuid" : "269b0647-6989-46bc-9ee5-2134a7648ab8",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d25b1cc0-0241-470d-852f-c2e4d64b9aba",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "08d835b2-0ccb-44f8-ac6c-5479fe5f973c",
            "title" : "Chronic neurological disorder",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b98f9074-eb73-4d16-85bd-fe6a183e9cf7",
            "parentUuid" : "08d835b2-0ccb-44f8-ac6c-5479fe5f973c",
            "entityUuid" : "a6e308c4-9c93-4757-80d6-c3b82d81858f",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4835a4cc-381e-4427-9ffc-fd7d29675e61",
            "parentUuid" : "08d835b2-0ccb-44f8-ac6c-5479fe5f973c",
            "entityUuid" : "f06a5ae0-00d5-4ec1-b098-431343acfb83",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bcdc853d-da5b-44fd-8d6c-9d0b1f9b587e",
            "parentUuid" : "08d835b2-0ccb-44f8-ac6c-5479fe5f973c",
            "entityUuid" : "cc0eb420-12d9-4b1f-a03d-a9c00ea25578",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "aca6d722-9b3b-4c3a-84c5-d30a311bcea3",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "1e48575c-57b4-4e98-ad5f-183fd78487ae",
            "title" : "HIV",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "19fc2790-e6ec-47eb-bdda-5ed03075c6c0",
            "parentUuid" : "1e48575c-57b4-4e98-ad5f-183fd78487ae",
            "entityUuid" : "7594ef7d-b07c-4522-ad87-a1ef1b50015c",
            "label" : "Yes - on ART",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e94b81ce-11da-4817-8439-8585a97c1ac6",
            "parentUuid" : "1e48575c-57b4-4e98-ad5f-183fd78487ae",
            "entityUuid" : "db7b3f3a-314b-4561-b447-76397391c149",
            "label" : "Yes - not on ART",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "94a637f5-f948-463b-8ef0-5ee125b70a22",
            "parentUuid" : "1e48575c-57b4-4e98-ad5f-183fd78487ae",
            "entityUuid" : "f41bc1f4-422d-4472-bbe7-1a0b242be100",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "350158e6-4d55-4343-8349-d305d0eaf288",
            "parentUuid" : "1e48575c-57b4-4e98-ad5f-183fd78487ae",
            "entityUuid" : "aa13ce4e-4307-4354-8682-b0ace38a4f1f",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "92ca7943-9287-4074-bb45-0834b467339f",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "cb1c180b-cd48-4385-9e27-06583ac0fc1b",
            "title" : "Diabetes",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "25450b00-6670-4fff-b3e4-3da347c2936a",
            "parentUuid" : "cb1c180b-cd48-4385-9e27-06583ac0fc1b",
            "entityUuid" : "8617d2c4-143f-4821-86a1-1d0977677e96",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4106a7c1-affb-4789-a3fd-3d3cf6725c84",
            "parentUuid" : "cb1c180b-cd48-4385-9e27-06583ac0fc1b",
            "entityUuid" : "ad49120e-b81b-4813-b876-ed0bb77005a8",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4205730b-d367-44d7-968e-e07251d682ef",
            "parentUuid" : "cb1c180b-cd48-4385-9e27-06583ac0fc1b",
            "entityUuid" : "72fb506a-aecf-4d72-9976-acd56fa8165f",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f116e12b-9048-4b8b-b2df-3f1b879a248f",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "1887f4a6-4493-4d01-a2a1-957554056647",
            "title" : "Current smoking",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cf8d4d73-1505-4963-947d-b755f33e3ba5",
            "parentUuid" : "1887f4a6-4493-4d01-a2a1-957554056647",
            "entityUuid" : "379d869b-38ba-40c2-930c-3016472c9b87",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "61166053-7ade-484c-857d-adbd47f452a2",
            "parentUuid" : "1887f4a6-4493-4d01-a2a1-957554056647",
            "entityUuid" : "6254c8ef-2f7c-47a4-ac3f-0d4cb9fe1a4b",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7c5a093e-dc7b-4d70-8579-6d2192e52a4b",
            "parentUuid" : "1887f4a6-4493-4d01-a2a1-957554056647",
            "entityUuid" : "1a0425be-91ef-4dfa-825d-e711c159eb74",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "acbaeb9c-b776-4db8-8ddd-f1c42a801551",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "0a619660-760b-433f-9e25-9f76e39fd984",
            "title" : "Tuberculosis",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9a3bd604-15bb-4804-9b58-39ad49541c33",
            "parentUuid" : "0a619660-760b-433f-9e25-9f76e39fd984",
            "entityUuid" : "1b1ce0ef-bd02-4f66-84c1-892384de4b3a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "afddf595-d2e8-45a6-b9e0-472856c8b70e",
            "parentUuid" : "0a619660-760b-433f-9e25-9f76e39fd984",
            "entityUuid" : "af883e01-b2b6-4039-b8d8-37b1371ea788",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "507f0c58-241e-42f9-8c2c-a64f6bc6202a",
            "parentUuid" : "0a619660-760b-433f-9e25-9f76e39fd984",
            "entityUuid" : "3b7cb62e-18ca-447e-97c6-b326739bf0d9",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "29c570ba-7ad2-44ff-9a80-8a2418c99577",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "16eb9398-cf6d-4341-9435-828e4acfa25a",
            "title" : "Asplenia",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cd008189-3d45-44be-8373-73aa514dc4ae",
            "parentUuid" : "16eb9398-cf6d-4341-9435-828e4acfa25a",
            "entityUuid" : "22fc76e8-0000-48f5-85e9-e1e0b820d745",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2a3cf4fd-f177-4e29-8c3d-9fb7d8838199",
            "parentUuid" : "16eb9398-cf6d-4341-9435-828e4acfa25a",
            "entityUuid" : "6de0110b-d0e6-4843-b28f-e5668e542541",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "85fd17e7-d07e-49e7-a681-9f8e32af8317",
            "parentUuid" : "16eb9398-cf6d-4341-9435-828e4acfa25a",
            "entityUuid" : "9bf96c41-fd20-4181-a1d7-a438dbb9a7da",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "eb336962-e9e0-4eed-b421-9e20c6911c55",
            "parentUuid" : "e0e2d965-3d36-4a1d-8d8e-08a96676045c",
            "entityUuid" : "4dc4fab5-7e5b-4d32-a255-02eabe35c353",
            "title" : "Other",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a34851a0-2f50-44e5-a067-152fe83fd147",
            "parentUuid" : "4dc4fab5-7e5b-4d32-a255-02eabe35c353",
            "entityUuid" : "1b07bdfb-6f40-469b-a83f-932b93323918",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9f2d2ff6-d2f6-40db-b941-8bba1ac8fa7b",
            "parentUuid" : "1b07bdfb-6f40-469b-a83f-932b93323918",
            "entityUuid" : "4a6aeff4-7244-412a-b6ad-b0e350b0d7dc",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0bd463ce-3803-455b-a56b-edd80e67baac",
            "parentUuid" : "4dc4fab5-7e5b-4d32-a255-02eabe35c353",
            "entityUuid" : "03343ad1-052d-4e56-a0bd-7a51d7924348",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3119edab-1a88-4a22-8585-3ce419174dbb",
            "parentUuid" : "4dc4fab5-7e5b-4d32-a255-02eabe35c353",
            "entityUuid" : "fc0c44a0-1886-4f2d-8f6f-26a9f078d260",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "71bbb461-82ba-45c9-bbf0-d2b8567cf94c",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "0ae9f3eb-4e3e-4a81-b0f6-0988e61b0900",
            "title" : "Pre-admission & chronic medication",
            "text" : "Were any of the following taken within 14 days of admission?",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e80f1055-a57c-4e55-ba77-38f77b769ec0",
            "parentUuid" : "0ae9f3eb-4e3e-4a81-b0f6-0988e61b0900",
            "entityUuid" : "e238737e-f2c8-4f04-94f6-fe017cabf99d",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2d6f7ea9-143e-4373-8769-371af1a46273",
            "parentUuid" : "e238737e-f2c8-4f04-94f6-fe017cabf99d",
            "entityUuid" : "7f65741e-1a04-4671-bf00-42955d05f640",
            "title" : "Angiotensin converting enzyme inhibitors (ACE inhibitors)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d0b1cf96-d0c1-439d-a705-05c6fa0b4edb",
            "parentUuid" : "7f65741e-1a04-4671-bf00-42955d05f640",
            "entityUuid" : "7dc46104-c828-4e7f-aec8-0e63e5d86d7d",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a32a3535-aea9-480f-9ec7-e05b8c8c7d7d",
            "parentUuid" : "7f65741e-1a04-4671-bf00-42955d05f640",
            "entityUuid" : "38f012b9-c3d6-4e97-b672-b2bc6f43d39a",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8f7d5cc4-8449-4186-a8a5-c1bf1e91238a",
            "parentUuid" : "7f65741e-1a04-4671-bf00-42955d05f640",
            "entityUuid" : "04a76496-1c89-4af4-8338-4aec268c0fc8",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "148469f6-cda4-4551-a559-7c12c0344044",
            "parentUuid" : "e238737e-f2c8-4f04-94f6-fe017cabf99d",
            "entityUuid" : "fd5c595c-ff3c-4408-b55c-7a759d76363e",
            "title" : "Angiotensin II receptor blockers (ARBs)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4410ba73-6af6-4574-9ece-ad22b35ff6a2",
            "parentUuid" : "fd5c595c-ff3c-4408-b55c-7a759d76363e",
            "entityUuid" : "1c96900e-cf6d-4260-81d9-171b4b552b07",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "98c05c54-aa53-4195-8746-9b1dfccbedb7",
            "parentUuid" : "fd5c595c-ff3c-4408-b55c-7a759d76363e",
            "entityUuid" : "d319165e-40cf-4a0b-a409-158bbb080e12",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c3458cb7-309e-4878-b994-94567207be54",
            "parentUuid" : "fd5c595c-ff3c-4408-b55c-7a759d76363e",
            "entityUuid" : "4b8a0f95-1772-4067-b537-00904133d521",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "449c12e8-b021-4228-a98b-14c61291d15a",
            "parentUuid" : "e238737e-f2c8-4f04-94f6-fe017cabf99d",
            "entityUuid" : "b27db3b4-8c6f-4fae-a24f-9f68b2680b87",
            "title" : "Non-steroidal anti-inflammatory (NSAID)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "494c0098-7428-475b-8e56-1fa54819ff98",
            "parentUuid" : "b27db3b4-8c6f-4fae-a24f-9f68b2680b87",
            "entityUuid" : "8d59d2cd-95a9-4c49-ad3b-e4d5bf2a0068",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ae576ead-123c-4ca8-9128-83fe86615bf3",
            "parentUuid" : "b27db3b4-8c6f-4fae-a24f-9f68b2680b87",
            "entityUuid" : "af9660c4-8a67-4a70-8462-85fbbdae589d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9d6a5d89-4cba-4589-9b28-0d799e2b2e77",
            "parentUuid" : "b27db3b4-8c6f-4fae-a24f-9f68b2680b87",
            "entityUuid" : "e7d405c1-4721-4d85-8d63-18ffa2fe72e9",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0dafb0e4-f0e9-4564-b506-c149c1ae8030",
            "parentUuid" : "e238737e-f2c8-4f04-94f6-fe017cabf99d",
            "entityUuid" : "f138dfc3-a90c-42fa-997d-e10381d89de6",
            "title" : "Antiviral?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "23287254-2a37-453e-a9ab-1650de894204",
            "parentUuid" : "f138dfc3-a90c-42fa-997d-e10381d89de6",
            "entityUuid" : "438d150b-6aaf-4112-bae8-54539d82821e",
            "label" : "Chloroquine / Hydroxychloroquine",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d5721fe7-bbd0-494d-8da7-1ff642065eb7",
            "parentUuid" : "f138dfc3-a90c-42fa-997d-e10381d89de6",
            "entityUuid" : "a74bc497-09c4-4806-a49b-ba7fc73d488b",
            "label" : "Azithromycin",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6e95cdb4-dd07-4eca-99d9-fc26384f5cf5",
            "parentUuid" : "f138dfc3-a90c-42fa-997d-e10381d89de6",
            "entityUuid" : "e2dad33c-fe55-4957-93e1-00e45a83c03e",
            "label" : "Kaletra (lopinavir-ritonavir)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "769d8d8d-f0ed-4ffe-bb15-f6d28e16dc88",
            "parentUuid" : "f138dfc3-a90c-42fa-997d-e10381d89de6",
            "entityUuid" : "26ca1042-084c-4d94-a43b-b6bc46a14b9e",
            "label" : "Favipiravir",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "458d6564-3cc6-4cb4-859b-76f9acf12dd2",
            "parentUuid" : "f138dfc3-a90c-42fa-997d-e10381d89de6",
            "entityUuid" : "5c072bc9-bbab-406d-905b-10989a5d6715",
            "label" : "Other",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1500564d-3e28-4480-90f4-01ae7d312178",
            "parentUuid" : "5c072bc9-bbab-406d-905b-10989a5d6715",
            "entityUuid" : "dedb1a08-0a88-444f-8afd-bbcc9b03e25e",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4f7ca606-7673-4dec-9f2e-d5a83989b768",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "3cd993ff-eaa9-4d76-9497-efd085345e09",
            "title" : "Sings and symptoms on admission",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "eb80acc9-6c20-4e68-93fd-459c2ed05321",
            "parentUuid" : "3cd993ff-eaa9-4d76-9497-efd085345e09",
            "entityUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "829b17f8-a4f5-4375-bd06-219aeaeb0e29",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "54cc2e1e-0e7b-4828-a8a8-169570f19e1c",
            "title" : "History of fever",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0187ee34-05d1-406b-8d35-c2dc921f1e63",
            "parentUuid" : "54cc2e1e-0e7b-4828-a8a8-169570f19e1c",
            "entityUuid" : "adce433a-7a0f-4814-9f60-aa6e4e2640e9",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "753911c3-5ad3-4df4-b468-8671038cb214",
            "parentUuid" : "54cc2e1e-0e7b-4828-a8a8-169570f19e1c",
            "entityUuid" : "7817c0a3-c8d3-4217-a36b-5b4233b5bd53",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8a62b427-1330-4f36-a215-807335b0f94f",
            "parentUuid" : "54cc2e1e-0e7b-4828-a8a8-169570f19e1c",
            "entityUuid" : "f0714000-fe4e-4d36-903c-20553dcab836",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7a1d2896-0ab0-429f-8ad4-ac85fa663439",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "201240fe-2439-40e2-bf41-0030a7dab076",
            "title" : "Cough",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "480a6c3d-c8c9-4d81-838e-bc300625fd9e",
            "parentUuid" : "201240fe-2439-40e2-bf41-0030a7dab076",
            "entityUuid" : "e63f444f-3e22-44ed-98e4-3a23cde702ad",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4ede799b-1fe1-49da-9b0f-ee4bcd7d1de2",
            "parentUuid" : "e63f444f-3e22-44ed-98e4-3a23cde702ad",
            "entityUuid" : "a09238fd-7fda-480b-91f2-9b67a482836a",
            "title" : "Cough with sputum production",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "254e6669-78b1-4ed2-99a8-b069694d6643",
            "parentUuid" : "a09238fd-7fda-480b-91f2-9b67a482836a",
            "entityUuid" : "50a41b35-d89b-45d6-b558-b887b4598f75",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f7c67a43-8bbd-4e30-89e7-22790b4abd27",
            "parentUuid" : "a09238fd-7fda-480b-91f2-9b67a482836a",
            "entityUuid" : "66c6f659-9bfe-4834-a32c-083589f3ad4c",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c8798199-dd1e-4462-b914-819ecca2a5b8",
            "parentUuid" : "a09238fd-7fda-480b-91f2-9b67a482836a",
            "entityUuid" : "39a115ac-a64e-47cd-8a90-032c0d46cb1c",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "504a2209-3d4e-447f-b483-800c139c4f2a",
            "parentUuid" : "e63f444f-3e22-44ed-98e4-3a23cde702ad",
            "entityUuid" : "93014a3b-cb8a-44a4-878a-3573f39bf757",
            "title" : "Cough with haemoptysis",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "53a22173-a191-4237-b87d-c29d6059b6bf",
            "parentUuid" : "93014a3b-cb8a-44a4-878a-3573f39bf757",
            "entityUuid" : "380fe65d-48f3-4e8e-ac00-ebb663eaff4b",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "886a8509-1fd3-4d8c-bb7c-35303da90cf9",
            "parentUuid" : "93014a3b-cb8a-44a4-878a-3573f39bf757",
            "entityUuid" : "7abc56a8-0285-42f0-b421-f5ada63f3fae",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c8368b26-a8cb-4deb-971c-d40b7e62afd1",
            "parentUuid" : "93014a3b-cb8a-44a4-878a-3573f39bf757",
            "entityUuid" : "5c4b143c-0b0a-4600-bed8-ae9557f1899a",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "89c6744a-6795-44bf-b68b-fca30fa9ec09",
            "parentUuid" : "201240fe-2439-40e2-bf41-0030a7dab076",
            "entityUuid" : "4867e07b-19ee-4636-87e1-44da6c8cf641",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "142015b2-19db-48b6-a5cd-1fe7d5901715",
            "parentUuid" : "201240fe-2439-40e2-bf41-0030a7dab076",
            "entityUuid" : "e025b1f9-c5f2-4afa-9010-62889ae5ceb3",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b6067d53-6949-4b54-b44c-81cb78cb7231",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "ca1fef8e-73d7-4007-bcfc-e8cac4c69c0b",
            "title" : "Sore throat",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4dc3ecd1-e967-4bad-8fc7-e78a99d29ae9",
            "parentUuid" : "ca1fef8e-73d7-4007-bcfc-e8cac4c69c0b",
            "entityUuid" : "e7edab9d-fd08-49fe-831b-f8dcaff5dd0b",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f6b26a5c-77d9-41a5-b411-bf1192a55690",
            "parentUuid" : "ca1fef8e-73d7-4007-bcfc-e8cac4c69c0b",
            "entityUuid" : "ba5c377e-59ab-4dcd-99b6-01269f4303bb",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4e7fb7bc-cc2b-483c-b77b-ee9e459607df",
            "parentUuid" : "ca1fef8e-73d7-4007-bcfc-e8cac4c69c0b",
            "entityUuid" : "5f7bed0a-635f-49b1-b5a0-2078ad65ac19",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ec71b07a-b1bf-48c1-9f75-e70d8eb9476e",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "7c4e7db0-4654-4f9c-9de7-fd2b32063f09",
            "title" : "Runny nose (rhinorrhoea)",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2dca4a1d-243e-44f5-b965-d65977f5dc2a",
            "parentUuid" : "7c4e7db0-4654-4f9c-9de7-fd2b32063f09",
            "entityUuid" : "00749001-4427-495e-9454-522678c29c52",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "912c309f-d491-48f2-9e7b-b7296617cb80",
            "parentUuid" : "7c4e7db0-4654-4f9c-9de7-fd2b32063f09",
            "entityUuid" : "5a32475b-4759-4c6a-aadc-c558b6ab38b4",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0d55a8e5-8b68-4740-b351-45c834d31547",
            "parentUuid" : "7c4e7db0-4654-4f9c-9de7-fd2b32063f09",
            "entityUuid" : "241272c5-5fe7-4f1f-860c-51331ad2ac65",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0155058c-2a28-44ac-a5ab-c16784afa7c2",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "1fe1b249-d966-404b-99da-72673dd91710",
            "title" : "Wheezing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8e5abd54-283d-4b52-8b6e-506974657856",
            "parentUuid" : "1fe1b249-d966-404b-99da-72673dd91710",
            "entityUuid" : "e86f1fd3-56c1-425e-bf70-fb7e2dbfae9a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a39c91a2-4228-48d2-8d79-09aa04141460",
            "parentUuid" : "1fe1b249-d966-404b-99da-72673dd91710",
            "entityUuid" : "09b01797-8d6c-4ce0-893f-acacde76d31d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b6f72da9-2200-47f1-abc5-58a13123717e",
            "parentUuid" : "1fe1b249-d966-404b-99da-72673dd91710",
            "entityUuid" : "17554731-ba33-4a5e-9317-c4c409cc8412",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f13c1e7a-ea05-4886-aa63-3b2c77246a39",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "78a5cf06-4166-4684-a6c8-87d68e688996",
            "title" : "Chest pain",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e844f459-d43b-470e-82d7-9e388864730d",
            "parentUuid" : "78a5cf06-4166-4684-a6c8-87d68e688996",
            "entityUuid" : "3b9d3ef1-def6-4b3a-98a2-f05cfa8e76bb",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a553f217-2df4-4d78-bf79-40ee527e5d92",
            "parentUuid" : "78a5cf06-4166-4684-a6c8-87d68e688996",
            "entityUuid" : "3a6ef495-6cc9-4430-9467-8090fffef75f",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "016ec033-83d8-4fbf-b3b1-42b4bbbb80fc",
            "parentUuid" : "78a5cf06-4166-4684-a6c8-87d68e688996",
            "entityUuid" : "ffdb8d14-7758-4da5-938a-c98b271ab727",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b424ca79-9016-4a4a-83f4-3b2835df1098",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "417ef8f1-2f18-4c8f-8f60-c5bfc7f5d6e0",
            "title" : "Muscle aches (myalgia)",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e7ba31f1-62e0-4047-a25b-6561e5506e35",
            "parentUuid" : "417ef8f1-2f18-4c8f-8f60-c5bfc7f5d6e0",
            "entityUuid" : "c9e5c06c-95a3-407c-9ec5-07b733c45773",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d6a316e8-351a-4ef9-a96b-f194c4d2dee5",
            "parentUuid" : "417ef8f1-2f18-4c8f-8f60-c5bfc7f5d6e0",
            "entityUuid" : "26b7ca1e-6d50-41f1-8081-418deac60aa5",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c26fce74-331d-470e-9222-b7f18de83902",
            "parentUuid" : "417ef8f1-2f18-4c8f-8f60-c5bfc7f5d6e0",
            "entityUuid" : "b78b4801-9267-443c-a326-3b05d6f85ffd",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8dfcaf37-0cef-400e-88b3-0a323e9f6dbe",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "e0b579bd-59a6-4750-bc9d-bff5012e773b",
            "title" : "Joint pain (arthralgia)",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5bf118fe-acb4-4184-a251-fc129bc94be0",
            "parentUuid" : "e0b579bd-59a6-4750-bc9d-bff5012e773b",
            "entityUuid" : "7f4ec111-5520-417e-a717-344733615e80",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e4bd2673-7217-4495-a020-a1da297616bc",
            "parentUuid" : "e0b579bd-59a6-4750-bc9d-bff5012e773b",
            "entityUuid" : "a2fd928c-b696-4f9d-aefb-8af88da16048",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "66fa2c51-cd8a-4e88-b533-16ac28315b3e",
            "parentUuid" : "e0b579bd-59a6-4750-bc9d-bff5012e773b",
            "entityUuid" : "8dc43190-9729-4420-bf85-2f9177ec49f8",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2fa1880d-de04-456c-a070-d88d898f8825",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "0fb19c84-4f88-4dd9-8767-b04e0beb4adc",
            "title" : "Fatigue / Malaise",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "695b50fd-4976-461d-b816-d78b183abd9f",
            "parentUuid" : "0fb19c84-4f88-4dd9-8767-b04e0beb4adc",
            "entityUuid" : "d4ed37ad-3ca3-486f-867b-ea8fb88a2d68",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c8380e5f-cf1e-4c88-ad13-10faa0c9d219",
            "parentUuid" : "0fb19c84-4f88-4dd9-8767-b04e0beb4adc",
            "entityUuid" : "8c9e7da1-e008-4bd4-9495-65c59ccb8790",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5bbbd1e6-9b3a-4aa3-a48f-62d5a8b1f4e9",
            "parentUuid" : "0fb19c84-4f88-4dd9-8767-b04e0beb4adc",
            "entityUuid" : "1163b5ff-bb7e-4c22-bc54-18f16a8e198a",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f8560b96-ffe9-4201-80a8-36eb2951da6c",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "2ed6437e-89d1-47f0-9f07-4f7d84c0a1d9",
            "title" : "Loss of taste",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d298599e-026b-4d46-86cc-a8efc40cd626",
            "parentUuid" : "2ed6437e-89d1-47f0-9f07-4f7d84c0a1d9",
            "entityUuid" : "20eec76f-f87d-4dc7-a8cd-533b6b5bf02a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "fa781463-4028-40d8-b2d2-b6838fcfbf0b",
            "parentUuid" : "2ed6437e-89d1-47f0-9f07-4f7d84c0a1d9",
            "entityUuid" : "c9fcb73a-bf31-4458-ae2d-12679a7586ff",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c5c60150-709c-49ca-ba0a-bf5d5a3d5801",
            "parentUuid" : "2ed6437e-89d1-47f0-9f07-4f7d84c0a1d9",
            "entityUuid" : "cb6d2c75-4f1e-4f1f-bdcd-5247831b557f",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4a6f6d3b-f217-4747-a8d8-847f6dc9ed4f",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "75482665-0ab7-43ae-aadb-eb6225ddae4b",
            "title" : "Loss of smell",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "183f9f7e-61f6-4eb9-ab7d-395737da9ece",
            "parentUuid" : "75482665-0ab7-43ae-aadb-eb6225ddae4b",
            "entityUuid" : "0f80da6b-3ecb-42b5-84b7-1d8ca178fdb5",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c591a668-d6ee-46fd-9ebb-09b9463e1b87",
            "parentUuid" : "75482665-0ab7-43ae-aadb-eb6225ddae4b",
            "entityUuid" : "41b1f361-9712-4178-a742-3a608d4cc9e8",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "63b94b12-9c5d-46ed-a688-991ab9474838",
            "parentUuid" : "75482665-0ab7-43ae-aadb-eb6225ddae4b",
            "entityUuid" : "171ecc54-2eca-463c-b0d7-b3f317e925f1",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7f7d041a-b54b-48dd-9206-2b1c89acdf3d",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "1515aa84-a23e-4ca8-931b-af6d5d2d5821",
            "title" : "Shortness of breath",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a4ee74f8-b9ca-4d7a-983c-65ea5fb54cbd",
            "parentUuid" : "1515aa84-a23e-4ca8-931b-af6d5d2d5821",
            "entityUuid" : "e00ab4be-4072-43e4-8a41-66bf1ccfb9d2",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bfab1db2-b379-48c2-acce-921892a322ee",
            "parentUuid" : "1515aa84-a23e-4ca8-931b-af6d5d2d5821",
            "entityUuid" : "298881a2-e912-45e7-be92-026966b1e779",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "755cda7d-57a3-4ed9-a5f2-a02265a5696d",
            "parentUuid" : "1515aa84-a23e-4ca8-931b-af6d5d2d5821",
            "entityUuid" : "7f018e9e-240b-42f5-9612-ce6896563f61",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a85e5da3-0382-4f5e-ae27-6dfcc3b0d78d",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "6e51ccd1-b521-4038-9d02-16e144027cda",
            "title" : "Inability to walk",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3b339a9c-d834-4548-b171-d933ed4c6e97",
            "parentUuid" : "6e51ccd1-b521-4038-9d02-16e144027cda",
            "entityUuid" : "83006105-36b4-4496-b878-671698f24f8c",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c30cc894-dcbb-4ab7-98d5-fe880f27fff2",
            "parentUuid" : "6e51ccd1-b521-4038-9d02-16e144027cda",
            "entityUuid" : "76516e45-49ac-4077-8f03-dffdbc437d96",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "fd32ab85-e313-4ffc-a685-0b955d49fadd",
            "parentUuid" : "6e51ccd1-b521-4038-9d02-16e144027cda",
            "entityUuid" : "a95a264f-304a-49e7-a700-41d77d5b6ab0",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "6008577b-0f19-4864-80a4-ea81feaa1948",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "68cc3ffd-a796-47f9-95a1-51719e6f3fc3",
            "title" : "Lower chest wall indrawing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a19ba427-aac7-40fb-9d69-18a1528a7251",
            "parentUuid" : "68cc3ffd-a796-47f9-95a1-51719e6f3fc3",
            "entityUuid" : "ead9665a-acd8-4a52-b4a5-1ec777260965",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0ccf1bef-aad5-42f9-bfdd-326eb3f4c6d4",
            "parentUuid" : "68cc3ffd-a796-47f9-95a1-51719e6f3fc3",
            "entityUuid" : "80279223-f683-4f34-ab52-6eb44a3efb06",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c1a0c4f9-f711-44c2-8259-6da42b9829be",
            "parentUuid" : "68cc3ffd-a796-47f9-95a1-51719e6f3fc3",
            "entityUuid" : "23b18beb-c05d-426e-b49c-72c7cd226be3",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fc4e5f5a-9a49-4b39-bfce-40bb9c83d06e",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "f4ec39cf-bbd1-4ed4-b289-bca2a622805b",
            "title" : "Headache",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0a744dc2-9e03-4574-a482-eea5757f959d",
            "parentUuid" : "f4ec39cf-bbd1-4ed4-b289-bca2a622805b",
            "entityUuid" : "c4e8afb1-aee9-4dd1-900f-d0d9805f19ec",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "06e624bd-8607-405a-bcff-94d28a152ddd",
            "parentUuid" : "f4ec39cf-bbd1-4ed4-b289-bca2a622805b",
            "entityUuid" : "a92f2733-1ba5-4e0f-add5-a70b9e8df883",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "73238c16-4fad-4c81-90db-cc1b20fcfdb5",
            "parentUuid" : "f4ec39cf-bbd1-4ed4-b289-bca2a622805b",
            "entityUuid" : "b0298861-809d-4927-88e7-00d9d57f6940",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "9cc40c7c-0e8e-47bb-9760-8592f25b2f87",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "29ac9ec8-377f-46cc-af16-d56932f132b2",
            "title" : "Confusion",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "61def453-f4eb-40b5-aa17-abf77fde5c43",
            "parentUuid" : "29ac9ec8-377f-46cc-af16-d56932f132b2",
            "entityUuid" : "adfc5305-e478-49bb-845a-2aafe9b5548a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b83637ea-5948-4d11-be7b-9e5d255e4691",
            "parentUuid" : "29ac9ec8-377f-46cc-af16-d56932f132b2",
            "entityUuid" : "bfa3142a-3fe2-49a1-813d-58707262956d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3cfc293d-a4a3-4f47-8169-cd8a90dce7c7",
            "parentUuid" : "29ac9ec8-377f-46cc-af16-d56932f132b2",
            "entityUuid" : "12670246-379a-46c3-a377-dde13241a99b",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "de9a6cd2-de8d-4cac-b8d5-30d90d1f5807",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "9019efc9-a46f-482c-bbb4-8e243801e39a",
            "title" : "Seizures",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0f2da3f2-6dc3-44a5-91ca-08316079ff73",
            "parentUuid" : "9019efc9-a46f-482c-bbb4-8e243801e39a",
            "entityUuid" : "6a64b051-16c4-45f6-98d2-65061b5a78e4",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "560e1e00-6e15-4f3c-bcd6-1f94b6d45a87",
            "parentUuid" : "9019efc9-a46f-482c-bbb4-8e243801e39a",
            "entityUuid" : "b17f8db3-d534-4df5-81ed-93ab33ce6dda",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d0b95146-8104-4b4d-8e47-4d5ce4f41402",
            "parentUuid" : "9019efc9-a46f-482c-bbb4-8e243801e39a",
            "entityUuid" : "337ef8e8-98ac-4117-a9dc-8bf1bede19ec",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0775ca99-c941-40de-8cbc-a3ceea22edd2",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "9842830d-f2ee-4c4d-af7e-1b966ab28c43",
            "title" : "Abdominal pain",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8af45dc2-0ee1-4e8f-a063-b1958314dd18",
            "parentUuid" : "9842830d-f2ee-4c4d-af7e-1b966ab28c43",
            "entityUuid" : "b33a76ed-eeca-40da-833c-067ea93482d7",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c33cac62-95d3-4e64-b8af-26af2743dd1b",
            "parentUuid" : "9842830d-f2ee-4c4d-af7e-1b966ab28c43",
            "entityUuid" : "3fbc5773-bb2b-4909-96eb-91acd5256616",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b9acc8ee-f1cc-4add-9801-f888d5ee9fe1",
            "parentUuid" : "9842830d-f2ee-4c4d-af7e-1b966ab28c43",
            "entityUuid" : "ea86e9ca-81e0-4ead-b0f2-86d65d853f6e",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "495464d0-298d-46e2-a473-96e330109578",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "a3afe29e-b3cd-4ff7-9d5c-d3619f7e56bd",
            "title" : "Vomiting / Nausea",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "680e081f-0b84-4393-a582-f5252576c5a0",
            "parentUuid" : "a3afe29e-b3cd-4ff7-9d5c-d3619f7e56bd",
            "entityUuid" : "eb1be303-5788-4de6-a307-8a73d2fca867",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "33ab8c5d-9510-43f6-9d27-7aa05622d3cb",
            "parentUuid" : "a3afe29e-b3cd-4ff7-9d5c-d3619f7e56bd",
            "entityUuid" : "119c7803-7acc-49d8-ae91-1e30e638b557",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ca81111f-b38b-40ed-81a9-6c2c064319a6",
            "parentUuid" : "a3afe29e-b3cd-4ff7-9d5c-d3619f7e56bd",
            "entityUuid" : "7365562e-0425-4bd9-90b3-8f0c884710dc",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ae698931-2c48-40a7-b7b9-2652a0367d0b",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "c4f0b4df-f711-4855-9aac-cbf6e914dd61",
            "title" : "Diarrhoea",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "09694a9d-0422-4db6-852b-91e169b01be8",
            "parentUuid" : "c4f0b4df-f711-4855-9aac-cbf6e914dd61",
            "entityUuid" : "47e1a524-1744-4c24-918a-68f468630585",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "74dc6eac-7b6a-43b3-a911-4b8295891ecf",
            "parentUuid" : "c4f0b4df-f711-4855-9aac-cbf6e914dd61",
            "entityUuid" : "c5c2e887-2016-4ea3-9d78-f04bb41d37d2",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "44e860fd-4e0e-4d94-8c6f-698e9c8e6227",
            "parentUuid" : "c4f0b4df-f711-4855-9aac-cbf6e914dd61",
            "entityUuid" : "06364f74-731b-45e1-9a96-ef6464586daf",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "28e9c014-9b5e-452e-a44b-0c440888af0b",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "bb6b1460-bd10-4740-b870-1ed4b2740a2a",
            "title" : "Conjunctivitis",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "793a726d-f193-4106-b111-c76377b3acc0",
            "parentUuid" : "bb6b1460-bd10-4740-b870-1ed4b2740a2a",
            "entityUuid" : "419615ee-f845-4d82-ae69-28f39be922a9",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "129e46f3-28f2-4ee6-a57b-58c951de0d06",
            "parentUuid" : "bb6b1460-bd10-4740-b870-1ed4b2740a2a",
            "entityUuid" : "7289f93b-82b0-477d-aea8-bb25f4220a89",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a2951d6a-3bfa-44ad-9e18-2fe1bbb147f7",
            "parentUuid" : "bb6b1460-bd10-4740-b870-1ed4b2740a2a",
            "entityUuid" : "1001ddba-df2d-49c1-a4bc-8c69b7915760",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a30789f9-1b6d-4fa5-b658-6f1d8728639d",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "10c8109f-c6ac-4e0f-98bd-85ba0b10ceaf",
            "title" : "Skin rash",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "da9b384e-9fa8-41f9-9796-c9fe4230128c",
            "parentUuid" : "10c8109f-c6ac-4e0f-98bd-85ba0b10ceaf",
            "entityUuid" : "c82f6534-c1b7-46c1-be5f-c1e289d3a5f3",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "22c6e074-07ab-4e70-adde-638a2c803ed3",
            "parentUuid" : "10c8109f-c6ac-4e0f-98bd-85ba0b10ceaf",
            "entityUuid" : "f1dd9fe5-d98e-4dfd-a237-954d5a9823ce",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7d710a33-325f-4ea2-8bec-0162fffe0679",
            "parentUuid" : "10c8109f-c6ac-4e0f-98bd-85ba0b10ceaf",
            "entityUuid" : "f4d137cc-ec97-44bc-a92d-c1345893e16c",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b3dd1ffc-cc90-469a-a1bb-f15e1a9a3606",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "2ca53d30-8ffd-480c-b9cb-5be4b73d8b54",
            "title" : "Skin ulcers",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d6402b9f-daf0-4a08-9342-a4ae0a006df1",
            "parentUuid" : "2ca53d30-8ffd-480c-b9cb-5be4b73d8b54",
            "entityUuid" : "73d7afd1-b82d-4994-936e-cd778a2166da",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f579641c-671e-42df-bd22-03b25854eaf3",
            "parentUuid" : "2ca53d30-8ffd-480c-b9cb-5be4b73d8b54",
            "entityUuid" : "3018b05f-2f76-46c6-8efd-38c71c500d4f",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9d1a242b-8d3f-4c7c-8392-6ba42a9c42b2",
            "parentUuid" : "2ca53d30-8ffd-480c-b9cb-5be4b73d8b54",
            "entityUuid" : "f6cc878a-32ad-4368-b0e8-62c4bdbfbc22",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fd463808-2793-4a8c-a9d0-e9182e22b658",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "f67dd438-63d0-4a49-8db6-402bf4abfb96",
            "title" : "Lymphadenopathy",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "980edb13-6962-4512-b726-88ace5a56fb0",
            "parentUuid" : "f67dd438-63d0-4a49-8db6-402bf4abfb96",
            "entityUuid" : "99239007-04f2-4343-a841-6d0ed8e4d20c",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "005f8676-4334-42a6-81dd-8d7652fefcf7",
            "parentUuid" : "f67dd438-63d0-4a49-8db6-402bf4abfb96",
            "entityUuid" : "feab2572-0e21-4e18-88aa-cee6192f5e10",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "70fcbe08-3e93-493f-a0b9-7c34e796da72",
            "parentUuid" : "f67dd438-63d0-4a49-8db6-402bf4abfb96",
            "entityUuid" : "f00bd31c-7834-42a8-9306-6f414b47d544",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3b00c338-c8e8-4f47-bda4-1cfaf91d8944",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "7d60effb-357e-4495-a979-0e48dd3d1c48",
            "title" : "Bleeding (Haemorrhage)",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b2dd3f84-a290-4ac0-8247-671b7fea185b",
            "parentUuid" : "7d60effb-357e-4495-a979-0e48dd3d1c48",
            "entityUuid" : "a0824b00-b234-4842-adb5-8b0d6a3f4086",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a0224752-040a-4bcb-80db-18348955fe9f",
            "parentUuid" : "a0824b00-b234-4842-adb5-8b0d6a3f4086",
            "entityUuid" : "98e734c6-b57f-43c6-99a0-d4927dec699f",
            "title" : "Specify site",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "75f0df28-0a6b-445a-ac8f-bb4450c8a613",
            "parentUuid" : "7d60effb-357e-4495-a979-0e48dd3d1c48",
            "entityUuid" : "7b5fc02d-8960-49e1-86ea-6496f68a174e",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "838b87df-2bcc-4db8-897c-9bd6b7f5bd70",
            "parentUuid" : "7d60effb-357e-4495-a979-0e48dd3d1c48",
            "entityUuid" : "4c53a82f-4910-4115-925f-dd55d2f2d7f1",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5ac49897-ee55-4f6e-9cf1-e522579c4f40",
            "parentUuid" : "8ac75cea-2076-4b5d-8c6a-079d8dca2e00",
            "entityUuid" : "4254a957-eb8d-458b-8e2b-31f1ab9a7b38",
            "title" : "Other",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0cca389c-3aca-4030-a167-35454733b83e",
            "parentUuid" : "4254a957-eb8d-458b-8e2b-31f1ab9a7b38",
            "entityUuid" : "1fcc9a22-172f-431a-931b-881986876b6a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f466e3ad-275e-47b8-bb43-c147d667e8f9",
            "parentUuid" : "1fcc9a22-172f-431a-931b-881986876b6a",
            "entityUuid" : "c067809d-10c0-4124-a94f-90312014ef2e",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "23470845-2a8b-40fe-81f4-22ff8752b5a4",
            "parentUuid" : "4254a957-eb8d-458b-8e2b-31f1ab9a7b38",
            "entityUuid" : "593d93b6-3975-4dca-b0c6-229beb289735",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9ad45239-085b-43aa-aa9c-60ec8d573c05",
            "parentUuid" : "4254a957-eb8d-458b-8e2b-31f1ab9a7b38",
            "entityUuid" : "4b55963c-fe0f-4145-9c2a-b5acf27b4115",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "490f65fb-ac34-4272-bf20-2107cd1bbc7e",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5",
            "title" : "Medication",
            "text" : "Is the patient CURRENTLY receiving any of the following?",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "aa1427f2-c7be-4a04-b039-8ced3781c3c2",
            "parentUuid" : "4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5",
            "entityUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "72803d80-dea2-438b-8e06-d0cfd2bea5fb",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "817e85e3-9ae6-4c01-a71b-361d03cfe1d8",
            "title" : "Oral/orogastric fluids?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a914cf9e-95cb-4de8-93ec-33a85f060353",
            "parentUuid" : "817e85e3-9ae6-4c01-a71b-361d03cfe1d8",
            "entityUuid" : "ebde89ac-8ff7-4a66-b63b-b498f2bdb191",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f78578ef-f4fb-4b77-9f43-a8835844677f",
            "parentUuid" : "817e85e3-9ae6-4c01-a71b-361d03cfe1d8",
            "entityUuid" : "2c50e9ae-ad5c-47ba-8200-7e8f167dfa49",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8fe63d6f-f32f-4711-a945-1a2548c900f4",
            "parentUuid" : "817e85e3-9ae6-4c01-a71b-361d03cfe1d8",
            "entityUuid" : "bfd75bb8-17ad-4d2c-a94a-7102d59e1c85",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "21d62d21-a438-401a-8e45-76fe4e01609f",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "dc83c632-a6fe-4bba-b145-d44489e00128",
            "title" : "Intravenous fluids?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e2b4f51d-a3b2-4c89-a252-849bde014144",
            "parentUuid" : "dc83c632-a6fe-4bba-b145-d44489e00128",
            "entityUuid" : "cba6b7d8-6d1b-46be-9c1d-537d1770d9cb",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e881490a-1c4d-4075-a2cd-a46bd9309838",
            "parentUuid" : "dc83c632-a6fe-4bba-b145-d44489e00128",
            "entityUuid" : "13df0b05-7619-4b73-b652-65c926a508dd",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "54aa0ccf-3e9e-4a22-81f1-67033c0f8b31",
            "parentUuid" : "dc83c632-a6fe-4bba-b145-d44489e00128",
            "entityUuid" : "4ff863a3-adb0-4508-8b97-b15a5da78956",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "60ab40c8-6a05-4cb3-b4e7-4c4790bd7ce5",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "ba769bbb-8732-47aa-ba8a-3dac29f863b7",
            "title" : "Antiviral?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ab44d4ec-ac60-4aeb-b3bb-303df72643c0",
            "parentUuid" : "ba769bbb-8732-47aa-ba8a-3dac29f863b7",
            "entityUuid" : "43568d29-68a5-4cec-9c1b-b7514a780f13",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "26ed36bd-440f-4a1b-a6d4-c539199bcaa4",
            "parentUuid" : "43568d29-68a5-4cec-9c1b-b7514a780f13",
            "entityUuid" : "7813486f-8ff0-4100-961a-c3a9cdc3707b",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "abb7246a-516d-4464-ae6d-3015955b1eea",
            "parentUuid" : "7813486f-8ff0-4100-961a-c3a9cdc3707b",
            "entityUuid" : "5e655924-45dc-4e96-9f6d-63e17ad66188",
            "title" : "Select",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a523898e-0a17-4435-96d1-47a35d69445e",
            "parentUuid" : "5e655924-45dc-4e96-9f6d-63e17ad66188",
            "entityUuid" : "13ca65d1-e66b-4a4b-ab5c-1045994bdf17",
            "label" : "Ribavirin",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ce14322b-f916-4801-b456-8f89a672db16",
            "parentUuid" : "5e655924-45dc-4e96-9f6d-63e17ad66188",
            "entityUuid" : "0929c9fd-fa11-41a1-b67c-6e201e400db3",
            "label" : "Lopinavir/Ritonavir",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "baf823c9-3e1f-4eb5-85f2-86ddd865c684",
            "parentUuid" : "5e655924-45dc-4e96-9f6d-63e17ad66188",
            "entityUuid" : "14e3b712-4b20-43f4-b8ee-0bc26897f263",
            "label" : "Neuraminidase inhibitor",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "963ab839-f89d-40cb-8e1a-8562a4cdc3e7",
            "parentUuid" : "5e655924-45dc-4e96-9f6d-63e17ad66188",
            "entityUuid" : "33b6e922-1712-4fd8-b79a-1d8a3e5b5961",
            "label" : "Interferon alpha",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3608a722-2772-4f03-bd79-d4bafa5bcc17",
            "parentUuid" : "5e655924-45dc-4e96-9f6d-63e17ad66188",
            "entityUuid" : "b571e015-01d5-4052-8731-e581c7605642",
            "label" : "Interferon beta",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b2b6b200-2024-4b0c-8923-f5271614a6ac",
            "parentUuid" : "5e655924-45dc-4e96-9f6d-63e17ad66188",
            "entityUuid" : "d53766e5-b1b1-456b-91ca-6958cb552cc8",
            "label" : "Other",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3d8b1bd3-4ca4-4d00-861c-6b9609308668",
            "parentUuid" : "d53766e5-b1b1-456b-91ca-6958cb552cc8",
            "entityUuid" : "b6063d01-25eb-4874-adbb-8130c0e5f069",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7bae8b58-2c74-4c1c-b816-69bca9836f81",
            "parentUuid" : "ba769bbb-8732-47aa-ba8a-3dac29f863b7",
            "entityUuid" : "0fb72e30-7c1b-4ffb-a20f-cc85dfeb63f2",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0a0f6a4d-9cc3-4192-82db-21f2df314f6f",
            "parentUuid" : "ba769bbb-8732-47aa-ba8a-3dac29f863b7",
            "entityUuid" : "06da326f-5f03-42e8-9368-e4384726c434",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "322fa1b9-0c4a-4d16-9ef8-fd6228ea6eea",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "64f6c9d0-9882-4c27-b95d-d9f86f362bd8",
            "title" : "Corticosteroid?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e5f3bada-eeda-4ebc-822a-e0343d6273b1",
            "parentUuid" : "64f6c9d0-9882-4c27-b95d-d9f86f362bd8",
            "entityUuid" : "7bef36d5-d922-42fb-81c5-92613830dd93",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "6b4ececa-48d8-4ba6-810f-2dabb3e88923",
            "parentUuid" : "7bef36d5-d922-42fb-81c5-92613830dd93",
            "entityUuid" : "b4588794-42e5-4fdf-94a5-a05c49d71a2e",
            "title" : "Route",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ab0ca57a-d856-4387-a15b-9b66d5792b98",
            "parentUuid" : "b4588794-42e5-4fdf-94a5-a05c49d71a2e",
            "entityUuid" : "360eec27-178d-4d55-aaac-fabf6631913a",
            "title" : "Select",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "98d43e7d-8492-4114-9986-35aada22224a",
            "parentUuid" : "360eec27-178d-4d55-aaac-fabf6631913a",
            "entityUuid" : "ffaa049d-d68e-4962-97b2-96f6fb0d806a",
            "label" : "Oral",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "31886016-3d30-4459-b31f-641f8fcbd5bf",
            "parentUuid" : "360eec27-178d-4d55-aaac-fabf6631913a",
            "entityUuid" : "9a9a43ee-cde7-41f1-8937-4357cb455e9c",
            "label" : "Intravenous",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c1f147fa-0b87-4d32-9002-d42e6371e15b",
            "parentUuid" : "360eec27-178d-4d55-aaac-fabf6631913a",
            "entityUuid" : "4800371c-13cc-41b7-b9e3-cc2aee518b63",
            "label" : "Inhaled",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8899a6e6-abc0-45e8-bae7-46836a1d8fca",
            "parentUuid" : "7bef36d5-d922-42fb-81c5-92613830dd93",
            "entityUuid" : "161c5270-9e93-4394-acca-aa1268790835",
            "title" : "Agent",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bc7df0e1-82df-4bb1-8ff1-c57d52318126",
            "parentUuid" : "7bef36d5-d922-42fb-81c5-92613830dd93",
            "entityUuid" : "06c4fa48-051c-4bca-9bfd-150e68a1e5b4",
            "title" : "Maximum daily dose",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2f3bfb4f-876a-4303-be2f-1e847f40b2cc",
            "parentUuid" : "64f6c9d0-9882-4c27-b95d-d9f86f362bd8",
            "entityUuid" : "ec3e57ab-2246-40c9-84bc-fc17e7414fc7",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a78b567c-cb3a-4f73-8423-074417edb007",
            "parentUuid" : "64f6c9d0-9882-4c27-b95d-d9f86f362bd8",
            "entityUuid" : "2f255b58-68c1-41ce-a50b-ec7fc874ba25",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2bb9c274-6477-4984-8541-74598eb6f86f",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "1c513b50-6355-4e5d-8473-d29cc300fc2e",
            "title" : "Antibiotic?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "11e607bb-b4e1-4554-99f3-d862cd23c217",
            "parentUuid" : "1c513b50-6355-4e5d-8473-d29cc300fc2e",
            "entityUuid" : "ff99c959-7411-4b87-b444-8900d3431164",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "de063d27-c09b-4846-a534-5510c5394528",
            "parentUuid" : "1c513b50-6355-4e5d-8473-d29cc300fc2e",
            "entityUuid" : "40816a50-c0f3-458e-983b-68a4c02087a2",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "12b984fa-8b73-48d7-b778-951d845b567a",
            "parentUuid" : "1c513b50-6355-4e5d-8473-d29cc300fc2e",
            "entityUuid" : "dd299948-ce0b-499f-8240-03c7369bb873",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "175766fe-bb09-4d46-96ce-04859fea6e23",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "65177d74-1115-49d2-aa4a-2edc029115ce",
            "title" : "Antifungal agent?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b47b646a-a14b-4e6d-bdea-e10fec8a4798",
            "parentUuid" : "65177d74-1115-49d2-aa4a-2edc029115ce",
            "entityUuid" : "980d6e11-39d4-4903-8c82-88bb43eb1e3e",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "af017b78-79e0-4098-9e3d-b47d8b554371",
            "parentUuid" : "65177d74-1115-49d2-aa4a-2edc029115ce",
            "entityUuid" : "c97c3c5d-26f8-4304-8521-cde293059f64",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6637af1c-39e8-4fbc-b408-261d7ebe02b6",
            "parentUuid" : "65177d74-1115-49d2-aa4a-2edc029115ce",
            "entityUuid" : "9efc5be4-99db-4cc2-b917-a6627c8b7019",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3f328f3a-8aed-4755-977a-ea1c462474dc",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "aaa5c7d6-cb40-4479-9165-9bae954278d2",
            "title" : "Antimalarial agent?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ae1b06ab-626a-424f-971d-069b3d74d889",
            "parentUuid" : "aaa5c7d6-cb40-4479-9165-9bae954278d2",
            "entityUuid" : "a1bf5b97-b4f2-4da6-b5ea-49496324df8c",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "65ae3bb8-f6d2-4da2-95e5-2ba212314e5f",
            "parentUuid" : "aaa5c7d6-cb40-4479-9165-9bae954278d2",
            "entityUuid" : "98db000b-8834-47fa-b7b6-61a9617001ac",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f21d2f8e-8dee-4bea-bf47-71c6aeac21f8",
            "parentUuid" : "aaa5c7d6-cb40-4479-9165-9bae954278d2",
            "entityUuid" : "67a62f87-bc7c-4049-b296-623e58bb660b",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "28b6d10c-4a72-4f77-bab6-f0744ba0f6dd",
            "parentUuid" : "a1bf5b97-b4f2-4da6-b5ea-49496324df8c",
            "entityUuid" : "9aa59b9b-95a2-4a3a-8efe-3ffcba1d03bf",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "14489cb4-38ac-48bc-a678-a4cf2738347d",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "d4240757-a0c6-49c5-a3c7-e2e59da7b24f",
            "title" : "Experimental agent?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "08374a6e-6311-46db-86d5-d3b2f600dabc",
            "parentUuid" : "d4240757-a0c6-49c5-a3c7-e2e59da7b24f",
            "entityUuid" : "446baca2-f32d-4ff1-ae5a-3b47a4a77003",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2996d92d-3156-43d6-958b-0e42f03c53c1",
            "parentUuid" : "d4240757-a0c6-49c5-a3c7-e2e59da7b24f",
            "entityUuid" : "4f0170d9-1ff1-4934-b873-34c410f7c861",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a8405514-47eb-4e2a-88c7-3f4e1d83821d",
            "parentUuid" : "d4240757-a0c6-49c5-a3c7-e2e59da7b24f",
            "entityUuid" : "335716e9-335c-442f-aabc-9d4cdcce3f2a",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b16c66a0-8d23-4dcb-97b3-50d6c1644f8f",
            "parentUuid" : "446baca2-f32d-4ff1-ae5a-3b47a4a77003",
            "entityUuid" : "231dbd18-f533-4f95-ae20-a27756c08e1e",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "29fe74c2-8fb0-421d-a187-20acf5da04ed",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "aba9524d-271c-4c45-aca6-a29cd052deba",
            "title" : "Non-steroidal anti-inflammatory (NSAID)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3c2faa3e-ed92-444c-b9e2-3a3a93eee8ed",
            "parentUuid" : "aba9524d-271c-4c45-aca6-a29cd052deba",
            "entityUuid" : "00622b6f-0576-4c0c-8ff6-926b91e19f36",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a97200a0-51cb-4298-b057-522afffeb382",
            "parentUuid" : "aba9524d-271c-4c45-aca6-a29cd052deba",
            "entityUuid" : "41f4c523-3332-46c3-be5d-b91157d91d62",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0811b7be-2069-4d02-875e-5b7e398d1e08",
            "parentUuid" : "aba9524d-271c-4c45-aca6-a29cd052deba",
            "entityUuid" : "858e4476-ffb1-43e0-bb51-a1fb6359a330",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e7d911b6-ad93-46b1-8ebf-2a57211a878a",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "820ee024-a2ba-4539-a001-c8d2fcf634a7",
            "title" : "Angiotensin converting enzyme inhibitors (ACE inhibitors)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5b4f70d9-3009-4c75-9deb-69e8c8910706",
            "parentUuid" : "820ee024-a2ba-4539-a001-c8d2fcf634a7",
            "entityUuid" : "dcbed814-0d79-402f-b772-19f68b5ca0ce",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cb5abc22-7ad9-493f-9afd-f36c39ccba48",
            "parentUuid" : "820ee024-a2ba-4539-a001-c8d2fcf634a7",
            "entityUuid" : "ade1c554-cea9-4704-9017-25ed3f1d57da",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bac71f17-8b6d-41f3-83b3-0d231be7f027",
            "parentUuid" : "820ee024-a2ba-4539-a001-c8d2fcf634a7",
            "entityUuid" : "4d6a1d6d-6b28-4b62-a6a8-befdbd7fd248",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b28d7921-bacf-4104-87c4-8caf0521197b",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "4758f571-af44-48ca-a5ca-02e3232dfb21",
            "title" : "Angiotensin II receptor blockers (ARBs)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ab20d8aa-5a04-468e-8fdb-8237c9a8abab",
            "parentUuid" : "4758f571-af44-48ca-a5ca-02e3232dfb21",
            "entityUuid" : "2e0b0d5f-86fe-4ba9-beb2-e0a6ee563975",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "28274515-0ffe-4e48-a4a8-2be2b9d9dccb",
            "parentUuid" : "4758f571-af44-48ca-a5ca-02e3232dfb21",
            "entityUuid" : "c1df8526-a7fb-4971-beb5-35d731fbff86",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b0b8703f-5bb9-4e34-9b24-4a4d64764c72",
            "parentUuid" : "4758f571-af44-48ca-a5ca-02e3232dfb21",
            "entityUuid" : "6c7caafe-07ec-432e-ab07-50a1818acd33",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fde67afe-40f3-465d-9828-54c8102ec262",
            "parentUuid" : "dc11e59a-8f9a-4f80-999c-dd99b97d6efd",
            "entityUuid" : "19a1e7c9-f804-451f-be63-cd7fb3d2aaed",
            "title" : "Systemic anticoagulation",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "046344b4-2963-4cae-915b-1b6972101ef8",
            "parentUuid" : "19a1e7c9-f804-451f-be63-cd7fb3d2aaed",
            "entityUuid" : "f6d42667-35b0-4ec7-823d-d4d2a56675a1",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5849f07d-2f78-4a43-bb4d-1681423a83dd",
            "parentUuid" : "19a1e7c9-f804-451f-be63-cd7fb3d2aaed",
            "entityUuid" : "c8c9d979-6cf8-408e-879e-625b3b012a8e",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7f6fd57f-8c31-49d7-8b26-56dbccd1c8af",
            "parentUuid" : "19a1e7c9-f804-451f-be63-cd7fb3d2aaed",
            "entityUuid" : "7c40ee08-c3c2-4358-98de-08194acacdb2",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "509cc4c2-ef8b-4c1b-8ea6-7d36a27aa510",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "422ff881-b607-48bc-b0b2-354fbe7b9207",
            "title" : "Supportive Care",
            "text" : "Is the patient CURRENTLY receiving any of the following?",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3713f364-5629-44f9-b493-a9f269889f0d",
            "parentUuid" : "422ff881-b607-48bc-b0b2-354fbe7b9207",
            "entityUuid" : "bac6e386-85d1-417e-aa29-f53201be8e52",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "6aa144a5-06b2-44ac-a82d-e0cf6c4e72ec",
            "parentUuid" : "bac6e386-85d1-417e-aa29-f53201be8e52",
            "entityUuid" : "29d8b984-8271-4807-aebf-1e32553419bc",
            "title" : "ICU or High Dependency Unit admission?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "46540741-04d6-430a-b5b8-d43b1c362cc2",
            "parentUuid" : "29d8b984-8271-4807-aebf-1e32553419bc",
            "entityUuid" : "7a28e45c-024f-4d51-87b5-cf9529b3b280",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6d49f1e0-c657-4f1b-b5b1-bd6a1efea41c",
            "parentUuid" : "29d8b984-8271-4807-aebf-1e32553419bc",
            "entityUuid" : "9f57b790-103f-48d7-a960-f5d7d279e478",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "eabb9813-4504-4339-9689-4e0412985711",
            "parentUuid" : "29d8b984-8271-4807-aebf-1e32553419bc",
            "entityUuid" : "7ed863f2-2b38-4e27-909b-bbea97fcfef9",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f9f7d5d1-ad53-4e55-a37f-0e31174445fc",
            "parentUuid" : "bac6e386-85d1-417e-aa29-f53201be8e52",
            "entityUuid" : "5eceaebb-90d5-44a7-b3b6-c6eb2f6b3298",
            "title" : "Oxygen therapy?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "295a41bb-5806-4965-a49e-1d6237f8c173",
            "parentUuid" : "5eceaebb-90d5-44a7-b3b6-c6eb2f6b3298",
            "entityUuid" : "971fc6a4-0d4e-47a3-b78f-22469b046afb",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5387e8f7-74f2-424e-8bb9-3e1c3f36b63d",
            "parentUuid" : "5eceaebb-90d5-44a7-b3b6-c6eb2f6b3298",
            "entityUuid" : "29a108a0-81db-4f0a-b291-237b4eecbfaa",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0fbe534b-551a-4981-a643-557037e4b0d1",
            "parentUuid" : "5eceaebb-90d5-44a7-b3b6-c6eb2f6b3298",
            "entityUuid" : "cfac8888-865f-4999-8ddc-229557aa9e3e",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "433c0d36-9cc4-4a18-8ea1-027c1627801b",
            "parentUuid" : "971fc6a4-0d4e-47a3-b78f-22469b046afb",
            "entityUuid" : "006f9b0f-2ab2-4b01-9073-6178d6bb171a",
            "title" : "O₂ flow",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "550eb08f-ce5f-49d6-b950-287e6c6ed5ba",
            "parentUuid" : "006f9b0f-2ab2-4b01-9073-6178d6bb171a",
            "entityUuid" : "3318fe4f-2dcf-4b7a-ae5a-cea69a080681",
            "label" : "1-5 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4dbea6df-30fd-4c1e-bac7-155d52df1a32",
            "parentUuid" : "006f9b0f-2ab2-4b01-9073-6178d6bb171a",
            "entityUuid" : "969d6a80-b17d-4c62-824a-ed69d5945e9b",
            "label" : "6-10 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "15503bde-fa7d-43ce-bd07-534c4f1521e5",
            "parentUuid" : "006f9b0f-2ab2-4b01-9073-6178d6bb171a",
            "entityUuid" : "e5c69880-e851-41fe-89f1-747e857f2406",
            "label" : "11-15 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c3369e86-acd4-4f6e-b7fa-c558062755ac",
            "parentUuid" : "006f9b0f-2ab2-4b01-9073-6178d6bb171a",
            "entityUuid" : "e776f463-0e89-4acd-b105-9ccae28450a6",
            "label" : ">15 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "73fbded2-8107-464f-9d40-fb648ecfcf4a",
            "parentUuid" : "006f9b0f-2ab2-4b01-9073-6178d6bb171a",
            "entityUuid" : "b6f54600-de51-40be-9661-f6b4ee620214",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "78d96e38-a233-415f-866b-5e1b64e9d9c7",
            "parentUuid" : "971fc6a4-0d4e-47a3-b78f-22469b046afb",
            "entityUuid" : "689ad7bc-16d5-4afe-9b64-99a59378e56a",
            "title" : "Source of oxygen",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "125f0820-ccfd-4ee8-988f-7a78a8383bc2",
            "parentUuid" : "689ad7bc-16d5-4afe-9b64-99a59378e56a",
            "entityUuid" : "b2ac690e-f8d1-42e7-82a8-9480ef54395c",
            "label" : "Piped",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bd860632-54a3-48d8-a7e9-57a004a08bdc",
            "parentUuid" : "689ad7bc-16d5-4afe-9b64-99a59378e56a",
            "entityUuid" : "c1ed7b74-51b4-4f59-9aef-b0b59f1d8278",
            "label" : "Cylinder",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "29c003c0-0f5c-4430-be1f-efe0be23cdcb",
            "parentUuid" : "689ad7bc-16d5-4afe-9b64-99a59378e56a",
            "entityUuid" : "ec27f721-a7b9-42e8-9347-f82b2aaf99ce",
            "label" : "Concentrator",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5eda4326-f837-4349-8447-130bc00ca6ef",
            "parentUuid" : "689ad7bc-16d5-4afe-9b64-99a59378e56a",
            "entityUuid" : "4d4c199a-4de2-4919-9ee3-f3f3bf31ef8a",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "66286302-db6e-4866-9b61-f16fb8531efe",
            "parentUuid" : "971fc6a4-0d4e-47a3-b78f-22469b046afb",
            "entityUuid" : "1576d785-17b8-495f-b62f-6ce2463ac690",
            "title" : "Interface",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "51dee85b-9f18-4dfd-b3b9-1a124c550e7f",
            "parentUuid" : "1576d785-17b8-495f-b62f-6ce2463ac690",
            "entityUuid" : "ea1b2502-a3f7-45d0-8ddd-1bcd1aee3056",
            "label" : "Nasal prongs",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ffdf85b4-b084-4f24-b9e0-4b0e78d0844d",
            "parentUuid" : "1576d785-17b8-495f-b62f-6ce2463ac690",
            "entityUuid" : "3fa6efb7-0847-4ab1-97b3-3932901379e8",
            "label" : "HF nasal cannula",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2e1a2347-a686-431f-838c-7c4ecb28ee5c",
            "parentUuid" : "1576d785-17b8-495f-b62f-6ce2463ac690",
            "entityUuid" : "d3de7982-0091-4b40-be42-3724a0555cc9",
            "label" : "Mask",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7a6a7577-dfed-43af-9fdd-ab0190ba134c",
            "parentUuid" : "1576d785-17b8-495f-b62f-6ce2463ac690",
            "entityUuid" : "e943e683-746b-462f-a05d-485812463050",
            "label" : "Mask with reservoir",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a7eccb8c-8e1a-4e70-9811-94161d770d75",
            "parentUuid" : "1576d785-17b8-495f-b62f-6ce2463ac690",
            "entityUuid" : "0d828947-2b42-440a-8c52-d2017cd299d8",
            "label" : "CPAP/NIV mask",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "eedf4558-43b3-424a-b257-5f70aa956593",
            "parentUuid" : "1576d785-17b8-495f-b62f-6ce2463ac690",
            "entityUuid" : "3d93a648-c912-4d58-835e-87458caf939b",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4a50a5bf-f2a6-491c-8398-d54db056972f",
            "parentUuid" : "bac6e386-85d1-417e-aa29-f53201be8e52",
            "entityUuid" : "e4ecc059-c749-46a0-b57d-86616ba40135",
            "title" : "Non-invasive ventilation (e.g.BIPAP/CPAP)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4def6bf6-8398-47a2-9e00-5da22f7770a1",
            "parentUuid" : "e4ecc059-c749-46a0-b57d-86616ba40135",
            "entityUuid" : "6dd27d5b-c981-4803-a9a9-1fb9d6edbbc7",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "95b0556b-bd51-4aba-99ac-7840ce65b2fd",
            "parentUuid" : "e4ecc059-c749-46a0-b57d-86616ba40135",
            "entityUuid" : "e41f7266-c143-49d2-94c8-9c2633d1bbde",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "24b6531d-c4cb-4915-9e09-e3b0c109648a",
            "parentUuid" : "e4ecc059-c749-46a0-b57d-86616ba40135",
            "entityUuid" : "a2baa918-36a6-409b-a28d-eea8db116ef3",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c9d8dba9-54c2-4b56-ac80-8b3c66a8480f",
            "parentUuid" : "bac6e386-85d1-417e-aa29-f53201be8e52",
            "entityUuid" : "ef5d1fcc-794c-4962-9111-53e9de87ae21",
            "title" : "Invasive ventilation (Any)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3a29cb67-2904-4dbc-ad04-da948dc0935b",
            "parentUuid" : "ef5d1fcc-794c-4962-9111-53e9de87ae21",
            "entityUuid" : "c54a421c-b1db-44e1-a230-b6d55577c28f",
            "label" : "Yes",
            "advice" : "What were the following values closest to 0800?",
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "568e0ca9-5a4a-46c4-b5aa-c41bc0967e4b",
            "parentUuid" : "ef5d1fcc-794c-4962-9111-53e9de87ae21",
            "entityUuid" : "98ff5eac-7a8c-40f7-a18a-0d259ab376b0",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "95594e84-0320-4130-8482-80bb27f3aa25",
            "parentUuid" : "ef5d1fcc-794c-4962-9111-53e9de87ae21",
            "entityUuid" : "07a02359-1b1c-41fe-bac1-15af64eddb76",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "7ce59d2e-4507-4db0-a416-026f3b1ef74e",
            "parentUuid" : "c54a421c-b1db-44e1-a230-b6d55577c28f",
            "entityUuid" : "0fb8841b-31e6-4339-8b54-f82f4242a013",
            "title" : "PEEP [cm H₂O]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "16e83829-5d13-4418-a34c-298419b5d020",
            "parentUuid" : "c54a421c-b1db-44e1-a230-b6d55577c28f",
            "entityUuid" : "9356aca2-f658-4a55-a51d-e7a985b0a920",
            "title" : "FᵢO₂ [%]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "868b2170-e639-47e2-9ea1-bfc3d635384f",
            "parentUuid" : "c54a421c-b1db-44e1-a230-b6d55577c28f",
            "entityUuid" : "9765b703-8c0e-47bb-9ede-d86164b394df",
            "title" : "Plateau pressure [cm H₂O]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "17511d6b-2e06-4574-9125-0056cca29d9c",
            "parentUuid" : "c54a421c-b1db-44e1-a230-b6d55577c28f",
            "entityUuid" : "8c024cf6-dfd3-4c0e-bc48-4b1dd5f0927b",
            "title" : "PₐCO₂",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "2afc25ed-8e56-415f-9aae-d7a6d82d4a11",
            "parentUuid" : "c54a421c-b1db-44e1-a230-b6d55577c28f",
            "entityUuid" : "d86cef91-28bf-4730-9064-9a94d7e8bff1",
            "title" : "PₐO₂",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2307f7d5-d2d8-436c-b649-1e89ecb60d36",
            "parentUuid" : "bac6e386-85d1-417e-aa29-f53201be8e52",
            "entityUuid" : "1ba9206e-4e4c-46a3-830a-7e7ff6a6deb5",
            "title" : "Inotropes/vasopressors?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "318a2b95-1977-4c4d-b4a0-dcea9f42630f",
            "parentUuid" : "1ba9206e-4e4c-46a3-830a-7e7ff6a6deb5",
            "entityUuid" : "b8532f75-dc71-43e0-83ca-efb311eb8f4e",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1fe03591-cfd5-4cab-a94e-e5394c074e01",
            "parentUuid" : "1ba9206e-4e4c-46a3-830a-7e7ff6a6deb5",
            "entityUuid" : "f804e7ce-0502-4150-a7ff-27f5f9d85acc",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "33728168-e316-4139-aaf7-30b808a2ab60",
            "parentUuid" : "1ba9206e-4e4c-46a3-830a-7e7ff6a6deb5",
            "entityUuid" : "9f985882-5460-4fb7-a023-a446e7411384",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "01c92029-3877-43f7-95cb-122347889f21",
            "parentUuid" : "bac6e386-85d1-417e-aa29-f53201be8e52",
            "entityUuid" : "94f818ad-a79e-42d6-aa9c-69b8623a8d11",
            "title" : "Extracorporeal (ECMO) support?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c622816d-2dd5-404c-8bb1-a967839ab95e",
            "parentUuid" : "94f818ad-a79e-42d6-aa9c-69b8623a8d11",
            "entityUuid" : "8477cc03-5a53-42ad-8dfc-e3ebdfc254a4",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "edf3c6f6-7378-4af5-a536-e341d2c142d9",
            "parentUuid" : "94f818ad-a79e-42d6-aa9c-69b8623a8d11",
            "entityUuid" : "5dc28a34-5858-4ac5-af0f-a9be72398ba1",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "71bf6a86-fb27-48fd-ad55-a8d20cf1e4a3",
            "parentUuid" : "94f818ad-a79e-42d6-aa9c-69b8623a8d11",
            "entityUuid" : "d7389a29-f10d-4f46-ac0b-2a3347ff2499",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ffbbd9f4-3607-49cd-acb9-995786f9e950",
            "parentUuid" : "bac6e386-85d1-417e-aa29-f53201be8e52",
            "entityUuid" : "8f725aec-1e15-4b43-9b85-c4ede6792750",
            "title" : "Prone position?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5bca26a0-c53c-43dc-84d8-542652eb42f0",
            "parentUuid" : "8f725aec-1e15-4b43-9b85-c4ede6792750",
            "entityUuid" : "489390d5-d6ae-41b7-a51b-bc67a8941c69",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a9478ca3-6efd-4818-9917-f458ee83a531",
            "parentUuid" : "8f725aec-1e15-4b43-9b85-c4ede6792750",
            "entityUuid" : "4c0db426-3db1-40fe-bdd9-f7229d2b629d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "76dec22c-739b-44a0-9f82-dc4f721bd92e",
            "parentUuid" : "8f725aec-1e15-4b43-9b85-c4ede6792750",
            "entityUuid" : "421261a3-e2f6-496b-a6ce-f3bc02792504",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "cbcb7d01-76f9-4b01-85bf-7a7fbbe515f1",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "e9b64148-8c5b-4283-bac3-8ce3615cfac0",
            "title" : "Laboraty results on admission",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "306587c0-9f43-4dce-9770-3fd67c29d6e4",
            "parentUuid" : "e9b64148-8c5b-4283-bac3-8ce3615cfac0",
            "entityUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "35ea0412-c38e-4ecc-b1ba-7395795ea7ce",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "c6812fd3-dbf8-4d22-8af6-b01b65fe16f7",
            "title" : "Haemoglobin [g/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f64061da-e6dc-4c97-9735-7aca5cd25609",
            "parentUuid" : "c6812fd3-dbf8-4d22-8af6-b01b65fe16f7",
            "entityUuid" : "b287bcf7-8661-446d-8957-f550e24f96b4",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1496497d-52c6-4ad4-9e03-0029cee11254",
            "parentUuid" : "c6812fd3-dbf8-4d22-8af6-b01b65fe16f7",
            "entityUuid" : "d4810199-e86b-46f6-b73b-23775f340bce",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "50209439-580f-480b-9c89-597eecc7606f",
            "parentUuid" : "b287bcf7-8661-446d-8957-f550e24f96b4",
            "entityUuid" : "f49799ad-bfc0-4d37-8e16-170156ddf577",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a57c0224-807c-488c-b0bc-5c7f4060a005",
            "parentUuid" : "b287bcf7-8661-446d-8957-f550e24f96b4",
            "entityUuid" : "9b5118f2-edb5-4e22-8b79-eab1215e9584",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "861b2d56-d758-4df6-977e-7c48fc9ef220",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "f33f87e4-aad7-4e85-946d-d11bb8d2748f",
            "title" : "WBC count [×10⁹/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "27da9c04-2c8f-43d1-9329-b10773cf9bfc",
            "parentUuid" : "f33f87e4-aad7-4e85-946d-d11bb8d2748f",
            "entityUuid" : "93af6248-25e7-427d-add5-98a327ff5a5d",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f8b18ad6-b69c-4ce2-8503-edbf1a629f59",
            "parentUuid" : "f33f87e4-aad7-4e85-946d-d11bb8d2748f",
            "entityUuid" : "11a72705-0699-4fe3-9f7e-32b839f34fbf",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9f58699b-c30e-40ba-abd8-712855f454a5",
            "parentUuid" : "93af6248-25e7-427d-add5-98a327ff5a5d",
            "entityUuid" : "65de8932-ef49-43a4-b900-72af724f4932",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fc0a2dbf-9701-4234-8822-91f94b823644",
            "parentUuid" : "93af6248-25e7-427d-add5-98a327ff5a5d",
            "entityUuid" : "849f3b50-7ecd-4a8b-a94c-acc85e36f52b",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3b112a6b-9014-46f4-be5d-d53c3b35a641",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "8a8fa4bf-1253-47b2-b74c-b7b92dc983e8",
            "title" : "Haematocrit [%]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b5f4ab01-1e11-43e6-a2da-b74f3b2f0d8b",
            "parentUuid" : "8a8fa4bf-1253-47b2-b74c-b7b92dc983e8",
            "entityUuid" : "d0c2057e-b064-45e2-9554-6d7430f956d8",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c303e592-085b-467e-b460-975ad1ec14d2",
            "parentUuid" : "8a8fa4bf-1253-47b2-b74c-b7b92dc983e8",
            "entityUuid" : "7af1309c-f023-4c4c-ba78-f71ea773fba4",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "01b4ec77-cc42-4ef1-be0a-acf304d32545",
            "parentUuid" : "d0c2057e-b064-45e2-9554-6d7430f956d8",
            "entityUuid" : "449182de-f2cf-4b6b-ac1e-d9a6521956aa",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "235bfd4a-0a4d-4252-8d9f-157c9dc6173c",
            "parentUuid" : "d0c2057e-b064-45e2-9554-6d7430f956d8",
            "entityUuid" : "bdd1b2af-7132-418a-8577-0773b3411b46",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ba6d5925-989f-4ae5-ae9f-cb4cb6c38532",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "7af003ca-ecc4-49fc-a7a7-b08cb380855e",
            "title" : "Platelets [×10⁹/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "037a4a06-0af4-4a56-9940-1b459dc3443e",
            "parentUuid" : "7af003ca-ecc4-49fc-a7a7-b08cb380855e",
            "entityUuid" : "d771028b-685c-4f18-986c-ed63e64c36d6",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ede176f6-711f-4850-81c6-e24154dc88db",
            "parentUuid" : "7af003ca-ecc4-49fc-a7a7-b08cb380855e",
            "entityUuid" : "a6af56b1-8b3a-4d03-9bc2-ec3f053401fe",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "41e4e02f-3735-4359-9b26-c41d59f471d6",
            "parentUuid" : "d771028b-685c-4f18-986c-ed63e64c36d6",
            "entityUuid" : "8803ef6c-bc42-4355-92de-e931b6e6252a",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d82ba811-cfe8-4785-a178-de4872beee8e",
            "parentUuid" : "d771028b-685c-4f18-986c-ed63e64c36d6",
            "entityUuid" : "834c51cf-4146-498b-b3c6-64491851f1ca",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e99474d4-4740-4ee2-b474-fdf505295e5b",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "5f1fa669-a73f-442a-a017-ca9fd2ce38ed",
            "title" : "APTT/APTR",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "190c8885-18c0-40f8-b119-5a436c6dff69",
            "parentUuid" : "5f1fa669-a73f-442a-a017-ca9fd2ce38ed",
            "entityUuid" : "a967935f-b843-463a-9b32-19d324313705",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2706c15e-af7c-441e-95e5-6d89edfe9204",
            "parentUuid" : "5f1fa669-a73f-442a-a017-ca9fd2ce38ed",
            "entityUuid" : "7221741f-2efe-401c-b702-7a803059c141",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6e0616f1-2246-4b2b-9560-1cdae25421a5",
            "parentUuid" : "a967935f-b843-463a-9b32-19d324313705",
            "entityUuid" : "272c2dee-b043-4515-b124-9b58e5807fde",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bcfc85cf-2587-4df4-b7cf-c5ca976afdb9",
            "parentUuid" : "a967935f-b843-463a-9b32-19d324313705",
            "entityUuid" : "9c78be04-44f2-4932-a8fa-f04a9dc1c957",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3a030985-db6a-419d-bf34-86f7939a8e77",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "c6ae3c19-6e4f-44a4-9565-2a7ac80c4abd",
            "title" : "PT [seconds]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "37745d9b-0be8-4d83-bfcf-2ee90102255c",
            "parentUuid" : "c6ae3c19-6e4f-44a4-9565-2a7ac80c4abd",
            "entityUuid" : "f4935357-560f-4a68-9a20-206927381438",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "46a511f5-d396-431d-af26-ec935b7e0a0c",
            "parentUuid" : "c6ae3c19-6e4f-44a4-9565-2a7ac80c4abd",
            "entityUuid" : "dde0b0f6-f554-429a-bf62-9eb340610393",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "48899b1f-cfa8-449b-8e13-4e91b5340634",
            "parentUuid" : "f4935357-560f-4a68-9a20-206927381438",
            "entityUuid" : "95ddae00-3069-4944-82b1-d6f773caf8f8",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "dddefe0b-7dd1-4e8b-b8a8-1cf08ecbf011",
            "parentUuid" : "f4935357-560f-4a68-9a20-206927381438",
            "entityUuid" : "0d778bda-d9f8-4efd-9e12-1d4643ae7df8",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b12b8e8f-638f-45ec-a1ca-cf1b33dee8d5",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "2a207d77-e81e-4fed-a7e1-66def50bac7a",
            "title" : "INR",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bbb2620e-2afb-4f12-b5a3-bbae6fadd142",
            "parentUuid" : "2a207d77-e81e-4fed-a7e1-66def50bac7a",
            "entityUuid" : "6a3b4667-1708-4150-a54f-ab781dfdea34",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cfb20ed4-7b84-4508-80ac-9d644f9fb60c",
            "parentUuid" : "2a207d77-e81e-4fed-a7e1-66def50bac7a",
            "entityUuid" : "4fab0dc8-05a1-4a54-a0d7-5aaf3fa6fe3e",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0acdadc7-8a8a-4bef-ae74-58c644406276",
            "parentUuid" : "6a3b4667-1708-4150-a54f-ab781dfdea34",
            "entityUuid" : "7cf56154-052a-432e-8a40-a6202c4fc12a",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "54822f4c-a0bc-4149-8c3e-19bdabea8616",
            "parentUuid" : "6a3b4667-1708-4150-a54f-ab781dfdea34",
            "entityUuid" : "c8274c96-7454-4673-8410-f32f52771597",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "98105a55-797d-48fb-85a2-12732e27b809",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "97992a14-6b00-4dc6-915d-373044803bb0",
            "title" : "ALT/SGPT [U/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d6c080b8-5037-4f84-8262-95086183f405",
            "parentUuid" : "97992a14-6b00-4dc6-915d-373044803bb0",
            "entityUuid" : "5ac6c629-607f-423b-8af2-cb1f3bb67958",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d57d31ee-dbf1-4441-8e69-23e6758f90c4",
            "parentUuid" : "97992a14-6b00-4dc6-915d-373044803bb0",
            "entityUuid" : "40133433-bb77-431e-b081-e0eaceaa597c",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e52a83ba-6af9-404d-b87a-e75bacc74c21",
            "parentUuid" : "5ac6c629-607f-423b-8af2-cb1f3bb67958",
            "entityUuid" : "cbd5af04-e096-450f-9cd9-645139b0071b",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "98ba3ad1-e216-445e-bdea-0d1ccdafd4ec",
            "parentUuid" : "5ac6c629-607f-423b-8af2-cb1f3bb67958",
            "entityUuid" : "c3ef6718-e0e8-4d0a-85f6-850e55f512b7",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "21b8adb7-706f-4efe-a999-7ba39f656cfa",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "8504e677-9ca9-4d78-8d5c-41aeaeb3b956",
            "title" : "Total bilirubin [µmol/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e69bc7ee-b172-4eae-9203-e8ad18ecd907",
            "parentUuid" : "8504e677-9ca9-4d78-8d5c-41aeaeb3b956",
            "entityUuid" : "95d23acd-5deb-4b08-a0ce-b4a82ca0cbcb",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1bab502d-b9b0-4d13-a72b-9556671ddac8",
            "parentUuid" : "8504e677-9ca9-4d78-8d5c-41aeaeb3b956",
            "entityUuid" : "0a2abde1-e347-481b-8dbd-39168a87624f",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "5609d3ab-a693-495c-b53f-b3dd43096b60",
            "parentUuid" : "95d23acd-5deb-4b08-a0ce-b4a82ca0cbcb",
            "entityUuid" : "fb7fefc4-1f6e-45e0-b9b5-2fe3748422dd",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fc47ef33-545a-40a2-b252-8ade293a09c2",
            "parentUuid" : "95d23acd-5deb-4b08-a0ce-b4a82ca0cbcb",
            "entityUuid" : "49adf884-fdf5-4ce6-9a72-a6ca4e187756",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e1332e25-0ce9-422a-b7eb-6d4c76fef730",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "b026492a-0322-4122-83e6-460905c8ea84",
            "title" : "AST/SGOT [U/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "18ce3d99-a112-4c05-ac5e-eed4b0dd14b5",
            "parentUuid" : "b026492a-0322-4122-83e6-460905c8ea84",
            "entityUuid" : "0c03a9c5-7bfc-47c1-a4ff-59046572f39a",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cd0820ff-ff38-4945-b53a-7a503309a3cb",
            "parentUuid" : "b026492a-0322-4122-83e6-460905c8ea84",
            "entityUuid" : "1401ccd5-d9b1-46cd-bd6d-1624a9bc3e90",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "36e7fefe-f02f-4139-bcd2-00ddf5bb38bb",
            "parentUuid" : "0c03a9c5-7bfc-47c1-a4ff-59046572f39a",
            "entityUuid" : "ec56a32d-5124-46e0-a3ec-6eb0740e7dc2",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "43347e3b-6cd0-4662-a529-6c6e1ec8b742",
            "parentUuid" : "0c03a9c5-7bfc-47c1-a4ff-59046572f39a",
            "entityUuid" : "6d655d1d-2c18-4390-9a9c-5f1dc1213cca",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5a81913d-77c0-4297-a203-149d2b645561",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "6f91db34-ebcf-4573-a149-68984ebf9bcb",
            "title" : "Urea (BUN) [mmol/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "34113a38-d864-41bc-b195-f9e8e0e5558c",
            "parentUuid" : "6f91db34-ebcf-4573-a149-68984ebf9bcb",
            "entityUuid" : "fa4f4883-4d7b-440c-b42d-96736107b2de",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "105ab42d-54ad-44c9-99e7-ca7008a4875b",
            "parentUuid" : "6f91db34-ebcf-4573-a149-68984ebf9bcb",
            "entityUuid" : "e1fe96c8-8465-43c2-a723-993c10f93d92",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cbacc66a-580e-499c-af08-3ae6c90d3dc9",
            "parentUuid" : "fa4f4883-4d7b-440c-b42d-96736107b2de",
            "entityUuid" : "d710a8c6-13c7-4c01-86c6-b5d8cff1a716",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4f24529b-3713-458b-9045-8d093085e9e7",
            "parentUuid" : "fa4f4883-4d7b-440c-b42d-96736107b2de",
            "entityUuid" : "11abf511-5906-4180-8d5b-e87781242613",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "651d1529-9f05-499b-b6ee-52c8bdaee896",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "2fd3a9ad-97df-44a8-b580-3b679ebdec22",
            "title" : "Lactate [mmol/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f3f5b845-1e55-4de8-a09d-30c91f964ff9",
            "parentUuid" : "2fd3a9ad-97df-44a8-b580-3b679ebdec22",
            "entityUuid" : "7a0cf995-ab01-471d-9247-c03ab078309f",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "79ca5aea-8132-4a67-98f6-8e8b8e596445",
            "parentUuid" : "2fd3a9ad-97df-44a8-b580-3b679ebdec22",
            "entityUuid" : "d8d333cb-9df2-4fbe-9303-862d5403a29d",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6bd9a9ad-2330-43ea-b07f-d638a0fbc8b0",
            "parentUuid" : "7a0cf995-ab01-471d-9247-c03ab078309f",
            "entityUuid" : "6d0d30a4-8c79-43cd-8d12-30b59abf3b72",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a33a11a5-a679-4198-95de-445fe050325d",
            "parentUuid" : "7a0cf995-ab01-471d-9247-c03ab078309f",
            "entityUuid" : "fd6c6a88-bc60-483e-94e9-22db17721ad2",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f5b67eb0-b666-42a4-9574-3af0ca45b537",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "896da12f-c51b-4738-8b88-97f09abf2bd8",
            "title" : "Creatinine [μmol/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "76d5a3ad-6d2b-41e5-a856-17392ddb5319",
            "parentUuid" : "896da12f-c51b-4738-8b88-97f09abf2bd8",
            "entityUuid" : "5b8582c7-9bc7-4015-a753-919aff5edbd3",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d66ced5b-ebeb-43d4-b981-a82997bc856e",
            "parentUuid" : "896da12f-c51b-4738-8b88-97f09abf2bd8",
            "entityUuid" : "e35f1e57-3bed-446f-9634-f5646407e380",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "76a24d48-c66a-4d89-b73b-4b73c7fe4c7b",
            "parentUuid" : "5b8582c7-9bc7-4015-a753-919aff5edbd3",
            "entityUuid" : "15f8cd5b-cf20-4d2c-819b-02f4f2afd669",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fa98ad57-b60a-4875-a3d2-e93cd4d27158",
            "parentUuid" : "5b8582c7-9bc7-4015-a753-919aff5edbd3",
            "entityUuid" : "65f0b7f1-18b1-4215-a364-52f356ad2709",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "9d1ca7b8-c932-4738-9b8c-fb58a991dd5d",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "a0f23d41-fbb3-4f98-beaa-9a92189314bf",
            "title" : "Sodium [mEq/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a5f0ffed-ba05-4de5-822d-6333bff00bcd",
            "parentUuid" : "a0f23d41-fbb3-4f98-beaa-9a92189314bf",
            "entityUuid" : "9b7981c9-f2d5-4c8a-83f2-c51d4d1711ed",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b97464ca-faf7-4242-b5ce-d1080272927f",
            "parentUuid" : "a0f23d41-fbb3-4f98-beaa-9a92189314bf",
            "entityUuid" : "962088c0-1a6f-4c17-bd71-f144d513c777",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0bd40642-eb30-4144-b0dd-426b7e88bb8d",
            "parentUuid" : "9b7981c9-f2d5-4c8a-83f2-c51d4d1711ed",
            "entityUuid" : "93b69ea5-c54b-4e49-9c1c-9ecad77a35ab",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "23d55f8f-6e9e-4fa2-92ff-53b0305c2203",
            "parentUuid" : "9b7981c9-f2d5-4c8a-83f2-c51d4d1711ed",
            "entityUuid" : "a757cf90-d270-445e-9d1d-460274183bdb",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "dcf414dd-9999-43b9-aec3-9bb294664e22",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "4699c94a-f941-4c97-b061-45d86c12d4b0",
            "title" : "Potassium [mEq/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "363c4b39-255b-435f-b4ad-0a765a4cf784",
            "parentUuid" : "4699c94a-f941-4c97-b061-45d86c12d4b0",
            "entityUuid" : "471a077a-8a4c-4d0d-8e6b-d3966d6f3ed1",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8d302ff2-599e-4deb-b33e-5871feaa1101",
            "parentUuid" : "4699c94a-f941-4c97-b061-45d86c12d4b0",
            "entityUuid" : "42ff540f-72af-4df9-9948-8dce2ef52351",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "628b7665-344e-4ddd-9298-2ced8a748065",
            "parentUuid" : "471a077a-8a4c-4d0d-8e6b-d3966d6f3ed1",
            "entityUuid" : "e0ef4b78-29d1-49aa-a4f8-c5b9385fe686",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "99e7df25-7cd4-42a8-a3d3-380fe94002cb",
            "parentUuid" : "471a077a-8a4c-4d0d-8e6b-d3966d6f3ed1",
            "entityUuid" : "95e4f1d1-4d53-44a5-a784-dd5b87b7e6fd",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7b4d87de-3ffd-44ce-b965-22afec15e936",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "43d67744-219d-4d5f-9d5d-a0405431b84b",
            "title" : "Procalcitonin [ng/mL]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "37c3a235-d54a-485f-822e-364346b18599",
            "parentUuid" : "43d67744-219d-4d5f-9d5d-a0405431b84b",
            "entityUuid" : "e00fcdcc-74e2-4a59-98d5-5ceebf14e85d",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b614fd7e-3563-47ef-83a4-8868a8b30c8e",
            "parentUuid" : "43d67744-219d-4d5f-9d5d-a0405431b84b",
            "entityUuid" : "689480a8-2ae3-4ef5-87e5-b92f3def81cb",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b6c25089-f51a-4ac5-a8c0-04f3436340f5",
            "parentUuid" : "e00fcdcc-74e2-4a59-98d5-5ceebf14e85d",
            "entityUuid" : "db6663f1-5103-4342-8469-381da87424f4",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "04460f7d-24ce-4c10-8310-e6e16eba115c",
            "parentUuid" : "e00fcdcc-74e2-4a59-98d5-5ceebf14e85d",
            "entityUuid" : "e8a1d938-2712-42f6-bbc0-4bc32ed31894",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "aa0f3461-f4b2-452b-a3f7-9282cebb7d22",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "a1b16acb-0a28-4567-9c57-c87a8d71956c",
            "title" : "CRP [mg/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2872533c-de78-49f9-96fc-9548d755c72d",
            "parentUuid" : "a1b16acb-0a28-4567-9c57-c87a8d71956c",
            "entityUuid" : "1ca82c2a-8129-4821-acdc-abe6905d92fe",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7ab8f524-4fcb-4817-867c-23eec678a170",
            "parentUuid" : "a1b16acb-0a28-4567-9c57-c87a8d71956c",
            "entityUuid" : "eb23ed30-97e9-40c2-99e5-adbaba2b505a",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "20ac4290-12d5-4aa1-94d5-3c06480af411",
            "parentUuid" : "1ca82c2a-8129-4821-acdc-abe6905d92fe",
            "entityUuid" : "5d651fed-04c9-45d2-9581-8e6791447afd",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "19cee833-e6ce-48ee-8512-f986c0dcc60e",
            "parentUuid" : "1ca82c2a-8129-4821-acdc-abe6905d92fe",
            "entityUuid" : "2ab28a6b-43e0-42d2-a150-d2a513965d63",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "41b27670-a0e0-41e1-9e66-3b4946dd04d8",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "ed3f0067-808f-4c10-aa0c-38ca3bb0e7c7",
            "title" : "LDH [U/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c6a32597-0d9b-4bd0-89cb-f9c8a2c270a5",
            "parentUuid" : "ed3f0067-808f-4c10-aa0c-38ca3bb0e7c7",
            "entityUuid" : "88fe42bc-2388-4dae-9629-c8a332696f89",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "aea5be2b-38f3-4eeb-9481-2f50fc0b794a",
            "parentUuid" : "ed3f0067-808f-4c10-aa0c-38ca3bb0e7c7",
            "entityUuid" : "47d8e602-d226-4f88-b586-0366377094a5",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9991a0cb-cfaf-465f-9498-96b0ce68fb0a",
            "parentUuid" : "88fe42bc-2388-4dae-9629-c8a332696f89",
            "entityUuid" : "a6bee192-1570-4160-a337-d9e0cfe5955c",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6b219eba-17f6-45a6-9fee-2032d09d8b85",
            "parentUuid" : "88fe42bc-2388-4dae-9629-c8a332696f89",
            "entityUuid" : "30458509-ae83-4f19-99ae-97b73b8a31bd",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d30b6851-cd72-4c70-8e84-007a224e4d16",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "6425fd5c-01cb-4724-9565-edbfd67d9e63",
            "title" : "Creatine kinase [U/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3ab48209-4406-48c5-bee6-1e539057f952",
            "parentUuid" : "6425fd5c-01cb-4724-9565-edbfd67d9e63",
            "entityUuid" : "b6af59b3-5977-425e-a4db-b7536bb03f50",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ae6264ae-f4c6-421f-82a0-c5e2e7d0ba80",
            "parentUuid" : "6425fd5c-01cb-4724-9565-edbfd67d9e63",
            "entityUuid" : "f0966e54-5a25-4b4f-8a6c-99c0bc80b66e",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ffe335b4-0183-496e-a5b2-0a2b17255300",
            "parentUuid" : "b6af59b3-5977-425e-a4db-b7536bb03f50",
            "entityUuid" : "1c035bfd-a5e9-432c-9f22-f9b7a27df356",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f42ef6f9-e3d2-4acd-9afd-ab1998581255",
            "parentUuid" : "b6af59b3-5977-425e-a4db-b7536bb03f50",
            "entityUuid" : "4c527033-0474-4dc4-973c-cd1550995c2f",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5511354b-d2c7-4913-9cc8-4184984cec51",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "f921614d-c464-4c58-a961-e48da113b86b",
            "title" : "Troponin [ng/mL]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4dac9c94-4538-41c9-bfec-67386d8d915d",
            "parentUuid" : "f921614d-c464-4c58-a961-e48da113b86b",
            "entityUuid" : "c41bd2b3-be4e-40cc-a4ae-d55b1ce659d6",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5195d982-a140-45dd-bae7-46cfa4bf9d43",
            "parentUuid" : "f921614d-c464-4c58-a961-e48da113b86b",
            "entityUuid" : "dc8e4c2c-17b3-4b58-9ea2-928e0d69bb02",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d265150e-9fd3-48c8-ac91-d31e7ac4ca91",
            "parentUuid" : "c41bd2b3-be4e-40cc-a4ae-d55b1ce659d6",
            "entityUuid" : "20248677-dfd1-4ecf-9f92-2be9a0db625f",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1d1f2a9d-90c6-45a0-9e3a-34d8606a4d28",
            "parentUuid" : "c41bd2b3-be4e-40cc-a4ae-d55b1ce659d6",
            "entityUuid" : "870b5793-3631-4252-b43d-569e6ff1044a",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "cc072bd7-c979-4a5e-ab47-0e4559f93894",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "dfb26786-39c9-43a3-9225-682da9923fa1",
            "title" : "ESR [mm/hr]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "86d3f1ac-d829-40a2-8340-3003bbbda8a4",
            "parentUuid" : "dfb26786-39c9-43a3-9225-682da9923fa1",
            "entityUuid" : "188fcab6-a0e1-4f37-a075-ad4546693e19",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "29039f64-1cba-4940-9e2f-e76bbced4a2c",
            "parentUuid" : "dfb26786-39c9-43a3-9225-682da9923fa1",
            "entityUuid" : "eac7d00d-e5d3-4afa-8a31-d4a1063f03a9",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1962efd7-3933-48a6-8d5e-f38f70380f68",
            "parentUuid" : "188fcab6-a0e1-4f37-a075-ad4546693e19",
            "entityUuid" : "5b7b64e1-e38a-4a7b-a09c-24c535ba5c2b",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "928e2709-8ce5-430b-9864-fb16d599a1c4",
            "parentUuid" : "188fcab6-a0e1-4f37-a075-ad4546693e19",
            "entityUuid" : "a28af82c-de84-44e4-b3af-69db9cccd70b",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "38f65887-5df1-43a0-b5c9-6c3e867a5a77",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "87e10680-a2f2-467a-b47a-3f6c3bf7ef35",
            "title" : "D-dimer [mg/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4fe0327b-5cb9-4b87-a05a-a982101ffa42",
            "parentUuid" : "87e10680-a2f2-467a-b47a-3f6c3bf7ef35",
            "entityUuid" : "ca970f62-3695-4bbc-91ce-22eadefbcbbd",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "751d6489-a7f4-4d06-bb44-10b7c6f389d8",
            "parentUuid" : "87e10680-a2f2-467a-b47a-3f6c3bf7ef35",
            "entityUuid" : "ed587ed9-d989-41e9-9e6f-bd798d287e0a",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "59e72e36-fb0c-4e53-bf4d-93c04ed0daa1",
            "parentUuid" : "ca970f62-3695-4bbc-91ce-22eadefbcbbd",
            "entityUuid" : "bdd53c30-feef-419c-ae3a-ac31f8ffcbfc",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a6ca507c-9edd-4b49-af00-4854456e4581",
            "parentUuid" : "ca970f62-3695-4bbc-91ce-22eadefbcbbd",
            "entityUuid" : "48d58da4-f55e-49a7-af35-5ee286420fc8",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e829378c-fee1-4b17-9643-e8b94951b9e7",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "2c6f723a-4834-4b2c-bb7b-f3dc4754e734",
            "title" : "Ferritin [ng/mL]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "04916ad4-6b0f-4663-8873-71eed7bd2289",
            "parentUuid" : "2c6f723a-4834-4b2c-bb7b-f3dc4754e734",
            "entityUuid" : "cb18d9e4-f5b8-4909-84b9-250dfd4688b5",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ec8a1d9d-9797-4081-a533-5c05cf4774d4",
            "parentUuid" : "2c6f723a-4834-4b2c-bb7b-f3dc4754e734",
            "entityUuid" : "7cadb15d-e5ee-484f-9e1e-b0240fda2635",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b4fd64d7-a998-4473-a9b7-0bc342ab4df0",
            "parentUuid" : "cb18d9e4-f5b8-4909-84b9-250dfd4688b5",
            "entityUuid" : "cd2d77ea-040e-47bc-b2e5-c0496654e793",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8b67d44d-bc99-4eee-9cb6-70ee0fe01d81",
            "parentUuid" : "cb18d9e4-f5b8-4909-84b9-250dfd4688b5",
            "entityUuid" : "a300e2cd-3ebc-4aa9-8315-0034078167fc",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8b4c0219-869f-4270-a66e-63d007719c0c",
            "parentUuid" : "bb677473-a386-4729-b9c3-0cd5d14e1856",
            "entityUuid" : "d3b8a09d-67d6-4161-ac6b-30e9568362fc",
            "title" : "IL-6 [pg/mL]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "514f3d7d-5fbb-4c05-96f0-a43142a200a9",
            "parentUuid" : "d3b8a09d-67d6-4161-ac6b-30e9568362fc",
            "entityUuid" : "ecbc2916-89dc-443a-9af8-85eca3cab650",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c0727874-e742-4444-9db7-0d0cbca692ad",
            "parentUuid" : "d3b8a09d-67d6-4161-ac6b-30e9568362fc",
            "entityUuid" : "cda85265-ee8f-49c1-9308-0045a1ee06ef",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "eded4558-a316-4d63-9bc3-1e2463ba04c4",
            "parentUuid" : "ecbc2916-89dc-443a-9af8-85eca3cab650",
            "entityUuid" : "acf28346-ea21-44ea-9b8b-9adc91060b3d",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ced7b6b9-18c2-4920-87c0-634748e80eb6",
            "parentUuid" : "ecbc2916-89dc-443a-9af8-85eca3cab650",
            "entityUuid" : "a6cf2efd-d185-4d06-9477-e360a6397e34",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "cf6e506c-590e-4292-b966-d3d640f04797",
            "parentUuid" : "44052a8a-4f99-40bf-99f9-eb2f92b3a25c",
            "entityUuid" : "5daf5718-a491-404c-9b19-990fd03b06c8",
            "title" : "Module 2: Follow-up(s)",
            "text" : "Follow-up (frequency of completion determined by available resources)"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "3bab53d5-8c22-4d61-8471-956badfd6a3a",
            "parentUuid" : "5daf5718-a491-404c-9b19-990fd03b06c8",
            "entityUuid" : "130c27a4-ace8-45bd-b82d-611837c69e67",
            "title" : "Follow-ups",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "73e2fb2e-0be0-4a37-88d6-41902f629826",
            "parentUuid" : "130c27a4-ace8-45bd-b82d-611837c69e67",
            "entityUuid" : "ffa0dc72-2b51-49a4-ba76-72361fcaca88",
            "title" : "Date of follow-up",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "DateQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "51792832-2831-475f-99d1-3b04db10fb6b",
            "parentUuid" : "130c27a4-ace8-45bd-b82d-611837c69e67",
            "entityUuid" : "9cf1fe99-99f4-40aa-820a-c8e495fcb409",
            "title" : "Vital signs",
            "text" : "Record most abnormal value between 00:00 to 24:00",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0d69d2f9-9293-479f-9885-1f2be06d7c01",
            "parentUuid" : "9cf1fe99-99f4-40aa-820a-c8e495fcb409",
            "entityUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "397e8b33-1624-4c84-826a-24658ec9ffe1",
            "parentUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "entityUuid" : "7eab9a30-c950-418e-8b04-4c75c8526dab",
            "title" : "Temperature [°C]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "58f0f0dc-576c-4b3b-a9f8-de60bdc2e379",
            "parentUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "entityUuid" : "51989592-519f-4445-8a52-8cfb3c319f31",
            "title" : "Heart rate [beats/min]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "286a0733-2216-443a-98bb-21451e84cfb9",
            "parentUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "entityUuid" : "e1d42490-1a7e-4a7e-89f9-9129fb5d4d9a",
            "title" : "Respiratory rate [breaths/min]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "44281400-0a77-4a26-9f4a-e08cf56e7047",
            "parentUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "entityUuid" : "137f0136-d2d7-4973-8a2a-36c4cd0ac2a8",
            "title" : "Blood preassure (systolic) [mmHg]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "7ebc2f74-d3af-4c08-9a28-815567e48784",
            "parentUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "entityUuid" : "56a45496-f871-4a6d-92dd-87d5b710ebb3",
            "title" : "Blood preassure (diastolic) [mmHg]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0795aa25-1e5b-41b2-b249-42728f78ab8d",
            "parentUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "entityUuid" : "25715e41-eb33-4463-9217-6e59f3a8df6e",
            "title" : "Severe dehydration",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3510fc20-0f08-42c6-9475-e0c92baebfdd",
            "parentUuid" : "25715e41-eb33-4463-9217-6e59f3a8df6e",
            "entityUuid" : "fb902a71-3aa6-4a57-a25f-74e11af01e02",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "214761a4-0d9c-4cc2-8d9c-becd484d6064",
            "parentUuid" : "25715e41-eb33-4463-9217-6e59f3a8df6e",
            "entityUuid" : "921c4613-e25f-460c-b1d5-6b973ea2f444",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6c958c17-597b-4c77-8ff1-e79615c7384b",
            "parentUuid" : "25715e41-eb33-4463-9217-6e59f3a8df6e",
            "entityUuid" : "ba795b53-e4ea-4387-bda2-aab3e33c8aa3",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "699cc844-d6f4-4e1c-b64c-b0f8a4e230db",
            "parentUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "entityUuid" : "b2608593-4c34-4b30-903c-a95b2d050527",
            "title" : "Sternal capillary refill time >2seconds",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "561e2c1f-3759-4be3-a506-7b934f2347eb",
            "parentUuid" : "b2608593-4c34-4b30-903c-a95b2d050527",
            "entityUuid" : "0dc78a3e-313d-4283-89eb-569a29f965cd",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6116e406-7dcd-40af-8736-243b5f9b103f",
            "parentUuid" : "b2608593-4c34-4b30-903c-a95b2d050527",
            "entityUuid" : "af0825ac-c66c-47ec-8f75-a6fb0ad1c1ec",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "34bcec84-1b4b-48d4-b0f4-713a317e8219",
            "parentUuid" : "b2608593-4c34-4b30-903c-a95b2d050527",
            "entityUuid" : "ad2ab9a0-4163-4736-8488-ca40afbbc070",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "39901ca8-117f-4f30-8406-9e4861d6ab68",
            "parentUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "entityUuid" : "a3a52c0c-c02e-4230-b0fc-6f831d680530",
            "title" : "Glasgow Coma Score (GCS/15)",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "dc666afb-17d5-4ca2-957a-c4da449fbe1a",
            "parentUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "entityUuid" : "cca3f201-13c4-4a92-ba78-a6c91d607220",
            "title" : "Oxygen saturation (value) [%]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "23c29865-9d2d-40b2-9271-3882c3960604",
            "parentUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "entityUuid" : "ada7404d-a678-4754-bbc2-103d1e702b4d",
            "title" : "Oxygen saturation (condition)",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "604c5846-bf08-4add-a42e-493324cb6705",
            "parentUuid" : "ada7404d-a678-4754-bbc2-103d1e702b4d",
            "entityUuid" : "4a65ff92-398a-4a14-a242-949ad3043fe1",
            "label" : "Room air",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "445022c5-0b0f-461b-9352-56c4f35a25a0",
            "parentUuid" : "ada7404d-a678-4754-bbc2-103d1e702b4d",
            "entityUuid" : "a77ed684-c7a5-43c9-be54-5e08dbbd1f77",
            "label" : "Oxygen therapy",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6b72681e-d8d2-4f0d-b868-1f454e826b6b",
            "parentUuid" : "ada7404d-a678-4754-bbc2-103d1e702b4d",
            "entityUuid" : "c844b503-cc1b-4210-9554-c20c459823b1",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "861f7153-9d4d-402b-abfa-7ceef4cb8364",
            "parentUuid" : "c04c6d80-328e-4112-b3ba-1d7ec38f562f",
            "entityUuid" : "b82d68a2-012c-4dad-bea9-dce1a6522981",
            "title" : "AVPU scale",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "fc3b0804-1f4f-48b8-94eb-dbf560d918d5",
            "parentUuid" : "b82d68a2-012c-4dad-bea9-dce1a6522981",
            "entityUuid" : "4ec8aa25-7bce-415c-bbb3-25d20a1ca95a",
            "label" : "A (alert)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "63c6124d-3ceb-4378-a90d-a75f2d37cd2a",
            "parentUuid" : "b82d68a2-012c-4dad-bea9-dce1a6522981",
            "entityUuid" : "10b58f17-d2e8-4e60-b69d-13eed4f31881",
            "label" : "V (verbal)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3dd4eed4-9e09-4bd8-ad17-19536b772806",
            "parentUuid" : "b82d68a2-012c-4dad-bea9-dce1a6522981",
            "entityUuid" : "2703a157-18e2-4409-8bd9-08af89387d96",
            "label" : "P (pain)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3a3f4481-18ea-4265-a3d7-457a0e3a6cbe",
            "parentUuid" : "b82d68a2-012c-4dad-bea9-dce1a6522981",
            "entityUuid" : "164df721-fb9b-48e2-94aa-8df63312c8f0",
            "label" : "U (unresponsive)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7fd6e975-5242-4486-b883-94f05d0e25fb",
            "parentUuid" : "130c27a4-ace8-45bd-b82d-611837c69e67",
            "entityUuid" : "3335e3d4-315b-484c-b79a-82bc9f85e63a",
            "title" : "Daily clinical features",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0b8a9cb6-bc65-4cd4-b934-d051c6c7282e",
            "parentUuid" : "3335e3d4-315b-484c-b79a-82bc9f85e63a",
            "entityUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8a8a6cbf-39d5-4711-9a6c-075caec2a1d0",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "c8657f0d-68cf-419d-85f2-2481ba36e059",
            "title" : "Cough",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "038f94c7-6112-4146-8989-0bebfa78ab6c",
            "parentUuid" : "c8657f0d-68cf-419d-85f2-2481ba36e059",
            "entityUuid" : "9fb4f187-c1df-4682-8e83-2a4d61ce5dbd",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f97345f7-7855-4bd6-bd45-f544dad2ac83",
            "parentUuid" : "c8657f0d-68cf-419d-85f2-2481ba36e059",
            "entityUuid" : "77087326-df65-4b33-92ad-943a911149f3",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "72976925-1b87-41ad-8b15-3e4b3097a680",
            "parentUuid" : "c8657f0d-68cf-419d-85f2-2481ba36e059",
            "entityUuid" : "6d3e9200-d466-4116-a523-ec3b389c03c1",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0a8e883a-634d-424e-9ce0-bcf257868604",
            "parentUuid" : "9fb4f187-c1df-4682-8e83-2a4d61ce5dbd",
            "entityUuid" : "78309426-00e7-492a-a347-5790fee78372",
            "title" : "Cough with sputum production",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "98e7e17d-c701-421e-a926-82b7b9f39813",
            "parentUuid" : "78309426-00e7-492a-a347-5790fee78372",
            "entityUuid" : "2676866a-4637-430f-b820-5d173ed527fe",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5c2256f9-8af7-4dca-9fa1-08c20e06ea51",
            "parentUuid" : "78309426-00e7-492a-a347-5790fee78372",
            "entityUuid" : "e171fab7-687e-4a1e-966a-ea514b976d54",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a6a2a7c8-dd1e-465c-a623-3936fd728eab",
            "parentUuid" : "78309426-00e7-492a-a347-5790fee78372",
            "entityUuid" : "db278798-785d-423c-b4ae-c2f712b5395f",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5193a53e-6dda-4133-a1ef-8e09c1856834",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "c3bc9c00-f4f5-4cc1-99c8-8b9a71cc3ced",
            "title" : "Sore throat",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e51d9f01-7622-426b-9b06-e84f3840b0ce",
            "parentUuid" : "c3bc9c00-f4f5-4cc1-99c8-8b9a71cc3ced",
            "entityUuid" : "a61a465a-edd0-47c7-8c36-3680fe30c96d",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "179e7cbe-79d7-4f35-95d6-bc207a2ee799",
            "parentUuid" : "c3bc9c00-f4f5-4cc1-99c8-8b9a71cc3ced",
            "entityUuid" : "42ddba2e-258a-478e-9e60-7ee67ad01042",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ef1f2838-e6c6-4908-a5f3-aacc816b95fc",
            "parentUuid" : "c3bc9c00-f4f5-4cc1-99c8-8b9a71cc3ced",
            "entityUuid" : "0d475e14-8cf4-4684-b443-e5e3a69c4c4b",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d244a5e4-e495-400b-b374-bb01b07689e9",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "61ec2167-ada3-494b-8b50-5f119d48ed28",
            "title" : "Chest pain",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "726dd405-678a-450d-9b9a-c78d774e59e9",
            "parentUuid" : "61ec2167-ada3-494b-8b50-5f119d48ed28",
            "entityUuid" : "ad74a02f-2814-42e5-84e7-4461e754f292",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4b574a3d-5177-4ea3-8832-e274b3c4795a",
            "parentUuid" : "61ec2167-ada3-494b-8b50-5f119d48ed28",
            "entityUuid" : "b7b0da82-4bf3-4e58-a884-6d0b306a094b",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "164be26b-59df-4a31-b714-fba7bd341ecb",
            "parentUuid" : "61ec2167-ada3-494b-8b50-5f119d48ed28",
            "entityUuid" : "aa3ade6b-4c4c-4bdb-bc25-5fb46a24c200",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "42716c76-fcbd-427b-bd33-1aed6d5b6d98",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "5008b7ca-20a5-40ca-b825-98d072d0cddd",
            "title" : "Shortness of breath",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6d5b228e-59ba-40f1-9993-8ba76683ef71",
            "parentUuid" : "5008b7ca-20a5-40ca-b825-98d072d0cddd",
            "entityUuid" : "33816b12-2ff3-43eb-a1cb-39e32428ffea",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "55ffa1d0-221b-4620-adc0-c95ff3e3a424",
            "parentUuid" : "5008b7ca-20a5-40ca-b825-98d072d0cddd",
            "entityUuid" : "58640d1d-978a-421e-b3ce-ae84cba1f9d9",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e8e316a2-f575-48be-be57-a509846d7ec2",
            "parentUuid" : "5008b7ca-20a5-40ca-b825-98d072d0cddd",
            "entityUuid" : "06c629c6-a28e-4a2e-ad51-44c4c5f406e9",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "1ed23f4b-f901-4c87-91a0-f1c6030d66b3",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "0738703f-f7d7-4383-88ef-50ba909b6475",
            "title" : "Loss of taste",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "629ab16a-fee4-4de0-8ab8-110afc9327c5",
            "parentUuid" : "0738703f-f7d7-4383-88ef-50ba909b6475",
            "entityUuid" : "da0b8492-5188-46eb-bb6d-edf518db9b1e",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7336286e-53d6-4d42-8950-7cd0c2a4071c",
            "parentUuid" : "0738703f-f7d7-4383-88ef-50ba909b6475",
            "entityUuid" : "34effa21-3bfd-42f3-82b9-ea88bd579981",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3147ae62-e5f6-49c1-b887-4c4d184be4d8",
            "parentUuid" : "0738703f-f7d7-4383-88ef-50ba909b6475",
            "entityUuid" : "0b30fc6d-e9aa-465a-919a-3e2496730e99",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f5402cb8-2670-4f9c-85ab-410f5d9cd806",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "a7c945f8-2c25-4d8f-a097-9b4b645b7372",
            "title" : "Loss of smell",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "21646da4-cffe-422c-b1ad-f667598db65a",
            "parentUuid" : "a7c945f8-2c25-4d8f-a097-9b4b645b7372",
            "entityUuid" : "11fd9f66-ac78-4008-8aa9-781b62c7a714",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d4bb6b3f-a7bd-42f7-aef2-dd6b61402f15",
            "parentUuid" : "a7c945f8-2c25-4d8f-a097-9b4b645b7372",
            "entityUuid" : "379d1062-1b7a-4ed2-a2d0-34ad601fc7d7",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ff5e1089-7185-44fe-a17a-3e421330ea80",
            "parentUuid" : "a7c945f8-2c25-4d8f-a097-9b4b645b7372",
            "entityUuid" : "8a9cac2c-23b7-4bf5-8e25-93490d7722d7",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "618e8caf-cec4-47ce-9d0a-8967ca6365cd",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "f2f46706-9778-4dfc-89a9-dd10ae779964",
            "title" : "Confusion",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "abaf6fef-e4ef-46d4-a7f4-bead5e4c3dd1",
            "parentUuid" : "f2f46706-9778-4dfc-89a9-dd10ae779964",
            "entityUuid" : "68b3846e-fbda-4a82-a63c-997d679aaea6",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "531c831a-6923-401d-8c1d-8f3010f3515a",
            "parentUuid" : "f2f46706-9778-4dfc-89a9-dd10ae779964",
            "entityUuid" : "edc88dec-1f21-4252-b33a-b71439bbc7ee",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "df4c4e9f-05e4-41b4-819b-a152facd3d28",
            "parentUuid" : "f2f46706-9778-4dfc-89a9-dd10ae779964",
            "entityUuid" : "5156369e-7703-4207-9477-4ba021043449",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "cb597356-4142-4b4f-8f1f-5ff0475f208e",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "ea92ac14-65cc-4603-9f83-b6965e426baa",
            "title" : "Seizures",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e6eae77b-85a3-4044-a0ef-c28924957065",
            "parentUuid" : "ea92ac14-65cc-4603-9f83-b6965e426baa",
            "entityUuid" : "f883653c-8cf7-4073-9134-170a936d9e3c",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "96322436-ae6c-4afb-894b-7dfaa9ae3c09",
            "parentUuid" : "ea92ac14-65cc-4603-9f83-b6965e426baa",
            "entityUuid" : "f8102cac-cb1b-4cc5-87fa-c35004db716d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5a1ba698-b465-49f0-8834-bd512f95c92c",
            "parentUuid" : "ea92ac14-65cc-4603-9f83-b6965e426baa",
            "entityUuid" : "997df2ef-24b1-44d0-911c-8b780c0ae7ec",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "43cf419c-f872-454f-aef1-962163001249",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "26a630d0-c338-4d08-9907-50f8c983b659",
            "title" : "Vomiting / Nausea",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2827a87b-682b-45b4-a87f-c065822ec09b",
            "parentUuid" : "26a630d0-c338-4d08-9907-50f8c983b659",
            "entityUuid" : "b726dbbc-05cd-4201-801c-9ab75d6a35e7",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "638c04f6-a117-4ffe-9844-9cac27329be8",
            "parentUuid" : "26a630d0-c338-4d08-9907-50f8c983b659",
            "entityUuid" : "049e9a37-dfba-46de-a18c-d8ce851df0e9",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4451ba61-5fc7-4b41-aadd-d4a21e3527c2",
            "parentUuid" : "26a630d0-c338-4d08-9907-50f8c983b659",
            "entityUuid" : "47c140a6-1452-4992-8932-73a58cd73ecb",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8f665cce-7999-4c3b-9b43-56a1cef54a75",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "a3b88d79-a8c0-4aee-b220-9317e847072e",
            "title" : "Diarrhoea",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1dd5ee25-0e18-4650-8a36-a645fc9fb207",
            "parentUuid" : "a3b88d79-a8c0-4aee-b220-9317e847072e",
            "entityUuid" : "e7dc6a7c-5f1f-4f5b-bb4c-45d03c48000e",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "398539a4-e350-49f2-b4dd-ac9348648132",
            "parentUuid" : "a3b88d79-a8c0-4aee-b220-9317e847072e",
            "entityUuid" : "093f0d53-a6c3-477d-ba3e-e675c781b33e",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a4a0c09b-d755-4242-bb68-16a42bc6db83",
            "parentUuid" : "a3b88d79-a8c0-4aee-b220-9317e847072e",
            "entityUuid" : "8776d66d-62e3-4a14-ad45-bc600c361133",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "78756c3a-7646-4807-b939-c6db80c08f6d",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "071ea99d-9853-44c6-ac58-5a57c7533bf1",
            "title" : "Conjunctivitis",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6b09c057-4b41-4bca-95d5-ac8d9fddd4f0",
            "parentUuid" : "071ea99d-9853-44c6-ac58-5a57c7533bf1",
            "entityUuid" : "1bfceee6-9ad0-4bc5-969f-d97d7d16a92a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "371c58e9-eeb2-41ae-9f74-8a8bc2da8251",
            "parentUuid" : "071ea99d-9853-44c6-ac58-5a57c7533bf1",
            "entityUuid" : "10c50697-ab95-4b81-8fab-ce34f083c663",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "fa76598c-eeae-4b19-a142-1766eba28cd7",
            "parentUuid" : "071ea99d-9853-44c6-ac58-5a57c7533bf1",
            "entityUuid" : "d3e3300b-0037-42c9-bfc2-727794303214",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a3010b54-2bd4-451b-b963-e37d70541993",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "db351db0-0ccf-452b-9c8f-6b9171ccdea4",
            "title" : "Myalgia",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "50322f43-fa68-4a9a-874b-12219d4b6d17",
            "parentUuid" : "db351db0-0ccf-452b-9c8f-6b9171ccdea4",
            "entityUuid" : "9e61d7a1-dd9c-4fb4-95cb-25e53f573f33",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2ac4b76a-f2a0-4560-b357-69fdd3799529",
            "parentUuid" : "db351db0-0ccf-452b-9c8f-6b9171ccdea4",
            "entityUuid" : "9309c61f-0a30-4bca-b4cf-68cd15f0a010",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3d56b47e-4b15-48a9-b9f2-be2ce6a72466",
            "parentUuid" : "db351db0-0ccf-452b-9c8f-6b9171ccdea4",
            "entityUuid" : "2b896ae4-0649-4517-a296-9d4ada1b941e",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ee9397ce-e66a-4444-b0eb-cf59f0eb238e",
            "parentUuid" : "8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5",
            "entityUuid" : "3f89ed6f-63c2-4fe1-9c01-01b15b382ff7",
            "title" : "Other",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e064f802-2af8-455b-bba5-329bc9cd5519",
            "parentUuid" : "3f89ed6f-63c2-4fe1-9c01-01b15b382ff7",
            "entityUuid" : "de5af7ac-379c-44ee-a969-35639914eda9",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b2b0cb9a-16cd-4309-bac2-97e67df28c34",
            "parentUuid" : "3f89ed6f-63c2-4fe1-9c01-01b15b382ff7",
            "entityUuid" : "2c6b6804-86d9-4409-b731-3270286c4bc1",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "578cfe9c-12d4-445d-9bd3-fc903de9bc3b",
            "parentUuid" : "3f89ed6f-63c2-4fe1-9c01-01b15b382ff7",
            "entityUuid" : "a7ab19d9-b41d-4132-bb37-84eeb242b10d",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e654ca44-9511-460e-a4e4-b93e68bfe636",
            "parentUuid" : "de5af7ac-379c-44ee-a969-35639914eda9",
            "entityUuid" : "bbad7573-2bbd-485e-9eae-20b103feb2cf",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "83276930-77e7-4404-a539-bf974e245e80",
            "parentUuid" : "130c27a4-ace8-45bd-b82d-611837c69e67",
            "entityUuid" : "3202dada-b79f-4760-bc99-ce6eb0c98f17",
            "title" : "Laboraty results",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ed63b031-a88e-406b-80d9-d770df447213",
            "parentUuid" : "3202dada-b79f-4760-bc99-ce6eb0c98f17",
            "entityUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "83e31e67-ff05-49b9-a062-97c676a44310",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "c0532426-32c4-40ee-94b3-f9a4d611045d",
            "title" : "Haemoglobin [g/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "73c5272c-fe98-45cc-89ae-792583a9c3b8",
            "parentUuid" : "c0532426-32c4-40ee-94b3-f9a4d611045d",
            "entityUuid" : "f765a09a-2251-441f-b2c4-c4f8e0b0711d",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "258f136a-7a90-4ae3-9b44-ebd769f376c5",
            "parentUuid" : "c0532426-32c4-40ee-94b3-f9a4d611045d",
            "entityUuid" : "ffe2e37f-b734-4440-97bf-07c8426eba91",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "15ef1412-f65a-4b31-83a8-8bf896a9d516",
            "parentUuid" : "f765a09a-2251-441f-b2c4-c4f8e0b0711d",
            "entityUuid" : "b663b627-0897-40d6-ad5d-6c0642804ad1",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1f306f7a-8fb2-45ba-9671-75aacb4a81d1",
            "parentUuid" : "f765a09a-2251-441f-b2c4-c4f8e0b0711d",
            "entityUuid" : "4591a421-9933-498e-a502-3c446997f3e5",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "23f990e6-3032-465a-871e-5e3df514bab2",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "f5c58d0a-c2d6-43fb-9c61-84e72e5fd318",
            "title" : "WBC count [×10⁹/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "699a9bdf-25b2-452d-86a7-3fcfaa74b1b1",
            "parentUuid" : "f5c58d0a-c2d6-43fb-9c61-84e72e5fd318",
            "entityUuid" : "708c75e1-8060-47c3-b75a-df9184cc18e5",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8ba091af-ef6d-4564-853e-457b05c5a627",
            "parentUuid" : "f5c58d0a-c2d6-43fb-9c61-84e72e5fd318",
            "entityUuid" : "74bb9a00-c527-429b-8328-d1491ec1cdd4",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4a62ba79-ca94-4880-bc6d-ae7864cd5901",
            "parentUuid" : "708c75e1-8060-47c3-b75a-df9184cc18e5",
            "entityUuid" : "ed029f13-fc31-4c83-8823-7ff52f71b3e4",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d5354fff-7279-4b2b-8466-99337fb1cc3e",
            "parentUuid" : "708c75e1-8060-47c3-b75a-df9184cc18e5",
            "entityUuid" : "dd594528-d21d-4e95-85af-28930706cf3d",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2c2b9f04-6133-4d36-bd0a-de5b3d899fee",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "62899a9b-7311-4c08-8d59-720461ec299d",
            "title" : "Haematocrit [%]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "786cec2c-4a7a-42f4-a8ea-708dca6418a8",
            "parentUuid" : "62899a9b-7311-4c08-8d59-720461ec299d",
            "entityUuid" : "4ef4b085-45b5-44f0-bedb-fbf8fd2f60c1",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5b0ef5de-670b-4dfe-b816-5a1b3ddb3f9e",
            "parentUuid" : "62899a9b-7311-4c08-8d59-720461ec299d",
            "entityUuid" : "fb2592c8-fba8-481d-b759-97981152e300",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "dbf8097e-4e05-4042-ba45-a708f857c910",
            "parentUuid" : "4ef4b085-45b5-44f0-bedb-fbf8fd2f60c1",
            "entityUuid" : "59081d66-0c77-4ee4-9fb6-394f118e9778",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d35e6fd1-bb8d-47d7-b7d1-2780240601c2",
            "parentUuid" : "4ef4b085-45b5-44f0-bedb-fbf8fd2f60c1",
            "entityUuid" : "75393364-ef1b-4aff-bddc-e41823636389",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7ce022c8-70a6-4d4a-ab54-075b2402e01c",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "4ce02286-ecaa-423a-a664-3535f088f70d",
            "title" : "Platelets [×10⁹/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5e6c9d44-a094-4a55-8f0d-a20d4c31a0ac",
            "parentUuid" : "4ce02286-ecaa-423a-a664-3535f088f70d",
            "entityUuid" : "6640060a-59ee-4d56-bd61-c0ac597f8cd2",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9d9613b6-85d9-40d1-831d-d6b59259e902",
            "parentUuid" : "4ce02286-ecaa-423a-a664-3535f088f70d",
            "entityUuid" : "6ffa74a4-e005-41fe-a578-7dbb49d356de",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d5ea5298-2b23-44f1-ac8f-7660b6c0fa84",
            "parentUuid" : "6640060a-59ee-4d56-bd61-c0ac597f8cd2",
            "entityUuid" : "b16e7c59-a7f1-461d-981b-e7430c79436c",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ed312ba1-2354-4721-bd58-e0ab70826b3f",
            "parentUuid" : "6640060a-59ee-4d56-bd61-c0ac597f8cd2",
            "entityUuid" : "0354562f-7563-4c80-92a2-5a8eaf715a22",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "483c9060-4d22-4c6d-abcd-16b2d947ac8e",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "74beda65-f2c0-4277-a707-e6e50dbad371",
            "title" : "APTT/APTR",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "80d9a02e-7615-4540-9acc-c538f8a0776c",
            "parentUuid" : "74beda65-f2c0-4277-a707-e6e50dbad371",
            "entityUuid" : "165f0816-a297-4a00-8dc3-232208003338",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "669eba5c-450e-492a-b678-ad30239c0232",
            "parentUuid" : "74beda65-f2c0-4277-a707-e6e50dbad371",
            "entityUuid" : "2ea27007-32c1-4a17-a647-b6753c5bb07d",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "64d2f0d7-616d-41d5-9c67-ab8a963ab7e9",
            "parentUuid" : "165f0816-a297-4a00-8dc3-232208003338",
            "entityUuid" : "65555ea8-bfec-452b-a2a8-e9a1ecc8ae9b",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "925e725e-b628-45cb-8a5c-f3a45a4c73d0",
            "parentUuid" : "165f0816-a297-4a00-8dc3-232208003338",
            "entityUuid" : "e26db496-46ac-432f-afc3-81548022eef0",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "45f3cc33-0658-47d6-a49c-0a68e9918e89",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "1375dfc2-cc61-4b0d-9f6e-f250af5551ea",
            "title" : "PT [seconds]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f47c8b15-4c1a-4e39-9b19-840dda998a0a",
            "parentUuid" : "1375dfc2-cc61-4b0d-9f6e-f250af5551ea",
            "entityUuid" : "42eb78c5-439a-4a2d-bd20-9ff24a7a10aa",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "585d0d4f-0c04-48cc-ad11-ae8dd7092b6a",
            "parentUuid" : "1375dfc2-cc61-4b0d-9f6e-f250af5551ea",
            "entityUuid" : "0ee40e14-ccd1-42f6-aeae-a7a764622d42",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1937a1e4-c150-462c-a807-504fa26651ce",
            "parentUuid" : "42eb78c5-439a-4a2d-bd20-9ff24a7a10aa",
            "entityUuid" : "d1ef1206-f996-40da-9dad-f5f1ac785f69",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "23eda8c0-e910-4b38-9f35-316efe087ebe",
            "parentUuid" : "42eb78c5-439a-4a2d-bd20-9ff24a7a10aa",
            "entityUuid" : "a649b16d-83e5-4382-80ee-f05757250ecd",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8b2f24f0-f1e8-4478-9061-961721c80357",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "ebda164e-ba2c-4f12-9ef4-54262aa09095",
            "title" : "INR",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9af0e8ea-d616-4876-a906-f757825045b2",
            "parentUuid" : "ebda164e-ba2c-4f12-9ef4-54262aa09095",
            "entityUuid" : "8a9d6fe4-e358-4436-8055-3e25b8210566",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "19c4e79c-7221-47c3-8b47-725890c76a49",
            "parentUuid" : "ebda164e-ba2c-4f12-9ef4-54262aa09095",
            "entityUuid" : "15117faf-f3e2-40af-a6c3-a0e7f7cd6039",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "31c015ed-fd67-48a7-92f1-4385ae801e24",
            "parentUuid" : "8a9d6fe4-e358-4436-8055-3e25b8210566",
            "entityUuid" : "760de96d-0a19-4f33-bee3-02bf0b6f2f62",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9ef76da1-9746-4d91-8c33-ced0756232cc",
            "parentUuid" : "8a9d6fe4-e358-4436-8055-3e25b8210566",
            "entityUuid" : "e6e4bbbb-2e9f-4127-847e-02ffa91a639c",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4bd0293d-b893-46e8-8ea0-4b74a6e29ed2",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "bab7677e-e3a5-48e9-baba-2232372f2916",
            "title" : "ALT/SGPT [U/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "958d9cf8-1cc5-4416-a22a-d8b82bb6e556",
            "parentUuid" : "bab7677e-e3a5-48e9-baba-2232372f2916",
            "entityUuid" : "d82e8f65-0aa7-4e45-8092-a1ba51f4fa08",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2fac49bc-df26-4826-a955-f6203615b3e7",
            "parentUuid" : "bab7677e-e3a5-48e9-baba-2232372f2916",
            "entityUuid" : "1d136364-843c-498d-8019-eb7f441c4d41",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "59a172ec-0e2e-4407-b2fd-3c6941d88ab2",
            "parentUuid" : "d82e8f65-0aa7-4e45-8092-a1ba51f4fa08",
            "entityUuid" : "d19f6fb0-4139-4a25-abb1-6079ad8a330c",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "859dd22c-abbc-4a92-a48d-f7953bc8ac7e",
            "parentUuid" : "d82e8f65-0aa7-4e45-8092-a1ba51f4fa08",
            "entityUuid" : "dab30624-a51c-4d28-9311-4706870a7c1c",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8ed7ba89-5830-4b03-8c0d-1d0c229fdc96",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "df942928-ec46-4abd-9dc5-040d2cddef9e",
            "title" : "Total bilirubin [µmol/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a3862e47-9c41-47fb-a677-e440202af14f",
            "parentUuid" : "df942928-ec46-4abd-9dc5-040d2cddef9e",
            "entityUuid" : "65efe8f6-1d32-4644-b23f-c4a7b51e48e1",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0518c5a3-976d-4ea1-bce1-2c7b0c038d11",
            "parentUuid" : "df942928-ec46-4abd-9dc5-040d2cddef9e",
            "entityUuid" : "6c4d77a8-9149-4947-8f9b-373798f951f7",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "7ffe9dc6-d21b-4860-89fa-c1cc1f5100ce",
            "parentUuid" : "65efe8f6-1d32-4644-b23f-c4a7b51e48e1",
            "entityUuid" : "485741d2-9c07-42a0-968c-139dbc6c3cea",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3522dcab-a2f8-4a84-a8c3-3ce80b09748c",
            "parentUuid" : "65efe8f6-1d32-4644-b23f-c4a7b51e48e1",
            "entityUuid" : "1f558e93-6436-41e8-9f62-7f3e0bc67a5d",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c07290f0-88ed-458e-b073-b05d02039f76",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "4afd084b-19e9-44b0-8396-4c2802c98602",
            "title" : "AST/SGOT [U/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bf41aaf8-23cd-4561-bdad-16389d426263",
            "parentUuid" : "4afd084b-19e9-44b0-8396-4c2802c98602",
            "entityUuid" : "0011698a-e208-4f52-a848-3acc2bba4eef",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "dc9612d6-bb35-433c-a4eb-1dcd1703231d",
            "parentUuid" : "4afd084b-19e9-44b0-8396-4c2802c98602",
            "entityUuid" : "c0c77ae7-12bb-4fa3-adeb-4997c6ac2dbd",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "047533cd-9f56-4545-8de6-7b75d8bbc352",
            "parentUuid" : "0011698a-e208-4f52-a848-3acc2bba4eef",
            "entityUuid" : "c962c0cd-8267-4ba1-a235-b740577e432e",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bcb4868a-c5a6-4c10-9e47-da017944c173",
            "parentUuid" : "0011698a-e208-4f52-a848-3acc2bba4eef",
            "entityUuid" : "97f815e8-930c-4033-ab39-5a3fd38609c1",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "399578dc-3109-4e44-93f6-c977874a7273",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "8a307038-4021-4f77-a39a-a36dfaee6224",
            "title" : "Urea (BUN) [mmol/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ce7d4676-0922-4adb-b133-33c51e8a0a35",
            "parentUuid" : "8a307038-4021-4f77-a39a-a36dfaee6224",
            "entityUuid" : "037bdc47-6d60-46dc-a055-2ea682f209e8",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "09ddf2f9-e252-4ab5-a2c8-7e445a64c35c",
            "parentUuid" : "8a307038-4021-4f77-a39a-a36dfaee6224",
            "entityUuid" : "bf9d4c9f-8364-493e-9ebc-9e9e5de15a3d",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3c0df41d-536c-4b2c-a7ec-ece7eaeeba89",
            "parentUuid" : "037bdc47-6d60-46dc-a055-2ea682f209e8",
            "entityUuid" : "a032c494-bf74-4d9b-920e-03303ce7fafd",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "dba6afeb-8bd4-4acd-82eb-3867a3b8732b",
            "parentUuid" : "037bdc47-6d60-46dc-a055-2ea682f209e8",
            "entityUuid" : "e107669b-8591-4813-9a42-4fafd12e9cf6",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "163f3df2-f3e6-4d62-9cde-ecdb46208619",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "f63bbed0-a243-4cdd-897e-9835f5ac539c",
            "title" : "Lactate [mmol/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a6fb1007-db8a-41a8-898e-e30ae616a76b",
            "parentUuid" : "f63bbed0-a243-4cdd-897e-9835f5ac539c",
            "entityUuid" : "f34b596c-e2ce-48db-9b66-9cdbe2d64612",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2f4269e0-8300-49c6-93e4-6f4d295f116c",
            "parentUuid" : "f63bbed0-a243-4cdd-897e-9835f5ac539c",
            "entityUuid" : "0e363259-cc2c-433b-8a46-17abf37c6565",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f44e0764-0cda-45e7-8944-a62a6402f94d",
            "parentUuid" : "f34b596c-e2ce-48db-9b66-9cdbe2d64612",
            "entityUuid" : "2b2cc5ac-ab25-4c1e-8fa6-b7c501ab83b6",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "91fec40a-4b6b-4b0f-96e1-44f8bc1f7d5e",
            "parentUuid" : "f34b596c-e2ce-48db-9b66-9cdbe2d64612",
            "entityUuid" : "8171c6c1-baa2-491a-af9b-80db8b7fd6f3",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "1bde71ed-82d9-45d9-a503-1bcd3db253c2",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "5956b4de-eefe-4160-a674-d780d14bde0e",
            "title" : "Creatinine [μmol/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "345c8b18-0e90-434b-9b5b-ca2d3dac68e7",
            "parentUuid" : "5956b4de-eefe-4160-a674-d780d14bde0e",
            "entityUuid" : "16de9e3a-5fbf-47f9-8de9-690055cc6fd7",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e819f7f4-59dd-4a5a-a7cd-7a6729a406d3",
            "parentUuid" : "5956b4de-eefe-4160-a674-d780d14bde0e",
            "entityUuid" : "947079e5-0bc5-43d2-927b-180c448cc349",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a8ada1e6-dda9-469d-b57c-229f90c40744",
            "parentUuid" : "16de9e3a-5fbf-47f9-8de9-690055cc6fd7",
            "entityUuid" : "b722a0b1-1ca6-480a-9876-a8c3cc0b3604",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "20f0b310-5b23-443b-9aff-c4c32d382b48",
            "parentUuid" : "16de9e3a-5fbf-47f9-8de9-690055cc6fd7",
            "entityUuid" : "09ff15ba-cd13-42c5-b40a-3a7dec2a5814",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "61a6b4db-0be4-4c24-b52f-8581191026ad",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "e9dc63bc-0c1b-4473-9a62-bda314725792",
            "title" : "Sodium [mEq/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "942f1f08-5b2a-444d-9625-823c4b1b2ac9",
            "parentUuid" : "e9dc63bc-0c1b-4473-9a62-bda314725792",
            "entityUuid" : "2a9011a5-0c43-4101-ba87-9314dde8fced",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8470d744-30df-4a2d-a871-454fa5bb4464",
            "parentUuid" : "e9dc63bc-0c1b-4473-9a62-bda314725792",
            "entityUuid" : "dcde460a-4a86-4693-9e06-b667614fdb98",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c1b21806-f25b-43a9-99b1-c5a34309c333",
            "parentUuid" : "2a9011a5-0c43-4101-ba87-9314dde8fced",
            "entityUuid" : "5dfe69cd-4150-4b76-8902-9f3252500ba2",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ccb3571e-67d2-4795-af83-c91c526411e6",
            "parentUuid" : "2a9011a5-0c43-4101-ba87-9314dde8fced",
            "entityUuid" : "a5443db2-db10-4dea-9271-a0ab59d6e0f5",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8b8e821c-5af9-4d92-aa43-bb83b3697591",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "10a09314-eea6-4c8b-a8ad-a1983d52fba2",
            "title" : "Potassium [mEq/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0356ab2f-9312-4d0d-84d2-e74ec3ea86d8",
            "parentUuid" : "10a09314-eea6-4c8b-a8ad-a1983d52fba2",
            "entityUuid" : "400ee5c3-7e49-4494-87dd-032ac1c8663e",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a9ccfd97-6f23-4f69-b877-68f9b32d3e70",
            "parentUuid" : "10a09314-eea6-4c8b-a8ad-a1983d52fba2",
            "entityUuid" : "b3a9cb0f-0931-4fbe-a6e9-5c8b49bcfcee",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cd4fec44-56bd-426c-a214-765f561fa307",
            "parentUuid" : "400ee5c3-7e49-4494-87dd-032ac1c8663e",
            "entityUuid" : "bb37b943-d3ff-48e4-ac8c-42c68a6a4cf1",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "2ea700eb-fc00-4492-a390-f80b87df46a2",
            "parentUuid" : "400ee5c3-7e49-4494-87dd-032ac1c8663e",
            "entityUuid" : "17f49bc7-c8ed-4b64-9f69-864195ca737e",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "08dae2ab-10f8-44a1-bf0e-f21565fff080",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "4692a3d9-b345-4922-b804-99df521f3f7d",
            "title" : "Procalcitonin [ng/mL]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0b5919f6-291f-4dc5-bc28-88772357d2fb",
            "parentUuid" : "4692a3d9-b345-4922-b804-99df521f3f7d",
            "entityUuid" : "45da4395-cc67-435c-a946-7826fbc434c3",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cb39b51f-9769-44fc-8e5f-e56c5f90c098",
            "parentUuid" : "4692a3d9-b345-4922-b804-99df521f3f7d",
            "entityUuid" : "cd4bd1ff-f4c4-4873-ae14-3a926b8ee598",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "673ffd3d-a2ed-475d-9d8b-4f0880782496",
            "parentUuid" : "45da4395-cc67-435c-a946-7826fbc434c3",
            "entityUuid" : "c0abd293-70c0-4602-8e29-e182c2d28374",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8c0848ef-9e62-405d-902d-8612472cc3ac",
            "parentUuid" : "45da4395-cc67-435c-a946-7826fbc434c3",
            "entityUuid" : "2af5ae96-f42d-4065-83c4-38264b62fdfc",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "8e94ab40-a885-4729-81cc-1da58ad09ed7",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "90a6bff0-e2c3-473e-b549-ce0585695a82",
            "title" : "CRP [mg/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1947d672-e058-42c0-b194-f578c2eff42f",
            "parentUuid" : "90a6bff0-e2c3-473e-b549-ce0585695a82",
            "entityUuid" : "d181be97-4f7b-466e-a75d-d2152a0b674a",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4e012046-1ae6-4678-aec0-f056b9066f51",
            "parentUuid" : "90a6bff0-e2c3-473e-b549-ce0585695a82",
            "entityUuid" : "438b515b-bfc9-413c-8b54-fa8f08eeefbd",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3e683732-0e8f-464c-8935-2037d6889ae3",
            "parentUuid" : "d181be97-4f7b-466e-a75d-d2152a0b674a",
            "entityUuid" : "7d45516a-d20e-4f2c-960b-17768943a033",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "2ea73052-4988-4c44-8f3c-361826fae451",
            "parentUuid" : "d181be97-4f7b-466e-a75d-d2152a0b674a",
            "entityUuid" : "047f8d9f-9faa-4d62-a45c-fca07ce97440",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "31e02ba5-cade-48e0-999a-35665ef61cbd",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "59060352-739a-49c4-8409-9e797479edef",
            "title" : "LDH [U/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6e48c066-db9f-469b-a877-7db1e7057661",
            "parentUuid" : "59060352-739a-49c4-8409-9e797479edef",
            "entityUuid" : "5a609d92-540c-495f-9820-18e12fa63c1b",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ec13f8ff-6e66-429c-b0bf-13b28ff990fe",
            "parentUuid" : "59060352-739a-49c4-8409-9e797479edef",
            "entityUuid" : "79979cca-10de-40f5-8710-d5b8154f428e",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "82988968-e712-4121-a3ad-d2e4751f3436",
            "parentUuid" : "5a609d92-540c-495f-9820-18e12fa63c1b",
            "entityUuid" : "327ade9b-0d45-41f0-b1bd-3a520b0e1507",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f64f6447-83b9-4e40-a1b5-4bb5b4714569",
            "parentUuid" : "5a609d92-540c-495f-9820-18e12fa63c1b",
            "entityUuid" : "10554eb5-31fd-4cc3-a75d-b75e049aefd3",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a656bd13-bb61-4abb-9cef-896ebd1e38cc",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "b8c7cb1f-bc70-4d37-a786-77d034ed51f9",
            "title" : "Creatine kinase [U/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "20a09e97-e90f-4901-88ae-d9e9ebb7c066",
            "parentUuid" : "b8c7cb1f-bc70-4d37-a786-77d034ed51f9",
            "entityUuid" : "406cc170-6df8-4454-aff3-c3fa7370dcf4",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c7c26cc5-74f9-4740-93d9-5f0a23a62c1d",
            "parentUuid" : "b8c7cb1f-bc70-4d37-a786-77d034ed51f9",
            "entityUuid" : "fe59deb0-d333-43ce-9709-499dace48e44",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0183fae8-369f-4b33-bf7d-223670db2cdd",
            "parentUuid" : "406cc170-6df8-4454-aff3-c3fa7370dcf4",
            "entityUuid" : "02236057-f162-4493-af79-638761ec151b",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "82ec3314-e340-4404-aea9-f5c26cd012ac",
            "parentUuid" : "406cc170-6df8-4454-aff3-c3fa7370dcf4",
            "entityUuid" : "a6b0bbab-28a2-4dae-8362-7bb7d37c59bd",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b1574109-8e5e-448c-b565-16949fc84c1e",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "a97759e1-f94e-4c42-b2d7-b9509a914b17",
            "title" : "Troponin [ng/mL]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "51f753c7-dd4d-40aa-85ac-045e54995076",
            "parentUuid" : "a97759e1-f94e-4c42-b2d7-b9509a914b17",
            "entityUuid" : "074f74dc-dfc7-4185-8ddb-bafbef5f103b",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6bbd5ff0-7322-4b27-975f-f2d766c5b450",
            "parentUuid" : "a97759e1-f94e-4c42-b2d7-b9509a914b17",
            "entityUuid" : "ce7f16a7-f9ea-4b2e-b6d8-bbf5ef46151c",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "1441a2eb-2a5d-42ce-91d4-2ab2b47cb346",
            "parentUuid" : "074f74dc-dfc7-4185-8ddb-bafbef5f103b",
            "entityUuid" : "aa75b91f-e0c1-4ae2-9ac5-0d63534a8991",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9b7c2aa5-8993-4095-b3b1-d2f882586548",
            "parentUuid" : "074f74dc-dfc7-4185-8ddb-bafbef5f103b",
            "entityUuid" : "747aa14c-b0f3-480c-a6ed-b31acbea319d",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "de273d3a-347d-4c79-9708-ef55758369b4",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "a8d35727-5e97-462a-b081-38968119f0c1",
            "title" : "ESR [mm/hr]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c347e51b-f752-4362-b3a6-b95e0a4aa8df",
            "parentUuid" : "a8d35727-5e97-462a-b081-38968119f0c1",
            "entityUuid" : "57140cf4-d1e0-412c-aaf1-eb0ac7c65294",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "49d7e271-6530-4e48-a4f3-73adffe19cb3",
            "parentUuid" : "a8d35727-5e97-462a-b081-38968119f0c1",
            "entityUuid" : "b72d0fb9-c5ea-40d2-8f51-7705538c2358",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "5f06abe6-e653-4af3-92df-1c6c32cabd61",
            "parentUuid" : "57140cf4-d1e0-412c-aaf1-eb0ac7c65294",
            "entityUuid" : "6f907b2d-ad62-43b1-a68d-e9f7851aee55",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0aa537d7-8719-480d-b1f6-2197ce78cf7a",
            "parentUuid" : "57140cf4-d1e0-412c-aaf1-eb0ac7c65294",
            "entityUuid" : "52c97aca-8f18-4610-ae45-8e3c8ae71e7e",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e4113037-4af7-4345-bd17-7a4e5a1939ef",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "38ccd98f-495d-48bf-a78e-6fe14c80f0c5",
            "title" : "D-dimer [mg/L]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0b4f103c-ebe8-4a41-9179-efeeaa1d7648",
            "parentUuid" : "38ccd98f-495d-48bf-a78e-6fe14c80f0c5",
            "entityUuid" : "98af8bef-5522-4e2f-a5c7-97828cfb049a",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e6685181-280c-42d4-b3c9-bc11e7830d8e",
            "parentUuid" : "38ccd98f-495d-48bf-a78e-6fe14c80f0c5",
            "entityUuid" : "bf631cbe-2a83-45db-af59-2ab0dff3bf59",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4ee49ddb-71d5-4c64-a67d-3d4efcabe7c1",
            "parentUuid" : "98af8bef-5522-4e2f-a5c7-97828cfb049a",
            "entityUuid" : "bc60a26f-826c-4796-a0d0-748824bbd23c",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "90528c5d-24d8-4355-9874-4950a20f0524",
            "parentUuid" : "98af8bef-5522-4e2f-a5c7-97828cfb049a",
            "entityUuid" : "f675c493-05ae-4cca-9b73-70de108a8c77",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a38e2f56-abf4-4c25-aea5-d6433908e960",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "a4f8b2c7-564a-49ab-9271-a1c8520ab971",
            "title" : "Ferritin [ng/mL]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0d4ca9a6-6f27-42a9-89c2-ca1c15fd9a29",
            "parentUuid" : "a4f8b2c7-564a-49ab-9271-a1c8520ab971",
            "entityUuid" : "d356f154-5105-479e-b653-58c15ff56c38",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4fcff6be-e2bc-47b1-91b1-cef02dbb91c0",
            "parentUuid" : "a4f8b2c7-564a-49ab-9271-a1c8520ab971",
            "entityUuid" : "fd21c913-6834-4b7e-8939-f44e842f9ab4",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "af847bd5-b2c8-4f28-b654-55165d8774ae",
            "parentUuid" : "d356f154-5105-479e-b653-58c15ff56c38",
            "entityUuid" : "1bc05cfb-7d3c-4ef5-aa79-f1196094eb77",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9368744f-3dec-4892-9559-572aa4bc33b7",
            "parentUuid" : "d356f154-5105-479e-b653-58c15ff56c38",
            "entityUuid" : "b230f971-3fcc-4914-9f0a-c6d234842b25",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "61814859-3ae2-4293-812d-09792ac7b977",
            "parentUuid" : "d4462b9f-f66a-4d44-8d01-d0cfffd850db",
            "entityUuid" : "8a589497-7733-49b0-8df0-df1770c7070e",
            "title" : "IL-6 [pg/mL]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e5712ccd-f041-4158-abf0-7209593afca7",
            "parentUuid" : "8a589497-7733-49b0-8df0-df1770c7070e",
            "entityUuid" : "8e7c5cfa-7340-409b-9890-bad43ecb117f",
            "label" : "Done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b9571f6f-1188-413c-a358-fa851bb8db9d",
            "parentUuid" : "8a589497-7733-49b0-8df0-df1770c7070e",
            "entityUuid" : "5c7118cf-60a1-4e7a-9695-47a809d35311",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "aa8ab756-1837-4005-8990-9f85316a44e6",
            "parentUuid" : "8e7c5cfa-7340-409b-9890-bad43ecb117f",
            "entityUuid" : "5fc295de-bb11-4316-aaa1-661809952a58",
            "title" : "Value",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d86354a0-ee5c-4cd9-9dca-c30b3c31c7cb",
            "parentUuid" : "8e7c5cfa-7340-409b-9890-bad43ecb117f",
            "entityUuid" : "ad3d1de8-2745-4b6f-b713-c45f147d3662",
            "title" : "Units",
            "text" : "Fill only if different from the stated",
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e8b5c0a7-d8af-4866-858f-b7f74909a279",
            "parentUuid" : "130c27a4-ace8-45bd-b82d-611837c69e67",
            "entityUuid" : "e90414fd-1938-43f6-aa8b-7083b1ecede8",
            "title" : "Medication",
            "text" : "Is the patient CURRENTLY receiving any of the following?",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cfced8be-ca81-4409-90e5-b9cdb7611bc2",
            "parentUuid" : "e90414fd-1938-43f6-aa8b-7083b1ecede8",
            "entityUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f62a49f6-207a-4482-b19f-6e1e4e10e50f",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "52ecee9f-ef97-4a74-9e0d-d2a0d6b94d8a",
            "title" : "Oral/orogastric fluids?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "14095de3-479f-4ff0-b34a-7c50b9db6bfb",
            "parentUuid" : "52ecee9f-ef97-4a74-9e0d-d2a0d6b94d8a",
            "entityUuid" : "ebd62202-3157-4097-b43a-5b3a8403c20a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "32a63a35-72cc-4a89-9b57-125a0526874a",
            "parentUuid" : "52ecee9f-ef97-4a74-9e0d-d2a0d6b94d8a",
            "entityUuid" : "f2a1d7d7-fde6-48d7-a720-061081e26074",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "51c7a866-c821-4ab2-83c1-25969c7161bc",
            "parentUuid" : "52ecee9f-ef97-4a74-9e0d-d2a0d6b94d8a",
            "entityUuid" : "618ad3c7-74e6-42a9-bea5-0a6e66556f65",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "096f65c4-e6d1-4b51-a0b3-d334daf19e9d",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "66a4bd1a-bcb1-4ec9-bc26-5f0cecfa30ca",
            "title" : "Intravenous fluids?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5908772c-8dd7-4edd-a73e-4b548a2aceeb",
            "parentUuid" : "66a4bd1a-bcb1-4ec9-bc26-5f0cecfa30ca",
            "entityUuid" : "c5af349e-a781-4313-89f4-9e812216f124",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "373ce6d1-c242-4b46-9ef3-5e87a7b5bd03",
            "parentUuid" : "66a4bd1a-bcb1-4ec9-bc26-5f0cecfa30ca",
            "entityUuid" : "7ef79c24-0484-42e2-900c-85b8d79d298e",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5520ec6b-d765-4f6a-8a3d-ee062d85266c",
            "parentUuid" : "66a4bd1a-bcb1-4ec9-bc26-5f0cecfa30ca",
            "entityUuid" : "bede139c-bf58-40c3-bcb0-7e83242c2d5f",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5df156d4-d271-49b0-90f0-8be683cc3a96",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "6b5e25ec-9a37-495c-a554-34abc645109d",
            "title" : "Antiviral?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6bcc5358-de80-45ca-8885-77f5f2e0b03c",
            "parentUuid" : "6b5e25ec-9a37-495c-a554-34abc645109d",
            "entityUuid" : "c15ad476-ff8d-4a0f-ba56-c522acba4765",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "b33ed598-4b71-492b-a818-27e3db7fbaae",
            "parentUuid" : "c15ad476-ff8d-4a0f-ba56-c522acba4765",
            "entityUuid" : "d9173f13-c337-4a0e-bfe8-2e17e25791ed",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "da7cf18e-2515-45ea-88b2-e031d748c7ef",
            "parentUuid" : "d9173f13-c337-4a0e-bfe8-2e17e25791ed",
            "entityUuid" : "9e6c9b4b-2ca6-4f29-99b9-58bff3ce0e53",
            "title" : "Select",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8661a083-f5f2-4540-833b-98fb1d364da6",
            "parentUuid" : "9e6c9b4b-2ca6-4f29-99b9-58bff3ce0e53",
            "entityUuid" : "63e45bb9-659f-4c1d-b77a-9e2bdc6a71e8",
            "label" : "Ribavirin",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6f8d4f84-68da-46b0-bc20-78fa239c8fce",
            "parentUuid" : "9e6c9b4b-2ca6-4f29-99b9-58bff3ce0e53",
            "entityUuid" : "dd56450b-b18d-467b-9a61-cf24fe947683",
            "label" : "Lopinavir/Ritonavir",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "51bd4d0e-8466-4183-bec9-1c9b54e5e0f4",
            "parentUuid" : "9e6c9b4b-2ca6-4f29-99b9-58bff3ce0e53",
            "entityUuid" : "41af8a16-d266-44a7-98b5-8305ff04c996",
            "label" : "Neuraminidase inhibitor",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7d1a584b-ae01-463f-bc28-21831819cada",
            "parentUuid" : "9e6c9b4b-2ca6-4f29-99b9-58bff3ce0e53",
            "entityUuid" : "0002ddb6-8401-4b7c-881f-fa3bb6ea97d8",
            "label" : "Interferon alpha",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1a443514-5f16-4646-b60b-25252f1dfb27",
            "parentUuid" : "9e6c9b4b-2ca6-4f29-99b9-58bff3ce0e53",
            "entityUuid" : "4712864c-cb67-41da-bed2-083f717a8ff8",
            "label" : "Interferon beta",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "61ac5e0e-6bc8-4590-b7f0-45b9686289a4",
            "parentUuid" : "9e6c9b4b-2ca6-4f29-99b9-58bff3ce0e53",
            "entityUuid" : "65b95e6d-5cdb-4c78-a57e-3e5f60eac18a",
            "label" : "Other",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "51d2e285-93cc-4326-9b39-f27d3f3e140f",
            "parentUuid" : "65b95e6d-5cdb-4c78-a57e-3e5f60eac18a",
            "entityUuid" : "0bdab885-507c-42f6-bc64-8a711eea9bd1",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8bcc4b20-6665-4f3a-9b50-aba2e1765a8a",
            "parentUuid" : "6b5e25ec-9a37-495c-a554-34abc645109d",
            "entityUuid" : "77c53a1f-732e-4114-a490-3f759c35641b",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cdb42e42-3161-4928-9c07-68ce145f039f",
            "parentUuid" : "6b5e25ec-9a37-495c-a554-34abc645109d",
            "entityUuid" : "ea0793dd-f518-41e8-b17b-76ed789e0e06",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "10f2b630-fcb2-443e-b00b-bea862357c40",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "56f9ca08-0dd0-45d6-aeb1-b67a8b86b12a",
            "title" : "Corticosteroid?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "651d3ed7-7c94-45cf-afc8-46354ce0674f",
            "parentUuid" : "56f9ca08-0dd0-45d6-aeb1-b67a8b86b12a",
            "entityUuid" : "3c99ed48-1f57-4a08-b09c-2b7656a93ba6",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "c9ee49bd-8f89-4d72-ad58-2f13d499116e",
            "parentUuid" : "3c99ed48-1f57-4a08-b09c-2b7656a93ba6",
            "entityUuid" : "9e55224d-6347-42c9-a984-7c21c5db8727",
            "title" : "Route",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ec620c70-8adc-44f8-8fcd-1e880f0a162c",
            "parentUuid" : "9e55224d-6347-42c9-a984-7c21c5db8727",
            "entityUuid" : "eed59c02-0f4e-4eaa-9806-66ccedb81d9d",
            "title" : "Select",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "fa0d3ac1-8c25-4eef-8066-03f3dd82bba2",
            "parentUuid" : "eed59c02-0f4e-4eaa-9806-66ccedb81d9d",
            "entityUuid" : "ddc59679-5207-4642-8144-a9605469b05a",
            "label" : "Oral",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0f1bd271-d007-42c4-b3b7-eabb9e542608",
            "parentUuid" : "eed59c02-0f4e-4eaa-9806-66ccedb81d9d",
            "entityUuid" : "fc5d779b-cb1a-474c-adbb-ffa4fa490494",
            "label" : "Intravenous",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c96809ae-9329-461e-9627-a2a3a81ee79b",
            "parentUuid" : "eed59c02-0f4e-4eaa-9806-66ccedb81d9d",
            "entityUuid" : "11d69975-e1c7-46b3-9e56-f5ebcca92977",
            "label" : "Inhaled",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "a535e854-a12f-4a1a-8687-471b0ad78d22",
            "parentUuid" : "3c99ed48-1f57-4a08-b09c-2b7656a93ba6",
            "entityUuid" : "56344b60-b6e6-4ec0-9c66-9142a3d02750",
            "title" : "Agent",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b26d1f7e-e21d-4969-a344-ecd29fcbd603",
            "parentUuid" : "3c99ed48-1f57-4a08-b09c-2b7656a93ba6",
            "entityUuid" : "51543edf-d0f2-4ce4-8e95-545fa17dd7ba",
            "title" : "Maximum daily dose",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3ffac268-3b55-4030-adb6-e8d41b260295",
            "parentUuid" : "56f9ca08-0dd0-45d6-aeb1-b67a8b86b12a",
            "entityUuid" : "83d4a1c9-fd98-458e-8d36-b516bc015ea7",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "10f3d294-c43d-46a7-a73b-ce9c2ed22173",
            "parentUuid" : "56f9ca08-0dd0-45d6-aeb1-b67a8b86b12a",
            "entityUuid" : "3d4230e3-09c9-44fc-acfa-b1f95f050b87",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "255102c4-850a-43a1-a0ac-344cadc6513e",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "5ede930a-2d43-4288-b7ea-42ffb2fb7713",
            "title" : "Antibiotic?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "37f284a9-f3b9-4b10-94fb-8d8b8d131fa9",
            "parentUuid" : "5ede930a-2d43-4288-b7ea-42ffb2fb7713",
            "entityUuid" : "5f144fa1-b2fd-496f-a746-aadd097d7218",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "15914463-5867-4700-99a7-df25920ae624",
            "parentUuid" : "5ede930a-2d43-4288-b7ea-42ffb2fb7713",
            "entityUuid" : "06d82b09-40bc-4a62-964d-d6baa12d52bf",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "93f4e71d-8880-43ba-abc6-ed5518c1f614",
            "parentUuid" : "5ede930a-2d43-4288-b7ea-42ffb2fb7713",
            "entityUuid" : "89569b57-f6df-423a-aa0f-c1129ffb3202",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d50afae9-ef59-4998-89f8-79e896bd951b",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "6dfb8d1c-78c0-486f-9250-7bfe9a75204c",
            "title" : "Antifungal agent?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e7b1fef4-0dd1-4233-81bb-94e92fbd3350",
            "parentUuid" : "6dfb8d1c-78c0-486f-9250-7bfe9a75204c",
            "entityUuid" : "28497fcf-121b-4574-af98-e38e34a2f509",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "47d87c8e-7638-4304-a271-542a8744e3eb",
            "parentUuid" : "6dfb8d1c-78c0-486f-9250-7bfe9a75204c",
            "entityUuid" : "06e2919d-0fc5-45ae-a551-ce5fa6b3f02d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9475d1c8-288c-46fa-a6da-3014c5c30cf0",
            "parentUuid" : "6dfb8d1c-78c0-486f-9250-7bfe9a75204c",
            "entityUuid" : "0f870efb-e56b-4054-9275-46eb7b4fd315",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "87900ebe-ac98-4718-853c-7a2a8b1a2be7",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "5eaf953f-1ae8-48a7-b3a5-4adb0233a588",
            "title" : "Antimalarial agent?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1d7d811a-cc9e-4e22-866c-fcead2ad012f",
            "parentUuid" : "5eaf953f-1ae8-48a7-b3a5-4adb0233a588",
            "entityUuid" : "d587d28c-9c2d-4b70-87db-d6e07344f2cd",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8775951e-7def-4b4f-a901-9e0ad932a7e2",
            "parentUuid" : "5eaf953f-1ae8-48a7-b3a5-4adb0233a588",
            "entityUuid" : "7ccc5595-fd9c-4ea7-8714-5c77c181eebb",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f8b97d7c-a9ff-4905-8e19-cefe63dc5ad7",
            "parentUuid" : "5eaf953f-1ae8-48a7-b3a5-4adb0233a588",
            "entityUuid" : "90e5d416-1c21-499a-8c2c-6dbb77455081",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b9fdead3-a234-4683-9faa-9319ebb350a1",
            "parentUuid" : "d587d28c-9c2d-4b70-87db-d6e07344f2cd",
            "entityUuid" : "35382f21-674a-4623-af6e-fcc52bf557ed",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2566c357-26d7-4a76-bbfc-c0da3776da3c",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "2bb0903b-9b4a-4e5f-aa82-ae64402fabda",
            "title" : "Experimental agent?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "880a997e-cfee-4436-a09d-c58271eb4450",
            "parentUuid" : "2bb0903b-9b4a-4e5f-aa82-ae64402fabda",
            "entityUuid" : "04214309-2e3b-45ce-bbd0-b996869a1f97",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9a4d2fed-622e-47d3-832d-39b2451aeb65",
            "parentUuid" : "2bb0903b-9b4a-4e5f-aa82-ae64402fabda",
            "entityUuid" : "5b539d9c-d885-492e-a261-fb55dd3ccfe0",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "877710b0-507c-492b-805a-5614830dd377",
            "parentUuid" : "2bb0903b-9b4a-4e5f-aa82-ae64402fabda",
            "entityUuid" : "e98c9b98-a25b-4b8d-9905-d25a970c775a",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0206f55a-a1e0-4061-abd7-80f3a863ed0d",
            "parentUuid" : "04214309-2e3b-45ce-bbd0-b996869a1f97",
            "entityUuid" : "801793b3-ac57-4e9a-bc52-93fc4f0f15b7",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "9e276903-760d-4242-bd64-1257fe3433ca",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "78a17f96-c6d2-46eb-85ec-3f00364e815c",
            "title" : "Non-steroidal anti-inflammatory (NSAID)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "078de57a-d409-4893-bdd9-4c6ab0f2c35d",
            "parentUuid" : "78a17f96-c6d2-46eb-85ec-3f00364e815c",
            "entityUuid" : "b742396c-c41f-43f4-8cdc-e1d9c103043b",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2dc9fb74-5cfd-429d-a355-229e755eec40",
            "parentUuid" : "78a17f96-c6d2-46eb-85ec-3f00364e815c",
            "entityUuid" : "4b6329c3-ce57-4714-b8a3-b6907e6aff66",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "559b608c-97c5-44dc-ae61-cd566a5dd909",
            "parentUuid" : "78a17f96-c6d2-46eb-85ec-3f00364e815c",
            "entityUuid" : "84572396-6371-4443-9098-d898894cb432",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e1292a8b-fe12-42ac-b4e4-5daf8f5c5953",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "ccb668e4-eaa9-458d-9eb2-242269bab27b",
            "title" : "Angiotensin converting enzyme inhibitors (ACE inhibitors)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2cace73c-4ca2-4de3-abee-17f5b687da73",
            "parentUuid" : "ccb668e4-eaa9-458d-9eb2-242269bab27b",
            "entityUuid" : "abe02afa-5fc3-4360-9c66-d5d3b8fc6076",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "61b9def0-bd98-47e0-be03-2b4facf6111e",
            "parentUuid" : "ccb668e4-eaa9-458d-9eb2-242269bab27b",
            "entityUuid" : "6f42fff2-03dc-478e-a209-631e7a47d060",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "62882255-e79d-466c-a3ce-8f2a95e7a591",
            "parentUuid" : "ccb668e4-eaa9-458d-9eb2-242269bab27b",
            "entityUuid" : "407ec099-81d4-41b9-bde7-5db228e0cca6",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3e5aa1a9-3823-4073-b6f1-d9251c6c8f29",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "96c36b30-9f63-4c34-8a75-28c5b5bf3935",
            "title" : "Angiotensin II receptor blockers (ARBs)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8dda421a-01f8-4929-9bf5-5a98057702f1",
            "parentUuid" : "96c36b30-9f63-4c34-8a75-28c5b5bf3935",
            "entityUuid" : "ea1afb69-0596-420a-ab10-381ac7f48b2f",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6266fe75-3729-4e9b-8a14-50f00f0c1399",
            "parentUuid" : "96c36b30-9f63-4c34-8a75-28c5b5bf3935",
            "entityUuid" : "0788c33a-d152-4c94-83cf-a4fe694bc023",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9483a2e8-d474-4f20-91eb-8b3caf57ac80",
            "parentUuid" : "96c36b30-9f63-4c34-8a75-28c5b5bf3935",
            "entityUuid" : "a19c73db-3a5f-45f8-b2cf-ca7259d95bcb",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "86ada3d8-aad4-450e-9bc1-8118ec052164",
            "parentUuid" : "6f2b6cb5-4ca6-4451-90ec-78578dff5f9b",
            "entityUuid" : "eaa5192b-1960-4cc3-adcf-2f2ee329a43a",
            "title" : "Systemic anticoagulation",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3c129b2e-db0a-4518-ae18-a613b43e351b",
            "parentUuid" : "eaa5192b-1960-4cc3-adcf-2f2ee329a43a",
            "entityUuid" : "999f9a9f-a161-49f1-b0ef-6a22ad426506",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4d7e8a5a-218b-45f4-b1df-097451e91e15",
            "parentUuid" : "eaa5192b-1960-4cc3-adcf-2f2ee329a43a",
            "entityUuid" : "3826841e-5562-4dc8-a3c1-d779373179e7",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e7fb07fb-02b8-45a0-8756-d7d006d76c3d",
            "parentUuid" : "eaa5192b-1960-4cc3-adcf-2f2ee329a43a",
            "entityUuid" : "12d0e848-f53e-43db-9f3c-8b9c5a5ef088",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "9a639238-2623-4c88-8dd6-0c919c015af6",
            "parentUuid" : "130c27a4-ace8-45bd-b82d-611837c69e67",
            "entityUuid" : "21392c1f-364b-439f-b7a3-ff9c4b37c98d",
            "title" : "Supportive care",
            "text" : "Is the patient CURRENTLY receiving any of the following?",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a636b6b2-ba0d-4901-ae96-02f0df4c8098",
            "parentUuid" : "21392c1f-364b-439f-b7a3-ff9c4b37c98d",
            "entityUuid" : "fbce6b31-6270-48b5-9aeb-d6bc10be3faa",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "cb7de385-7ef9-4108-b1a4-48e60c037d03",
            "parentUuid" : "fbce6b31-6270-48b5-9aeb-d6bc10be3faa",
            "entityUuid" : "d0d53d4a-a8c0-4760-a373-7032d4415033",
            "title" : "ICU or High Dependency Unit admission?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5853f62f-20d5-436d-8978-4685f92f1791",
            "parentUuid" : "d0d53d4a-a8c0-4760-a373-7032d4415033",
            "entityUuid" : "5b80610a-2c6a-4980-b504-1751fa8ef989",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f9b1aae1-aadf-409c-9325-64da8f38d066",
            "parentUuid" : "d0d53d4a-a8c0-4760-a373-7032d4415033",
            "entityUuid" : "1c5d0a86-c6ae-42f5-baed-d7dca5ae44b8",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4e5814f7-4e8a-4114-9b91-cd5db640aefe",
            "parentUuid" : "d0d53d4a-a8c0-4760-a373-7032d4415033",
            "entityUuid" : "4070453b-04c1-4a1f-a3d0-9dd05303c2bc",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b014e15f-60df-4e0c-9e4c-8b4f2e5ac033",
            "parentUuid" : "5b80610a-2c6a-4980-b504-1751fa8ef989",
            "entityUuid" : "5ec453bb-ebdc-4908-ad16-c608020f1e9d",
            "title" : "Date of ICU/HDU admission",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "eda6acb6-cb93-4019-b460-6cc6827d8e8b",
            "parentUuid" : "5ec453bb-ebdc-4908-ad16-c608020f1e9d",
            "entityUuid" : "daead789-1b25-4bff-bee0-36b0833ecf23",
            "label" : "Known",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ebb59eca-b69e-4455-8d12-84695b3c167a",
            "parentUuid" : "daead789-1b25-4bff-bee0-36b0833ecf23",
            "entityUuid" : "be081b89-2c5d-433a-a5a1-1fbfa3327759",
            "title" : "Enter date of ICU/HDU admission",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "DateQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "515af7c6-2f0f-455a-9058-122ea5ae9b5b",
            "parentUuid" : "5ec453bb-ebdc-4908-ad16-c608020f1e9d",
            "entityUuid" : "e8c1511e-8fb2-4a0a-ab85-f117c872eea0",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a91a1e33-1fd0-4ea0-b8e5-fdd1b07481bf",
            "parentUuid" : "5b80610a-2c6a-4980-b504-1751fa8ef989",
            "entityUuid" : "841f16f2-256d-4c29-a50c-9647ff87f24e",
            "title" : "ICU/HDU discharge date",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "accebdf3-870e-4ce3-8274-26ab96ace677",
            "parentUuid" : "841f16f2-256d-4c29-a50c-9647ff87f24e",
            "entityUuid" : "55abbc4c-e74e-435f-8da1-b2b01c19954d",
            "label" : "Discharged (known date)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "75b7d5e2-49c7-4045-91dd-68482d899a4a",
            "parentUuid" : "55abbc4c-e74e-435f-8da1-b2b01c19954d",
            "entityUuid" : "1ef01284-c1e3-42ec-9d97-4eded690e2ec",
            "title" : "Enter date of ICU/HDU discharge",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "DateQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "aa30eb69-3425-4823-b62d-cf175c80423d",
            "parentUuid" : "841f16f2-256d-4c29-a50c-9647ff87f24e",
            "entityUuid" : "604c5f67-2de2-478f-8d07-b1e9de7437f4",
            "label" : "Not discharged yet",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "988e51a5-8f84-4fb6-9f89-7dc49837a49d",
            "parentUuid" : "841f16f2-256d-4c29-a50c-9647ff87f24e",
            "entityUuid" : "91b57ef4-f97b-491d-9be8-ba2cb0f12eb2",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5109aad0-1fb3-47e0-90d0-f098fff2f46f",
            "parentUuid" : "fbce6b31-6270-48b5-9aeb-d6bc10be3faa",
            "entityUuid" : "0d4691ef-b9ae-45a0-b525-819bab4e89ee",
            "title" : "Oxygen therapy?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "faf19b8c-9043-4ef3-810d-41aa36382d41",
            "parentUuid" : "0d4691ef-b9ae-45a0-b525-819bab4e89ee",
            "entityUuid" : "385c93a0-64f6-484b-81af-5f4f5a879d73",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ebf1047a-18d4-4af7-b6ea-f3bbc53f2d39",
            "parentUuid" : "0d4691ef-b9ae-45a0-b525-819bab4e89ee",
            "entityUuid" : "6f879cbe-246b-4a24-a1e0-a6101990afd4",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3cd90656-fe06-4415-93c2-1b9c23c97b07",
            "parentUuid" : "0d4691ef-b9ae-45a0-b525-819bab4e89ee",
            "entityUuid" : "1e270359-1612-4bbe-88d3-869f440b1c62",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "39df43fd-d124-46f5-b689-2155dd0ae4b6",
            "parentUuid" : "385c93a0-64f6-484b-81af-5f4f5a879d73",
            "entityUuid" : "ef17935b-1519-4ff0-af65-f45815fc6ec5",
            "title" : "O₂ flow",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d2cd221d-1c31-4d37-a4f2-d9825d013c9d",
            "parentUuid" : "ef17935b-1519-4ff0-af65-f45815fc6ec5",
            "entityUuid" : "442d88ba-ba68-463e-b61f-05eb9d863866",
            "label" : "1-5 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c5dc1a01-5432-4415-aed8-d67191ef300c",
            "parentUuid" : "ef17935b-1519-4ff0-af65-f45815fc6ec5",
            "entityUuid" : "49bcd74c-4aaa-4034-95b5-11f9783dc814",
            "label" : "6-10 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "806a9c5f-7a3b-4bf5-b8da-fc919b6f51ee",
            "parentUuid" : "ef17935b-1519-4ff0-af65-f45815fc6ec5",
            "entityUuid" : "d3d318b4-82f3-40b8-90aa-29f9ace58a05",
            "label" : "11-15 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1e5d5d1d-feb5-4fdc-a57b-858dfb721068",
            "parentUuid" : "ef17935b-1519-4ff0-af65-f45815fc6ec5",
            "entityUuid" : "98ea8dec-00b9-46c7-b561-497ce640cc00",
            "label" : ">15 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "40872a68-d191-4a1a-abfb-e5141979a103",
            "parentUuid" : "ef17935b-1519-4ff0-af65-f45815fc6ec5",
            "entityUuid" : "f6e22ffd-3b6a-442a-afd7-346b8212ea67",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e15c2bdd-a80c-4961-ae28-1ad5d9aa445d",
            "parentUuid" : "385c93a0-64f6-484b-81af-5f4f5a879d73",
            "entityUuid" : "b17bebe8-ed98-476c-a654-9b3ae27c3f65",
            "title" : "Source of oxygen",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ae32c6d5-8b3b-4f75-86b6-4339fc8841c8",
            "parentUuid" : "b17bebe8-ed98-476c-a654-9b3ae27c3f65",
            "entityUuid" : "877d0c27-5984-4b7b-bf5f-278d905f67d8",
            "label" : "Piped",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9106b130-68dd-4ebd-97da-7241ea0363d7",
            "parentUuid" : "b17bebe8-ed98-476c-a654-9b3ae27c3f65",
            "entityUuid" : "dc4cbdc3-45c4-4d68-8cf2-85218f9fd989",
            "label" : "Cylinder",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "607664e6-367f-44a9-a7cf-11437a3468d1",
            "parentUuid" : "b17bebe8-ed98-476c-a654-9b3ae27c3f65",
            "entityUuid" : "91a742d1-bcd1-4f49-9b8e-ad75ecee749a",
            "label" : "Concentrator",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "84f992e4-db07-4e8b-834a-a0224cfd819c",
            "parentUuid" : "b17bebe8-ed98-476c-a654-9b3ae27c3f65",
            "entityUuid" : "cbed788e-ce31-47ce-8390-3c8cff7c1984",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "bfd6d763-5358-463d-b205-27e7e6481cc7",
            "parentUuid" : "385c93a0-64f6-484b-81af-5f4f5a879d73",
            "entityUuid" : "4142e6dc-2ebf-4fb9-b058-a1ebbec99c39",
            "title" : "Interface",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1aa61c57-3c01-4051-861d-23bfbcb7cd41",
            "parentUuid" : "4142e6dc-2ebf-4fb9-b058-a1ebbec99c39",
            "entityUuid" : "ec33332e-5daa-45b1-bbbc-17b5738768ec",
            "label" : "Nasal prongs",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "95306f4b-445e-4ed1-97e3-2c71ebe9e5cf",
            "parentUuid" : "4142e6dc-2ebf-4fb9-b058-a1ebbec99c39",
            "entityUuid" : "a2e4a0a5-9ef9-46f7-adf1-936523a573c2",
            "label" : "HF nasal cannula",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "50a1a1df-9cb5-47ff-a99a-ab3edc8742b2",
            "parentUuid" : "4142e6dc-2ebf-4fb9-b058-a1ebbec99c39",
            "entityUuid" : "73f8fa5e-72cd-4c34-bcfc-ee9c0499c219",
            "label" : "Mask",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6e69204c-e916-469d-a6db-e3dfeac87ddc",
            "parentUuid" : "4142e6dc-2ebf-4fb9-b058-a1ebbec99c39",
            "entityUuid" : "37177cec-adf7-4fcc-a486-fb9607e45031",
            "label" : "Mask with reservoir",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "328bcc6d-d156-4ba2-b8d0-6d8da2ef9702",
            "parentUuid" : "4142e6dc-2ebf-4fb9-b058-a1ebbec99c39",
            "entityUuid" : "9f95e677-1b0b-4fc0-a654-77770930d591",
            "label" : "CPAP/NIV mask",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ce33b9cb-b317-424e-9df2-6a856e039a65",
            "parentUuid" : "4142e6dc-2ebf-4fb9-b058-a1ebbec99c39",
            "entityUuid" : "2f70b23b-34b4-4b8d-8855-d61e87f9fc42",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "1a857a95-bd2d-4635-817f-5ce937c40a00",
            "parentUuid" : "fbce6b31-6270-48b5-9aeb-d6bc10be3faa",
            "entityUuid" : "241c414e-cb67-4685-ba09-c902cd69cc3a",
            "title" : "Non-invasive ventilation (e.g.BIPAP/CPAP)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d9c4cd36-e673-4563-9635-a625a8f16ead",
            "parentUuid" : "241c414e-cb67-4685-ba09-c902cd69cc3a",
            "entityUuid" : "b023fe39-6ce6-4237-bdeb-65c330a82ef0",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d74ab4a7-b62a-4ff3-834c-29deb14571d1",
            "parentUuid" : "241c414e-cb67-4685-ba09-c902cd69cc3a",
            "entityUuid" : "dcc98a92-5f67-4f33-a48f-a433452578c2",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c1dcf52e-501b-44eb-b2ce-c86332c2e6d3",
            "parentUuid" : "241c414e-cb67-4685-ba09-c902cd69cc3a",
            "entityUuid" : "ad2d6db0-7e4a-4150-9397-7458dbd0d27e",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "30fee333-5d69-476a-aa8d-f1aaf4d7b311",
            "parentUuid" : "fbce6b31-6270-48b5-9aeb-d6bc10be3faa",
            "entityUuid" : "aa60a172-5502-48b7-a82a-bbd698db9efd",
            "title" : "Invasive ventilation (Any)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e98b02fd-b670-4ea8-91fe-daec6e560c2e",
            "parentUuid" : "aa60a172-5502-48b7-a82a-bbd698db9efd",
            "entityUuid" : "7c84a1f6-010f-4fca-9cbf-b8d99448caa9",
            "label" : "Yes",
            "advice" : "What were the following values closest to 0800?",
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c61b6800-b8bd-4bc6-83af-fe043a64db8e",
            "parentUuid" : "aa60a172-5502-48b7-a82a-bbd698db9efd",
            "entityUuid" : "67dc1e19-fafc-4dbc-a445-55fb4a666cc7",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7984c153-1669-497b-b60a-26b245d3f06e",
            "parentUuid" : "aa60a172-5502-48b7-a82a-bbd698db9efd",
            "entityUuid" : "fcac6fee-c181-452f-b9ce-6ec976894853",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d3dcda55-e175-459e-880c-896b43c79874",
            "parentUuid" : "7c84a1f6-010f-4fca-9cbf-b8d99448caa9",
            "entityUuid" : "20a69c19-1811-4320-9862-7a4c969bc751",
            "title" : "PEEP [cm H₂O]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "fc681bce-c63c-4d58-b7a2-9307d1c1f74d",
            "parentUuid" : "7c84a1f6-010f-4fca-9cbf-b8d99448caa9",
            "entityUuid" : "2118c18b-f499-4231-824f-4c352a8f2696",
            "title" : "FᵢO₂ [%]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8ded261f-4207-42bf-89bb-215c6efa5b38",
            "parentUuid" : "7c84a1f6-010f-4fca-9cbf-b8d99448caa9",
            "entityUuid" : "b3f3bdbd-163c-4847-bdfd-9b64a2e747d4",
            "title" : "Plateau pressure [cm H₂O]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "efd52c5e-319d-4157-8f36-189dc491257b",
            "parentUuid" : "7c84a1f6-010f-4fca-9cbf-b8d99448caa9",
            "entityUuid" : "f9c05e2a-69ae-4d3c-831b-ddeec07a2e7c",
            "title" : "PₐCO₂",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cdc8f410-662d-4921-a354-6d7ab864f3bc",
            "parentUuid" : "7c84a1f6-010f-4fca-9cbf-b8d99448caa9",
            "entityUuid" : "921afcde-5c3c-4608-b24e-df22e17aee59",
            "title" : "PₐO₂",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "bf43ad0e-2209-4b2d-923b-461d3b568df4",
            "parentUuid" : "fbce6b31-6270-48b5-9aeb-d6bc10be3faa",
            "entityUuid" : "dc5ab1bb-53b4-4151-ac32-93cef5b52343",
            "title" : "Inotropes/vasopressors?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c52b917f-da78-4228-b7d3-49f12c7ebd31",
            "parentUuid" : "dc5ab1bb-53b4-4151-ac32-93cef5b52343",
            "entityUuid" : "de7a30b8-93b6-4bde-b7eb-113a0419d38a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "15e727a9-2e08-44b8-8951-2477a69816ad",
            "parentUuid" : "dc5ab1bb-53b4-4151-ac32-93cef5b52343",
            "entityUuid" : "1a08f230-8b06-4c98-bf9e-aad885184721",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ccdaacf0-7938-4a7d-8e25-550425483d43",
            "parentUuid" : "dc5ab1bb-53b4-4151-ac32-93cef5b52343",
            "entityUuid" : "1c00140d-0b83-4b74-b791-708f53028a11",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "58f9f645-9dfc-4d89-a5cf-292a8a44e7c6",
            "parentUuid" : "fbce6b31-6270-48b5-9aeb-d6bc10be3faa",
            "entityUuid" : "63f98c5f-c853-4e2a-8e7d-4f8a9d54f699",
            "title" : "Extracorporeal (ECMO) support?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "976fd923-f22b-4b7b-b2ab-e6c0f35b45a0",
            "parentUuid" : "63f98c5f-c853-4e2a-8e7d-4f8a9d54f699",
            "entityUuid" : "69b8d9e1-c9b6-451a-8255-6de37a7cdb4c",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ef5de054-d1ff-4394-9d94-df50a0ab6d89",
            "parentUuid" : "63f98c5f-c853-4e2a-8e7d-4f8a9d54f699",
            "entityUuid" : "9bf62d4e-e58f-4ebd-bc73-49bd3726ee83",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "692dbf48-71a4-4f2b-8ba2-a8f0fbfe5410",
            "parentUuid" : "63f98c5f-c853-4e2a-8e7d-4f8a9d54f699",
            "entityUuid" : "e219e7b5-8b9f-46e8-8cab-9869630bcc5f",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7307c35d-a7f2-4c71-81ea-6a26a5580093",
            "parentUuid" : "fbce6b31-6270-48b5-9aeb-d6bc10be3faa",
            "entityUuid" : "e3f374ea-1be1-401c-a531-ebdda03a4b84",
            "title" : "Prone position?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bb8608ec-8a63-4903-9ec2-52a4f8eaa689",
            "parentUuid" : "e3f374ea-1be1-401c-a531-ebdda03a4b84",
            "entityUuid" : "e502aed8-d2de-414f-b578-30ab31c1151d",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d69af7ec-42e9-4cca-b390-22aa149f889b",
            "parentUuid" : "e3f374ea-1be1-401c-a531-ebdda03a4b84",
            "entityUuid" : "e3aca47e-2de8-4b8d-b2e0-856cd92ad45d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "207785db-a6f6-4c33-bc59-2dad27a724fb",
            "parentUuid" : "e3f374ea-1be1-401c-a531-ebdda03a4b84",
            "entityUuid" : "305ab86c-fd64-4901-9059-a273b3e3793a",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "096cf498-f60d-44e6-ae01-d74f7eeb7e76",
            "parentUuid" : "fbce6b31-6270-48b5-9aeb-d6bc10be3faa",
            "entityUuid" : "b561eac3-da05-474c-9530-9311467da09a",
            "title" : "Renal replacement therapy (RRT) or dialysis?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6a86434c-d366-46e1-be0a-33af368c54cb",
            "parentUuid" : "b561eac3-da05-474c-9530-9311467da09a",
            "entityUuid" : "0bb965b0-5259-4dbd-9e61-892676336422",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6e86ba79-33cf-4044-b41e-a90daea89ea9",
            "parentUuid" : "b561eac3-da05-474c-9530-9311467da09a",
            "entityUuid" : "75f74edf-362d-4bbc-99a3-61de3875dd28",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e4e220d2-ab60-45cd-96af-5cd84bcb70d4",
            "parentUuid" : "b561eac3-da05-474c-9530-9311467da09a",
            "entityUuid" : "a082551c-305d-4ac8-9b9e-2efb827287ef",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddChapterEvent",
            "uuid" : "b33c0505-7d58-4450-b663-7e5448993204",
            "parentUuid" : "44052a8a-4f99-40bf-99f9-eb2f92b3a25c",
            "entityUuid" : "ef59d974-5fde-4431-b3fb-cfce77e2d006",
            "title" : "Module 3: Discharge or death",
            "text" : "Complete at discharge/death"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ae1ad709-03a1-468f-8305-775b24cc9452",
            "parentUuid" : "ef59d974-5fde-4431-b3fb-cfce77e2d006",
            "entityUuid" : "f3030089-116a-409c-a13e-b6eecc401ae5",
            "title" : "Diagnostic / pathogen testing",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "dea22d2a-e5af-47c7-9f77-26bd19a33592",
            "parentUuid" : "f3030089-116a-409c-a13e-b6eecc401ae5",
            "entityUuid" : "72f25b77-da12-4332-8741-adec865f54b3",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "92230df3-3644-41ec-aa75-c32fde1a5cba",
            "parentUuid" : "72f25b77-da12-4332-8741-adec865f54b3",
            "entityUuid" : "32c33d54-fea1-4b3e-914a-29edfcfc8716",
            "title" : "Chest X-Ray / CT performed?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cd4ca6da-582a-4059-847f-ec4e3a269e38",
            "parentUuid" : "32c33d54-fea1-4b3e-914a-29edfcfc8716",
            "entityUuid" : "e9ff4232-2edb-42fa-aab7-3b4f47673c52",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "14537dfd-d627-4446-9f0e-0d716effa3ec",
            "parentUuid" : "32c33d54-fea1-4b3e-914a-29edfcfc8716",
            "entityUuid" : "09eaf0be-c655-4359-94c2-502d0dbb4b9b",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "079668d5-eb5b-4cae-8fcc-8668103f5269",
            "parentUuid" : "32c33d54-fea1-4b3e-914a-29edfcfc8716",
            "entityUuid" : "47a7d2b6-1834-4452-b5d3-3d2ff24cafcc",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "61ad7be8-3be9-4ce8-8e5c-af9910174534",
            "parentUuid" : "e9ff4232-2edb-42fa-aab7-3b4f47673c52",
            "entityUuid" : "9b9c4d68-6492-4ace-89c4-5272852d98c1",
            "title" : "Infiltrates present?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "79bd2d57-ea8d-4b73-a305-33a67eb2e457",
            "parentUuid" : "9b9c4d68-6492-4ace-89c4-5272852d98c1",
            "entityUuid" : "ea467f2a-9119-46b7-bc6f-d83a741fad90",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "dab6069f-c040-41b6-b169-47ae61b7c1a0",
            "parentUuid" : "9b9c4d68-6492-4ace-89c4-5272852d98c1",
            "entityUuid" : "6741e930-9522-45c0-914d-ebcef9c10724",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "97964117-7a47-4b73-87c3-250bb3f86003",
            "parentUuid" : "9b9c4d68-6492-4ace-89c4-5272852d98c1",
            "entityUuid" : "2c50afa1-7fa0-4b9c-82c6-bbc26d4c40f6",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "32f7fa68-4370-4930-a1ab-98b46298c694",
            "parentUuid" : "72f25b77-da12-4332-8741-adec865f54b3",
            "entityUuid" : "3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0",
            "title" : "Was pathogen testing done during this illness episode?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5124defa-17bc-4b68-8b3e-3c0838b792d0",
            "parentUuid" : "3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0",
            "entityUuid" : "7b835fd5-7197-416c-bd04-986f39e5fa9a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "fe72f417-b895-4e12-9f71-aa81c78b4b9e",
            "parentUuid" : "3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0",
            "entityUuid" : "835880a8-4d6c-4bb9-a7e8-c9d695d1536a",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e193b61a-eaee-47a4-9fdc-31ce3a9fdd4d",
            "parentUuid" : "3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0",
            "entityUuid" : "6bb63e90-108a-46b3-a19a-a10403be0b40",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "9bf961f3-74a2-4ac9-b852-f5a0cc90d485",
            "parentUuid" : "7b835fd5-7197-416c-bd04-986f39e5fa9a",
            "entityUuid" : "fe24d9ba-f94c-4acf-adc0-22997ea4fdda",
            "title" : "Influenza virus",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c0bc1968-0ae0-4ddd-a261-96c3c6a8f97d",
            "parentUuid" : "fe24d9ba-f94c-4acf-adc0-22997ea4fdda",
            "entityUuid" : "d4fe544d-5ba0-4255-a3c0-1aa8bb87c885",
            "label" : "Positive",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "24dd7f65-f76d-4492-a83c-1b5bb4799df2",
            "parentUuid" : "d4fe544d-5ba0-4255-a3c0-1aa8bb87c885",
            "entityUuid" : "4e988454-815d-4b3a-95f8-47a9c531a730",
            "title" : "Type",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0b8b8657-c0ba-4067-99f3-19ac33a1c7af",
            "parentUuid" : "fe24d9ba-f94c-4acf-adc0-22997ea4fdda",
            "entityUuid" : "5918e21c-2002-477c-9dab-b852fe4050e8",
            "label" : "Negative",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5658e0cd-74f4-48da-bda2-64980dab10eb",
            "parentUuid" : "fe24d9ba-f94c-4acf-adc0-22997ea4fdda",
            "entityUuid" : "0945d573-aec3-4038-b394-9119ca7c0d21",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "998e5b31-eb05-4c4b-9144-e217571973d6",
            "parentUuid" : "7b835fd5-7197-416c-bd04-986f39e5fa9a",
            "entityUuid" : "aa0ccb0d-c21a-435d-819b-9552ad32dd50",
            "title" : "Coronavirus",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7f008557-c918-4aa8-afdc-942e648a461f",
            "parentUuid" : "aa0ccb0d-c21a-435d-819b-9552ad32dd50",
            "entityUuid" : "a6a8ed49-cabc-4792-b41a-0da5dd305e0b",
            "label" : "Positive",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3d4d3ad9-74f3-4871-b966-a3348738ac98",
            "parentUuid" : "a6a8ed49-cabc-4792-b41a-0da5dd305e0b",
            "entityUuid" : "ed5b3e55-4927-4109-ada5-fdbf95e136b0",
            "title" : "Type",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "089bd0ab-66dd-4898-a6c4-1f3639aaf3e7",
            "parentUuid" : "ed5b3e55-4927-4109-ada5-fdbf95e136b0",
            "entityUuid" : "466a753d-c01e-4c2e-8eae-36f5a39552f8",
            "label" : "MERS-CoV",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "69007ff4-e3dd-4fa4-bfbf-e742e13975b4",
            "parentUuid" : "ed5b3e55-4927-4109-ada5-fdbf95e136b0",
            "entityUuid" : "68eb3f31-b215-48fe-93ea-bc41d129edc0",
            "label" : "SARS-CoV-2",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cba5544e-10d4-4f5f-bfd0-685c30a7c133",
            "parentUuid" : "ed5b3e55-4927-4109-ada5-fdbf95e136b0",
            "entityUuid" : "2ef0ebb2-2836-4f7c-a8e7-ef98195189dc",
            "label" : "Other",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "80c120d5-bfdf-4e1a-a8d7-64cd46f8bac1",
            "parentUuid" : "2ef0ebb2-2836-4f7c-a8e7-ef98195189dc",
            "entityUuid" : "4c424de4-7d3f-4f01-b3fa-510e89321b51",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3c6f6e47-6614-4ddc-ba0f-3ee23e68fa8f",
            "parentUuid" : "aa0ccb0d-c21a-435d-819b-9552ad32dd50",
            "entityUuid" : "dccfc3f1-d0c0-4866-891b-d72c181de873",
            "label" : "Negative",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4947fc94-51cb-4753-917f-bc1e9baf8a68",
            "parentUuid" : "aa0ccb0d-c21a-435d-819b-9552ad32dd50",
            "entityUuid" : "bca80119-cb9d-475e-9141-bf832c92e9d2",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5b55e206-06ca-402c-af82-40f824975636",
            "parentUuid" : "7b835fd5-7197-416c-bd04-986f39e5fa9a",
            "entityUuid" : "2a1a9082-8497-4e9c-bfc3-033a5c8869b2",
            "title" : "Other respiratory pathogen",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e1bcdb2c-0b2a-4e58-8206-1a9cece4ffa5",
            "parentUuid" : "2a1a9082-8497-4e9c-bfc3-033a5c8869b2",
            "entityUuid" : "3ed33a9a-4a64-46e7-b6a8-947f9a444fba",
            "label" : "Positive",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "6f1c34e9-f1a9-4b8e-8e57-6b6b3fa4c4e8",
            "parentUuid" : "3ed33a9a-4a64-46e7-b6a8-947f9a444fba",
            "entityUuid" : "aa7ac60b-6947-4c79-8047-bfb4020ff80d",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e83066ff-3bf3-40fc-9e82-4831a034dd16",
            "parentUuid" : "2a1a9082-8497-4e9c-bfc3-033a5c8869b2",
            "entityUuid" : "11456d2c-533e-408a-91ef-f0668ef2ce4f",
            "label" : "Negative",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c2ea6026-b89b-45b7-8262-ed77933a1f2a",
            "parentUuid" : "2a1a9082-8497-4e9c-bfc3-033a5c8869b2",
            "entityUuid" : "c572a7dd-5a41-4e9d-af5c-17e532c87f85",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2a355d5b-43c2-444b-876f-a52cac13150f",
            "parentUuid" : "7b835fd5-7197-416c-bd04-986f39e5fa9a",
            "entityUuid" : "1c0addf3-4675-4530-82d5-2908d5e7caf1",
            "title" : "Viral haemorrhagic fever",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "96de5f00-507e-46cb-983a-ee98afadb76b",
            "parentUuid" : "1c0addf3-4675-4530-82d5-2908d5e7caf1",
            "entityUuid" : "6f1c13d7-7e30-4112-86e6-b12a11bdbee2",
            "label" : "Positive",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e50c8426-03d5-4dce-8cff-3c65c01b8b85",
            "parentUuid" : "6f1c13d7-7e30-4112-86e6-b12a11bdbee2",
            "entityUuid" : "2858d533-4e39-43d0-9e65-c6661c567eef",
            "title" : "Specify virus",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "227630ff-a6a0-46f7-bb32-baf3d7e859ea",
            "parentUuid" : "1c0addf3-4675-4530-82d5-2908d5e7caf1",
            "entityUuid" : "335530b2-7adf-4ac7-a008-9c382f8477c1",
            "label" : "Negative",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8e7a1d43-e764-4d83-bc59-9d06cde25532",
            "parentUuid" : "1c0addf3-4675-4530-82d5-2908d5e7caf1",
            "entityUuid" : "8dd5d403-cb4c-44a5-a85f-c098893b0129",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "56ce560b-654e-4199-93ef-a7d3cef9f93b",
            "parentUuid" : "7b835fd5-7197-416c-bd04-986f39e5fa9a",
            "entityUuid" : "03b0fdee-c88c-4c7e-b21b-eee7bd53e825",
            "title" : "Other pathogen of public health interest detected",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4fd198e8-b8f5-4621-b3a8-be95eefc565b",
            "parentUuid" : "03b0fdee-c88c-4c7e-b21b-eee7bd53e825",
            "entityUuid" : "41fc30c7-26f8-4bbd-8d04-1e9cd5409c20",
            "label" : "Positive",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f5e54068-afc3-4e86-b935-3932c8d58883",
            "parentUuid" : "41fc30c7-26f8-4bbd-8d04-1e9cd5409c20",
            "entityUuid" : "1b0f63c1-3409-436f-84f2-0b354c19f59e",
            "title" : "Specify virus",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9d431396-e4ed-46dd-9e0d-e33d0e34a38b",
            "parentUuid" : "03b0fdee-c88c-4c7e-b21b-eee7bd53e825",
            "entityUuid" : "3395ac8d-77c2-450d-9217-894c1328c6a0",
            "label" : "Negative",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b4abbf0e-7b10-4be8-95b5-8e223a9f7484",
            "parentUuid" : "03b0fdee-c88c-4c7e-b21b-eee7bd53e825",
            "entityUuid" : "50bd74a0-1aec-4f39-974b-41ac726beead",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "770c6a08-0f70-44cb-ae7e-2296083dd6db",
            "parentUuid" : "7b835fd5-7197-416c-bd04-986f39e5fa9a",
            "entityUuid" : "e156d6cf-74cd-4197-859d-f6b3578282e0",
            "title" : "Falciparum malaria",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "23ced21b-1c65-478d-aa3e-138e13e0f7f8",
            "parentUuid" : "e156d6cf-74cd-4197-859d-f6b3578282e0",
            "entityUuid" : "fe887afe-0ac4-4b89-8449-be1d2527c26f",
            "label" : "Positive",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "adab1d2e-c5eb-43be-8663-8555f67cbf39",
            "parentUuid" : "e156d6cf-74cd-4197-859d-f6b3578282e0",
            "entityUuid" : "f73b58c8-0f78-4ca8-a160-2e8df51c6c25",
            "label" : "Negative",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "675fd9f5-6d08-4890-bfb4-9703359760de",
            "parentUuid" : "e156d6cf-74cd-4197-859d-f6b3578282e0",
            "entityUuid" : "4eb1bc91-b3ec-4fbd-ad55-f9e1e485ec62",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fbcd389d-f1ac-465a-87f2-f1aae4b40617",
            "parentUuid" : "7b835fd5-7197-416c-bd04-986f39e5fa9a",
            "entityUuid" : "50a53e75-9c7e-4f47-800c-20a73fad1f88",
            "title" : "Non-falciparum malaria",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "36cc8099-99df-4d79-9873-795f5b0462b3",
            "parentUuid" : "50a53e75-9c7e-4f47-800c-20a73fad1f88",
            "entityUuid" : "6a87f873-cba1-4f0c-85ff-b825d69f301a",
            "label" : "Positive",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "529b4243-c794-4af6-9813-4bca9d1c1c31",
            "parentUuid" : "50a53e75-9c7e-4f47-800c-20a73fad1f88",
            "entityUuid" : "ed3f2d00-5f9e-49f9-8bfe-13bdd5d3d2cb",
            "label" : "Negative",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c2bdeec1-f5df-40b2-8375-f44b89cbe11f",
            "parentUuid" : "50a53e75-9c7e-4f47-800c-20a73fad1f88",
            "entityUuid" : "c89085e5-e0f3-41fb-ad9f-6792bef2f1b6",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4d48c1c2-f742-4fe1-b2cb-05b2079175b7",
            "parentUuid" : "7b835fd5-7197-416c-bd04-986f39e5fa9a",
            "entityUuid" : "b0d2e5dc-3fc1-4dab-bd87-7a99f6cbec6f",
            "title" : "HIV",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "03da2d9d-ef23-470f-9818-19c77f420571",
            "parentUuid" : "b0d2e5dc-3fc1-4dab-bd87-7a99f6cbec6f",
            "entityUuid" : "38338012-8b78-4cb2-855c-66ebd2db7c09",
            "label" : "Positive",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2beda0b0-87c1-41fc-b763-f160d8d08c5f",
            "parentUuid" : "b0d2e5dc-3fc1-4dab-bd87-7a99f6cbec6f",
            "entityUuid" : "64a9726f-7af6-4d86-a47d-924018f520f5",
            "label" : "Negative",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "221f88dd-68a8-4a6e-ac30-9e699509aca7",
            "parentUuid" : "b0d2e5dc-3fc1-4dab-bd87-7a99f6cbec6f",
            "entityUuid" : "942114bc-54fe-4c8f-a920-52d3fb595e38",
            "label" : "Not done",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "378110a8-0997-4fdb-a0f1-76fc1e95433e",
            "parentUuid" : "ef59d974-5fde-4431-b3fb-cfce77e2d006",
            "entityUuid" : "79acfc29-56d7-47bb-8a05-91f00ed7fc83",
            "title" : "Complications",
            "text" : "At any time during hospitalisation did the patient experience...",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6c2cec64-59c3-4468-a1dc-d66adc6c8d4a",
            "parentUuid" : "79acfc29-56d7-47bb-8a05-91f00ed7fc83",
            "entityUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4f160d26-4ad8-47d7-9311-901ead8a9bd9",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "49c35415-3e43-4ebb-890c-68e7ad3ffcf7",
            "title" : "Shock",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "55e12ece-a9d4-4017-bd79-1f46da7a1f27",
            "parentUuid" : "49c35415-3e43-4ebb-890c-68e7ad3ffcf7",
            "entityUuid" : "3d0c3fb7-e7e9-46c0-bd77-feefba568c65",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e5917249-a65e-4c9e-a494-a9a46e57524f",
            "parentUuid" : "49c35415-3e43-4ebb-890c-68e7ad3ffcf7",
            "entityUuid" : "36d7410e-84d2-4005-b127-fc1f6e4be1ff",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7361ce8c-8071-4af0-a45f-397e31e61d8f",
            "parentUuid" : "49c35415-3e43-4ebb-890c-68e7ad3ffcf7",
            "entityUuid" : "5048ab5a-b607-416a-b1c2-deeced05d5b5",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c4494acc-b2f6-4435-9c39-ed1b2d040225",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "09b51576-0ae6-4457-ab4d-a5986a6696a0",
            "title" : "Seizure",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "961e971c-cb9b-42b7-af75-26a658fb5774",
            "parentUuid" : "09b51576-0ae6-4457-ab4d-a5986a6696a0",
            "entityUuid" : "b6dbe0f9-7532-464e-aa51-32884c5c84ca",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f1e50d71-6865-487e-9fdb-883937f7d83a",
            "parentUuid" : "09b51576-0ae6-4457-ab4d-a5986a6696a0",
            "entityUuid" : "5cca8fe3-ef3c-43ee-8b29-eac948e8158c",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2b897b6f-d0c8-4212-96c8-68148a9cbee7",
            "parentUuid" : "09b51576-0ae6-4457-ab4d-a5986a6696a0",
            "entityUuid" : "41ec8990-7143-4891-8ae7-89b56552a76e",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ab4ba9e2-64e8-44a7-b24b-f23d8e6d8fd0",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "6a14b843-9f46-43ca-80e6-efca400912ef",
            "title" : "Meningitis/Encephalitis",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ae1a4ed1-4825-4dbb-a5b1-a7ae0278ff35",
            "parentUuid" : "6a14b843-9f46-43ca-80e6-efca400912ef",
            "entityUuid" : "3d1a6ea1-79e4-4989-80d7-609d58582ea3",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7b79675e-02ad-45ed-8b8f-beaa9f4922a3",
            "parentUuid" : "6a14b843-9f46-43ca-80e6-efca400912ef",
            "entityUuid" : "a713146e-841e-4f8a-a287-6e1ef91b122b",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bf0fc32a-d036-48ec-88fa-b331db752e6c",
            "parentUuid" : "6a14b843-9f46-43ca-80e6-efca400912ef",
            "entityUuid" : "746aa7ac-ac13-41be-b3fc-9954c6828141",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "4fd85f35-da60-402b-a7e1-401176859972",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "8b461af0-150c-4c54-b10f-428a8a28c5dd",
            "title" : "Anaemia",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "463b2684-ee8c-4f2a-b5f9-ee363db4e033",
            "parentUuid" : "8b461af0-150c-4c54-b10f-428a8a28c5dd",
            "entityUuid" : "ccd6d168-3a43-4e2a-afd7-1790913a5a97",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "52eba9ee-7a3e-4ade-9f3f-17aef38c77a0",
            "parentUuid" : "8b461af0-150c-4c54-b10f-428a8a28c5dd",
            "entityUuid" : "f01601b4-ecae-4dce-a9c6-26ae9e66a364",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7fbe8437-c679-4e74-8fa7-9e69e3232b63",
            "parentUuid" : "8b461af0-150c-4c54-b10f-428a8a28c5dd",
            "entityUuid" : "a7a41a99-84bb-449c-9cfb-d0956e3bd081",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "796d702b-db6e-4ae7-a9b6-f2d7cc5c077e",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "ffa720fa-8e30-47c7-b889-a4d6bd0f2b70",
            "title" : "Cardiac arrhythmia",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3091b8cb-7b67-4ed0-8a4b-cdaa65e20af7",
            "parentUuid" : "ffa720fa-8e30-47c7-b889-a4d6bd0f2b70",
            "entityUuid" : "b0a45da5-0fac-4643-87e9-aee1fac7b8cf",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "333c5b2a-e88b-4b9f-add7-bae6a3d41bfb",
            "parentUuid" : "ffa720fa-8e30-47c7-b889-a4d6bd0f2b70",
            "entityUuid" : "fecb7dc5-df98-41e2-af21-aff9111a3e1d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "79516cf5-1fec-4a32-a920-d44591ffb31d",
            "parentUuid" : "ffa720fa-8e30-47c7-b889-a4d6bd0f2b70",
            "entityUuid" : "bdb6e405-1131-4757-b4f4-7f01dd7041e9",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "2f48fb21-bcd7-4ee9-8f43-12e54a86c46a",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "3e29d04c-0957-4a07-9dcd-af7530d63064",
            "title" : "Cardiac arrest",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1296c407-3e37-40ef-9b44-c61f33848028",
            "parentUuid" : "3e29d04c-0957-4a07-9dcd-af7530d63064",
            "entityUuid" : "6610dd7c-3778-4107-bf51-cb82bba45a90",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8bebeba8-8214-458b-bff0-bf7790392164",
            "parentUuid" : "3e29d04c-0957-4a07-9dcd-af7530d63064",
            "entityUuid" : "3ef3f518-9686-435a-ac88-86c2d5296613",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "68870bde-76fb-4a52-8135-63e466d08184",
            "parentUuid" : "3e29d04c-0957-4a07-9dcd-af7530d63064",
            "entityUuid" : "91792549-5186-4823-9462-079f77fc2fe6",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "fe7c3426-286c-4a59-9fbd-5431b6df3ec2",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "1d1ebcd9-b9fc-4018-9f7c-bcc029faf836",
            "title" : "Pneumonia",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e2092a8f-fa10-42a0-9688-b0e7e07d46ce",
            "parentUuid" : "1d1ebcd9-b9fc-4018-9f7c-bcc029faf836",
            "entityUuid" : "0dc80aa6-eed7-4dd4-9b30-dc80d09129df",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8e3ef6d8-bd0f-4741-8920-a8555bbf6100",
            "parentUuid" : "1d1ebcd9-b9fc-4018-9f7c-bcc029faf836",
            "entityUuid" : "db131f1b-19a2-482d-bde1-ca0f88c5aca4",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "07df34b7-709d-4bab-9f03-3fef15e72682",
            "parentUuid" : "1d1ebcd9-b9fc-4018-9f7c-bcc029faf836",
            "entityUuid" : "a4cd054e-61e8-4282-8425-aadedd164a40",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "90d2d674-a982-43f9-864c-11f3858ffa94",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "f4682450-ea49-4d50-93f5-7a45f9480023",
            "title" : "Bronchiolitis",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "56c1d3d0-a181-42bd-a752-d3a91bf8e32a",
            "parentUuid" : "f4682450-ea49-4d50-93f5-7a45f9480023",
            "entityUuid" : "fef77657-de71-4800-98b4-c99343a58a06",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a3c55fee-804a-4db1-b629-8ae828cdb2d1",
            "parentUuid" : "f4682450-ea49-4d50-93f5-7a45f9480023",
            "entityUuid" : "f01a3563-8221-4039-8365-52cc444134fb",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0a3247cb-0959-4e76-927a-ef574af1a308",
            "parentUuid" : "f4682450-ea49-4d50-93f5-7a45f9480023",
            "entityUuid" : "edf6dd8e-b1a7-42eb-9c7d-b42d789ec3cb",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "bf61af9d-6243-40dd-b347-81ac1ad12db2",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "bd2d91c7-a965-440c-8a84-310b18c80ad5",
            "title" : "Acute Respiratory Distress Syndrome",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f44a3d17-be4a-44bf-9959-56d63db29358",
            "parentUuid" : "bd2d91c7-a965-440c-8a84-310b18c80ad5",
            "entityUuid" : "af10e342-acaf-419a-88e4-8eb61179210e",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "73e4ace8-c7a8-496b-8322-f1d0fdc7e6e9",
            "parentUuid" : "bd2d91c7-a965-440c-8a84-310b18c80ad5",
            "entityUuid" : "5ea36a47-3e2d-4145-9916-a8f7ac8603f9",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3f6e8755-ce45-4a3d-ac00-51445410384d",
            "parentUuid" : "bd2d91c7-a965-440c-8a84-310b18c80ad5",
            "entityUuid" : "a121d8d4-dc26-4a07-a4be-c65dd01178fa",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e1a384e1-1663-4ef6-bc1d-ff08376fbc20",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "5bc0a008-3812-453c-a4f2-e0be67b0ffda",
            "title" : "Bacteraemia",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "60705c22-61a9-4849-a0b7-98dbe071802f",
            "parentUuid" : "5bc0a008-3812-453c-a4f2-e0be67b0ffda",
            "entityUuid" : "4b9bbb43-53ce-4f31-899f-7f9a757214a0",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7f695183-2351-42af-ba8c-33423b673d37",
            "parentUuid" : "5bc0a008-3812-453c-a4f2-e0be67b0ffda",
            "entityUuid" : "d3713ff4-864e-4cdd-acdf-5e97ac3e13a3",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b97bc214-31aa-4293-9780-2ad6d7f05bf4",
            "parentUuid" : "5bc0a008-3812-453c-a4f2-e0be67b0ffda",
            "entityUuid" : "bae47c7e-ffe8-4824-96ff-f183d0a735f4",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "357dd6af-b301-4859-afc6-8a0efda2086a",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "d45a38eb-a040-4b7a-8c2c-ef378f476eb7",
            "title" : "Bleeding",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "30ca9058-503d-4434-ad14-c1ac4a272827",
            "parentUuid" : "d45a38eb-a040-4b7a-8c2c-ef378f476eb7",
            "entityUuid" : "11f1b201-dbe7-4b35-879b-0a5c24ddb566",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "58b04459-6b67-4f4e-a34f-9cb8bec9e0db",
            "parentUuid" : "d45a38eb-a040-4b7a-8c2c-ef378f476eb7",
            "entityUuid" : "d79b8681-4ca7-4885-ba6d-fd8a01810f49",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8a01687c-b667-4d3c-b819-be5728b305eb",
            "parentUuid" : "d45a38eb-a040-4b7a-8c2c-ef378f476eb7",
            "entityUuid" : "98a9b53b-90a8-436c-9880-9ebe2a7e7b8e",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d02c4757-f049-46d0-b6f9-a9b1fc779a9e",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "e0e086f3-ad71-4a2e-88d1-3336c8831cd1",
            "title" : "Endocarditis",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f39d7c0a-20a2-4b7b-bffc-e707fae0e9a5",
            "parentUuid" : "e0e086f3-ad71-4a2e-88d1-3336c8831cd1",
            "entityUuid" : "76c78d12-a461-424d-b66c-46ea620a4af4",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "099cf484-31af-4b90-9e9d-8c148553b20b",
            "parentUuid" : "e0e086f3-ad71-4a2e-88d1-3336c8831cd1",
            "entityUuid" : "f98a7601-f971-4e7a-bc54-8a415d1f8b4f",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "41acce82-220d-4c7b-9204-3813b8a8626e",
            "parentUuid" : "e0e086f3-ad71-4a2e-88d1-3336c8831cd1",
            "entityUuid" : "3ab30af7-6c9e-4382-a139-b03a32747f86",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "97c4a90e-c68d-4968-94b3-9c60a57c956e",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "2bf7ebac-2c05-4bd5-908c-5baf6ca50ff5",
            "title" : "Myocarditis/Pericarditis",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bf1444fc-5b87-4d6a-88cc-da6444cffd43",
            "parentUuid" : "2bf7ebac-2c05-4bd5-908c-5baf6ca50ff5",
            "entityUuid" : "13340dcd-a5d2-4337-9070-d87bcf4dc623",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "51c5c36f-69d3-4371-bbce-7db6e71fe306",
            "parentUuid" : "2bf7ebac-2c05-4bd5-908c-5baf6ca50ff5",
            "entityUuid" : "58c257c8-3cf5-436a-9399-741964d5ee02",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1c29c8fd-61e4-4713-836a-5596f598e01b",
            "parentUuid" : "2bf7ebac-2c05-4bd5-908c-5baf6ca50ff5",
            "entityUuid" : "ac708678-60bd-4c4b-b368-a632dce000ac",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a86eca55-110e-4198-b26c-3654f7ea1738",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "963d6938-9d72-4793-afa1-76c11be9780c",
            "title" : "Acute renal injury",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e7d0db72-5446-44c1-b4ae-74a6316efaa8",
            "parentUuid" : "963d6938-9d72-4793-afa1-76c11be9780c",
            "entityUuid" : "ca3abb43-46a1-497f-bcad-8eae8e82df06",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3a3eb590-e6d8-4b47-894c-91e5b0247736",
            "parentUuid" : "963d6938-9d72-4793-afa1-76c11be9780c",
            "entityUuid" : "f264bc9d-2611-453c-ba31-bc1736114c20",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "784e5457-2306-41ab-8f6a-684dffb53c08",
            "parentUuid" : "963d6938-9d72-4793-afa1-76c11be9780c",
            "entityUuid" : "cdf6317d-ed8c-4d0c-8ab4-5826ffe72852",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "277e7c77-08b7-46a9-82ce-0ac4d2092ea2",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "5d034703-a10b-4d27-b1f3-89553566f42b",
            "title" : "Pancreatitis",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "623c4ec1-7515-4444-a03f-cec163e6ba55",
            "parentUuid" : "5d034703-a10b-4d27-b1f3-89553566f42b",
            "entityUuid" : "c3b10d54-ceef-45e2-b08d-4fd74f959651",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c790f6a5-145b-43b5-a5a7-0c184a3b37f8",
            "parentUuid" : "5d034703-a10b-4d27-b1f3-89553566f42b",
            "entityUuid" : "75e4cba6-2040-4dbe-800c-e097ff5002e2",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c45e9f7b-179b-4955-9295-7528dc2c5b6d",
            "parentUuid" : "5d034703-a10b-4d27-b1f3-89553566f42b",
            "entityUuid" : "908a47f2-15ed-4007-9af1-0b72f3d5f399",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3c884aec-68ee-4186-8041-2282ef4c7124",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "0dba017e-d47d-4976-ab1e-0822b2795027",
            "title" : "Liver dysfunction",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5d416f2d-de37-469f-98f0-10801b635984",
            "parentUuid" : "0dba017e-d47d-4976-ab1e-0822b2795027",
            "entityUuid" : "f0397d46-6b8d-4dd6-9f20-3f4a8d914529",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "fd20f122-d976-4971-aeaa-30424637c2f9",
            "parentUuid" : "0dba017e-d47d-4976-ab1e-0822b2795027",
            "entityUuid" : "22ee0a7b-139b-4803-8372-cebca0ba9844",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "dc81bce1-6393-42c0-9896-65fed92e879f",
            "parentUuid" : "0dba017e-d47d-4976-ab1e-0822b2795027",
            "entityUuid" : "305cb115-69f5-41b9-91e1-c57b8d55682a",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ee20bae6-21d1-4a17-83cd-d1f626f02526",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "239d23b6-03ab-4b18-a947-72976b35d310",
            "title" : "Cardiomyopathy",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "83e7171d-236b-4311-b201-2cb285079d48",
            "parentUuid" : "239d23b6-03ab-4b18-a947-72976b35d310",
            "entityUuid" : "a43b07ef-2ffd-499b-9427-46350122f126",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8606ceb6-af4a-44b8-9d54-2859119ee5fe",
            "parentUuid" : "239d23b6-03ab-4b18-a947-72976b35d310",
            "entityUuid" : "0a9048a6-d681-4d6c-9147-6987a9b89e70",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "619d25f4-92a0-4603-9a06-d057b91c671b",
            "parentUuid" : "239d23b6-03ab-4b18-a947-72976b35d310",
            "entityUuid" : "e706dfe3-0945-4052-9805-052a8e0c6ef2",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "be0023cf-f489-4c83-9798-ff46c0942fc4",
            "parentUuid" : "64efa06c-f348-432f-b6d5-2fed98afbc35",
            "entityUuid" : "f369f3f1-6305-4430-808c-a265832b2814",
            "title" : "Other",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "17b0d6e3-86e6-4422-85f0-80228a8958b2",
            "parentUuid" : "f369f3f1-6305-4430-808c-a265832b2814",
            "entityUuid" : "c0617d60-3314-4204-b373-059ac2280d34",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8c60f584-8898-4270-80d5-2e95571b9d25",
            "parentUuid" : "f369f3f1-6305-4430-808c-a265832b2814",
            "entityUuid" : "31329e72-1758-40bf-bf34-2c2d7374e9ce",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9d3310c5-025c-4fb3-8d01-2e56e98022ea",
            "parentUuid" : "f369f3f1-6305-4430-808c-a265832b2814",
            "entityUuid" : "14d5cbf1-3213-453e-a8be-a0b9f562df89",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bec35a85-3816-4bcd-a412-d650b7f4c1f3",
            "parentUuid" : "c0617d60-3314-4204-b373-059ac2280d34",
            "entityUuid" : "6e944e0b-47ac-4be6-b2c2-6bec30d8e435",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b36023da-1bde-4111-9b04-238997ba9f39",
            "parentUuid" : "ef59d974-5fde-4431-b3fb-cfce77e2d006",
            "entityUuid" : "c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1",
            "title" : "Medication",
            "text" : "While hospitalised or at discharge, were any of the following administered?",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3afc96cd-05aa-424b-8f6c-6a516ac56efc",
            "parentUuid" : "c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1",
            "entityUuid" : "6a2b9cc5-1348-4017-af26-d634380f8c1d",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e293cebe-b07b-4ba5-9e60-6598ee6625d9",
            "parentUuid" : "6a2b9cc5-1348-4017-af26-d634380f8c1d",
            "entityUuid" : "1cbfe204-9f8d-41ba-8c03-4ebad108ade4",
            "title" : "Oral/orogastric fluids?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "57995bd8-460f-4aaa-b62b-19e1c062995f",
            "parentUuid" : "1cbfe204-9f8d-41ba-8c03-4ebad108ade4",
            "entityUuid" : "ae2c3370-6e20-479b-8c48-9d6de0ff1195",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9ba385e0-0011-4729-9011-ca17cd1b416b",
            "parentUuid" : "1cbfe204-9f8d-41ba-8c03-4ebad108ade4",
            "entityUuid" : "0114aa16-760a-416d-b5f1-56a0887f872d",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "18cb76ba-78c0-490f-a4b5-4a02b5d79489",
            "parentUuid" : "1cbfe204-9f8d-41ba-8c03-4ebad108ade4",
            "entityUuid" : "0830385b-150f-4e32-98ca-40430681a1bb",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "633f46c3-1093-42bc-b4d5-f5aaf4061f7e",
            "parentUuid" : "6a2b9cc5-1348-4017-af26-d634380f8c1d",
            "entityUuid" : "1e5054d4-b95c-4ea7-ba5a-23d11076a950",
            "title" : "Intravenous fluids?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "20c3eef9-2814-4d66-8840-c4fecbaac3f4",
            "parentUuid" : "1e5054d4-b95c-4ea7-ba5a-23d11076a950",
            "entityUuid" : "5281302d-0faf-4a1d-88c5-bd5bd5a58ea9",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c70c3e68-01c6-4ede-8de6-7d705496b672",
            "parentUuid" : "1e5054d4-b95c-4ea7-ba5a-23d11076a950",
            "entityUuid" : "6ce41ad2-514c-4e2f-9721-934e76fda9c1",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6def1d95-a2db-4e94-b491-141f633fd072",
            "parentUuid" : "1e5054d4-b95c-4ea7-ba5a-23d11076a950",
            "entityUuid" : "d4f52798-9149-4719-9d18-ae87ec99cdeb",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "71ace9f8-e79c-424a-8175-06cec7b4fb8a",
            "parentUuid" : "6a2b9cc5-1348-4017-af26-d634380f8c1d",
            "entityUuid" : "a1b84278-1d13-4b40-829d-c0eba34ce852",
            "title" : "Antiviral?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6a7ac693-7b0a-45eb-aba2-6fafc73c24e4",
            "parentUuid" : "a1b84278-1d13-4b40-829d-c0eba34ce852",
            "entityUuid" : "c2601689-8d51-4040-ba41-ad1eb21062ca",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "b40d5392-ee4e-4d14-b720-31ed9e76356d",
            "parentUuid" : "c2601689-8d51-4040-ba41-ad1eb21062ca",
            "entityUuid" : "2685530c-bffe-45cf-b963-b25e5477620c",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3c5ab473-8d24-4625-bccf-40c1fb19498c",
            "parentUuid" : "2685530c-bffe-45cf-b963-b25e5477620c",
            "entityUuid" : "653051e7-90a3-4669-8b38-ccbe88f4b9e5",
            "title" : "Select",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d678b371-cfc5-4eb5-b15f-6899793cafa2",
            "parentUuid" : "653051e7-90a3-4669-8b38-ccbe88f4b9e5",
            "entityUuid" : "1df8f9f6-b1a8-443f-9575-0f277d4c8486",
            "label" : "Ribavirin",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "4c93c25d-5215-4bef-903d-51d40070631f",
            "parentUuid" : "653051e7-90a3-4669-8b38-ccbe88f4b9e5",
            "entityUuid" : "539532a9-1f79-48e1-a9e1-0a0da0bc875e",
            "label" : "Lopinavir/Ritonavir",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d04ebb49-e7ce-45da-84fb-f42b3c7c6b22",
            "parentUuid" : "653051e7-90a3-4669-8b38-ccbe88f4b9e5",
            "entityUuid" : "16a9eece-19c1-485c-9738-024a430f8135",
            "label" : "Neuraminidase inhibitor",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c398560c-361e-4214-ba0a-5c1c68e62ad9",
            "parentUuid" : "653051e7-90a3-4669-8b38-ccbe88f4b9e5",
            "entityUuid" : "c9af411c-c8f7-43d7-8214-f36a359330e0",
            "label" : "Interferon alpha",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e42db67d-0d11-47d7-a72f-a1c6545d0eca",
            "parentUuid" : "653051e7-90a3-4669-8b38-ccbe88f4b9e5",
            "entityUuid" : "3a1b08b9-ac32-4035-97f9-704ef45d2ecb",
            "label" : "Interferon beta",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b61b412b-f13a-4c59-abff-cb60065a85c3",
            "parentUuid" : "653051e7-90a3-4669-8b38-ccbe88f4b9e5",
            "entityUuid" : "39ea8387-4545-4e01-a5ef-b2802e18b2d0",
            "label" : "Other",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "e0f886b6-d56b-48a0-9f38-c432001d11d5",
            "parentUuid" : "39ea8387-4545-4e01-a5ef-b2802e18b2d0",
            "entityUuid" : "abe8a8e0-80d6-47a2-8a83-44b3092fc4f6",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "466e8b8e-3768-40d6-a6c5-83c4b5da944d",
            "parentUuid" : "a1b84278-1d13-4b40-829d-c0eba34ce852",
            "entityUuid" : "e1e61c0e-e96f-47c6-99df-ed752a0701ee",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1a4057db-e70a-4850-90be-5fd5c97e0318",
            "parentUuid" : "a1b84278-1d13-4b40-829d-c0eba34ce852",
            "entityUuid" : "2d7039d6-124b-4491-bb8d-454f0458543a",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7cf73ac0-5330-4fbc-b45f-a95f9f381f1a",
            "parentUuid" : "6a2b9cc5-1348-4017-af26-d634380f8c1d",
            "entityUuid" : "aa69f0e6-0d7b-48bf-8f10-eeab183366bc",
            "title" : "Antibiotic?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "001ac551-9964-4150-bf69-81b8c9cbf5fa",
            "parentUuid" : "aa69f0e6-0d7b-48bf-8f10-eeab183366bc",
            "entityUuid" : "656f775b-fea4-4cf4-a53e-db1137aa667a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ba2eb717-5611-4f37-b099-e5e8cc3a653b",
            "parentUuid" : "aa69f0e6-0d7b-48bf-8f10-eeab183366bc",
            "entityUuid" : "f25528bd-afc0-4485-a2cb-df0a0fc82557",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1154961f-1e6a-4f3c-a9ec-b1b4f83dd038",
            "parentUuid" : "aa69f0e6-0d7b-48bf-8f10-eeab183366bc",
            "entityUuid" : "e455a812-d1d2-4be5-8b96-1d3104e450a3",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "f305b854-4d4d-4bd6-9851-daeaece33915",
            "parentUuid" : "656f775b-fea4-4cf4-a53e-db1137aa667a",
            "entityUuid" : "76fe8bc2-97a6-4410-a397-3ce08d9dacbb",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "68fb5451-b037-4107-bffe-1cdafc02fc35",
            "parentUuid" : "6a2b9cc5-1348-4017-af26-d634380f8c1d",
            "entityUuid" : "f4a02fbc-c268-4f50-977b-cc0f5d41116f",
            "title" : "Corticosteroid?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d9036c09-b16e-40da-bc45-05bb663f8736",
            "parentUuid" : "f4a02fbc-c268-4f50-977b-cc0f5d41116f",
            "entityUuid" : "b6d12417-bd94-4b30-a4a3-0d7d43326996",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ListQuestion",
            "uuid" : "127e63b5-5bb7-4532-a4af-651e7c699879",
            "parentUuid" : "b6d12417-bd94-4b30-a4a3-0d7d43326996",
            "entityUuid" : "97d106a6-0085-42af-8155-4e542271c75e",
            "title" : "Route",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "04d7dfca-08f4-4421-b681-5014147c716d",
            "parentUuid" : "97d106a6-0085-42af-8155-4e542271c75e",
            "entityUuid" : "fd3788f3-76cc-4a6d-b36b-dc4126742370",
            "title" : "Select",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "96b52205-cf59-4a54-acce-56cb7d5de876",
            "parentUuid" : "fd3788f3-76cc-4a6d-b36b-dc4126742370",
            "entityUuid" : "215f389a-f760-4b1b-9998-a73f109e3631",
            "label" : "Oral",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "40e2c5f6-d506-4add-baf7-e1afb575e9ba",
            "parentUuid" : "fd3788f3-76cc-4a6d-b36b-dc4126742370",
            "entityUuid" : "da04bcb4-ede2-476a-ad59-27efd2c927bc",
            "label" : "Intravenous",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "188f81ca-01fc-4625-a333-63f461630738",
            "parentUuid" : "fd3788f3-76cc-4a6d-b36b-dc4126742370",
            "entityUuid" : "5decd5a3-d2f3-4c2a-abf6-176574eeba1c",
            "label" : "Inhaled",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "0ae3139b-cba2-424a-9630-52ade1fc0ecf",
            "parentUuid" : "b6d12417-bd94-4b30-a4a3-0d7d43326996",
            "entityUuid" : "8de682fa-4042-4dd8-a60f-1088af6c533c",
            "title" : "Agent",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "d695a1dc-672c-423f-9f7c-616ad97bb16a",
            "parentUuid" : "b6d12417-bd94-4b30-a4a3-0d7d43326996",
            "entityUuid" : "d081af26-3556-4f86-9ca6-ef27e53368ad",
            "title" : "Maximum daily dose",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1ad774b3-f554-4d63-b867-55bf60e9f919",
            "parentUuid" : "f4a02fbc-c268-4f50-977b-cc0f5d41116f",
            "entityUuid" : "0279e7b0-d2a1-42f5-91e4-56b67bd7a918",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "147a2320-b38e-4924-883d-652aea4d9ab3",
            "parentUuid" : "f4a02fbc-c268-4f50-977b-cc0f5d41116f",
            "entityUuid" : "d768d74b-1bf6-4ae7-9eda-00246d68d422",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "9d33358d-95ba-4f0c-b821-81d1aaae5e32",
            "parentUuid" : "6a2b9cc5-1348-4017-af26-d634380f8c1d",
            "entityUuid" : "4344150a-e964-4c98-97a2-1d38b70b544c",
            "title" : "Antifungal agent?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "32848ff5-48a3-4332-99f6-160b909c35d2",
            "parentUuid" : "4344150a-e964-4c98-97a2-1d38b70b544c",
            "entityUuid" : "42ddb949-cfff-493f-9965-8b53e06ec7c9",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "fd79a151-e9df-4ff9-b36e-518a2ea60c82",
            "parentUuid" : "4344150a-e964-4c98-97a2-1d38b70b544c",
            "entityUuid" : "415b8391-2be7-43cc-92ff-f3bacf75db88",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ff942af9-44b0-4b6a-b29c-6a6b6552bae6",
            "parentUuid" : "4344150a-e964-4c98-97a2-1d38b70b544c",
            "entityUuid" : "e417f46c-2db5-4c4c-b5c7-b892a898f40e",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "36dcf1ed-ceca-4687-8ab8-50448f1efb7d",
            "parentUuid" : "42ddb949-cfff-493f-9965-8b53e06ec7c9",
            "entityUuid" : "ef528f8f-010f-4eed-890f-0f080cb70637",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d6180799-1596-4ec6-a9bb-0e555fe2700b",
            "parentUuid" : "6a2b9cc5-1348-4017-af26-d634380f8c1d",
            "entityUuid" : "a74c4c2c-3159-4514-9aa3-cd0dee82c14d",
            "title" : "Antimalarial agent?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "cc408636-2614-4aea-b2d4-e6300d43dc38",
            "parentUuid" : "a74c4c2c-3159-4514-9aa3-cd0dee82c14d",
            "entityUuid" : "2221b9a4-70e5-4576-bea9-922277903086",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "015e550f-3728-4565-9748-167376030d25",
            "parentUuid" : "a74c4c2c-3159-4514-9aa3-cd0dee82c14d",
            "entityUuid" : "1471d1e4-8cd8-4181-8414-21ce79fe5725",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "38583109-bbc4-43e7-a362-81fc2afbf772",
            "parentUuid" : "a74c4c2c-3159-4514-9aa3-cd0dee82c14d",
            "entityUuid" : "e9a65a23-abf5-457e-939f-01630729720d",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ceadfe12-6c62-4fe5-b304-af8e3f30bd29",
            "parentUuid" : "2221b9a4-70e5-4576-bea9-922277903086",
            "entityUuid" : "e5c1f567-c067-4eeb-bb13-9c4168969bfe",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "e516f317-5670-47cf-94a4-0c5415315779",
            "parentUuid" : "6a2b9cc5-1348-4017-af26-d634380f8c1d",
            "entityUuid" : "7a31910a-2c11-4d1a-926b-23d551dc7f04",
            "title" : "Experimental agent?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "492a3b6c-5884-438a-830a-b019fef68390",
            "parentUuid" : "7a31910a-2c11-4d1a-926b-23d551dc7f04",
            "entityUuid" : "abcf0541-7294-4283-8daa-d291329902d6",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "011855f5-aefd-4702-95a2-1ed8292214b5",
            "parentUuid" : "7a31910a-2c11-4d1a-926b-23d551dc7f04",
            "entityUuid" : "ad0ea64b-50f9-4678-8ccb-f54f3311038b",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bc61bfe7-a003-49ec-99e7-fb17edf17161",
            "parentUuid" : "7a31910a-2c11-4d1a-926b-23d551dc7f04",
            "entityUuid" : "2485e40d-945c-4a39-83b4-4bbbca709523",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "bacb5439-e284-4dcc-8638-f19b01137d3e",
            "parentUuid" : "abcf0541-7294-4283-8daa-d291329902d6",
            "entityUuid" : "3cd7bf84-cfe5-4944-bff7-633f0a24c0a7",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "30239028-c16d-408c-98ce-8aeb2730a2a3",
            "parentUuid" : "6a2b9cc5-1348-4017-af26-d634380f8c1d",
            "entityUuid" : "2ee6fcce-6948-4650-912b-106bd1b5af4f",
            "title" : "Non-steroidal anti-inflammatory (NSAID)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c96b1e9a-6db2-4f33-ba71-8b86194ee7c0",
            "parentUuid" : "2ee6fcce-6948-4650-912b-106bd1b5af4f",
            "entityUuid" : "19b7de32-81f8-4f58-9e8d-f35e63ce2cff",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "56ed2703-10c1-4f7c-a668-618d8efd11c9",
            "parentUuid" : "2ee6fcce-6948-4650-912b-106bd1b5af4f",
            "entityUuid" : "8df58ab9-14a8-4360-a498-6a357c4d3565",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3f354afb-cd22-4a1c-9ce0-2df45037f319",
            "parentUuid" : "2ee6fcce-6948-4650-912b-106bd1b5af4f",
            "entityUuid" : "67897863-4d74-4983-a087-3af411178b4e",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "26e8615d-8ddd-4ab4-85cc-29281f5beeb8",
            "parentUuid" : "19b7de32-81f8-4f58-9e8d-f35e63ce2cff",
            "entityUuid" : "2723427d-43a8-421f-b458-ce729756eed2",
            "title" : "Specify",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "StringQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "a3b0bbb0-5819-47e1-a241-41b0a5a22a12",
            "parentUuid" : "ef59d974-5fde-4431-b3fb-cfce77e2d006",
            "entityUuid" : "641cc92d-ef9f-4af7-b1bc-c5428e5160ea",
            "title" : "Supportive care",
            "text" : "At ANY time during hospitalisation, did the patient receive/undergo...",
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a3369f35-3357-4798-b406-b01b7cdb3b5f",
            "parentUuid" : "641cc92d-ef9f-4af7-b1bc-c5428e5160ea",
            "entityUuid" : "8e73d731-6b37-433a-8873-57b623d22ab1",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b0df3a09-6859-46fc-9424-99fb0e08de89",
            "parentUuid" : "8e73d731-6b37-433a-8873-57b623d22ab1",
            "entityUuid" : "96f8c34f-55b1-4614-a03d-2f33fa82206b",
            "title" : "ICU or High Dependency Unit admission?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "13a17a49-223a-4725-9401-9f651c19cd9f",
            "parentUuid" : "96f8c34f-55b1-4614-a03d-2f33fa82206b",
            "entityUuid" : "2d93a9b1-6da8-4d50-aaa9-54f5031f3724",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d48e9695-62c5-4e7f-bc43-8ccc409656cb",
            "parentUuid" : "96f8c34f-55b1-4614-a03d-2f33fa82206b",
            "entityUuid" : "b78b0ad4-8fae-4e50-b48a-95e5beb81cf4",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f767816b-8a11-4ec5-8d2b-c5fae778215d",
            "parentUuid" : "96f8c34f-55b1-4614-a03d-2f33fa82206b",
            "entityUuid" : "80b9c62b-3559-46eb-9830-86bc447db366",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "175eafd4-589b-4206-80ba-fbcb33b6e50f",
            "parentUuid" : "2d93a9b1-6da8-4d50-aaa9-54f5031f3724",
            "entityUuid" : "f6664ddb-93b7-4aa6-9eae-dc126ec3b202",
            "title" : "Total duration [days]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "19d1b3ce-13cc-4746-a535-f0747e0fcd5d",
            "parentUuid" : "2d93a9b1-6da8-4d50-aaa9-54f5031f3724",
            "entityUuid" : "f487c23c-95a2-4177-9eb6-12368f7e103c",
            "title" : "Date of ICU/HDU admission",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5eca626d-7ea9-49ec-b071-bb9ea0c0ff47",
            "parentUuid" : "f487c23c-95a2-4177-9eb6-12368f7e103c",
            "entityUuid" : "a5e8a32f-05dd-42dd-9978-2c73a0e76041",
            "label" : "Known",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c73754ef-8a07-4b6b-ac5e-c0f16463cd02",
            "parentUuid" : "a5e8a32f-05dd-42dd-9978-2c73a0e76041",
            "entityUuid" : "f1d48d5b-8eec-44cf-9744-ff87f9c6f81d",
            "title" : "Enter date of ICU/HDU admission",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "DateQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0145c715-0c9f-417d-8695-d45c85cdf484",
            "parentUuid" : "f487c23c-95a2-4177-9eb6-12368f7e103c",
            "entityUuid" : "21a4529a-e470-4010-93d7-f598009da8e1",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "5258face-2782-4db6-a944-6e18803c8d91",
            "parentUuid" : "2d93a9b1-6da8-4d50-aaa9-54f5031f3724",
            "entityUuid" : "b0d01be6-1b30-4c81-916b-fcc1b921d07e",
            "title" : "Date of ICU/HDU dicharge",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "38abcab3-dd07-407e-a683-47b94ac91e4f",
            "parentUuid" : "b0d01be6-1b30-4c81-916b-fcc1b921d07e",
            "entityUuid" : "6c7d7f38-8256-4b06-8c98-241aca9ec2d4",
            "label" : "Known (discharged)",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "eb9a8f15-53af-4a7c-b9a4-5a885e91faa4",
            "parentUuid" : "6c7d7f38-8256-4b06-8c98-241aca9ec2d4",
            "entityUuid" : "0b52c83e-22bf-4bf0-9940-e2d183c92870",
            "title" : "Enter date of ICU/HDU discharge",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "DateQuestionValueType"
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9575dcbe-5650-49a8-bd2d-d1a24362763a",
            "parentUuid" : "b0d01be6-1b30-4c81-916b-fcc1b921d07e",
            "entityUuid" : "8e4d5af0-8a83-4373-9848-aae00d3997ca",
            "label" : "In ICU at outcome",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "68ebfc5e-bf43-438e-b185-f62b955d1ba7",
            "parentUuid" : "b0d01be6-1b30-4c81-916b-fcc1b921d07e",
            "entityUuid" : "52e31f66-04b4-46bc-82c5-ec1ae5d0269d",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "f03286b9-1cdf-4017-8ef6-523fa023adc3",
            "parentUuid" : "8e73d731-6b37-433a-8873-57b623d22ab1",
            "entityUuid" : "d6d6b063-e6f2-4f8e-be90-7030c11982ad",
            "title" : "Oxygen therapy?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "99ef15e6-2c3b-4a1a-8d6f-8fa1a80ce171",
            "parentUuid" : "d6d6b063-e6f2-4f8e-be90-7030c11982ad",
            "entityUuid" : "f7919a16-b17f-4b9a-84af-11212f09f67d",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2d4e0284-2a89-43b0-a29e-1fc4eeb651e0",
            "parentUuid" : "d6d6b063-e6f2-4f8e-be90-7030c11982ad",
            "entityUuid" : "9896c6be-1332-414b-81f7-807d1b9a8147",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "63155acb-4de6-433a-9416-343bf0cffc67",
            "parentUuid" : "d6d6b063-e6f2-4f8e-be90-7030c11982ad",
            "entityUuid" : "59bf683e-5682-433a-815c-6150c423e52c",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "11ca237b-6101-40e5-87a7-fcc62b6ba81d",
            "parentUuid" : "f7919a16-b17f-4b9a-84af-11212f09f67d",
            "entityUuid" : "6172ff76-a3fd-4418-a7ee-3bb49e43cd34",
            "title" : "Total duration [days]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7aea982a-4bc4-4992-b934-464d8d430e73",
            "parentUuid" : "f7919a16-b17f-4b9a-84af-11212f09f67d",
            "entityUuid" : "d808e51b-b9c3-4d2d-80fe-a57c6b3eeb21",
            "title" : "O₂ flow",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bd44c299-c380-47e6-96dd-53e760e55f34",
            "parentUuid" : "d808e51b-b9c3-4d2d-80fe-a57c6b3eeb21",
            "entityUuid" : "4702011d-357b-4524-88db-52bc6fbd166f",
            "label" : "1-5 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "b5492347-db28-49f8-b0cd-8e0d6f4e307c",
            "parentUuid" : "d808e51b-b9c3-4d2d-80fe-a57c6b3eeb21",
            "entityUuid" : "505a1d05-8245-4955-b7f0-a2aa60dc454a",
            "label" : "6-10 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "ff55411b-e6cc-45c9-ad5a-9cc53dea3f21",
            "parentUuid" : "d808e51b-b9c3-4d2d-80fe-a57c6b3eeb21",
            "entityUuid" : "00a6b53e-bc2a-45e1-b9d7-46bc046d66c7",
            "label" : "11-15 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "899787ae-615e-4fe5-a53d-5bd1841f18e2",
            "parentUuid" : "d808e51b-b9c3-4d2d-80fe-a57c6b3eeb21",
            "entityUuid" : "717991b5-587b-4cbc-8ec3-fff9e6360305",
            "label" : ">15 L/min",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "af59af92-5205-408e-b4bc-b6a600efcf83",
            "parentUuid" : "d808e51b-b9c3-4d2d-80fe-a57c6b3eeb21",
            "entityUuid" : "85e46a97-fcdd-42ef-bfc0-573cb5d3875b",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3fb3d804-23c5-4de6-b409-6683c2289008",
            "parentUuid" : "f7919a16-b17f-4b9a-84af-11212f09f67d",
            "entityUuid" : "2a38e81a-171e-4a9f-b012-b00a31d22b96",
            "title" : "Source of oxygen",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "142d4644-7848-4acd-b6dd-73ea47263010",
            "parentUuid" : "2a38e81a-171e-4a9f-b012-b00a31d22b96",
            "entityUuid" : "f68e24ac-17a6-4150-a6af-b0a4e6c20934",
            "label" : "Piped",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "925756c2-b0cc-47f0-8910-1d5c87085e15",
            "parentUuid" : "2a38e81a-171e-4a9f-b012-b00a31d22b96",
            "entityUuid" : "36c1d314-7631-4840-8979-c5a3f1c6cad6",
            "label" : "Cylinder",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "0b8a86b3-a03e-4841-b58a-59f6efdf37e0",
            "parentUuid" : "2a38e81a-171e-4a9f-b012-b00a31d22b96",
            "entityUuid" : "419f23b8-e6b3-40d5-9107-a67d140f9aac",
            "label" : "Concentrator",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e602ad87-4b71-4e19-b5d6-5631d13b9201",
            "parentUuid" : "2a38e81a-171e-4a9f-b012-b00a31d22b96",
            "entityUuid" : "7f7154a6-776a-400d-9198-78b22b489706",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "d02db091-cc4d-4031-8a99-a24f91b209d1",
            "parentUuid" : "f7919a16-b17f-4b9a-84af-11212f09f67d",
            "entityUuid" : "ed40ff9b-dd10-45da-988a-1faa20898f24",
            "title" : "Interface",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bac4620f-139c-4e80-8a6c-6824f6e8abd2",
            "parentUuid" : "ed40ff9b-dd10-45da-988a-1faa20898f24",
            "entityUuid" : "e5665602-b837-46d2-943f-ed5e33871fc1",
            "label" : "Nasal prongs",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6b05a9d5-a2d9-4247-a99a-322931d3f432",
            "parentUuid" : "ed40ff9b-dd10-45da-988a-1faa20898f24",
            "entityUuid" : "3ecc8bea-b1c3-4bf7-8e73-cc0888a17f0e",
            "label" : "HF nasal cannula",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "e54ac768-4c30-44e5-b412-d6f82377a638",
            "parentUuid" : "ed40ff9b-dd10-45da-988a-1faa20898f24",
            "entityUuid" : "ae154e2c-1d80-4801-925b-8c3647768411",
            "label" : "Mask",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "896c79eb-8653-4e16-bdd6-e5d657ed3fea",
            "parentUuid" : "ed40ff9b-dd10-45da-988a-1faa20898f24",
            "entityUuid" : "2d9bd0dd-b7ab-4412-9638-6183a20d9270",
            "label" : "Mask with reservoir",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9335cd08-c21b-4644-9048-0967e6479a77",
            "parentUuid" : "ed40ff9b-dd10-45da-988a-1faa20898f24",
            "entityUuid" : "8ee10c53-57c9-46b7-94a7-f3aa7a01f623",
            "label" : "CPAP/NIV mask",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7b32e7b9-141a-4fea-ad44-27d29ac7fe18",
            "parentUuid" : "8e73d731-6b37-433a-8873-57b623d22ab1",
            "entityUuid" : "d09c78d3-497c-4158-a348-87c005d42c08",
            "title" : "Non-invasive ventilation (e.g.BIPAP/CPAP)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "bf8c9f21-bb67-4113-b564-ceda6ba19786",
            "parentUuid" : "d09c78d3-497c-4158-a348-87c005d42c08",
            "entityUuid" : "5c03fd2d-60f6-486d-8b7c-f09ac72a2a27",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2c7a6517-6621-4778-a6d3-b72aadb1fcbb",
            "parentUuid" : "d09c78d3-497c-4158-a348-87c005d42c08",
            "entityUuid" : "ed6bd017-303b-4000-bb62-e9bb479d5c19",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7a3a307e-9abe-49f1-af6d-473e61c6f50d",
            "parentUuid" : "d09c78d3-497c-4158-a348-87c005d42c08",
            "entityUuid" : "dd37f13e-1b16-4061-b8fd-bdb2a7659065",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "eb8aca61-7cc5-478c-b5d2-d3f2decc4c13",
            "parentUuid" : "5c03fd2d-60f6-486d-8b7c-f09ac72a2a27",
            "entityUuid" : "229b4620-1bef-4059-8c98-805297afe08e",
            "title" : "Total duration [days]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "0fb91a87-ceb3-4298-b51b-db7b55b4bda0",
            "parentUuid" : "8e73d731-6b37-433a-8873-57b623d22ab1",
            "entityUuid" : "9f5874f9-764b-42d1-98c6-1da3cae0b616",
            "title" : "Invasive ventilation (Any)?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "32dde59c-7916-47fc-8f08-1953a4cfa25e",
            "parentUuid" : "9f5874f9-764b-42d1-98c6-1da3cae0b616",
            "entityUuid" : "15d67fc1-a6cc-4e45-8b8b-5d5d087bbddb",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c4dee4f5-09ac-465b-8615-f393b7667fb1",
            "parentUuid" : "9f5874f9-764b-42d1-98c6-1da3cae0b616",
            "entityUuid" : "275a68cf-a5ba-4313-a6b2-6ed1d75a41ec",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "33be93ed-4e28-4aaa-9907-a5c73e6bc985",
            "parentUuid" : "9f5874f9-764b-42d1-98c6-1da3cae0b616",
            "entityUuid" : "1b44db52-934a-45a1-983c-379f15e8cec2",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "4860aef0-556f-4f8b-89c6-5fa8e436c467",
            "parentUuid" : "15d67fc1-a6cc-4e45-8b8b-5d5d087bbddb",
            "entityUuid" : "e174475d-9f6b-4ebd-bbdb-69fdf953dded",
            "title" : "Total duration [days]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "971e94cf-7bd9-454e-a315-fce2d59ee24b",
            "parentUuid" : "8e73d731-6b37-433a-8873-57b623d22ab1",
            "entityUuid" : "e7c2ca11-255d-48b3-ab02-5a46db8571ad",
            "title" : "Extracorporeal (ECMO) support?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "2181f206-8188-4721-adbe-d934a5b9110b",
            "parentUuid" : "e7c2ca11-255d-48b3-ab02-5a46db8571ad",
            "entityUuid" : "37dbfe26-ddef-4e19-9367-69b8553d0b6a",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c718589d-99eb-421b-8833-6bc38ae67569",
            "parentUuid" : "e7c2ca11-255d-48b3-ab02-5a46db8571ad",
            "entityUuid" : "e8ba9d0b-5979-4cdd-ba08-ad1d8d146cd2",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d0eabc64-1705-4c97-a8a3-d6306778feea",
            "parentUuid" : "e7c2ca11-255d-48b3-ab02-5a46db8571ad",
            "entityUuid" : "fc9a9751-c6c6-4065-9a95-6905ee9bb1db",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8b2a88c3-acc1-4fb2-9b39-d9ff48376425",
            "parentUuid" : "37dbfe26-ddef-4e19-9367-69b8553d0b6a",
            "entityUuid" : "23130fd7-f882-46db-8560-dba0b9926766",
            "title" : "Total duration [days]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "7138e5dd-0035-414f-81d9-1c498495e975",
            "parentUuid" : "8e73d731-6b37-433a-8873-57b623d22ab1",
            "entityUuid" : "f19d6cbe-a2a0-411e-9687-aa49fe574e4a",
            "title" : "Prone position?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "70e82025-dae9-4367-bbcc-af7cfd46d8e8",
            "parentUuid" : "f19d6cbe-a2a0-411e-9687-aa49fe574e4a",
            "entityUuid" : "95a22e32-c233-4b21-a592-1a83c113261b",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "7db54a2d-5d65-441c-838a-9eea5ce1ab90",
            "parentUuid" : "f19d6cbe-a2a0-411e-9687-aa49fe574e4a",
            "entityUuid" : "40cfc3c7-d16c-4a92-bec9-a1adda8fec60",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9e506984-68d6-4595-a2bd-0aed505e9d72",
            "parentUuid" : "f19d6cbe-a2a0-411e-9687-aa49fe574e4a",
            "entityUuid" : "28986d29-6b81-4f2e-b462-34be84ab82ac",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "386d651d-b322-4cc3-ab4e-775083651748",
            "parentUuid" : "95a22e32-c233-4b21-a592-1a83c113261b",
            "entityUuid" : "f1b0e135-2358-4bed-a6cc-33c1af392ddb",
            "title" : "Total duration [days]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "138e52b6-6276-4b8c-bc40-f4da7c6db3f1",
            "parentUuid" : "8e73d731-6b37-433a-8873-57b623d22ab1",
            "entityUuid" : "118f5797-cdd1-4412-bf4a-1c4b8d883ce5",
            "title" : "Renal replacement therapy (RRT) or dialysis?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8b7c7a0b-294f-435a-82fe-ccd993022598",
            "parentUuid" : "118f5797-cdd1-4412-bf4a-1c4b8d883ce5",
            "entityUuid" : "102aca89-faa5-4c79-abe7-dc8edecdc128",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1e521b2b-6545-4e96-be76-a64696b3716c",
            "parentUuid" : "118f5797-cdd1-4412-bf4a-1c4b8d883ce5",
            "entityUuid" : "07d68e3b-d56a-4df6-92d2-9508912806a1",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c4fe97f6-bd25-44c4-9d45-fc8670cf498a",
            "parentUuid" : "118f5797-cdd1-4412-bf4a-1c4b8d883ce5",
            "entityUuid" : "dc1fc6b1-2149-4320-a06a-eea2f255dbf1",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c0f4bff6-fc89-403d-8e23-50518783e1e6",
            "parentUuid" : "8e73d731-6b37-433a-8873-57b623d22ab1",
            "entityUuid" : "48978571-9c0a-4fce-ae8e-f1758f7be0e8",
            "title" : "Inotropes/vasopressors?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "f91209e9-589b-4bab-92ef-4668bde9238d",
            "parentUuid" : "48978571-9c0a-4fce-ae8e-f1758f7be0e8",
            "entityUuid" : "a6f76732-0152-45c1-b7cb-58bc3dfa7913",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "8bc06226-2fb1-4da3-b089-333074c431de",
            "parentUuid" : "48978571-9c0a-4fce-ae8e-f1758f7be0e8",
            "entityUuid" : "4ad24b24-3458-4927-a5b3-3673acdd5a45",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a3990480-9783-48a5-a0ce-665b5346ece8",
            "parentUuid" : "48978571-9c0a-4fce-ae8e-f1758f7be0e8",
            "entityUuid" : "ed5dbcea-bc2f-4efb-b9d2-e4c147952ef4",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "9cd61d15-a3da-45f5-9c25-ba27a0d883f2",
            "parentUuid" : "a6f76732-0152-45c1-b7cb-58bc3dfa7913",
            "entityUuid" : "e6e243f4-c6c6-4dce-b534-5c9eaab7ee53",
            "title" : "Total duration [days]",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "NumberQuestionValueType"
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "167eb87b-9d74-4bc3-bf21-d1dda3e59ad0",
            "parentUuid" : "ef59d974-5fde-4431-b3fb-cfce77e2d006",
            "entityUuid" : "4bb28f05-0169-4ac7-8768-b38292bd57c2",
            "title" : "Outcome",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "9a98d0b1-9225-468f-9401-54582f27b6e4",
            "parentUuid" : "4bb28f05-0169-4ac7-8768-b38292bd57c2",
            "entityUuid" : "e6418c1b-a2c8-4aa8-ab89-7dbd4f35dae4",
            "label" : "Fill",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "3bf96329-2ff6-42b1-bf77-b7d3fd61142b",
            "parentUuid" : "e6418c1b-a2c8-4aa8-ab89-7dbd4f35dae4",
            "entityUuid" : "f8e51a2b-403d-4327-a85a-2d1439580a6c",
            "title" : "Outcome",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d8cdac5b-bcc3-4ece-860a-62d4231f8048",
            "parentUuid" : "f8e51a2b-403d-4327-a85a-2d1439580a6c",
            "entityUuid" : "c10139c4-1a13-421b-a92c-23757bdcf140",
            "label" : "Discharged alive",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "927a92f7-eae9-46ef-9165-bd195412ab67",
            "parentUuid" : "c10139c4-1a13-421b-a92c-23757bdcf140",
            "entityUuid" : "738688a8-16fb-4441-b267-79c42fbb7bae",
            "title" : "Ability to self-care at discharge versus before illness",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "c416c636-f3d4-4a6e-b032-1f048ed04240",
            "parentUuid" : "738688a8-16fb-4441-b267-79c42fbb7bae",
            "entityUuid" : "1cf7e8c8-2892-47e2-8065-8c2c2342f449",
            "label" : "Same as before illness",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "d7d09b35-81a3-4d82-a8b1-bb2dd0222198",
            "parentUuid" : "738688a8-16fb-4441-b267-79c42fbb7bae",
            "entityUuid" : "86a3760a-2b60-4608-874e-987b472a2e42",
            "label" : "Worse",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "416fe5c8-8bb9-426a-935d-e60b47eca33e",
            "parentUuid" : "738688a8-16fb-4441-b267-79c42fbb7bae",
            "entityUuid" : "8334f955-6a04-428d-8862-129e18e0d965",
            "label" : "Better",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6c73b9a7-d46c-4046-b249-561a5f639b93",
            "parentUuid" : "738688a8-16fb-4441-b267-79c42fbb7bae",
            "entityUuid" : "a41ec042-2668-4c15-97a8-85f987d58fb1",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "1f24a613-55b3-45b7-b883-0692d588b0b1",
            "parentUuid" : "f8e51a2b-403d-4327-a85a-2d1439580a6c",
            "entityUuid" : "3f07aac9-1c11-4dce-84be-d91dfbb07870",
            "label" : "Hospitalized",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5d8ee21a-7863-4343-bc8d-ecba8c80e6bc",
            "parentUuid" : "f8e51a2b-403d-4327-a85a-2d1439580a6c",
            "entityUuid" : "eebdef1b-278d-4447-8bfe-8b3dfb0b25d1",
            "label" : "Transfer to other facility",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "97619ca9-4262-419f-a914-95677388818c",
            "parentUuid" : "f8e51a2b-403d-4327-a85a-2d1439580a6c",
            "entityUuid" : "f3bb1486-1aa5-4d17-821f-37b6d4157782",
            "label" : "Death",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "6551bccd-6562-4529-86dc-8901fa345863",
            "parentUuid" : "f8e51a2b-403d-4327-a85a-2d1439580a6c",
            "entityUuid" : "deb9c0fb-e537-4f9c-82e9-e8b721021fbc",
            "label" : "Palliative discharge",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "a41a82f1-76a1-4349-80ad-6ff62df191ef",
            "parentUuid" : "f8e51a2b-403d-4327-a85a-2d1439580a6c",
            "entityUuid" : "df1e993b-a6e6-4400-8374-62e443386c74",
            "label" : "Unknown",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cf2c4de0-c31a-4add-a8cc-12140a2df6fd",
            "parentUuid" : "e6418c1b-a2c8-4aa8-ab89-7dbd4f35dae4",
            "entityUuid" : "cf6d7996-3a9c-4c9c-98c0-95d41e955e7f",
            "title" : "Outcome date",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : [],
            "valueType" : "DateQuestionValueType"
        }
    ],
    "createdAt" : ISODate("2020-05-21T16:19:45.801Z")
},
{
    "id" : "vodan:who-covid19-crf:0.1.1",
    "name" : "WHO COVID-19 Case Report Form",
    "organizationId" : "vodan",
    "kmId" : "who-covid19-crf",
    "version" : "0.1.1",
    "metamodelVersion" : 5,
    "description" : "WHO COVID-19 Case Report Form",
    "readme" : "# WHO COVID-19 Case Report Form\n\n## 0.1.1\n\n- Country question with type-hinting using internal integration\n\n## 0.1.0\n\n- Initial version created based on PDF: *COVID-19 CASE RECORD FORM RAPID version 8APR2020*",
    "license" : "nolicense",
    "previousPackageId" : "vodan:who-covid19-crf:0.1.0",
    "forkOfPackageId" : null,
    "mergeCheckpointPackageId" : null,
    "events" : [
        {
            "eventType" : "AddIntegrationEvent",
            "uuid" : "696601a0-0ceb-4e6d-b8fc-a55c19a77ac6",
            "parentUuid" : "44052a8a-4f99-40bf-99f9-eb2f92b3a25c",
            "entityUuid" : "acc665b8-8096-4584-9571-9ad9a9e2df38",
            "id" : "json_server",
            "name" : "JSON server",
            "props" : [
                "list"
            ],
            "logo" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAeW3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZtXkhy5lm3/MYo3BGgxHIgDs55BD/+tjQiyWIJdt82aSTKTER7uwBFbAKCz//6v6/4fv1ps3uXSeh21en7lkUec/ND959d4fwef39/v153f98KfX3c/34i8lPiePv9s39fD5PXyxwd+PCOsP7/u+ved2L83Cj9v/H4lPVk/n18Hyevx83rI3xsN+/xQR2+/DnV9b7S/F76hfP/kn8P6fNO/3Z9eaETpFB6UYrQUkn9/588I0ufP5E/l75AG1/nU+Tml4d63H3MlIH+a3o/v3v8aoD8F+cdP7q/R//nTX4If5/f19JdY1m+M+OEf3wjlL6+nn4+Jvz44/RxR/PMb8ZLYv07n++fe0++1z+xmrkS0fivqBTv8uA0XcpOc3scqX40/hZ/b+xp8dT/9JuXHb7/42mGESFauCzmcMMMN9r7vsBlijhYb32PcMb3XempxxE2WyKK+wo0tjXTIWkw7miNnOcWfYwnvueM9b4fOk0/g0hi4WeAjv/1y/9Ob/5svd+9WiILvP2PFuKLqmmEoc/qbq0hIuN+8lRfgH1/f9Ptf6kelmrlMYe5McPr1ucUq4Y/aSi/PiesK3z8tFFw73xsQIp5dGExIZMDXkEqowbcYWwjEsZOgychjynGRgVBKPAwy5pRqdC32qGfzmRbetbHEGvUy2EQiCp3VyM1Ik2TlXKifljs1NEsquZRSSyvdlVFmTTXXUmttVSA3W2q5lVZba72NNnvquZdee+u9jz5HHAkMLKOONvoYY87oJg+a3Gty/eSVFVdaeZVVV1t9jTU35bPzLrvutvsee5540gEmTj3t9DPOtOAMpLBsxao16zZsXmrtpptvufW22++482fWvln929f/Imvhm7X4MqXr2s+s8apr7cctguCkKGdkLOZAxpsyQEFH5cz3kHNU5pQzP6KALDLIoty4E5QxUpgtxHLDz9z9kbn/KG+u9P8ob/HfMueUuv+LzDlS9/e8/UPWjnhuv4x9ulAx9Ynu433r08U+RWrzb98Hcx9ng0nwcE0CyT1ipbd5107L8fZ6JvOod6zt9hm7+s6IZ+jLgwXUkTWuvf4CZ9mOj5v78iEAi9vulOdOcbdkt8wS+o6zFNcP2VmptlTaznMWujTPW9PuK9/rzRS5PecIZ6VdZyEBYySNeLfTwr4WyimOoPPoeoYZqDpHuXtYWdFCzxRGI9538fQRLnhti3AgF3otoG0uXH+WMYHhClVFdEmz9U4KUtt+gN8ge66dWli8NmokpitFMn0Ije1T1+ETY1YbK4xubpuCQ6HuEcI0rj2Xq1RHh8muXRZhIo/3KQo7dsri4Ts3y4siPKGo0t2+RGSkXSyIIAjXBI9sk/Kc4JVC/Z3SG7icWsmMoxL6u5jHjHGhDS7t07MLZdsB8UhxLN1KH5ZPLO3M+shsx5J41eYxu4tJVz6+58qktXpVS1wQDvqoWqRKTVk++zAVGjQNADTzdribadpNmxHkYjRamIyod/MGFcKeua0bTnM3KHAllLFt5Ngujb+ZO/9OPP6EXQ7x9cxsUCRt6k36u6pOzlUZeRunu0MBTTqxtQJtzgKhR2ohF7/W2rsTFrXQ6pZumLcMptLrtNL0VG9925286tCibRM4epKOvWWdvDINeSkUiOSs6QcAdBcCDFW12zqMZK670zzZNlSirB1nO99twNzM3oCBYe3uGwqtDGgVuj6plvOmhz3j6gzlwi4trFwiOBFBk1YA/z2bGA1SUrICfUrF8ls689+/lzMu8SZrraV5Uyz7HNQJjVnDyCQp97VvMrozBXDk+Isir3mDXHHa3vn4l0oBHSQyHQiWSUnegEEgIJceHbfStvV60sVbdgJRSfH4mc6pyWgUKm4BybaOb4E6bI7ZnziBF2qsU3XHkp8rzE56w0adEU6b5ufpkzxm8HsA1S2KsplinEIq2y6qMrtnanMjjK4xS5+MDFfeGSSO6soTEKDVCWOde1OKtZOs1g7kEDJAOl23BTT3Ba6TtAPQECWkYqN3WtnbC5QTGu6cki1RUeUCSHTUCKBTCxX4Lvc40ULqoPsi95M8wzZKCiWM+CsvQ/7331s+U63QHCoEOADGdoXREtU+F6qAMQF3966yR6dZV7MKIJAE4QOpo6fpbqPNSjijBzcWcJbXGh6YS6ieKVCsJwYYL0SjqHkifbXQpCD4TMNGYY5TCEU84PS0YNpFTYn/LhXSSSakJTwFMEHd3OmHAAZ3C2svGzEMmLdl0fcEPaxxPy7a29F9QGucIslzAa7N+OE6OtwSsEIThkrJzVYYAuEHfNFyBl5VwBMysYLb2Y5I372rEgJWWpmrzgFdZpMYoNwPGIbKn1tJW+mDZRPd/GcydJ8f1pKsoGsytdpAdG4JEoFlG5ZfN+5+mO8wgrBg9wUeRTqtMarrUyPY1BEM2q7YenGDM9Au6NYcmA0ZBJuO+c5UiD76EhWTK3drq/3y4qTXaBDxkUbSlElkQuSO2Wx/Bm1Nwjqbr/lQX8GvfWCTPAhtGpDeKqPRa7MW/oFfqPcwH+xPqTuFtSDWASPuRLO2AjknkI/KbpdaasbkiiQUhZ3gUMCfPPUeuHnAW3ZUEN3KY/BxYGgl3ucw95FgSErdn6cTErj/UA295kshRoi4tor459CgEQCqgYdM5JGouBQlGwQasVGqP/iHAvr8SOt/vjv/lxf4joKK8AqojxJPIoEFxfAougMxQozD6o2QTwgEcD0qTZdFT4BctkEp0tNZtQm1RHRie0Q9pGKRMIwjqUgsER0Pp55C/6m9QiFryGDz5LoCWnmQDKiEaOHsFsI46X4gakGnLlKmcktDvJUvswVTuH4CK67zDxrVzolSqa2YpAfcRltFxOEaBHc0wIG4MhYj44gJKn7Yta2JnUManOFec64IS+7YVi0qlQo67I33YZ5wAdjfxoKBvPkrOZLSihA8HAw28Bdc4lqH2HFSOawTGiXUDQwp6IbOsJHNNyPKmN0GKQV8t2S1Li57qmFev/ElMSrFjQEg4mUgmd76BaHy/sDJtFiglzolSbMDMvzxxCFZgnIYrGLED45kixrBWhoD8imCWrg5AL+ZaNxOETPWHAVBdERO/Yh/QkfrIqYP2eduzsQ3dS0UCyrUgHuzD5XiQgST0BzKJh6QCtnoYR/wfMEjq8Y6SAiaBQx0qFbGi+ZDVLQCOCOmC54H7QVEFdRULoSC+NC9hbZCaSx+9EwN9IbuJ+2AiMDfo3FpQYxQRhHmi+6Ei5ocjodOMR5biIeQ8sIXOYoocTsB/47qQA7NhD5aB8fT0JSkpapmKqNjsBAzdQiN80AmTSjVZQdlI0P0RZtD+3x6y0Hj/2Qgfv1OM1AHTBMcFWOYKh9ZSSuLtI7JQzn6afv+qIXnIMGeEAYpEka+XdQUJofnI02YYg0XiKA/7ODKyFkm8OjccByTBPjQFmTm0msonOU1K/XY0ipFxEsJAagHCzcB1qgokBBdBqMA0p1+qNRRlGVgEog9kn8YQUsHIQfUtYrYZeCEGMOj0N4xDi1PyWAAbm0nockroOpWSXJ1eCQkV0UM31oOBBWYYYC9aYyF2qg0b9loStLqVWOQbiY0R6s+oGRwtF6buAJkrUfDXwQ3rghlLVbtJ2ch+QynVgq45jCRBVn+BCkCaREBhHO5ycnZpOyHQB4TSmy4jp6shn0JYAKkxAjkOuoyFEVeUwB5G6oH84V7OUDccjuLnNEfEYiqBfUXq7wcHrBcQ63FjVHqHQkBxx3YhDDIphQEPSorMb9FeN2meyALhDrUYiABfK0VGZSuxEuSnWe2yE0TBER017wBbQd007g34zskqQF/GobU0iTUPQK08AHGB3oAb7Yf6fiKN9/S420fYK4CXHxKawEBJ4lpLw7oRrTOnsW7yeOHsK9qBtj+B+kAkKthRUcGTQfMgVSGrDDrkGaLc6SCO4Kl/pDPgNQ+eDrgI9Nm2El6WNRtcBslgJiL1CEtU5Kwv1WI8qAbktOa+KIGM6OkfKl4IrcFUg2nmxbZ/vTcxWLUv5Pgj+/un9+ISJpy4O2W3mrKZSrkt2lii9QQi71RXNiZriQ3cwneho0glEMfEcwVAFo61+RVg5D2jIZ5ZLSG/L3jtVHBMYOxCTlOaC4FiUnbmEIg+S45/ZQgDoJAXpahdmSQsCUR/DxoWp6NCkdjgLWZlru4WqpnkjVqOdXOiAKSmSpMFAb5ICdtG40O4su30RiMq0lLbqZLMW91CMpYsHPJGpz+EOjSDZvSjXx8RXocoBZAtAgY0GeGITtZbhCJgwkacfAeH6QvyjQnvBd26mYoVZRUkYpCa6B26XG93jBA2aoKoEE9VcMYFcewAxPwuPkFZscI60qUYzIBBj4wE+loFW6XnRaXYVGG1gdo0gJ2HhqO8Zw8k+gXPMvVMZmepXwwm8BBuKV7eqrJ3MISUV0ha9yRg9LR6VK4iHVqkJajkaiHgCZ1e9JaefMN7wdm4IcogUvvLUPiSbvgr+gugniKMHODKxiBgdEc6HPJrmXeGXMrOP9dAhCAI2fUgBEk2tqio2tEZ4EoyB15hQNSR3wxWXgaA3mKu0UTOgiYj8D88H9iQswInQK6Z6Yeg5YvKq2Knllw+SVG9SCLMaqICKwTvJCB6eo2JE4LA3kQT6yJ8U7sV6LbjtA9iAd3RSxdCPUeKa8FFE9P1++lJYXNA7ND4w+FEVVc0yMSdBKe5SRKeIPMjDhLZXV8BDiNDEQWCN5koBFgifd7zA4lnSQNPJ05FCGZqj0opoHn9dVgSUrjFoRPtwxUoRBIFUIORTuFvkSpR3cTSc6S8ngsT9HBycUzXQTivgJ3aidP2AE3R3EgopTUfXFRIfZ9WwqP+7VklhNJ/y3S/O47HKxtLDATHVocQjJqrQx1B7EvsHJpcU7rVOnumNQiRHQXbB0exTe8oWxBQ8W1pDLHDVJ+btL4mWihpnAP1CVSg7xoy4+azA++L7cE1ZDONK5yClX7Amp16USMqSwE14GHP5XMWHgP4kXjEwmVccIQRyjvUAIBLiXJOd6QO8JZy9EFddoj5tga9YwVxlH3ZVi6I8bAHaL5gQtgsgcgtYO4kxbKzJdGo3kipb6wk4x61eEQpBFBO7DqMAtYo9Vh8k+NTMkjk02XmAopM0J0sXw60gsGxIuDknQkEO9m6UPopeZOyWs9jZpBCqDATKs3wqMMylZQkZF2uJJpEg87xCOLDRNuxgmFsHWVexAQ9SLAAQxKOeTqb2gekke+UTo8EPeIbGJ0B1CitxV4ahN9xGQhCloKr5xi6CvtIZk3l9CwlV5A9S1wLRff5T2iFTg/uCNYXP5NuzlvAeHQRbRFhJlT05oksF7rhxSRnOk/K1H3j+TYMz1Srjwy+YFFRoAXDy4MVwW87y5cUfQYeGBOZk7NfyVCGIpaa2sxAql3LlrvLccxzwaY/W7FDt0JMjSXb/8IYvljhHr1uDRAHBgOA+kJWmrJsTx/JUdHJep6oAX6GQe6KLrYMezdPPcgph5PF3DDB4UKQiy5SU91yDmgriNK3GO1MWITxUGBUJNLyxfJpkPHQXCQNQMCSMgC3CqPNLT6+ca6L6hLrLgOeDwIyJ21Rj7Tpt21eYK1cJQAkihIrpaHDBtdOOgghB3yGepYjMmju9D9htKqPvRWk/AAQYI3l4HdiYIcIB92jc+QpFghIOgZdQoRQXA5ws3MnXqnrAFNnDdeNtNTYVVaCJ2FWN0Ow4V/znJlcLs81dWK0a3aqLlwAMDTtTZujB3z91aPBLK0QNk8N2sryLZTyYHWqEQZSTRhXmPOjP2xqvX1IGRBG9DS3Knj0yPa5kpGaaUIpELJo/pdLzTNxMaAwDgG2BaLW4vfOEGlgx6hGmD9CMNHkB8hV+7zC8/Azbz7F7P/B6PW5lMp30L+lDEWNrVHJp/lEcDHI1YdIhNhNVBk8RAjmVFacBF+sb+sKMIfkNMiRESqA0B0yAV4DIssX0a6mKR7vTlkCX7flN1kd/HTGXwZ0qK+I+wYT55ZpYpGc+BBOePtXYyPS5fjEQlEGCG/TVwAKlIF/a0prKTVvM7lIA+Tgb4bNtopBrRDaOseSfaoCqhv7QCEho4CffOhcXASSYxAiyhdUBm+MkOkIDa15dMrGjcLbCkAUl6DeP1IZrQxaGBqwajVRKQVTwqh1wMnY0wDdOzloVJx9E2NOgNQsvxCw9tk/C2NoUJFM0Nk6F04JGvJpWujY8/93FNTsc/nD0i/aQ8B+Y01LTTUd9WUir00FACH+tRNyEXub6mVAQF0OHJuS8ciDjGM2dUtoSoEQOkgGUkIUcbUl7QE0rioFW81ClAehpHTIhjoULFuqQUrIy2EDeCv1iN3iAnwC5tbsC50qbZCUn2HKtA567vKx4Dz3+pXy2oO+09QKJWK8wxJtYbAKijzkhXOoT3VspLIwwiBFDRoIVJFsWm9r4vUzTWtGjDcHskiIgg4hEVHvusj4rGhZAtoQxxS2Q/quH2RXJVvBT0rcD8cZDSJv4QN44RFkW2M5m1NIfRjvnKvED25F1Ph29EEW/4KOuepWrDmame9aKeMKAHApGmAmwYli+7TQYCLAsEPkIEZB4J41JeL0HJtwwukK5XptANCUcLLtEzgjghi9GqujUrUUhRcaaa1NTyDX6+LQMG3DU8btYMFnng3Rw6f8e0YPcbDVHCEc4qyEXamAAAcBt/5RTFpJ127DTgrSK0/RzaS9o5A9bczeBGZFDNCO8BI8tdUI1bmeC2pMnOtnGn21DlFmmSWNga5WjqiUicunQHChPoQ11oMrNZiDFrlPmpkjEPRUiEwhITEAOA3sKPolKSlZm05ml2YNieqgYgQjgmzkwlu7qUeJYiRNm9F/CnJipqjK9Z3XRDx8t2yQfm3omrjbRCG+Hdt5TMgPg+64gy1M2MAm8q21woyFBQcQhYTsdFYjeBy7UD5rxvpUIQN98O4UocYEh0JYhS1aqdbS9RkNa7O8GWlQcINFPNkQoz3Yp6OXqUfyJr2XIgewpEIbzVrYkhUOTblu4YAq4TfAbL74wUug0VfC0jhaOegGLKNjLY64VdsGCLkwBvnrSlhbEFKgGyHhTkmROBubpB6VMTRILPerzTyRBYH/PSMVuvSUzM4Sui+hBh0NGGDymc6nUpIwbR4Fv3CwANMYkv0CdIdTxCyFjgrdvlKts2jtdqOzCDcwXCB8B/14Ip278qggqtWf642TciXeXSSmFxrpPng3XhQBlSLoJz2B0g7vhO7pr06Advl3SA5T18vqEX9qJXw0bSd3DZRaKg5qzTcj3WbfrWhTwT8xZwcwDI4rwwiZZKOqI23Eln20QYJRKJtOfx5kt2W3INtieXqRfUWUVIMFA0hZe6MCV3tBg7tN4Hm38VsQxwd33+7+RiDejZI7yL0cnHJJy1a0qyMmTjEd/QqaNEDP1YGYD80GUJLDWdTJSCXdl3R1s1wZxsLYUavDWoFHzJADkTcKD+qD6n+ezkgAFAbk8ULRV2t+uUAME4++FnAoTjINAwFgiAkddIHkz65uEMP6rmEvUJfFq3boudewWGzwGJkshVYHo8IaunMR95yNi1Iu1IJ6OD+ThPZpd+0zDkxhHOg6LQZSMmStYALHRt2+mEB365d+VjAPoJ2y9JbUFjCC2kiLV3iU3ReYgFRngreri+tBETthJ8qoiBjaONYvQ5F2IAGy9vxCQBv1dYCngnHUflbW4DYr9MRmg6YI2/ko3tabmmNTtUoa4Z3A6ZNJ40I607QAxqnUo1ors+G76BizqsX14BX3vnhUaiDWXX6Ru6VKcNKPhF9ri5rqvLsQC9aakhvgRjYxjdxI6QtCrXo8BbTyY9Oce5HGnF07f3W0ZY2Vz+1fegmw9+hEKQ7cv4MqLnh5RL/WrcInWzkux+5NaaMccvkjCy8xXbSLpBiIgEFpfUZB908MNMiI4CrFsKydigMxcTH5GFXoC60L2l54VcJOLNg3jhz+Gg8leJu1jEBkONfDecCNePbLwxRe1Nw6UkKBoIfvzax5PmErcMuJKJRrMij+6A7T0sb5kd30doyzEDJuZ6hIF/RYaonngOveqdNNe2paSXU5ADFeLcfMDdrNwznA3jpsNvwWiyoXBVxFjqkZKr7s1B3dbn6WX6vgqG3/K4VR9SL/IpW3y8eR6vviGsc+pEvzMbTcWQMyUvjRXqE7teJVWwTtsa/uB2PCC8CP4M5q/Y8Z6oWEAcUGhqeehWAwKN0BAoFOzESYvRkXyRktFmCvA5J+5paKUSqIgUBJdhFp1wQWF6HsECpW1L3so7aTdZJo7PdHU1Ly+3ogBC1qAXwr5egFSUugALgvupECc/qTHtj2yjXQ/sgLWnNnq+bNUsbE5SNVxe/XJ6B/kNVoSPxwjoHYh9JKzLXcadfZO1KCnIpjvpTjXI53ZM6ZmQ1nYWCJekZHht1Ngfk496o6joST1gNTYMcwh1ibrdoDMUGVIEO13BeKlmd3ASINkHOQR57jYG1z3Q2Mp/HZkGhauosrZtSX9oEdbFpK5+bhSRjgQQyw7jHrz6nHPr+ty1BHddzGKBTtBz8Fiixm5k3lXToZWlhG+mFQcnj7Rdj+RHTOjSlDVCvdQedT0DLOqyXt4RBW1w2EN13SfTeOrQ8j7mnk3FDAMgCabJAGfGvo65kHW313VWu2vJBuGlbGeNbm7YP3rZy77toy67oGaAlxIDDk2zH+sAxBdFUpTdrTvxaDtGNh9vaQR2gnU7VSR2m88sClFFruMaI1QQ9A0KC2dwFf2DIkg5r1Iti06QraQCND/wYxtQ2YgaxJ7VFee+oY4JH/2dha9cen6ulx7RA8zbQnfBJcfRQPNq1mDsTCfwQvmWvB3bCQyVFx7+00A7TfwKEXklVG3rEB79kEIKjqPm0VsYHUUVY7KLTFfA/VhdRD0TTACD5Ru6Od5TuKBJiWLKjFRDAB4K8NH2AaZfQwT76Z4P0PyrpxQg4GAOJgyLEmiC2vZakso7bwU+pUBjOdHhWa/JgvHycdixRwpt4ZiwSvpNPys4rK2Sto3KRXvj0L4Vha+gc7/71FNYfgihKlaZ30v2Zn6ljzgJYHUBz+x3aIEDazUbrFaJ/jnaqERLcQCv/WuUhTop90r4UQiBJkpcb3yrq8ic5rtb+hvbWKPp9eSANY4jWo8XRo331i6OljhP5kqbVcQeInQ7TQU2gfVtZDqeBOztBv8kPkBG+5q7Ov6854h7xtrvIsiIdDgo1SPC15jw5JSE6nqqTdJO/ivYsVJH7oAXqpzIx6hLS2uLnHlFHgWssb9FU504ClL11kuZok1D/ZQVQ0erbNS1mXxlIbZUsnWetyq+H0AyZSyDfImvXsU1+0AnNqTVClC3gj2JDEw2d2NJKOeZgaIHs6JQh0J4saTM6T8ztAB/a3vrfGN3jaWVmQJyGiZbNw2/wwqehbsN1Fq6kT4L0xAZ6LXda1GtfQKcYakBe4muXKzm8t2lv0EC7wrfJ9gMGNcosM1WdAJp5M9BBgMAVAEaLgEgced7UADK3xL5n8w/x+csr8r7bf3zeU4aS8oMg8UBLJzsDjbWHjBMNqp05xgryZiBP+0XxnQ7eGQHddIhPgdMmYZMmu8JsneRJnhjoMBBuQzs0KArEnZawrNeu82U1LZ1i9Tp4DbhkgjqRvv6SfdRYd/THKvpQOW/LGebyDSnkP2iHaK7adB5gXtOWgU4NUGOiFh1WQaF8nILjh5P/E76Bbrb+A1TRxjogt8NHdGhBp+XokK5YI4oVX0Bo8AhZB9VULCAGiuFKBTEKQDMwLKaBAACBaYeLy7Ts+xiY48qU6eGi4ptabCxJR8bGBqPAf+hsTKn4g6QWNBbtKiF3aAGgRDR4I57j6nAFZQTFg8OtYS24FSKs6DOjacEQCtM5YYwT2qtvgEHratGEdejegNGCGuXX5pXkQUDJqGBNJKwBccQfduH61iQOMLeCBJ0QHk3HgHvXuRvwK2zaNTui4WlondmEtiVmmrb2l45Egw8h5D29eaT11omJ6+XHaEnEUKgoEeoY1dU20g8f8GNB79d06Si56ex78BTa2Tp9MVJ/wg2Q/XmUPL9y5UblQPRRp0VMKwLqNuQP4QtwdtNKjnYdTiQoGcAhXqm+I+afo+SXggeSmgOaz9BhFrRy8gf1o2OBWk/7HiWnrmlbMJw0mc7WRWau8+c6XIV+0+kTuNrpRM8seqoOby2TwSp6r/ZO+BGmPDjJSAPeEB7qDWAy4Yy9iL3/xhKAEQPqgPjaUYLIT7oEVYc50FkR/X8F6sKqzuMYUqRp5xsvC4Z5Lu2wfy1E6qa3ng1hDcoMFo1aEBEIGUnIj3YTA/ttD+GgB5z2/wEuRjYOTPa2uAAAAYVpQ0NQSUNDIHByb2ZpbGUAAHicfZE9SMNQFIVPU7UiFYd2EHHIUHWxICriKFUsgoXSVmjVweSlf9CkIUlxcRRcCw7+LFYdXJx1dXAVBMEfECdHJ0UXKfG+pNAixgeX93HeO4f77gOERoWpZtcEoGqWkYrHxGxuVQy8ogchqjH4JGbqifRiBp7r6x4+vt9FeZb3vT9Xv5I3GeATieeYbljEG8Qzm5bOeZ84zEqSQnxOPG5Qg8SPXJddfuNcdFjgmWEjk5onDhOLxQ6WO5iVDJV4mjiiqBrlC1mXFc5bnNVKjbX65C8M5rWVNNephhHHEhJIQoSMGsqowEKUdo0UEyk6j3n4hxx/klwyucpg5FhAFSokxw/+B79naxamJt2kYAzofrHtjxEgsAs067b9fWzbzRPA/wxcaW1/tQHMfpJeb2uRI2BgG7i4bmvyHnC5Aww+6ZIhOZKfSigUgPcz+qYcELoF+tbcubXOcfoAZGhWyzfAwSEwWqTsdY9393bO7d87rfn9ADvjcpEb6w9UAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AYTBicj8MJBQAAAIABJREFUeNrsnXd4XMXV/z8z994tWnXJK/eGKzZgMGBTA4TQQw2QBEiAhBpIQgokP16SEEhCaOalGUgjQEIJJbz0hEDoBmNsY+PecJMlq0tb770zvz9WBtm4SLLKrjSf59kHGa12752Z7z3nzJw5IzBkPV+/606KAylKwj7lRR4/PmWi9bVbPx0yJN8rKyvy8x1bFMTScqoUanzI8Ue/vO7A9CfNY5UlvTIg0voKAg4gWz9WAS6QAmKtrzqgFqgCKoGNwGqgGmhs/V1i2+urvm6M6aQsR5gm6H0u+t9fEYmEGVDksanRoTTscf0lw8TFN1fnVxSkA8qSFYm0Pj3iqOklhd5Q29KDhHDLtNSWED7CTmNJD6TPR4sn8+jGE8iz3a6+TBdoAZqAj4GPgA+BuUBz6wMjte0fNb3zV5Iv32A62Qi9f7Lfmacx/ogvsUdhgrqkxT3fvZprHv6t05QIXBmNuKeVl7h7CKelRAscYXlSoIVUoOT2u8wSikUr9uTRyqORQvXkrSjAa7X0G4CXgJeB11p/Zyy/EXr/4od/uomCkCYaSTN3bahY4xw8rDR9TmlxfAJ2cqyUokDaLkJotG5/99h2msUrpvO/6w4lKr1sud10q/u/Evg38AqwsNUzMMI3Qu87RG9Y8bnZUzKk7KbxP53w7AXC8aYHJNNCec0IqfGV7HRXWHaalav34dZVxxG1U9neJNXA7Far/9/Wh0DSCN8IPafFDRQA+wBnA6e6bmjoBWPeYvyIt3H94O53nvCprR7NLxadStRO52J3rgf+CTwOzG+N9Y3ojdCzFznheMrPuWvLP08CrgKmAXlt2znphjlv3CtMHPwxn0+Ad+L7pEdT3QhumXcmlpPO9ebTQBx4H5gBPA9Q87crUUteMoPLCD2rrPdxwI+BfYGynf1dkxZcuscTjBlU3akukEJR1zCI6+afwQCrTzZtLZnZ/NvITOwZK2+E3qvi3gs4r9U1H96Rz1Fa872JfyFankBr0SGR1zaVcN3HZ1GBg+77Tb621bV/GFhgRG+E3m2U/898ZDCy5Z/5wFHAT4FDd+dzq5XNzVPvIxJJonX73PhEIsJvPvwmQWmj+1/3vQ3cQmbprgVApWLU3LiPGaRG6J1nymlf5ZDjDydkrxCPbLg6X6N/CnwfKOqq0LTat7njwLuwQ6I1VN1JZwnF4x8fzycN47Ck35+7phG4s1X0zQC1T/4Mf/6TZtAaoXeMC++9jZCliKflcXuPSP726VX7jFvSNDEiRdc7yxGZ5ufT/kRa7kromjcWj+dfNccSEL7ppIxVfx34IbDKuPRG6O3i8j/cTEpZ7FXWzJrayHmDK5qviURSk7SVItVUyI/nX0C0Gyyp1hbD8qq4aL8n2NWn67Tkyg8uJWp6blue07783blD/vleEh+B5t6Lrjat0oo0TdBqwe+5lXv/Otgqd9TJLbBu7LjKh/IKWyZpywUkoaIWDrRaoBssuhA+nyaiPPjRlwG91VcINEIohFBI6RPKb2Ky02g67It8VUn9rrT1yuKgPvneWwZbF95zq2kVY9Hhu/fdhi01VQnbGhx2pw8tSz9VVFpVobT9hfdaQvHeyv15dt3hBO3uWbdWWjI9/31O2u8d0l4QrQL4XgDhB0l7Nuk0uJ7N2xv3Z0FyCKI/zLl3aMZDMDKymIumvkRNzeCqDbWBMzYmnFkVYc/3lOCPl/7YCL3fWfD7bicgfFwlDxo7IPXXorKqsUpJtNhxk8SabK6ZdwVRq/sSVHwtKVA2GvDQ+ID/2X8VQoIjtBH5DqhWDv+7/x3Y4cxSZGNtxfLlm4PfdqR6L60t/nzpj4zQ+wM/+dNNALy/OTz62D1i/1tQ2HSSE0yi1K6jmICd4qF3z2aZNwh0dzadNs/i3bDqV+z5H8pKFgMCKRVuKkRzU+Hzr6yM/GDagMQqgFu/8zMj9L7IxTNvxvUFS2ut8IkTU1fl57fcaIdjor3r1wBSuqyunMD9i08j5MSNqrKU0c5KLjzkWdJuqM08iMJLRHRLS/7/vLA4OGN8mZ9wLM0Dl11thN4X+OYvf8iAYYM4cBS8u0IePnRA8l8FJbVBtOxUc6WSLj+bcwUlZh4zi913nzsP/DMyuJ3iG0LRXF+WWr85dMzBY9SbH6yGzesq+fv1d/TpNunzo7VkyGDiaVm8tFK/PWFM5RsFxfWdFHnGMSwocNk/b7FRUxZTpPJYVjee7dbf0JKC4vrghDGVbyyt1G/H07K4ZMhgY9FzlfNn3s7ogjj1icCVI4fU/toJp4tVl8TVmli8jN/P/ha2nTaqysY4XQvGBzdy/uEPkkzsOIlRCo2bCDSs2VD2i5Jw+q5VzXk8eNmPjNBzge/OvA1PCVpiYsg+I+N/LStv+LLC69pb1S4vfPQ1XmoZRdR2wcyAZ5vUqdea3+/3RwJ53i7fK7GprSn+z/w1ed/Oj+gNttT88bK+tRTXpzY5fv3OGRw4LklLzPrGPmNq34gUNYzR3fE8ExbjBy/iy6VzWN0wks1ePrYwYs8q+6XCFMuNDC+q3+mSaSYlSROOxEYPLfO+H4+HV0zZM7nw/UnfJ/6vx0yMnm18e+YtfNAQcNZvki+PG1X5dzuYsDsfi7fHZlgEC30uOfDvXDLiZZKta9+G7CBkpViw6Uik087yWlpiBxP2uFGVf1/3qXxlc6zYKf1FpXHds4ULZ96Gp6BAqv1HDYn/O5TfUNzTtyWFIulq/rngON5u3JsBgXiH9pgbugnf4pqpjxDKr6VDy6hIZr577rzNInCiUoGNfqyO2psONBa993idgXlpKvL868aOrpudV1hb1BvPLqUlAdvmnANe4MfjnyShfBO3ZwGehAUbijo8IvxkhJUqb4pSgSXA16xI6bYFR4zQe4rv3HcrZ9w2vzAQUE+OGFH1a9tJoZTdi2ZU43oBRg1ZyS8P/ANxL98orZexhc8jlaeDUh3qx3gS4n4IMsU9/wH8CnByWew5KfQf/Om3CKFH7DeieUV5Rc0Z2WQ9lbLJC3ocXfYiSpukml4Xu+pouS1BU1wgt57A+yXwL6AwV8Vu59LFfnfmbQBsbOLUw/ese0w4iWA2TjP4WnL4uJW8+94xYCcx+eq91Q8Wx5U/h5BW64EY7ZC51qyODSD/i9k2RwCLgaOjN6xYDLlV5CJnTM73//h7JlXEKQr4vzh8UvUzMhAPZu/VCsKhJsYUr0Rpxyiul0hrzV5l9dCBI6q0EKxsnkpAbHf9fTAwWwh12pnD7uDKP9xshN6VXHLfLdz53atpSFp3jR5Rfb2w3ayf1faVw2EV/6FRm0m53pozKdE20UFVKNX+dBGpNS3xQeykZFgk7tlPF9ijb7nroiO55L5bcqI1sjphZvwRh3DS1VdRGFAcf85b/xowsOobO09+yC6rXlFax+qN42j2IwjjvfeszLVkaLCJA0bMYnuFRHYWdr27dj9SYnuPDggpi5/t+3cGRDccfODxmw/xffHw+OOOJxlroXbNOmPRO8OBZ57OukQgXFHiLiofUP0VrXMrkS+ZLuDQYR+SNjvder7tVZAJA97F9wIdeTrge2Fi2ynSqbVklF3Jz750K6GCWnxlUz6g+isVJe6idYlA+MAzTzeue2c4/75bkT6DvjK6dnl+ce3E3KhhLhBCYVkulgadhgiNNKKM8nqYFpFkj8gmlJAd6D3w/TzS24SFvrLYL7SCbx34KFoFP6unrxHkF9dO/Mro2uXSZ9D592VvjbqsnHW/8L5bcGDsyCHNswuKGouyedZaCIUlfbQXIOmmqW/eg+qaUXzQXMBHjXsiHZeolTLK6+H4fISMMXL4WhJuAegtC7CtAtUi87Pm80MwdOZ/SWSb4aZJKYfDipdz4t7/xNPh7ZbwKihqGDJB6cVrNucfcOF9tyz/86U/zUITlEWc/vMrKB85HIUYPTYaWxgpagxntcjRNDSW8tHawXycGs/ypgkUyCR5TqI/nqKSRfG5oCxYz1FF7yGlIGgrgo5PwFYEAxCwfbSdwBIewkljSR8h0gjtcP/cr7ApkVk2S/sBDilfyFcnv4Cngrt8uMQaixLLqyOTJXpVzZq1PP27u41F3x7lI4cTT4tRU0Y1zw3lNYezff25qd7ilwvOocTKPOWjwYbPXDpDb3pZmrp0MY9Xn5ixvyqzQ00i0VqQOY1ekLHrki2n02s0np1GoHG9CCcMfJ/D9/w3XruOuBZEihrDExw1d97qginlI4evNhZ9B+66BWPGD22eE8prLsxud13TVBfg7iUX4PpOt9R6N3THUNfbtcTbvi/uhjln5DvsN/qt1v7tWNiQjBc0LV1fMNWHFdnixmeFmr51762EhRg7elDzvEhhY15Wi1wqmhoL+J/551EmzGx69rvxkr0jqym2oSUtiGtJQtnEtE2LcmhRDvU68FlV30F2mlOGv8uUYZ/gqc46vJpYU1F8VWXBlITWyx+6/Cf9W+hjDjuI6V8/C6nVoIkDmxcXlPbuxJsQmp3mzWufxqZC/t+CC4ma3Wk5Q7WC3095mOLSGrbUKBB4CKEABZ8dhJVZvk25BV3xiKG5rqhx8aaCiUrIylmPPcGKt97rn0L/1r0zmB8LB78+pnplQVH9kN68HAufTVUVVDdLhPzicpgE3q05hvWJgWAnMPnruUWjF+KyPR5gwojadsbcdI3YG0s2PLYiusc+kUTqocuv6n9Cv3jmzeTZmoFl3pLC4prxqpeFY1tp3lx0Ms9U7o21g+WwsPBbrYAhF0n6NqcOf4ND93iftB+mJ3Y9SjRNDeVLN9XaE+Ke6LU68r2SanbFA79n5qVXc8K5b71SUrZ5msoC66i0xeDCJURVMeNDzYyw6imTDQRFjITwaNAWcRzyhW+seY5iS8XChjHYLVFGlC8E0f2LThpBKBQv137ewbeef80jVzyQxwfPvdr3LfqFM29n6uBGqmLBuwcO2vS9juQh90yLKAQaqTM7mYSWmSe/8llfG+KPiy9DS2Vm2nMZLZgU3Mgp+z6LbfeMhyaFx6bKgfdURFJXzNlYxJ97uKx0r0wbr9kc+UVFRV32iRxAS7S28LFQWrYebijwpc3gMo9rDrwL12oxa+W5jNB8kh7EA7PPxbK9HvlKpW0qKuq+t2Zz5Be9ccs9KvRL7r+FZIKThw+vu17nYKyrJQTC8JvpDzEyvAxXWUY0OcwSPx+p/R50JBTDh9ddn0xw8iX339I3hf6te28l4TPioEm1T7S7BG9Wqh2U0Hxnv1f4UvEnxLQRe65iobv5VNztCM5JcdCk2icSPiO+de+tfUzoP3qcWMopHB9NzhZOIpgNRSMEGil8pPA6dda4h+ToyS8TteqMYgzttxNaIJxEcHw0OTuWcgr50eM99FDrZo687ELOOUBSUZT6W9mA2v17f8ZaI3xQ6QH84+ND+eOqLzM1uI6CSDO6A5luyocHZl9AvVdkJuF7AVv4qN20U0nghBHvo3rBKwuFE5GIsMcdGm14wh44gjUfzu3e9uruGxqy1154yrtucMWmM3pvAktjWy6phmLerhzD8upDWQUEhaAYzZ1LzuHHzqOUlm3A30WNN4HGU5oHPryQKi+ys5JDhm61jLl+B4KKiroz1q4deN2Qvfa6ofu/rRu5/IGbUSlrysSxm+dagd45edRCsa66gLdWn8JbqVKKhEVQul94EFR7Djft9ygFRZVotQOxC4WfdvnTnPPZ6JUYkWf7ZMrOBr6AGlcy88u3kvbC7ZKJ1mxTEmz3+99PB1i8fMC+MujPu/fiq3NP6EfNuJvX4o5z216bqsKFtSVK9fxSmhCKpqYirvvoO5Tu4ohjIRRVruTGqY9j2YntNpWUgr/POYGNbgXC8o2WsgBXWdRrASik8AmgyBeaEIqA0ASAIBpbaByRmZSyBUgtmT72eYaWV+3086VQNKcclA4gpY/QaSytsIXGsgSWlCAUWvhIfJAS1w+2e95HSo9EU1n9jxcMrDgqz3Vfu+qK3BH6hTNvY1hxkpQrXx46tPrY3gpiHTvJ4x8eycLYfu16+go0CTdvpxVmQ4FEpybvDN3DgUXvcNSI5SAsLEtjCwlSoWXrphWpQHpI7SOlRkkfiUag8Pwwaid9LYRPfc0e/G7BGUgt0UKjpYttpbGsNJbwsEkREC621Eh8JoRqOXHvV/FVqAOjRLN+ffSVoKOOW9cQ4s/dcGRzt5hZTwnq4qGzx4+sPLZ3Z6oEtvA70NyCkJPYrW+UQu908Bi6DoVgankjwcKWzw5R1NtzrDX4WPgKUDbtHRG2THH/qn2JfGFMCPCDQBCfCPE2NvO95FDmvT2JYwe8wNRxa/G3lK3axTgdOqT22KVrBp3tKdEt0/Bdvrx2/n0ziCXEiD0G1z5CP9wAYkTesxQUde/JtaKd7xHo1iVbTUpb/H3T6Tz47ndZWz2EzIHau7DvQrHH4NpHYgkx4vz7ZmS30C+YeTt7lTQxZUT8ATuUsM0wNHSvv6axZJxsXN/Mlx5rdJCbF32Dhz86mfrmCLZ0W2se7MCDCCXsKSPiD+xV0sQFM2/PTqGf/qufodF82pD3/bLS+mMwls3QzQSEQopE1z04hNrqJcXu7avUWhB1EixPDOOGD3/Aox8cgZ8O7XirsxaUldYf82lD3vc1mtN/9bPsi9ELB1ZQm7RK9pmw4dfKbOU09AAhAZbsitUPAWmbvy07GIvPl1YtofDc0i651uJAI4tSU1jy3n5MLV/AqXu9TDpzNPPWoZ/wGTWi5tevLRnycNnAivquaqsuSQk6794ZXHeMoqYh9WpRcdPY7NjZlUmSWVQ5nE3poUYVfZB8qZk+5EN293TqUKCFR+Z8g8XNY6hJlrE5Wc7mZDnViWiHsiXbFe9LzdpEBS+uPYB832d0yUb8LUXlW9/l2H6oSAcP/d7h8s8NE47n4xdeyQ7XXaC443V9eHlF1SHZMBklgcZmm1kLT+aDlqlglsP6JI4dZ3cnfKVQzF8xmfdig7ClhyVVm1f35ErYQpGHxfMbDue3b3+bDdV7YmuBbP0+pQXlFVWH3PG6Plx00Sk/uy30i2fezLtVofDQkti/suEkQak0T318KNd+cDXP14wlYHaX9Uk8LRkeWbDbIaLybZ5aeRZlVs9nbgaER1zkc+eS45kx5yQ2V43FkqktEwYMLYn9692qUPjimTf3vtABzp3YfFVBaX1WnFfuS4e5TVOIhhqNGvowLVqyd/5qlBS7MfgVD398JK4To/eOIRRErBT1qWHcsegUXl/wJQKBOBpBQWl98NyJzV1SUXK37u78e2/nvZrgqJLC5t/sdqDUVZG5ssw0YD+gUPq8Vn0kluicJRZaU98wmqVNk3a65NWzoUiKF2unMfPt7+C2ZJL6Soqaf/NeTXDU+ffu3nJbp/3aC2fehiU1h4xIPJJX0DAuW2bZtbZ5Y91Us+GkjyOAWreIlRuHsfegT5Cyg4bGc/nJvNMolNmV7uFIRZOfxzMbD2BUsIFBJRsYleeMaU5Yf59y0rHMfeFfPWvRA0KRTosDi/KbThTanFhi6HksoVjvDeGO97+Br3S7S3E7Ms17nx5HVBcBmb3t2+5f8JS9Wy+1G5oQQhO1NI+sPIFX551MXl7LiQgxrSTk7taDscOcfffdxNK+ddjI2JKCkuoxKouErlSQ69+9CMvUX+9fotc+1x70J7DcnQ5rjaChJo/rFl1A1FJk9kO4uNohcxSjQCjBfmXvobHpzIqNADYmB1EZH9Yl5wD4WnHB0CeXbUoGJ9aRp168/LIOf0an/BaNRzSipheUVo1RWVYg0ZKuGfX9EE9Y3Pzu9/jptPuRwcQO89+DTpynVpzLANlmNGs7c4KqchiVv4Lz9/4ntt1542VZLk/MPY4NekSXGBxLSP607uzR+XZ6lKflyh5x3b81cwZPXFFqjStP/EMpmWUi9/h43YSsmVwx9GzMnpQuV35wPomWcoJOE0GnBdvyP7PKllDMWrI3q9Kl21haTbUf5KQB73PJvi8iLQelrc69lIWvNCvr9sOSXVdK2pHaTinnftd3iN6wovstuq/g6gerTygorR6ks2iN2pI+yyvH8JcVJ1AciJuR30+JCsFP5n4NRJKoTHJs4SpGROMEAk1o0chj604l34lt5crHlM/Pxz3FyCGrcP3dm5wTUhFvHkhcdEu9+C9LqfYHPux2oR82rIGatLxXZ1UiimZNZSm3Lz6TaCBmRns/t+1RYQERUBFeaShDNwgUAl+LrUSutKDESnPttL9g2+5uixwyG2PWV5WhpOqylXkNBKVLWjloxG8E+thudd0vvPc2llQWnFdS1jA0m0TesNnhjqXnEXWMyA3bk77GQhFoU4Qk6edxQPEirjrkLmzbo6uWh7WyWdAyoEurELl+kGnlH3DN1L+hdeoY5Qanl/5yfcc83va+cb8zvsqIscMZXtH8NyfoRrOiA4UmHQ8zY+GFBM0Kn6FdtlFT7ebx7ZEvctSEWfgq0LVf4Xvcs+Q88u2uS6ltQnHmsLcoLKrn8MGzCKcDI+pE08NFYUXD0gVda9GnfuVLNCXk8ZFIenK2dJqfjvCjud9ECZPPbmCruDupLKp9h2ovQLXSFIoWJjtNHBxOcvX4h9h/j4+75UgtIQRYXetZDpIxhg75FK0lwg5x8Ph3vrJPYO0xR55wYAe8mnbwrZl34PhpJg5z54UKa/bJiqISSnLFrG8Q1cWY3WkGH0G5TFHsgG03MSIyn9F56ykvgYCt0LaLtNNI6eK7AVQ3bcASQuO3lPG3BV9jgxLEtI3dGj50Bs+3OX7gfA6d8O/PvQ+hSTSVz1+yzpniWgEeuuyHu/ycds0+aAS+HRgXCm2epJXo9U1qQely+6wLiOpCI3IDjW6Ybw5/lQPGzAYvkPH2xOfjdMtCmq8kvgp2a7a21gIZqePbB96P0hb1deX8ae3BNCcrUF4Y23Y7JPqUEESLl2wVYmglCIcaJvn2kHFai2Xt+Zx2Cf2EsZUsrCz5rQj4dm/rKuCk+fM751HllXSowquhb1JNil/s9Q8GDtiEUoHWYFT0+s6LzK46RemAKq6peIJkyqIlOZL/LtuDWenhpFODKLTjWGLnE4ExEWd8dC0ewTZeA4iAbw+JpH47eVD91x7uCtf9rLvuJOj6A6dNrq0UdqxXzwWXIsXzc47nnfgkgkbk/Zq0lox2ajlv76cI5idQfvbP0wg0ASdOOlnA+oZ8lm08mPnNA1nhllEqXOxt0nc1gkOLFnHsPi/j+cEvfJb2Iry/sGxQyrE2PXHl93fPopcG05SW+GfawfovfFnPitzj/U8O4/2WSQTNKSn9HM0Eq4ULDnkQ1wvmhMi3CDflRsBSDC1pYtTApznGzWdDVYB59dNYUzuZlUoQFJmTZVwtmTxkw3Z1pxHYwXqGRQvOrItbd+3qu3fZQh+uv9Q+4egNzzlBP683n4Vr68bxtzVfxrE8M84NjHQUE4bO6ZWTULtoSOMrB4UmP+IxLrqa/YbN5ogBqwml6vioeQzHlbzK3iOW7jg80Db41gG/v23CDDY9rjpt0S/5w2047qqji0say/1enWnXKB1ESrMjzdAH/RMBfusOUCdvM4fvuZkvTZiHknKXoXJxSWP5FRetOtp1bnv5/ot2fJTTztfRlWZQReLbOgtmtiP2GhJmht3Q52lN15VWu+bDNBmNonaujZ0K/bBxTYSDqa9nw37zklCchDZbUA2GrW2xJBxMff2wcU2dE/rEIw5m1pLCnwXzWroiHMG249gyteOXlXntiEA4njmg2mAwbEUwr4VZSwp/NvGIgzseox969mmMGtr49Z25D1JnKnRoQO8giybgJFm4cj8eWn0kOyvYqYAB0uWK6X/Ddlq+UDhAaJvJkbVUJ0eZnu3nJLwwReUL0MqkPmfcd8GooY1fP/Ts025a/N9322/R97/5bh649KdYgfTE7S21W8InFXOYs+oUPvr0GJZVjaKu3kalwFIgdWZ/uPQET39wCnd+egwBW2NbO34FLE09Di8vmrLdpQCNxeEFa02v9mOSvk01zVwy4RWOHPcOvqnZ/5nPbAXSEx+49Kfsf/Pd7bfoBxQnuOyBW3+115iNgbbOshAaS7us2jSem5eeQNTK1NiK+3sSUzYoCTLJnpFP2dPezJMtezFAOERl+3bySKH5T92hHNy4iNKCuq28BKVgyAAfNptu7W/2KqUcimSCE0fMYvqoN/F0Pr6J4rbCsd3AZQ/c+qsDihO/+nAH4fMXmf6QvPWadQvDRTUTt7juGoH2Qjw2/wgWNe9JwEl020XnW5Vcc9DjuDrQxnXXNMYHMWPeGV2619eQ3aTdCF8qf43jJ3+It5Mha2y6JtFYvvgnvx82mVnfUrt03c+9dwaXnldVEgy3jG8bnwecGPe9fw5LE3t0q8gBqt3hLKzcb+vnuhAEnBqUZ45d7y/4WnBi+ZucMOVtPIQR+S7i9GC4Zfyl51WVnHvvjF3H6IWOS0mhOsUKJrb5naLWD2P1QI55nnR5ZuX+BLax3EHLQ2Pisn4Td8oEB0+aheuFTXO0AyuYkCWF6pRCx9210IcXJAg47qnbrp1blkb2oMscVwX8c/EhyDYPFktqIk6T6dF+QFwJLh//eGZm19AulJYEHPfU4QWJnQv9vHvu4M21+dGSfO+kL7gGWmDh95j7ZEuPdzZPI+UFP4vJtVTsXfI+nplt7dN4WnJU2TLKy1vQ5hSgDlGS75305tr86Hn33LFjoftaML5Y7+lEGsUXnxaCoOzJo2UFAeny1/nHYQkfR3q8vXgcszd/2exD7+tCF02cOOk5sqKSUY7hRBrF+GK957Z7U7aa2SoKJikp1CdbwsfT20x6KUnQdmnyQj12QIIQijVNY5m1Zh/mVe7LSreccC+cY23oOardAq6d9DRuN1eC6bNxuvApKfJOTjb5/92h0EcXp/ED6YM89cWZba0hz0pDD+8SDThJnl5zDCE7TVgakfcxdCsnAAAgAElEQVR1Tiv/gGEDN+D5JjzrlDekbAKh2EGjZWD7rvvUs07jrdV5xUFbT9+RK52Z9e7px6wgZKcwteH6Po1uHoeP/ze+Z0S+OwRtPf2t1XnFU8867YtCn3DE4QwIc3Agb0elaiUByzX7SgzdY4m05MLBTxEKaROa764XnBdjQJiDJxxx+BeFXh5IM7jEP1fK7U90aS0J7uJIWoOhM2igTPhMmbQE3w+YBtlNpPQZXOKfWx5Iby30c++aga8FJSXN4/0dxUZKIqVvHGhDl+P6ASZXvIPrBk2I1gX4vpXRshace9eMz4UejaS4bf81SCs1bkcW20cghZkMM3STFdLC7GHoMgTSSo27bf81RCOpz4XemLYI/mViUEqRv7M/tyxl1jYNhpxw30V+8C8Tg41p63Ohh23FpZOSV1r2jks12dKlLlZqCjQaDDmAZbtcOil5ZdhWnwu9OOgzIM87hZ0kwgjLZW1sIFIYoRsM2e+9awbkeacUB/3PhX7jFcNFeWl6zM6WzrxUhG+M+yuOL9qdf5xSNg1+gGblkFAOaWXjKQtfy1498cVg6OtoDeWl6TE3XjFcQGtm3MW/q8qXTqJ4Z0tnWsLQaIyfF9/PAwtOojI5eKdSVcDx0ecZFakj7to0eQGaVQEtfiEtbjEtfglVyRJTDshg6B6TjnQSxRf/rir/gctpts+7dwYVBcmAFsoR7fhjAh4XT32GxUsm8cfNR1Mkt58TWybTHDZmFdoGy88kQajWL5AI4mnFje9dQ8COmT4xGLrDqgvlVBSkA+fdOwPpKfAtUWEJT3bkaTF50sdcN+Uh0iqOUpLM+mfmlVYOE4oWoYUGDb4UredRZ16WnWT+8unYVtz0hsHQTVjCk74lKjwFsshxSab16Vp2LGj2fZuSSAM3HjST/QrWUUbqs9ek8CZOmPA+26/vLEjHQzxcty9SmHVTg6HbLLpEJNP69CLHxS4JK2xLT5dKt57p3KEPApnH1w78e5vZeI3WklR6+0vylvRYUD2FQj8CMml6w2DoJqTSRBw9PSgVdn7QR1pqcEdF3kbupNORDrgCFu+sn0zISWDy5g2G7kNJQV7QH6x8jbz27Il2JE8N6akvX1sVZn56oBG5wdADRPLUkGvPnmjLM25fPVgIVdZTrsS7G79JhWVcdoOhJxDCLzv9tjWDZUXQLvFk3LKEhxBqB2WiNAiNELr1PZmXFAopfaTwkUJhaX+XmXOjyj6g3gvjawtlCv8ZDN2Klr41LN8rsx+vOs1zqm0GFyxjVN5i9o9WUxbdiNIWSjkoL4x2HVzfIZ0SJFKSlrSg2XWIezaetNHaQgM+FlEnwT5jV+H59nZjhukj5zHAqmdtY5i13mCWtowjkS7HRmHLNI6dxmxVNBi6zKITLfHzbctJD1CkWRsfzurYKF6p8Sj4RKHRmQPZAZ9MpptPpgCFkAKhBRYC0SbWFkCLEhzZsoivTXmBtHK+8MWethg1/FNGKw0sQ6n/4GtFIh0hnRxEU1M58aTN0niYj2J7m4qvBsNuYDlJ4qnSAhsYDWTccKFwAF9skS1YgLXVxFlrYswO5tJKJMxpGs/Cd4Zy6fi/U1YWyxxv2+b9qu1xt9JGIsgPpRF5aygvXwlaMi4hePXdA4gGTFKNwdBpiy4V0tL7SWDwdn69zauDTxHh46kQv1h4KavX7Y8Q7i5KRGu0ECgt8X0HX1mkPBvMTjmDYfdQAoGeIIFB3fUdUSvNg6sO4y+zzwS/Y2WC0soyQjcYugBb6FESqOjOL5GWx5rUUG5+9yJWrS/EbmeBSdcPYcoE9hP3Umhc7SAszzRGVxt0BJalyyXQ7WvoUigSQjNj9YW8t+wYfDe18/pgWuPpfMLmgL1+gSNdZm2aztrKMlPYpIvRGixbFUigtKe+dIB0eW7jZH4w61LSiR2nzUpA+XlITKf3GyzFTYsuoaquzBSJ7OqmtVRQAgU9Gi9In4gqZWHtwJ3G7L7KxzIWvV8RdWJcP++7NNSHTGN0XWCEbSlHAj1+yryLICKbdxqrK9UdFl3v5GXICrEHYtz8yXdJNWHKjXVF2KxBWr60gWDPP2PIFKXYmSC7sKy01oLNXojD85cQQOEpgSckrpa4wiKhJAnt0IJFi++QxAblgApk/qtt8q00ebbJ0e8JggJmLLiYnx3wIARTpsT4bpo2YbnSBpzsuziBlHGSyiEk3U5/TkrbpElzXFEV+w97jvLyBFJ4medIa6691hYoidAWWkt8X+Mrge97KCXwlcbXilX1k3l43VEUmZnhHhkBaR3gmg/P4vfTHgXbM2LvbEsKgZA+Nm3OX+vJp8yuLm5kxTwOq3VY3bQv1b4NCGQ7XWwfQYHWfKlsDkeN+xACMXzfxvWc7T/XhAbRKmBrSzbg1uxXPo+0ivDPDdMIGbH3gNunyFNFXPHB2dx9wD/Adk2bdLotfeze+N6w8KhpGcEENgMavZ1njQJO2HM2+LNJ6yBr1w/mvk2H4Pj5WF4I23a/MDvr+gH8QAPfG/YWQypWIS2FLwT4u3+byrM5ZNwbWEry7MZp2LY5nqrbx6fQRFUxHyw9jkP2fgbXt02jdLYtozesaAbye/qL48pmsGzmqBGvs9fglVi2j6d2nD2XycX3aInbtKRH8sHKPZiVHExDaihKa8aFlnDunh8zoGA1ytLtrj3fUSyZ5O0Fx/By3T5Y0my46QmqPYs7p92JDBn3vVMetLISInrDijqgpLdisWY3nyGBDZw2ajajK5agbI1WO3tyC0ATDMTwkkE+bShEKI8xg5pJegF0N8dyGoEjW3huzlm8FRtFyCR49MiczbTi1Ry/54smVO+oJdca3w8mJJDqxcugwInRRBH3Lz2Z62afR2PNWMDbySaYzP9PpSP40mZoaYIh5S4JN9jtIs9cscZTEU454En2D9TjmSWgHmnz/zQORWizDNrxtgPtO8qKHPX97/WeRf/8cmzLQ6gQ71RNZG7VJEbYKyiOpNAiO4XkK4dJw+ZRu2EkNeRhauB1L4622NBYxj4Dl253TsewA7MowE+HUxJozqYLsyyPZjfCrcvP55HZ57C5KoxI2+iU89lL+DIrcqKVb3HatMcYKTaAGXzdihSalQ1j8FTAJNJ0MPDxfOmK6A0rXgeOyN6JmCD4cmuDabVwzbiXGBn9FF/2bqcLQCmfBz74Jhu9KJapiNOtsfphhXM5bt/XSHuhburNHYeLuYmipaG8UgK12XyZUTtFNJggGmjzsgR3Lv4G/7foq73eCRoQ0uKygx4jajV022y/IROr/1/DATQ0hbt8PsYSGl8n8bW39QsXSe7mTQgBviebbaAqBx05CgLNLG8qB21DFlhRpQVXTH2K62efg+cWY9nxXVTVMXSGEuEzd8URHDn1edJupEs+M+i08PaSw3l67TEEthMSluWv5vv7PgmWzkGlaHxf1NhAZa46cmODAmT2pEfqYIzrD7mPeCpIIjaGJRsDPFJ/MBBkgPTM9ssusVCKRxv2ZmrN64SKdvezNCTD3Df7myxPlhMONG33fXXJgcxZtSfTJn6E5wVzrs08LVbbwMZcdkvQmqyZ8dYCH4tg0CMUXMTBZYLD1FzqmiJsik1h6aZ8Xo6PxsKhUNk4lknr7AylQvP+huM5quR5fGV16jNsFAvW7sk9q45hgOUTkjt2z6Xw+UvlUYwbsp78cFNueWpSoxFLbGCVGTrd4W9ItAYlLAqKkhQUzWLP4R6n6zRrNg5hVXwir67fBynNDHKHRSo9Xq0dxuGJECLYsYellD7xlM1LH5/BB7HhRNuZQz/AUry48Ci+dfBjpHLIqmslUb74SAKbzdDpGVzPJu3nMbiini+NfJsfjH+MemXytzuDJQI8uewQLNX+ZVbbTrL202Fc/+6P+Dg5iHAHPCqB5qPEHryzYgK5NAvvuyHygn6zDTQCLlm4XbUv4wtJ+eAqDvq0lsWpYjNx11GPVCiWNe3J66vqkO1oO4Fic2IY79eNJWwnOvWdETvGS2tP4oBhfwArkRPr+VpbVNdbLTaZ5bUWej07rh+K3QvwlT2e4c2F3yFqmfX3Drcf8MrGo9oZSoEtFOHd2mIs8KXmkY+O49sHPto6SbTNOzS4OntKYQll+eta7FobSABNRui9w8CB1Xx1/XLeaxpjKqB2gqDVs9uFpVCsSA3l0jd+9EUXXgsOilRz7n5PkS3pFFpbtU//eOTGLZfzcW52c+5PZCVTBRyyxwvUmLTO3Bl1QhG1BFFLbv2yBUviQ3lp+b6ILHlox+Jyw28eX+xtEfpHudbYCbeIcMHynBe7EJriQp9Lom+bY6T7xFNgy1mFvT8updLEU9bGlpT12U6MD3OpLauV4JKxj3HM2Df7hFX3/ACTxsyj3gjd0IUoKYi5YlZ9QtLWoudEgJjybX425h+MHbEctw+5u7aluHLUkyRMZQVDVzkXCh0KiKcbXQdZfd0YyMy6Z33mvqslXxn4OsOHVLYWeuxDT18tGDd4PeNsc0y0oWvwta0sX1fZ8vNN1Ckys+/Ze9HKZlrpCo4Y9/HW56v3pY5B8NXR/8hszTUYdteia+lWNQfSD19+1VZC35CtF6yRTMnbwKmTXqAvV3IRUjBoUB0nFHxqtr8Ydls1yg03PPDzihbYuizKS9l6yXmihZP2+juetvp896T9AAePeZHNqYgZq4bOGw0BNXWBFf9z91q9rdBfztaLPq50MXl5/aSDgLKSZn6yxzM0+hZpMzln6JRBF2yO2882pDLGsa3QXwOy8lSCtN+/BrvvO4wetpxbpv+Bbwx6GmnFAZ05PsqQ9S6zp6zW7dO9OIY8h/s+Cd2VaE2Vabt1SgGbgOGms3ofJQVWIMnkPTay9+g/k/ACNLUM48kVk/jEixJOlhG2k1jSw1SgzR4c6TF780EcO3IFVl5Nrz2cldItqQsWp34+NyNnC8APFhEcPgXgq8CobGu8caFKhg78FNUvt3QKtBBYliKSV8chI+fy5bIFTI6upCSlqXeDrHOLsLSDbblG9NmAVMzfPICDhixA0xtC13jpvIWPL614oDYR4OOXXslchbfiTSJHfR9gEHC0EXr2it73A0hbUBCIM3boJxw07GP2C89jQCiG3zScDVrj6gCOUEbyvUgsVc7wQAvlRZt6vGCoZflsrhrwX9fXT/3hsp98wXUH+Bdwk+mmHJC80J8VR4wOcBlYMYfDxs4i3TKQ1VWC56pOoTlVhDblqnoF20ly+/Ivc2fpUmSoZ7cgK2Wxsd56JGnJNiaiDdEbVthk1tOj2dRoJxZ/xPR93sA1iSTtcfQROjPhkvYCpGPD+b/Vo3i3aQKllkSgsMx22B5yoAUTwus4Z79n8HrQhXcTebz+SUnJhg/fbpjzxDOZaGKb93jAbNNFuT24lBAgBAHHpaB4BedNfYm7DvlfLt3rSU6NziUhmqhWkrQfMg3WzQ/dt1qGoWXPZpenPDHrsFHxz0S+Pdcd4EXgRNNNfUf4vnIQNgwu3Mjw0k85SL7E2soKljZN5l/rD8GxzFnv3ad2TU9WobClRzoZea+yaesZmu1dwRumd/qsicHzHZJuIQPKkkwZMpeYsep9Cl9b1Dfa/9eYCu1Y6K072VYA602T9XHNC1DKLMb1NdxYkV7aIBZZ2xTM3J5FTwH/zKaLr/Mk2pRFNhh2SX2L/fzhw1uqH/7eD3cpdIDHyaLi1c/WHUxTcwBTEdlg2DFSKNKu88+1zeEv/m4HfzMPSGbLDVQEYixYdxJIUxLZYNhhfJ4Kq/om+WyT6+xa6G0qzryfLTegETxcPRyZMuvoBsP2EGhSifyl9z1cUf/I5Ve126ID3JpNN1JuaZ5feqzpUYNhu9ZQsKI6+MRlF1ZtNxtqZ0J/AajLmvgDxZuNwxCeqZRqMGyL6znpmRf/5FezG8K0W+it7jtkWb33IBYPfvIlpPRMzxoMbYJbPx1YfPF9t/Dh1Ve0X+gANX+7EuC2bLodKTQr66eQSgcxK8AGw+fx+er1RY+9/fgzO/GId4Ba8hJkykuty6absuw0ry8+EMeURe6CAYIpQtkHSMXzmT6h6abF/32340Jvw6NZNTiF5v9qD6Kuodj08O54R9KlpWUQQWG2seZ0PwpFIhV87K1lhTt/Xzs+6+Fsu7mok+DDFcfi2AnT050L6fBSNvcvO4qwYzyj3PbKBJVV4b8iReeF3joptxB4O9tu7+14ISpZYHq6E9i2x6uLTkPqfMxcR27TUF9Uc/cfRr96/0U/3m2LDvD7bLvBqvQgqupNhNkZlqwp5t+NwxAmpzi3H9hWiuZ4+NeXXrZql8tQ7RX6f8lky2UNA+w4H1WfQo6cDZk9MZ2yeHTt+RRaZokyt112jZcqYV114B91qQC7LfQ2KbEzsupGhWZlYzFgap23F0ukuf+jo1BoM9ue80oXVFYVPHXC3lWbnrjy+7sv9DbcAsSy6V4/8fNItxSZTm+XyH0+rZnEp/GJCCPznEZr0GnL2xAL/r8Xlw9qnyfXnjepVAygGXg9m264XGqeWHEowrjvu3T0Yk1w0+IjCRiXvefDJbp2CVNITTJZ/InlpZe196HdLqHX3LjPlh9/kF0NqKmMD0YZne8Ux0nw4opvUE7ANEYPc3JRFUp17a5L4QWZuzr0c2lLHrrsh10ndIC6p68FWEVms0vW0KKCpFIDzIjakcuufeYv3Yc3mgchTZnnHiWtLQYXr0LRtRuxYrHAwsKwemnOv9tf3rHdV+DNfXzLjzdmW+z5zOLxOHbSjKztkHDzeHLdCZSZSq89TkM6xIToR2jRdbkKQmg2VhXenPIlHz31XNcLHT6bgZ9F5kSXrGFOegKphI1J/viiNZ8573S0nTJt0wvsW7CYYLBr272+tnj9hEHND//58h93MMztHNdmU4MWeHk8ufAcvETauKdt0WCOXew9DiutB7vrJuKE8GlqiVz+1rqO7/PorNA/JHOeelYghGJJvJxfzr6STXUVWOa8sS0tw5pUmWmGXnHbCxg48EN8r6uqF2ua66KVN58ffdHqhGo7/CdtilJcCGSRojRBS3Dr/AtYsGwK0uzKIpmyiQhjz3uDQitGQ8N4LKtrCppKqVhWEz7zrLvr/Icuu6pnLHqr2NcCr2abBct3Wnhsw5E8NOdkHBSa/lt6Ku4NJmxCmV5BWoqbVx0K26nI2uHPEormuooV1TFrlqBzHsLuqEADF5Bl2XIAtqVYFhvDHbMupLHOh/442IUiGS8x8XkvUiYsPlh9BEJ3fvwJDV4qyCfrg+cMzUv7j19xRc8KXbspgCrgvmxsZFv61Pp5/GLhD1i5cSxWP6sJ70iPDyoLTbprL2IJn79sGouX2g1rKhSNLYUvBAL6g/RuHNbY6b/c/OtJW378JVCbrY1dbnn8adlXeevjL4Py+s3AFyLFKy0TjNp6mQEEeGzJqVi6c4bGT0Z4YnH+lZ6S/PmyH/e80NvE6jHgimxu7JCd5tXGPbnpve/x+tIp/cK6J2PFIMzOvt5/4CoWNo4imS7tuJERivqmgmsPKk+tfvDyH+1enN9F9/MEMDfbGz2NxctVRzF/yQhknxa7YH1sIPmeORI5KwyN5XH/giOxRMfGXHNdSeqRxQVdsj18t4XeatUVcFYuNHpAetR4IdB9d5pKWi4NTUMImLMussSqaypbRrO+ekT7zyTQmvX1kWMOrkgmHrjs6t4XehtWAHdle6MrLSizE/Tlo1nDVoKXNozDliaXIFsIOgkeWXko2tu1gZFCU1NV8c4PjxRvdtXycJd8Spskmh+QWV/PWnw0+YG+6bYLoUDBX2afTcwvxyS/Zlc4VZcawpLKKbtw4TWpVKBxTnXeV3/zb8nDl1+VPUIHaHjtnsxVZjLmstetRVOSr9B9ynUXBO0kGzYM4tY3f8Ki5lHYZrda9sXqdoJH1xyI0DtOepHaYvWn5b8oC7r1TZuqunDcdxHp12dssez/yWYXPqigsCDeZ2J0oQDP5bmPT+a3K88i7sSQprpr1j6QXRXhv0sORajt9JHQ1NaV/GtEcfxOgeDpX92UfULfhmuBzdnX0JqwFATyatB9wK21pEdNPMrVsy7indoJRKVv3PVsj9Wlxyu1k0B90ap7ybA379O8ixfUF/KXy37Upd/b5UJvterNwElA1gXDFhrbyW23VmiN0JJX5k5nxtyvky/CWOaE2ZzBxuLe+cciRZs+05KVG8vOjYT1pw9eelWXf2d3LsB8APw2+2J0D6Vy1+rZdoLaWocb37uYd1qmETACz0EHXrOpZQwtn5VA06zfUPZKaV7ycVvqbhr33UCbWfhfAvOzx3GXFDjNaJV7GWNCKBzSvPHJyfx20WUoLU0eey6HXbbHw3MPI2THSbWU1N+0rvSrb20q2q00116x6K1i18CxQFM2NK5SkvJIA1rnltBty6WhoZTfvXseL1VNptDyjcT7AEvjY1mwdqxevTbv6MsHNLqvXdV9meTdmjvVKvYqsmTJzdcWhaEalO/kzmjQPrOWTefa+RcQp5SAlTIK6SMUB+L8ddnXvr5cD//o3ouv7tbv6vYkSa9xE8BTwK963aIjCNktXV5+tztjuT9+8C2e3zSdqJXq02m7/TRa/1UwkHoinur+OetuH/F1tx665cffAm/0ZrNq6PDGgt69Xos1bgnSOOp9kTeA32oteesn38h9obdx4V3gZGBjr7nuQhEQTbkzFMyEW19lY6sW3DYT17kv9DZibwKOppfKT6WFR7nTaIaZoTeJtWqgqadE3qNCbyP2xcB5vdHCHh7RIlMs0dCrnAcs7kmR97jQ2/AMvVCVJiB88vKbzFAz9BZXtI79HqfHhd7mSXYPcEdPfrfQGtuO5caQ0GDbZgdaH+KO1jFPT1vzXrPobW70KuDZnvreIAph5casu2Wn+HDhNDPj3jd4tnWs94rIe9N1b3vDp9IDy24awSCnBa2yP1nGthMsW30QT1cdimWWznOdN1rHeK+JvFeFDrD5gXO3/HgiMLu7XeERTjNKZ7fQLSvFirVTuXv1l7AdkwWX48xuHdttx3r/E7peN6ttyejjyMzIdwsKyaCCZFanv0oUazaN5tYVR1FiG5HnOItbx3Ss+rox6HWz+q/Qt3Hj64CDgJXd9T15oRRelu5cE2hqGoq5b/EpVFi+kUlus7J1LNf1pruedUJvI/ZGYK/uEbvAdtLorFxG18TiIW6cfyFBiz5R/aafi3wvoDFbRJ5VQgdofPOPAAlgale78UqDEB5CZteGFqEgnkhx/exLKDbLaX3BXZ8KJFrHchZ5jFlI9IYVAKXAy8ABXfGZCW1xyYQnGVlemVUid5MJ7phzFXFh9ela8/2A2a0xeV02WfKstOjbidmPpIuW3prRFFo1WXanigfmX0Zc2Ebkuc0brWM1K0WetUJvI/YYcARdkVSjNPmh7BGT1JJb5nydzX6kf57f3nd4tnWMxrJV5FktdNhq7fFUdjtd1icvS6q/Oij+NO8rxNPlCGPJc5k7Wsdmr6+T57TQ26yzQyaF8IrdutVgstfvKWSneXbh0axuGWdkkttcQZu01t5eJ89poW/jxkNmU8DpdGY/u0z1ehgcsD1e+fgI/lO3D7Y0a+U5Sqx1DPbaBpU+K/RtGvQZMjPxHapUMylUBTs586q7EULxxsdTeG7zNIpMgcdcZWPr2Hsml0QOYOdSK29p2OgNKxYDE/l8ImSXjHE2o+mdrDhb+HyyfByv1B9BoUltzVX+C5xCD1eG6XcWfTuCbwKOAa5vz98Mi/i9coKqZadYtX5PHqg8EYmZXc9Rrm8dazkp8pwVehuxu2TKSJ9J5ry3HVKcr3p8Z7eULpWbxnHzyqMpMkcn5SLNrWPrV/RgIUcj9O2I3Y/VATzZ6srP2aFlddwetehCKJobB/HrRScQtcwSWg4yp3VMPenH6shlkedcjL49am86cEvcvoHMRMn1wP+DzwNyjUDIZA+KXJNKFHD73G8StYwlzzF8MmcQ/BLQuS7wPmHRt+PKa+AXZLYIfpbU7muJtBt7xHUXAuIpm9+/fxHaiDzXqGwdO7/oSyLvU0JvI3bIbDAYB9wLkPIlAasxo8LuFLmCZCLF3bO+C2Z2Pde4t3XMzN5mLPUJ7L7WW22W4FqA7wH/TCD/ELJSI7rZlgMJ/vrRxSRt2Ssz/IZOsRb4LvDvvijwtqOzTxO9YQUXjhhD0P79m+UVVYd1l1G3ZYI/vn8hn6bKEGaTSq5wN/D9vuam93nXfXvUvXALN30SY/RwcfiSFYO+1NxQkura3WICS6R58KPTWZMqNSLPDeYA44ErAd3w2j19/ob7jX958cybcX3B0lorfOLE1FX5+S032uGY0Hr3nnWOVLy08Cjeqt0by6yVZzu1ZDajPAGZ7KW+bsn7ndC38JM/3QTA+5vDo4/dI/a/BYVNJznBJEp1XPCO5fLG0iN5fsN0QnbcyCh7iQH3kVkyi/UngfdboW/hwvtuJyB8XCUPGjsg9deisqqxSkl0O4N4SyveWLUPz60/hoidMFLKTlwyk2zfATb1R4H3e6EDfPe+27ClpiphW4PD7vShZemnikqrKtQudrlJoXhv+QierzwVx2w3zVb+DVwKrCaTX9FvRd7vhb6Vhb/nVv786EDrmgsrTywojN1TUtY0VG8nw8a2PFasGcoDq88iZBJispF/AdcCH0KmsnDq3zf1+0YxQm/D5X+4mZSy2KusmTW1kfMGVzRfE4mkJmGl0Egs6bFh01BuXHYWUWFEnmU8RyZ19bNSL/3Zghuht9fC33sbIUsRT8vj9hqe/G0w1DC5saXIuXbB11s3qZimywJagNeBHwKrjLiN0DvFlNO+ysHHH44jPBLKHv+fqjPObxb+ZSCKTOv0Ko3AncAttG5Prn3yZ/jznzQtY4TeeS6YeTsSn9drTqcF8kEfBfwUONS0To/ydqu4X2u15qhUjJob9zEtY4TetbSeIrOFvYDzgLOB4chLpMkAAAGISURBVKZ1uoW1wOPAw8ACE38bofe26I8DfgzsC5SZ1tktaoG5wG1kjuUy4jZCzw7khOMpP+euLf88iUzN72lAnmnnXaKBOPA+MAN4HqDmb1eilrxkWscIPeutfAGwT6trfyow1LTQVqwH/tnqms+nTd0/Y72N0HNV9CFgDzLlqY8nU/Yq2s+apJpMYYeXyJRPXsn/b+eOURoMgjAMPwgaJZqAFmKs0ouF2NkJop7Ck1h5Em8RD2CrEGwtFRS0CIiJEbGYKQxYWYgm88FUW/38vPvN7swOw4K7QJ9m8OexhUMc5CawgYUp+dw3MZrpVrSjXuBG9J8X2AX6zIJPzAfYFxd7x9jEkpgE9FdnB3zgHa+4S7fuiRLYxOP8ArtAn2ktHp1q7Z18t9TIWBG3+bvYwTZaWM7M4Dc0FrXrAfq4Ev3k13m2HmVMaHB5btg7q59coJd+4PzS6dfQzrN+F51M/9dzbRXNjEZuCnNfnHiccL5kPIvS1kOm3ffi9dej6EZ7SudWTv2/9AmKpq6ZYfirUgAAAABJRU5ErkJggg==",
            "requestMethod" : "GET",
            "requestUrl" : "http://json_server/${list}?q=${q}",
            "requestHeaders" : {},
            "requestBody" : "",
            "responseListField" : "",
            "responseIdField" : "uri",
            "responseNameField" : "name",
            "itemUrl" : "${id}"
        },
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "4cfbdc84-b41c-44f3-a630-b4f321b5b4ea",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "0b04e2c8-f721-46d0-a352-a226e1cf3ff5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : true,
                "value" : "acc665b8-8096-4584-9571-9ad9a9e2df38"
            },
            "props" : {
                "changed" : true,
                "value" : {
                    "list" : "countries"
                }
            }
        },
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "cf7826a8-435d-40e1-8797-262064ce7bad",
            "parentUuid" : "44052a8a-4f99-40bf-99f9-eb2f92b3a25c",
            "entityUuid" : "acc665b8-8096-4584-9571-9ad9a9e2df38",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : false
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : true,
                "value" : "emoji_name"
            },
            "itemUrl" : {
                "changed" : false
            }
        },
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "d72e2c51-af3a-4418-99a2-ca68f6d683c3",
            "parentUuid" : "44052a8a-4f99-40bf-99f9-eb2f92b3a25c",
            "entityUuid" : "acc665b8-8096-4584-9571-9ad9a9e2df38",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : false
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : true,
                "value" : "emoji_title"
            },
            "itemUrl" : {
                "changed" : false
            }
        },
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "398b6231-f261-4bb9-9f24-fbc8b3dbe32f",
            "parentUuid" : "44052a8a-4f99-40bf-99f9-eb2f92b3a25c",
            "entityUuid" : "acc665b8-8096-4584-9571-9ad9a9e2df38",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : false
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : true,
                "value" : "title"
            },
            "itemUrl" : {
                "changed" : false
            }
        },
        {
            "eventType" : "EditIntegrationEvent",
            "uuid" : "dbb1b07d-de7b-4cd8-9e4a-b8dea9916c7c",
            "parentUuid" : "44052a8a-4f99-40bf-99f9-eb2f92b3a25c",
            "entityUuid" : "acc665b8-8096-4584-9571-9ad9a9e2df38",
            "id" : {
                "changed" : false
            },
            "name" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            },
            "logo" : {
                "changed" : false
            },
            "requestMethod" : {
                "changed" : false
            },
            "requestUrl" : {
                "changed" : false
            },
            "requestHeaders" : {
                "changed" : false
            },
            "requestBody" : {
                "changed" : false
            },
            "responseListField" : {
                "changed" : false
            },
            "responseIdField" : {
                "changed" : false
            },
            "responseNameField" : {
                "changed" : true,
                "value" : "emoji_title"
            },
            "itemUrl" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-06-19T19:24:42.297Z")
},
{
    "id" : "vodan:who-covid19-crf:0.1.2",
    "name" : "WHO COVID-19 Case Report Form",
    "organizationId" : "vodan",
    "kmId" : "who-covid19-crf",
    "version" : "0.1.2",
    "metamodelVersion" : 5,
    "description" : "WHO COVID-19 Case Report Form",
    "readme" : "# WHO COVID-19 Case Report Form\n\n## 0.1.2\n\n- Updated *Participant ID* question with explanation of identifier within triple store\n\n## 0.1.1\n\n- Country question with type-hinting using internal integration\n\n## 0.1.0\n\n- Initial version created based on PDF: *COVID-19 CASE RECORD FORM RAPID version 8APR2020*",
    "license" : "nolicense",
    "previousPackageId" : "vodan:who-covid19-crf:0.1.1",
    "forkOfPackageId" : null,
    "mergeCheckpointPackageId" : null,
    "events" : [
        {
            "eventType" : "AddQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "c1bc9c63-b9fb-4d70-91a8-bf30ea8c7d4f",
            "parentUuid" : "99c13e26-8bf5-4c99-af29-908b9f36cdb2",
            "entityUuid" : "6ac4416e-dbde-48ca-8b64-9e8bdbd2b99b",
            "title" : "Do you have assigned?",
            "text" : null,
            "requiredLevel" : null,
            "tagUuids" : []
        },
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "acac78b4-1f4a-4441-b848-c823b8792fac",
            "parentUuid" : "99c13e26-8bf5-4c99-af29-908b9f36cdb2",
            "entityUuid" : "6ac4416e-dbde-48ca-8b64-9e8bdbd2b99b",
            "title" : {
                "changed" : true,
                "value" : "Do you have site code assigned?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "3e9be278-e2f7-4c96-81af-6c784dfd8701",
            "parentUuid" : "6ac4416e-dbde-48ca-8b64-9e8bdbd2b99b",
            "entityUuid" : "a89b565d-9b1a-4e6e-b68c-3b12d13f982c",
            "label" : "Yes",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "AddAnswerEvent",
            "uuid" : "5242cbee-0a10-4da7-a6f0-64fa35793ba9",
            "parentUuid" : "6ac4416e-dbde-48ca-8b64-9e8bdbd2b99b",
            "entityUuid" : "f9f34fca-8637-47dd-b2ac-154087f2a757",
            "label" : "No",
            "advice" : null,
            "metricMeasures" : []
        },
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "317e66ce-3e4e-4f5e-86eb-7192c1927150",
            "parentUuid" : "6ac4416e-dbde-48ca-8b64-9e8bdbd2b99b",
            "entityUuid" : "f9f34fca-8637-47dd-b2ac-154087f2a757",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Internal UUID of CRF will be used for both reference in triple store and as primary identifier of the participant."
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        },
        {
            "eventType" : "EditAnswerEvent",
            "uuid" : "11ceaa5b-f655-4347-aab6-367d6c6b1bb2",
            "parentUuid" : "6ac4416e-dbde-48ca-8b64-9e8bdbd2b99b",
            "entityUuid" : "a89b565d-9b1a-4e6e-b68c-3b12d13f982c",
            "label" : {
                "changed" : false
            },
            "advice" : {
                "changed" : true,
                "value" : "Internal UUID of CRF will be used for both reference in triple store but there will be the official entered *Participant ID* to identify the participant "
            },
            "followUpUuids" : {
                "changed" : false
            },
            "metricMeasures" : {
                "changed" : false
            }
        },
        {
            "eventType" : "MoveQuestionEvent",
            "uuid" : "ed916e27-75db-430f-ae38-8217df55e89a",
            "parentUuid" : "99c13e26-8bf5-4c99-af29-908b9f36cdb2",
            "entityUuid" : "76f89d67-0395-48c5-9f43-2cab7447b646",
            "targetUuid" : "a89b565d-9b1a-4e6e-b68c-3b12d13f982c"
        }
    ],
    "createdAt" : ISODate("2020-06-23T13:47:36.588Z")
},
{
    "id" : "vodan:who-covid19-crf:0.1.3",
    "name" : "WHO COVID-19 Case Report Form",
    "organizationId" : "vodan",
    "kmId" : "who-covid19-crf",
    "version" : "0.1.3",
    "metamodelVersion" : 5,
    "description" : "WHO COVID-19 Case Report Form",
    "readme" : "# WHO COVID-19 Case Report Form\n\n## 0.1.3\n\n- Added note on format date to the relevant questions\n- Minor lower/upper case unification\n\n## 0.1.2\n\n- Updated *Participant ID* question with explanation of identifier within triple store\n\n## 0.1.1\n\n- Country question with type-hinting using internal integration\n\n## 0.1.0\n\n- Initial version created based on PDF: *COVID-19 CASE RECORD FORM RAPID version 8APR2020*",
    "license" : "nolicense",
    "previousPackageId" : "vodan:who-covid19-crf:0.1.2",
    "forkOfPackageId" : null,
    "mergeCheckpointPackageId" : null,
    "events" : [ 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "8dc5847b-cb18-4024-96bf-d090fa10a355",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "334a2d12-e88d-435c-8a46-2e0d56d74ab5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "*Enter the date in **YYYY-MM-DD** format*."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "02167ff0-deed-44d2-a437-5a2099a5590f",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "334a2d12-e88d-435c-8a46-2e0d56d74ab5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Enter the date in **YYYY-MM-DD** format."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "c3a61979-396b-42b5-a076-b2f3979359c7",
            "parentUuid" : "d015b68f-04e4-4eb1-bb1c-f5df868def3a",
            "entityUuid" : "86d83261-4e21-4289-856f-bbc994f57d9b",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Enter the date in **YYYY-MM-DD** format."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "05214938-203d-4736-897b-7244de843566",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "cebc9c1c-d449-4106-9c74-33aa63b55b1a",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Enter the date in **YYYY-MM-DD** format."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "54aba4b4-a29a-4f50-8357-35eea97f9df2",
            "parentUuid" : "130c27a4-ace8-45bd-b82d-611837c69e67",
            "entityUuid" : "ffa0dc72-2b51-49a4-ba76-72361fcaca88",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Enter the date in **YYYY-MM-DD** format."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "ccc46ca5-a3b0-4f0a-aedb-00874d7316c2",
            "parentUuid" : "55abbc4c-e74e-435f-8da1-b2b01c19954d",
            "entityUuid" : "1ef01284-c1e3-42ec-9d97-4eded690e2ec",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Enter the date in **YYYY-MM-DD** format."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "b64cab4e-6f36-48a1-af34-62a46d945aa2",
            "parentUuid" : "daead789-1b25-4bff-bee0-36b0833ecf23",
            "entityUuid" : "be081b89-2c5d-433a-a5a1-1fbfa3327759",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Enter the date in **YYYY-MM-DD** format."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "cf8e54d7-46e6-4513-91ed-dc55ea98b832",
            "parentUuid" : "e6418c1b-a2c8-4aa8-ab89-7dbd4f35dae4",
            "entityUuid" : "cf6d7996-3a9c-4c9c-98c0-95d41e955e7f",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Enter the date in **YYYY-MM-DD** format."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "73c28a89-358a-4e2a-af2f-e5a6f10fa0b7",
            "parentUuid" : "a5e8a32f-05dd-42dd-9978-2c73a0e76041",
            "entityUuid" : "f1d48d5b-8eec-44cf-9744-ff87f9c6f81d",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Enter the date in **YYYY-MM-DD** format."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "3d29aada-aab9-471a-9ce4-e9ea6f41f67b",
            "parentUuid" : "6c7d7f38-8256-4b06-8c98-241aca9ec2d4",
            "entityUuid" : "0b52c83e-22bf-4bf0-9940-e2d183c92870",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Enter the date in **YYYY-MM-DD** format."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "ValueQuestion",
            "uuid" : "49b8afe8-075b-42a1-bd5a-a7314d64c0c4",
            "parentUuid" : "057b3eed-6765-4d0c-9478-825d20004aba",
            "entityUuid" : "16672294-5061-4a6c-9490-f12df00ec7e7",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Enter the date in **YYYY-MM-DD** format."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "valueType" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "37857b64-83b8-4448-9b1f-e4f36f76c66f",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "422ff881-b607-48bc-b0b2-354fbe7b9207",
            "title" : {
                "changed" : true,
                "value" : "Supportive care"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "b6850e9e-7c39-4f01-bd26-a34f6f52127d",
            "parentUuid" : "c2751f5a-22c3-4ed1-8495-46ea85485621",
            "entityUuid" : "bf4061f8-e8c9-4f42-82d6-2b6249b9b0df",
            "title" : {
                "changed" : true,
                "value" : "Healthcare worker?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ed62464c-e50c-4802-9e33-bdb8bf17726b",
            "parentUuid" : "c2751f5a-22c3-4ed1-8495-46ea85485621",
            "entityUuid" : "5835c0df-d0c3-4349-ba79-487407a385f9",
            "title" : {
                "changed" : true,
                "value" : "Laboratory worker?"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "OptionsQuestion",
            "uuid" : "ca0f0f77-b9f8-402e-92a0-374127b20bef",
            "parentUuid" : "c2751f5a-22c3-4ed1-8495-46ea85485621",
            "entityUuid" : "85fdb489-fab4-48c9-872e-2e755cbe852d",
            "title" : {
                "changed" : true,
                "value" : "Sex at birth"
            },
            "text" : {
                "changed" : false
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "answerUuids" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "8b7f6530-0483-4881-96d9-53864cbb18c6",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "0b04e2c8-f721-46d0-a352-a226e1cf3ff5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Select the country from the list"
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }, 
        {
            "eventType" : "EditQuestionEvent",
            "questionType" : "IntegrationQuestion",
            "uuid" : "afa30cb1-2fde-44da-aad3-5f413e5fd48b",
            "parentUuid" : "49c8091d-e0aa-45e6-8615-b09bf2fb6e81",
            "entityUuid" : "0b04e2c8-f721-46d0-a352-a226e1cf3ff5",
            "title" : {
                "changed" : false
            },
            "text" : {
                "changed" : true,
                "value" : "Select the country from the list."
            },
            "requiredLevel" : {
                "changed" : false
            },
            "tagUuids" : {
                "changed" : false
            },
            "expertUuids" : {
                "changed" : false
            },
            "referenceUuids" : {
                "changed" : false
            },
            "integrationUuid" : {
                "changed" : false
            },
            "props" : {
                "changed" : false
            }
        }
    ],
    "createdAt" : ISODate("2020-07-16T16:27:28.978Z")
}])

db.getCollection("templates").insert({
    "id" : "vodan:ecrf-rdf:0.1.0",
    "name" : "WHO COVID CRF (RDF)",
    "organizationId" : "vodan",
    "templateId" : "ecrf-rdf",
    "version" : "0.1.0",
    "metamodelVersion" : 1,
    "description" : "WHO COVID CRF in RDF using semantic model",
    "readme" : "# WHO COVID CRF (RDF)\n\nTemplate for transforming WHO COVID-19 electronic CRFs into Turtle RDF. It is based on the [WHO COVID-19 Rapid Version CRF Semantic Data Model](https://github.com/FAIRDataTeam/WHO-COVID-CRF).\n\n## Changelog\n\n### 0.1.0\n\n* Initial export to Turtle (RDF) using semantic model v1.1.4",
    "license" : "Apache-2.0",
    "allowedPackages" : [
        {
            "orgId" : "vodan",
            "kmId" : "who-covid19-crf",
            "minVersion" : "0.1.0",
            "maxVersion" : null
        }
    ],
    "recommendedPackageId" : null,
    "formats" : [
        {
            "uuid" : "9c7d572e-c273-4323-97a4-ab38f943c33a",
            "name" : "Turtle (TTL)",
            "shortName" : "ttl",
            "icon" : "fas fa-file-code",
            "color" : "#f15a24",
            "steps" : [
                {
                    "name" : "jinja",
                    "options" : {
                        "content-type" : "text/ttl",
                        "extension" : "ttl",
                        "template" : "main.ttl.j2"
                    }
                }
            ]
        }
    ],
    "files" : [
        {
            "uuid" : "6a531160-fe34-41d7-b02b-08898492dd69",
            "fileName" : "_mapping.j2",
            "content" : "{#- This file is automatically generated by script -#}\n{%- set repliesMap = ctx.questionnaireRepliesMap -%}\n{#- Participant ID [value-string] -#}\n{%- set pid__path = \"99c13e26-8bf5-4c99-af29-908b9f36cdb2.6ac4416e-dbde-48ca-8b64-9e8bdbd2b99b.a89b565d-9b1a-4e6e-b68c-3b12d13f982c.76f89d67-0395-48c5-9f43-2cab7447b646\" -%}\n{%- set pid = repliesMap[pid__path]|reply_str_value -%}\n{#- Site name [value-string] -#}\n{%- set siteName__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.cdb4f65b-67e0-4293-affc-2ff0531a38af\" -%}\n{%- set siteName = repliesMap[siteName__path]|reply_str_value -%}\n{#- Country [value-string] (by hand integration) -#}\n{%- set country__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.0b04e2c8-f721-46d0-a352-a226e1cf3ff5\" -%}\n{%- set country__reply = repliesMap[country__path] -%}\n{%- set country__uri = \"\" -%}\n{%- if country__reply and country__reply.value.value.type == \"IntegrationValue\" -%}\n  {%- set country__uri = country__reply.value.value.id -%}\n{%- elif country__reply -%}\n  {%- set country__uri = country__reply.value.value.value -%}\n{%- endif -%}\n{#- Date of enrolment [value-date] -#}\n{%- set enrolmentDate__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.334a2d12-e88d-435c-8a46-2e0d56d74ab5\" -%}\n{%- set enrolmentDate = repliesMap[enrolmentDate__path]|reply_str_value -%}\n{#- Clinical Inclusion Criteria [section] -#}\n{%- set inclusionCriteria__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.7a17a237-b7e5-4a89-ac6e-3d6339624aac\" -%}\n{%- set inclusionCriteria = repliesMap[inclusionCriteria__path]|reply_str_value -%}\n{%- set inclusionCriteria_open = \"71798b78-db9f-44c9-908a-9d744858f6a6\" -%}\n{#- Proven or suspected infection with pathogen of Public Health Interest [options] -#}\n{%- set pathogenPHI__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.7a17a237-b7e5-4a89-ac6e-3d6339624aac.71798b78-db9f-44c9-908a-9d744858f6a6.1b9ea5d7-dbf7-4f7b-9d53-f01f04bde980\" -%}\n{%- set pathogenPHI = repliesMap[pathogenPHI__path]|reply_str_value -%}\n{%- set pathogenPHI_yes = \"6acbfc3a-5141-48fa-9a57-7d333890dc7e\" -%}\n{%- set pathogenPHI_no = \"b182f83b-d560-4245-bead-a18a303723ab\" -%}\n{#- A history of self-reported feverishness or measured fever of ≥ 38°C [options] -#}\n{%- set phiFeverHistory__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.7a17a237-b7e5-4a89-ac6e-3d6339624aac.71798b78-db9f-44c9-908a-9d744858f6a6.1b9ea5d7-dbf7-4f7b-9d53-f01f04bde980.6acbfc3a-5141-48fa-9a57-7d333890dc7e.332edf23-dba0-4ff9-ab5a-ae60d80665ca\" -%}\n{%- set phiFeverHistory = repliesMap[phiFeverHistory__path]|reply_str_value -%}\n{%- set phiFeverHistory_yes = \"d06db09f-1938-4b53-bf2b-7015df8209e6\" -%}\n{%- set phiFeverHistory_no = \"9aa9cd67-8089-4a6e-9d1b-49ebb23f337d\" -%}\n{#- Cough [options] -#}\n{%- set phiCough__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.7a17a237-b7e5-4a89-ac6e-3d6339624aac.71798b78-db9f-44c9-908a-9d744858f6a6.1b9ea5d7-dbf7-4f7b-9d53-f01f04bde980.6acbfc3a-5141-48fa-9a57-7d333890dc7e.49d1018f-d0de-4ad9-8469-3f97df927b6b\" -%}\n{%- set phiCough = repliesMap[phiCough__path]|reply_str_value -%}\n{%- set phiCough_yes = \"31987be5-e8fa-4e56-a063-43ac161de9a6\" -%}\n{%- set phiCough_no = \"107d50fb-c898-4cf1-8cc2-910d5f2c4e78\" -%}\n{#- Dyspnoea (shortness of breath) OR Tachypnoea* [options] -#}\n{%- set phiDyspnoea__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.7a17a237-b7e5-4a89-ac6e-3d6339624aac.71798b78-db9f-44c9-908a-9d744858f6a6.1b9ea5d7-dbf7-4f7b-9d53-f01f04bde980.6acbfc3a-5141-48fa-9a57-7d333890dc7e.78e16e5d-9160-4523-88f7-e02678f993a6\" -%}\n{%- set phiDyspnoea = repliesMap[phiDyspnoea__path]|reply_str_value -%}\n{%- set phiDyspnoea_yes = \"4aa9288b-4072-41cb-86f5-557e558aae7c\" -%}\n{%- set phiDyspnoea_no = \"4622ea7a-a78f-4ddf-8e88-f14da27c2826\" -%}\n{#- Clinical suspicion of ARI despite not meeting criteria above [options] -#}\n{%- set phiARI__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.7a17a237-b7e5-4a89-ac6e-3d6339624aac.71798b78-db9f-44c9-908a-9d744858f6a6.1b9ea5d7-dbf7-4f7b-9d53-f01f04bde980.6acbfc3a-5141-48fa-9a57-7d333890dc7e.75578b46-09b5-4960-848d-d4196f7fdf19\" -%}\n{%- set phiARI = repliesMap[phiARI__path]|reply_str_value -%}\n{%- set phiARI_yes = \"e76433a5-0503-4749-a28b-de3e24b8b774\" -%}\n{%- set phiARI_no = \"4b8704d4-af9b-4dc3-bc9e-63da1aca40f2\" -%}\n{#- Demographics [section] -#}\n{%- set demographics__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.06f1daef-dfc7-4441-811f-053c5cc40e91\" -%}\n{%- set demographics = repliesMap[demographics__path]|reply_str_value -%}\n{%- set demographics_open = \"c2751f5a-22c3-4ed1-8495-46ea85485621\" -%}\n{#- Sex at Birth [options] -#}\n{%- set sexAtBirth__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.06f1daef-dfc7-4441-811f-053c5cc40e91.c2751f5a-22c3-4ed1-8495-46ea85485621.85fdb489-fab4-48c9-872e-2e755cbe852d\" -%}\n{%- set sexAtBirth = repliesMap[sexAtBirth__path]|reply_str_value -%}\n{%- set sexAtBirth_Male = \"b9d403c8-322c-4e16-a885-3423a4154c8d\" -%}\n{%- set sexAtBirth_Female = \"33f4f528-dda2-4470-a5fa-2332021e1487\" -%}\n{%- set sexAtBirth_NotSpecified = \"194cc2d7-ee20-4b84-abf0-7f1ce4fd4295\" -%}\n{#- Is date of birth known? [options] -#}\n{%- set dateOfBirth__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.06f1daef-dfc7-4441-811f-053c5cc40e91.c2751f5a-22c3-4ed1-8495-46ea85485621.71a0caa1-20fb-4291-8615-f92e04190139\" -%}\n{%- set dateOfBirth = repliesMap[dateOfBirth__path]|reply_str_value -%}\n{%- set dateOfBirthKnown_yes = \"d015b68f-04e4-4eb1-bb1c-f5df868def3a\" -%}\n{%- set dateOfBirthKnown_no = \"94ca4571-69d8-4bb8-ba96-2d2c0318289a\" -%}\n{#- Date of birth [value-date] -#}\n{%- set dateOfBirthDate__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.06f1daef-dfc7-4441-811f-053c5cc40e91.c2751f5a-22c3-4ed1-8495-46ea85485621.71a0caa1-20fb-4291-8615-f92e04190139.d015b68f-04e4-4eb1-bb1c-f5df868def3a.86d83261-4e21-4289-856f-bbc994f57d9b\" -%}\n{%- set dateOfBirthDate = repliesMap[dateOfBirthDate__path]|reply_str_value -%}\n{#- Age [value-number] -#}\n{%- set ageNumber__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.06f1daef-dfc7-4441-811f-053c5cc40e91.c2751f5a-22c3-4ed1-8495-46ea85485621.71a0caa1-20fb-4291-8615-f92e04190139.94ca4571-69d8-4bb8-ba96-2d2c0318289a.5d751f54-1fa1-4bbd-b153-2eb69d7cde18\" -%}\n{%- set ageNumber = repliesMap[ageNumber__path]|reply_str_value -%}\n{#- Units of age [options] -#}\n{%- set ageUnits__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.06f1daef-dfc7-4441-811f-053c5cc40e91.c2751f5a-22c3-4ed1-8495-46ea85485621.71a0caa1-20fb-4291-8615-f92e04190139.94ca4571-69d8-4bb8-ba96-2d2c0318289a.ee1e2970-af5e-485e-b925-864a2b344b75\" -%}\n{%- set ageUnits = repliesMap[ageUnits__path]|reply_str_value -%}\n{%- set ageUnits_Years = \"69c71d58-5483-4a36-b5eb-b4eb57a52631\" -%}\n{%- set ageUnits_Months = \"be7fb12a-d876-44fb-8aea-7d5b54a92b36\" -%}\n{#- Healthcare Worker? [yes-no-unknown] -#}\n{%- set healthCareWorker__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.06f1daef-dfc7-4441-811f-053c5cc40e91.c2751f5a-22c3-4ed1-8495-46ea85485621.bf4061f8-e8c9-4f42-82d6-2b6249b9b0df\" -%}\n{%- set healthCareWorker = repliesMap[healthCareWorker__path]|reply_str_value -%}\n{%- set healthCareWorker_yes = \"72bbf5a1-f0eb-4a24-b52a-0dcc4b620f87\" -%}\n{%- set healthCareWorker_no = \"27aca994-d6a4-448b-8ea3-d3d89f5918ed\" -%}\n{%- set healthCareWorker_unknown = \"cd315b94-871a-42c6-9e46-75b9918cba17\" -%}\n{#- Laboratory Worker? [yes-no-unknown] -#}\n{%- set laboratoryWorker__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.06f1daef-dfc7-4441-811f-053c5cc40e91.c2751f5a-22c3-4ed1-8495-46ea85485621.5835c0df-d0c3-4349-ba79-487407a385f9\" -%}\n{%- set laboratoryWorker = repliesMap[laboratoryWorker__path]|reply_str_value -%}\n{%- set laboratoryWorker_yes = \"4f918b1a-6098-4ae8-ad0b-fa1b7f3932a9\" -%}\n{%- set laboratoryWorker_no = \"d1f6f009-107a-4c9c-8c2d-7bdff7475348\" -%}\n{%- set laboratoryWorker_unknown = \"be35ad50-6894-4359-96cb-2448c9e44f2b\" -%}\n{#- Pregnant? [options] -#}\n{%- set pregnant__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.06f1daef-dfc7-4441-811f-053c5cc40e91.c2751f5a-22c3-4ed1-8495-46ea85485621.d345347d-59eb-4143-97d0-76800b59a830\" -%}\n{%- set pregnant = repliesMap[pregnant__path]|reply_str_value -%}\n{%- set pregnant_yes = \"508db15a-7fec-4bfe-8b53-354339200e2d\" -%}\n{%- set pregnant_no = \"3167c65c-e572-45be-976d-3f88db770b77\" -%}\n{%- set pregnant_unknown = \"c7e30555-0394-4c4f-9f13-b7674c385baa\" -%}\n{%- set pregnant_na = \"82e72d19-7da9-44bd-a791-03b461807150\" -%}\n{#- Gestational weeks assessment [value-number] -#}\n{%- set pregnantWeeks__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.06f1daef-dfc7-4441-811f-053c5cc40e91.c2751f5a-22c3-4ed1-8495-46ea85485621.d345347d-59eb-4143-97d0-76800b59a830.508db15a-7fec-4bfe-8b53-354339200e2d.748efff1-5ded-4cb3-b8b3-c8f2bc0cd584\" -%}\n{%- set pregnantWeeks = repliesMap[pregnantWeeks__path]|reply_str_value -%}\n{#- Date of onset and admission vital signs [section] -#}\n{%- set onsetAdmission__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd\" -%}\n{%- set onsetAdmission = repliesMap[onsetAdmission__path]|reply_str_value -%}\n{%- set onsetAdmission_open = \"057b3eed-6765-4d0c-9478-825d20004aba\" -%}\n{#- Symptom onset [value-date] -#}\n{%- set symptomOnset__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.16672294-5061-4a6c-9490-f12df00ec7e7\" -%}\n{%- set symptomOnset = repliesMap[symptomOnset__path]|reply_str_value -%}\n{#- Admission date at this facility [value-date] -#}\n{%- set admissionDate__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.cebc9c1c-d449-4106-9c74-33aa63b55b1a\" -%}\n{%- set admissionDate = repliesMap[admissionDate__path]|reply_str_value -%}\n{#- Temperature [°C] [value-number] -#}\n{%- set admissionTemperature__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.58d588ac-e95c-49a0-a715-9d734e752f55\" -%}\n{%- set admissionTemperature = repliesMap[admissionTemperature__path]|reply_str_value -%}\n{#- Heart rate [beats/min] [value-number] -#}\n{%- set admissionHeartRate__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.0744ec5d-ac46-42ea-95db-3e1d694bcc74\" -%}\n{%- set admissionHeartRate = repliesMap[admissionHeartRate__path]|reply_str_value -%}\n{#- Respiratory rate [breaths/min] [value-number] -#}\n{%- set admissionRespiratoryRate__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.e5330559-5c01-43b5-a809-f7ce8cfd73d4\" -%}\n{%- set admissionRespiratoryRate = repliesMap[admissionRespiratoryRate__path]|reply_str_value -%}\n{#- Blood preassure (systolic) [mmHg] [value-number] -#}\n{%- set admissionBPSystolic__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.e0d2fba0-0ebe-475d-a7f3-400f71ab232b\" -%}\n{%- set admissionBPSystolic = repliesMap[admissionBPSystolic__path]|reply_str_value -%}\n{#- Blood preassure (diastolic) [mmHg] [value-number] -#}\n{%- set admissionBPDiastolic__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.c202b0c8-2d5d-4632-a90b-bccb2e13a85b\" -%}\n{%- set admissionBPDiastolic = repliesMap[admissionBPDiastolic__path]|reply_str_value -%}\n{#- Severe dehydration [yes-no-unknown] -#}\n{%- set admissionDehydration__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.efc64449-7704-4a2f-b77d-fa183fe38083\" -%}\n{%- set admissionDehydration = repliesMap[admissionDehydration__path]|reply_str_value -%}\n{%- set admissionDehydration_yes = \"0f3a3c4f-cfcb-4197-9274-4dabee47cb98\" -%}\n{%- set admissionDehydration_no = \"9fa0feca-6620-4ed0-8114-eb3c20fd378d\" -%}\n{%- set admissionDehydration_unknown = \"139e0c21-ee23-4909-b5d1-362aabfe8769\" -%}\n{#- Sternal capillary refill time >2seconds [yes-no-unknown] -#}\n{%- set admissionSternalRefill__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.200abd9f-ca35-4351-b319-48d2d35b9f3c\" -%}\n{%- set admissionSternalRefill = repliesMap[admissionSternalRefill__path]|reply_str_value -%}\n{%- set admissionSternalRefill_yes = \"3df7fa13-879c-44aa-a334-93c370f70013\" -%}\n{%- set admissionSternalRefill_no = \"feb26217-b49a-4754-9400-80cea285480d\" -%}\n{%- set admissionSternalRefill_unknown = \"c2c0be67-2729-49f0-854c-2275e0397c1f\" -%}\n{#- Oxygen saturation (value) [%] [value-number] -#}\n{%- set admissionOxygenSatValue__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.e398c054-b607-49b0-ba77-0bcdbbace0eb\" -%}\n{%- set admissionOxygenSatValue = repliesMap[admissionOxygenSatValue__path]|reply_str_value -%}\n{#- Oxygen saturation (condition) [options] -#}\n{%- set admissionOxygenSatCond__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.b429e291-f268-4125-a1ef-04c5c272107b\" -%}\n{%- set admissionOxygenSatCond = repliesMap[admissionOxygenSatCond__path]|reply_str_value -%}\n{%- set admissionOxygenSatCond_Room = \"db9d0176-910a-44a4-bf6e-c12db004c578\" -%}\n{%- set admissionOxygenSatCond_Therapy = \"8b1aea52-f1c9-4fe2-bae9-1b37357e88d2\" -%}\n{%- set admissionOxygenSatCond_Unknown = \"a70f6543-0362-4973-8707-18728a56017f\" -%}\n{#- AVPU scale [options] -#}\n{%- set admissionAVPU__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.9e5e4f5e-75be-40e9-a4df-31e173cfc65d\" -%}\n{%- set admissionAVPU = repliesMap[admissionAVPU__path]|reply_str_value -%}\n{%- set admissionAVPU_A = \"c4e3bce3-7ce4-4b6c-a970-637b86456e96\" -%}\n{%- set admissionAVPU_V = \"a7c6d958-2a46-4dae-9ec3-3321ff4e1fce\" -%}\n{%- set admissionAVPU_P = \"66e3169c-335f-4ca6-b045-cd48a2af378a\" -%}\n{%- set admissionAVPU_U = \"f3adf425-e2a0-4c46-8fd4-94e02c4c889e\" -%}\n{#- Glasgow Coma Score (GCS/15) [value-number] -#}\n{%- set admissionGCS__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.ed4c987c-04ac-4301-bcf7-7a9a3f4aa664\" -%}\n{%- set admissionGCS = repliesMap[admissionGCS__path]|reply_str_value -%}\n{#- Malnutrition [yes-no-unknown] -#}\n{%- set admissionMalnutrition__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.01f45192-1c2a-470a-af6c-77d6a926aee4\" -%}\n{%- set admissionMalnutrition = repliesMap[admissionMalnutrition__path]|reply_str_value -%}\n{%- set admissionMalnutrition_yes = \"9b32884e-7057-449c-b9dc-70e2bde3948f\" -%}\n{%- set admissionMalnutrition_no = \"d32d0d28-a0ce-451a-830d-5cd414bfd963\" -%}\n{%- set admissionMalnutrition_unknown = \"03d40ec1-3384-4d77-929f-820f4499cb6d\" -%}\n{#- Mid-upper arm circumference [mm] [value-number] -#}\n{%- set admissionCircumeference__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.e5cbc24e-6614-44a3-b5a6-feb83b874623\" -%}\n{%- set admissionCircumeference = repliesMap[admissionCircumeference__path]|reply_str_value -%}\n{#- Height [cm] [value-number] -#}\n{%- set admissionHeight__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.55fd2449-9cfd-4d0c-81a9-5935bffd3e3a\" -%}\n{%- set admissionHeight = repliesMap[admissionHeight__path]|reply_str_value -%}\n{#- Weight [kg] [value-number] -#}\n{%- set admissionWeight__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.5c729c8c-b9cb-4ae3-9bf3-65d3500d18cd.057b3eed-6765-4d0c-9478-825d20004aba.d01bc5be-5f11-4385-a9be-cc78a660f333\" -%}\n{%- set admissionWeight = repliesMap[admissionWeight__path]|reply_str_value -%}\n{#- Co-morbidities [section] -#}\n{%- set comorbidities__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d\" -%}\n{%- set comorbidities = repliesMap[comorbidities__path]|reply_str_value -%}\n{%- set comorbidities_open = \"e0e2d965-3d36-4a1d-8d8e-08a96676045c\" -%}\n{#- Chronic cardiac disease [yes-no-unknown] -#}\n{%- set comorbChronicCardiac__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.90832de0-f7b1-4dce-b2d9-4d1234c308db\" -%}\n{%- set comorbChronicCardiac = repliesMap[comorbChronicCardiac__path]|reply_str_value -%}\n{%- set comorbChronicCardiac_yes = \"a3aa7cf7-4c2f-4643-97a2-1674d18cd082\" -%}\n{%- set comorbChronicCardiac_no = \"c8bce58c-e7f2-4eef-932a-e891be4d502f\" -%}\n{%- set comorbChronicCardiac_unknown = \"d286de28-e41a-458e-b1c4-0e398ea27577\" -%}\n{#- Hypertension [yes-no-unknown] -#}\n{%- set comorbHypertension__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.45b34f4e-6f9e-4c7b-8bac-67c021f38c74\" -%}\n{%- set comorbHypertension = repliesMap[comorbHypertension__path]|reply_str_value -%}\n{%- set comorbHypertension_yes = \"01234067-790a-47fc-bd67-e2c476f6ecb5\" -%}\n{%- set comorbHypertension_no = \"8e1501b1-62ca-46e9-8250-6feead7001c6\" -%}\n{%- set comorbHypertension_unknown = \"a7e192a0-1133-4d53-b3e0-3154420fb693\" -%}\n{#- Chronic pulmonary disease [yes-no-unknown] -#}\n{%- set comorbChronicPulmonary__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.a6034c61-4413-48b9-8907-7d0a2fe442db\" -%}\n{%- set comorbChronicPulmonary = repliesMap[comorbChronicPulmonary__path]|reply_str_value -%}\n{%- set comorbChronicPulmonary_yes = \"e402bdf3-cd49-464b-8f34-b94d728074c2\" -%}\n{%- set comorbChronicPulmonary_no = \"67238929-755c-4ad0-8f3f-282d04051e89\" -%}\n{%- set comorbChronicPulmonary_unknown = \"6a6703d7-123a-4029-8d76-a1942cd7a2b9\" -%}\n{#- Asthma [yes-no-unknown] -#}\n{%- set comorbAsthma__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.89d344a0-5c87-45ed-8b04-6f6e2f4f1541\" -%}\n{%- set comorbAsthma = repliesMap[comorbAsthma__path]|reply_str_value -%}\n{%- set comorbAsthma_yes = \"1ba5a177-7b0d-4f00-989a-a0e26bb30b45\" -%}\n{%- set comorbAsthma_no = \"646244d1-da69-429f-a436-feb99ddc4932\" -%}\n{%- set comorbAsthma_unknown = \"bded8755-baa0-4ffd-b356-af642786c5e3\" -%}\n{#- Chronic kidney disease [yes-no-unknown] -#}\n{%- set comorbChronicKidney__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.91840e25-395f-4667-b12b-b4328985ce4a\" -%}\n{%- set comorbChronicKidney = repliesMap[comorbChronicKidney__path]|reply_str_value -%}\n{%- set comorbChronicKidney_yes = \"b2827b20-99ae-4e6a-9a20-f535f785c2b9\" -%}\n{%- set comorbChronicKidney_no = \"4591c9e4-6326-44c3-8041-49e7c05dea7b\" -%}\n{%- set comorbChronicKidney_unknown = \"a15cd180-93f9-4b94-a232-62a41f84a1b5\" -%}\n{#- Chronic liver disease [yes-no-unknown] -#}\n{%- set comorbChronicLiver__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.8af3da09-5ff8-47a9-9893-58deb8024736\" -%}\n{%- set comorbChronicLiver = repliesMap[comorbChronicLiver__path]|reply_str_value -%}\n{%- set comorbChronicLiver_yes = \"d6778720-0988-4342-b4fa-36b01f537069\" -%}\n{%- set comorbChronicLiver_no = \"e7c9a47b-e0d5-41cf-a84b-1ece0bd2a178\" -%}\n{%- set comorbChronicLiver_unknown = \"269b0647-6989-46bc-9ee5-2134a7648ab8\" -%}\n{#- Chronic neurological disorder [yes-no-unknown] -#}\n{%- set comorbChronicNeuro__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.08d835b2-0ccb-44f8-ac6c-5479fe5f973c\" -%}\n{%- set comorbChronicNeuro = repliesMap[comorbChronicNeuro__path]|reply_str_value -%}\n{%- set comorbChronicNeuro_yes = \"a6e308c4-9c93-4757-80d6-c3b82d81858f\" -%}\n{%- set comorbChronicNeuro_no = \"f06a5ae0-00d5-4ec1-b098-431343acfb83\" -%}\n{%- set comorbChronicNeuro_unknown = \"cc0eb420-12d9-4b1f-a03d-a9c00ea25578\" -%}\n{#- HIV [options] -#}\n{%- set comorbHIV__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.1e48575c-57b4-4e98-ad5f-183fd78487ae\" -%}\n{%- set comorbHIV = repliesMap[comorbHIV__path]|reply_str_value -%}\n{%- set comorbHIV_YesART = \"7594ef7d-b07c-4522-ad87-a1ef1b50015c\" -%}\n{%- set comorbHIV_YesNoART = \"db7b3f3a-314b-4561-b447-76397391c149\" -%}\n{%- set comorbHIV_No = \"f41bc1f4-422d-4472-bbe7-1a0b242be100\" -%}\n{%- set comorbHIV_Unknown = \"aa13ce4e-4307-4354-8682-b0ace38a4f1f\" -%}\n{#- Diabetes [yes-no-unknown] -#}\n{%- set comorbDiabetes__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.cb1c180b-cd48-4385-9e27-06583ac0fc1b\" -%}\n{%- set comorbDiabetes = repliesMap[comorbDiabetes__path]|reply_str_value -%}\n{%- set comorbDiabetes_yes = \"8617d2c4-143f-4821-86a1-1d0977677e96\" -%}\n{%- set comorbDiabetes_no = \"ad49120e-b81b-4813-b876-ed0bb77005a8\" -%}\n{%- set comorbDiabetes_unknown = \"72fb506a-aecf-4d72-9976-acd56fa8165f\" -%}\n{#- Current smoking [yes-no-unknown] -#}\n{%- set comorbSmoking__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.1887f4a6-4493-4d01-a2a1-957554056647\" -%}\n{%- set comorbSmoking = repliesMap[comorbSmoking__path]|reply_str_value -%}\n{%- set comorbSmoking_yes = \"379d869b-38ba-40c2-930c-3016472c9b87\" -%}\n{%- set comorbSmoking_no = \"6254c8ef-2f7c-47a4-ac3f-0d4cb9fe1a4b\" -%}\n{%- set comorbSmoking_unknown = \"1a0425be-91ef-4dfa-825d-e711c159eb74\" -%}\n{#- Tuberculosis [yes-no-unknown] -#}\n{%- set comorbTuberculosis__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.0a619660-760b-433f-9e25-9f76e39fd984\" -%}\n{%- set comorbTuberculosis = repliesMap[comorbTuberculosis__path]|reply_str_value -%}\n{%- set comorbTuberculosis_yes = \"1b1ce0ef-bd02-4f66-84c1-892384de4b3a\" -%}\n{%- set comorbTuberculosis_no = \"af883e01-b2b6-4039-b8d8-37b1371ea788\" -%}\n{%- set comorbTuberculosis_unknown = \"3b7cb62e-18ca-447e-97c6-b326739bf0d9\" -%}\n{#- Asplenia [yes-no-unknown] -#}\n{%- set comorbAsplenia__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.16eb9398-cf6d-4341-9435-828e4acfa25a\" -%}\n{%- set comorbAsplenia = repliesMap[comorbAsplenia__path]|reply_str_value -%}\n{%- set comorbAsplenia_yes = \"22fc76e8-0000-48f5-85e9-e1e0b820d745\" -%}\n{%- set comorbAsplenia_no = \"6de0110b-d0e6-4843-b28f-e5668e542541\" -%}\n{%- set comorbAsplenia_unknown = \"9bf96c41-fd20-4181-a1d7-a438dbb9a7da\" -%}\n{#- Other [options] -#}\n{%- set comorbOther__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.4dc4fab5-7e5b-4d32-a255-02eabe35c353\" -%}\n{%- set comorbOther = repliesMap[comorbOther__path]|reply_str_value -%}\n{%- set comorbOther_yes = \"1b07bdfb-6f40-469b-a83f-932b93323918\" -%}\n{%- set comorbOther_no = \"03343ad1-052d-4e56-a0bd-7a51d7924348\" -%}\n{%- set comorbOther_unknown = \"fc0c44a0-1886-4f2d-8f6f-26a9f078d260\" -%}\n{#- Specify [value-string] -#}\n{%- set comorbOtherSpecify__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.b3b7fd3f-77db-490e-b3a6-0c450974f89d.e0e2d965-3d36-4a1d-8d8e-08a96676045c.4dc4fab5-7e5b-4d32-a255-02eabe35c353.1b07bdfb-6f40-469b-a83f-932b93323918.4a6aeff4-7244-412a-b6ad-b0e350b0d7dc\" -%}\n{%- set comorbOtherSpecify = repliesMap[comorbOtherSpecify__path]|reply_str_value -%}\n{#- Pre-admission & chronic medication [section] -#}\n{%- set preadmission__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.0ae9f3eb-4e3e-4a81-b0f6-0988e61b0900\" -%}\n{%- set preadmission = repliesMap[preadmission__path]|reply_str_value -%}\n{%- set preadmission_open = \"e238737e-f2c8-4f04-94f6-fe017cabf99d\" -%}\n{#- Angiotensin converting enzyme inhibitors (ACE inhibitors)? [yes-no-unknown] -#}\n{%- set preadmissionACE__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.0ae9f3eb-4e3e-4a81-b0f6-0988e61b0900.e238737e-f2c8-4f04-94f6-fe017cabf99d.7f65741e-1a04-4671-bf00-42955d05f640\" -%}\n{%- set preadmissionACE = repliesMap[preadmissionACE__path]|reply_str_value -%}\n{%- set preadmissionACE_yes = \"7dc46104-c828-4e7f-aec8-0e63e5d86d7d\" -%}\n{%- set preadmissionACE_no = \"38f012b9-c3d6-4e97-b672-b2bc6f43d39a\" -%}\n{%- set preadmissionACE_unknown = \"04a76496-1c89-4af4-8338-4aec268c0fc8\" -%}\n{#- Angiotensin II receptor blockers (ARBs)? [yes-no-unknown] -#}\n{%- set preadmissionARBs__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.0ae9f3eb-4e3e-4a81-b0f6-0988e61b0900.e238737e-f2c8-4f04-94f6-fe017cabf99d.fd5c595c-ff3c-4408-b55c-7a759d76363e\" -%}\n{%- set preadmissionARBs = repliesMap[preadmissionARBs__path]|reply_str_value -%}\n{%- set preadmissionARBs_yes = \"1c96900e-cf6d-4260-81d9-171b4b552b07\" -%}\n{%- set preadmissionARBs_no = \"d319165e-40cf-4a0b-a409-158bbb080e12\" -%}\n{%- set preadmissionARBs_unknown = \"4b8a0f95-1772-4067-b537-00904133d521\" -%}\n{#- Non-steroidal anti-inflammatory (NSAID)? [yes-no-unknown] -#}\n{%- set preadmissionNSAID__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.0ae9f3eb-4e3e-4a81-b0f6-0988e61b0900.e238737e-f2c8-4f04-94f6-fe017cabf99d.b27db3b4-8c6f-4fae-a24f-9f68b2680b87\" -%}\n{%- set preadmissionNSAID = repliesMap[preadmissionNSAID__path]|reply_str_value -%}\n{%- set preadmissionNSAID_yes = \"8d59d2cd-95a9-4c49-ad3b-e4d5bf2a0068\" -%}\n{%- set preadmissionNSAID_no = \"af9660c4-8a67-4a70-8462-85fbbdae589d\" -%}\n{%- set preadmissionNSAID_unknown = \"e7d405c1-4721-4d85-8d63-18ffa2fe72e9\" -%}\n{#- Antiviral? [options] -#}\n{%- set preadmissionAntiviral__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.0ae9f3eb-4e3e-4a81-b0f6-0988e61b0900.e238737e-f2c8-4f04-94f6-fe017cabf99d.f138dfc3-a90c-42fa-997d-e10381d89de6\" -%}\n{%- set preadmissionAntiviral = repliesMap[preadmissionAntiviral__path]|reply_str_value -%}\n{%- set preadmissionAntiviral_Chloroquine = \"438d150b-6aaf-4112-bae8-54539d82821e\" -%}\n{%- set preadmissionAntiviral_Azithromycin = \"a74bc497-09c4-4806-a49b-ba7fc73d488b\" -%}\n{%- set preadmissionAntiviral_Kaletra = \"e2dad33c-fe55-4957-93e1-00e45a83c03e\" -%}\n{%- set preadmissionAntiviral_Favipiravir = \"26ca1042-084c-4d94-a43b-b6bc46a14b9e\" -%}\n{%- set preadmissionAntiviral_Other = \"5c072bc9-bbab-406d-905b-10989a5d6715\" -%}\n{#- Specify [value-string] -#}\n{%- set preadmissionAntiviral_OtherText__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.0ae9f3eb-4e3e-4a81-b0f6-0988e61b0900.e238737e-f2c8-4f04-94f6-fe017cabf99d.f138dfc3-a90c-42fa-997d-e10381d89de6.5c072bc9-bbab-406d-905b-10989a5d6715.dedb1a08-0a88-444f-8afd-bbcc9b03e25e\" -%}\n{%- set preadmissionAntiviral_OtherText = repliesMap[preadmissionAntiviral_OtherText__path]|reply_str_value -%}\n{#- Sings and symptoms on admission [section] -#}\n{%- set admissionSigns__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09\" -%}\n{%- set admissionSigns = repliesMap[admissionSigns__path]|reply_str_value -%}\n{%- set admissionSigns_open = \"8ac75cea-2076-4b5d-8c6a-079d8dca2e00\" -%}\n{#- History of fever [yes-no-unknown] -#}\n{%- set admissionSignsFever__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.54cc2e1e-0e7b-4828-a8a8-169570f19e1c\" -%}\n{%- set admissionSignsFever = repliesMap[admissionSignsFever__path]|reply_str_value -%}\n{%- set admissionSignsFever_yes = \"adce433a-7a0f-4814-9f60-aa6e4e2640e9\" -%}\n{%- set admissionSignsFever_no = \"7817c0a3-c8d3-4217-a36b-5b4233b5bd53\" -%}\n{%- set admissionSignsFever_unknown = \"f0714000-fe4e-4d36-903c-20553dcab836\" -%}\n{#- Cough [options] -#}\n{%- set admissionSignsCough__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.201240fe-2439-40e2-bf41-0030a7dab076\" -%}\n{%- set admissionSignsCough = repliesMap[admissionSignsCough__path]|reply_str_value -%}\n{%- set admissionSignsCough_yes = \"e63f444f-3e22-44ed-98e4-3a23cde702ad\" -%}\n{%- set admissionSignsCough_no = \"4867e07b-19ee-4636-87e1-44da6c8cf641\" -%}\n{%- set admissionSignsCough_unknown = \"e025b1f9-c5f2-4afa-9010-62889ae5ceb3\" -%}\n{#- Cough with sputum production [yes-no-unknown] -#}\n{%- set admissionSignsCoughSputum__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.201240fe-2439-40e2-bf41-0030a7dab076.e63f444f-3e22-44ed-98e4-3a23cde702ad.a09238fd-7fda-480b-91f2-9b67a482836a\" -%}\n{%- set admissionSignsCoughSputum = repliesMap[admissionSignsCoughSputum__path]|reply_str_value -%}\n{%- set admissionSignsCoughSputum_yes = \"50a41b35-d89b-45d6-b558-b887b4598f75\" -%}\n{%- set admissionSignsCoughSputum_no = \"66c6f659-9bfe-4834-a32c-083589f3ad4c\" -%}\n{%- set admissionSignsCoughSputum_unknown = \"39a115ac-a64e-47cd-8a90-032c0d46cb1c\" -%}\n{#- Cough with haemoptysis [yes-no-unknown] -#}\n{%- set admissionSignsCoughHaemoptysis__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.201240fe-2439-40e2-bf41-0030a7dab076.e63f444f-3e22-44ed-98e4-3a23cde702ad.93014a3b-cb8a-44a4-878a-3573f39bf757\" -%}\n{%- set admissionSignsCoughHaemoptysis = repliesMap[admissionSignsCoughHaemoptysis__path]|reply_str_value -%}\n{%- set admissionSignsCoughHaemoptysis_yes = \"380fe65d-48f3-4e8e-ac00-ebb663eaff4b\" -%}\n{%- set admissionSignsCoughHaemoptysis_no = \"7abc56a8-0285-42f0-b421-f5ada63f3fae\" -%}\n{%- set admissionSignsCoughHaemoptysis_unknown = \"5c4b143c-0b0a-4600-bed8-ae9557f1899a\" -%}\n{#- Sore throat [yes-no-unknown] -#}\n{%- set admissionSignsSoreThroat__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.ca1fef8e-73d7-4007-bcfc-e8cac4c69c0b\" -%}\n{%- set admissionSignsSoreThroat = repliesMap[admissionSignsSoreThroat__path]|reply_str_value -%}\n{%- set admissionSignsSoreThroat_yes = \"e7edab9d-fd08-49fe-831b-f8dcaff5dd0b\" -%}\n{%- set admissionSignsSoreThroat_no = \"ba5c377e-59ab-4dcd-99b6-01269f4303bb\" -%}\n{%- set admissionSignsSoreThroat_unknown = \"5f7bed0a-635f-49b1-b5a0-2078ad65ac19\" -%}\n{#- Runny nose (rhinorrhoea) [yes-no-unknown] -#}\n{%- set admissionSignsRhinorrhoea__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.7c4e7db0-4654-4f9c-9de7-fd2b32063f09\" -%}\n{%- set admissionSignsRhinorrhoea = repliesMap[admissionSignsRhinorrhoea__path]|reply_str_value -%}\n{%- set admissionSignsRhinorrhoea_yes = \"00749001-4427-495e-9454-522678c29c52\" -%}\n{%- set admissionSignsRhinorrhoea_no = \"5a32475b-4759-4c6a-aadc-c558b6ab38b4\" -%}\n{%- set admissionSignsRhinorrhoea_unknown = \"241272c5-5fe7-4f1f-860c-51331ad2ac65\" -%}\n{#- Wheezing [yes-no-unknown] -#}\n{%- set admissionSignsWheezing__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.1fe1b249-d966-404b-99da-72673dd91710\" -%}\n{%- set admissionSignsWheezing = repliesMap[admissionSignsWheezing__path]|reply_str_value -%}\n{%- set admissionSignsWheezing_yes = \"e86f1fd3-56c1-425e-bf70-fb7e2dbfae9a\" -%}\n{%- set admissionSignsWheezing_no = \"09b01797-8d6c-4ce0-893f-acacde76d31d\" -%}\n{%- set admissionSignsWheezing_unknown = \"17554731-ba33-4a5e-9317-c4c409cc8412\" -%}\n{#- Chest pain [yes-no-unknown] -#}\n{%- set admissionSignsChestPain__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.78a5cf06-4166-4684-a6c8-87d68e688996\" -%}\n{%- set admissionSignsChestPain = repliesMap[admissionSignsChestPain__path]|reply_str_value -%}\n{%- set admissionSignsChestPain_yes = \"3b9d3ef1-def6-4b3a-98a2-f05cfa8e76bb\" -%}\n{%- set admissionSignsChestPain_no = \"3a6ef495-6cc9-4430-9467-8090fffef75f\" -%}\n{%- set admissionSignsChestPain_unknown = \"ffdb8d14-7758-4da5-938a-c98b271ab727\" -%}\n{#- Muscle aches (myalgia) [yes-no-unknown] -#}\n{%- set admissionSignsMyalgia__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.417ef8f1-2f18-4c8f-8f60-c5bfc7f5d6e0\" -%}\n{%- set admissionSignsMyalgia = repliesMap[admissionSignsMyalgia__path]|reply_str_value -%}\n{%- set admissionSignsMyalgia_yes = \"c9e5c06c-95a3-407c-9ec5-07b733c45773\" -%}\n{%- set admissionSignsMyalgia_no = \"26b7ca1e-6d50-41f1-8081-418deac60aa5\" -%}\n{%- set admissionSignsMyalgia_unknown = \"b78b4801-9267-443c-a326-3b05d6f85ffd\" -%}\n{#- Joint pain (arthralgia) [yes-no-unknown] -#}\n{%- set admissionSignsArthralgia__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.e0b579bd-59a6-4750-bc9d-bff5012e773b\" -%}\n{%- set admissionSignsArthralgia = repliesMap[admissionSignsArthralgia__path]|reply_str_value -%}\n{%- set admissionSignsArthralgia_yes = \"7f4ec111-5520-417e-a717-344733615e80\" -%}\n{%- set admissionSignsArthralgia_no = \"a2fd928c-b696-4f9d-aefb-8af88da16048\" -%}\n{%- set admissionSignsArthralgia_unknown = \"8dc43190-9729-4420-bf85-2f9177ec49f8\" -%}\n{#- Fatigue / Malaise [yes-no-unknown] -#}\n{%- set admissionSignsFatigue__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.0fb19c84-4f88-4dd9-8767-b04e0beb4adc\" -%}\n{%- set admissionSignsFatigue = repliesMap[admissionSignsFatigue__path]|reply_str_value -%}\n{%- set admissionSignsFatigue_yes = \"d4ed37ad-3ca3-486f-867b-ea8fb88a2d68\" -%}\n{%- set admissionSignsFatigue_no = \"8c9e7da1-e008-4bd4-9495-65c59ccb8790\" -%}\n{%- set admissionSignsFatigue_unknown = \"1163b5ff-bb7e-4c22-bc54-18f16a8e198a\" -%}\n{#- Loss of taste [yes-no-unknown] -#}\n{%- set admissionSignsLossTaste__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.2ed6437e-89d1-47f0-9f07-4f7d84c0a1d9\" -%}\n{%- set admissionSignsLossTaste = repliesMap[admissionSignsLossTaste__path]|reply_str_value -%}\n{%- set admissionSignsLossTaste_yes = \"20eec76f-f87d-4dc7-a8cd-533b6b5bf02a\" -%}\n{%- set admissionSignsLossTaste_no = \"c9fcb73a-bf31-4458-ae2d-12679a7586ff\" -%}\n{%- set admissionSignsLossTaste_unknown = \"cb6d2c75-4f1e-4f1f-bdcd-5247831b557f\" -%}\n{#- Loss of smell [yes-no-unknown] -#}\n{%- set admissionSignsLossSmell__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.75482665-0ab7-43ae-aadb-eb6225ddae4b\" -%}\n{%- set admissionSignsLossSmell = repliesMap[admissionSignsLossSmell__path]|reply_str_value -%}\n{%- set admissionSignsLossSmell_yes = \"0f80da6b-3ecb-42b5-84b7-1d8ca178fdb5\" -%}\n{%- set admissionSignsLossSmell_no = \"41b1f361-9712-4178-a742-3a608d4cc9e8\" -%}\n{%- set admissionSignsLossSmell_unknown = \"171ecc54-2eca-463c-b0d7-b3f317e925f1\" -%}\n{#- Shortness of breath [yes-no-unknown] -#}\n{%- set admissionSignsBreathShortness__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.1515aa84-a23e-4ca8-931b-af6d5d2d5821\" -%}\n{%- set admissionSignsBreathShortness = repliesMap[admissionSignsBreathShortness__path]|reply_str_value -%}\n{%- set admissionSignsBreathShortness_yes = \"e00ab4be-4072-43e4-8a41-66bf1ccfb9d2\" -%}\n{%- set admissionSignsBreathShortness_no = \"298881a2-e912-45e7-be92-026966b1e779\" -%}\n{%- set admissionSignsBreathShortness_unknown = \"7f018e9e-240b-42f5-9612-ce6896563f61\" -%}\n{#- Inability to walk [yes-no-unknown] -#}\n{%- set admissionSignsInableWalk__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.6e51ccd1-b521-4038-9d02-16e144027cda\" -%}\n{%- set admissionSignsInableWalk = repliesMap[admissionSignsInableWalk__path]|reply_str_value -%}\n{%- set admissionSignsInableWalk_yes = \"83006105-36b4-4496-b878-671698f24f8c\" -%}\n{%- set admissionSignsInableWalk_no = \"76516e45-49ac-4077-8f03-dffdbc437d96\" -%}\n{%- set admissionSignsInableWalk_unknown = \"a95a264f-304a-49e7-a700-41d77d5b6ab0\" -%}\n{#- Lower chest wall indrawing [yes-no-unknown] -#}\n{%- set admissionSignsLowerChest__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.68cc3ffd-a796-47f9-95a1-51719e6f3fc3\" -%}\n{%- set admissionSignsLowerChest = repliesMap[admissionSignsLowerChest__path]|reply_str_value -%}\n{%- set admissionSignsLowerChest_yes = \"ead9665a-acd8-4a52-b4a5-1ec777260965\" -%}\n{%- set admissionSignsLowerChest_no = \"80279223-f683-4f34-ab52-6eb44a3efb06\" -%}\n{%- set admissionSignsLowerChest_unknown = \"23b18beb-c05d-426e-b49c-72c7cd226be3\" -%}\n{#- Headache [yes-no-unknown] -#}\n{%- set admissionSignsHeadache__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.f4ec39cf-bbd1-4ed4-b289-bca2a622805b\" -%}\n{%- set admissionSignsHeadache = repliesMap[admissionSignsHeadache__path]|reply_str_value -%}\n{%- set admissionSignsHeadache_yes = \"c4e8afb1-aee9-4dd1-900f-d0d9805f19ec\" -%}\n{%- set admissionSignsHeadache_no = \"a92f2733-1ba5-4e0f-add5-a70b9e8df883\" -%}\n{%- set admissionSignsHeadache_unknown = \"b0298861-809d-4927-88e7-00d9d57f6940\" -%}\n{#- Confusion [yes-no-unknown] -#}\n{%- set admissionSignsConfusion__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.29ac9ec8-377f-46cc-af16-d56932f132b2\" -%}\n{%- set admissionSignsConfusion = repliesMap[admissionSignsConfusion__path]|reply_str_value -%}\n{%- set admissionSignsConfusion_yes = \"adfc5305-e478-49bb-845a-2aafe9b5548a\" -%}\n{%- set admissionSignsConfusion_no = \"bfa3142a-3fe2-49a1-813d-58707262956d\" -%}\n{%- set admissionSignsConfusion_unknown = \"12670246-379a-46c3-a377-dde13241a99b\" -%}\n{#- Seizures [yes-no-unknown] -#}\n{%- set admissionSignsSeizures__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.9019efc9-a46f-482c-bbb4-8e243801e39a\" -%}\n{%- set admissionSignsSeizures = repliesMap[admissionSignsSeizures__path]|reply_str_value -%}\n{%- set admissionSignsSeizures_yes = \"6a64b051-16c4-45f6-98d2-65061b5a78e4\" -%}\n{%- set admissionSignsSeizures_no = \"b17f8db3-d534-4df5-81ed-93ab33ce6dda\" -%}\n{%- set admissionSignsSeizures_unknown = \"337ef8e8-98ac-4117-a9dc-8bf1bede19ec\" -%}\n{#- Abdominal pain [yes-no-unknown] -#}\n{%- set admissionSignsAbdominalPain__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.9842830d-f2ee-4c4d-af7e-1b966ab28c43\" -%}\n{%- set admissionSignsAbdominalPain = repliesMap[admissionSignsAbdominalPain__path]|reply_str_value -%}\n{%- set admissionSignsAbdominalPain_yes = \"b33a76ed-eeca-40da-833c-067ea93482d7\" -%}\n{%- set admissionSignsAbdominalPain_no = \"3fbc5773-bb2b-4909-96eb-91acd5256616\" -%}\n{%- set admissionSignsAbdominalPain_unknown = \"ea86e9ca-81e0-4ead-b0f2-86d65d853f6e\" -%}\n{#- Vomiting / Nausea [yes-no-unknown] -#}\n{%- set admissionSignsVomiting__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.a3afe29e-b3cd-4ff7-9d5c-d3619f7e56bd\" -%}\n{%- set admissionSignsVomiting = repliesMap[admissionSignsVomiting__path]|reply_str_value -%}\n{%- set admissionSignsVomiting_yes = \"eb1be303-5788-4de6-a307-8a73d2fca867\" -%}\n{%- set admissionSignsVomiting_no = \"119c7803-7acc-49d8-ae91-1e30e638b557\" -%}\n{%- set admissionSignsVomiting_unknown = \"7365562e-0425-4bd9-90b3-8f0c884710dc\" -%}\n{#- Diarrhoea [yes-no-unknown] -#}\n{%- set admissionSignsDiarrhoea__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.c4f0b4df-f711-4855-9aac-cbf6e914dd61\" -%}\n{%- set admissionSignsDiarrhoea = repliesMap[admissionSignsDiarrhoea__path]|reply_str_value -%}\n{%- set admissionSignsDiarrhoea_yes = \"47e1a524-1744-4c24-918a-68f468630585\" -%}\n{%- set admissionSignsDiarrhoea_no = \"c5c2e887-2016-4ea3-9d78-f04bb41d37d2\" -%}\n{%- set admissionSignsDiarrhoea_unknown = \"06364f74-731b-45e1-9a96-ef6464586daf\" -%}\n{#- Conjunctivitis [yes-no-unknown] -#}\n{%- set admissionSignsConjunctivitis__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.bb6b1460-bd10-4740-b870-1ed4b2740a2a\" -%}\n{%- set admissionSignsConjunctivitis = repliesMap[admissionSignsConjunctivitis__path]|reply_str_value -%}\n{%- set admissionSignsConjunctivitis_yes = \"419615ee-f845-4d82-ae69-28f39be922a9\" -%}\n{%- set admissionSignsConjunctivitis_no = \"7289f93b-82b0-477d-aea8-bb25f4220a89\" -%}\n{%- set admissionSignsConjunctivitis_unknown = \"1001ddba-df2d-49c1-a4bc-8c69b7915760\" -%}\n{#- Skin rash [yes-no-unknown] -#}\n{%- set admissionSignsSkinRash__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.10c8109f-c6ac-4e0f-98bd-85ba0b10ceaf\" -%}\n{%- set admissionSignsSkinRash = repliesMap[admissionSignsSkinRash__path]|reply_str_value -%}\n{%- set admissionSignsSkinRash_yes = \"c82f6534-c1b7-46c1-be5f-c1e289d3a5f3\" -%}\n{%- set admissionSignsSkinRash_no = \"f1dd9fe5-d98e-4dfd-a237-954d5a9823ce\" -%}\n{%- set admissionSignsSkinRash_unknown = \"f4d137cc-ec97-44bc-a92d-c1345893e16c\" -%}\n{#- Skin ulcers [yes-no-unknown] -#}\n{%- set admissionSignsSkinUlcers__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.2ca53d30-8ffd-480c-b9cb-5be4b73d8b54\" -%}\n{%- set admissionSignsSkinUlcers = repliesMap[admissionSignsSkinUlcers__path]|reply_str_value -%}\n{%- set admissionSignsSkinUlcers_yes = \"73d7afd1-b82d-4994-936e-cd778a2166da\" -%}\n{%- set admissionSignsSkinUlcers_no = \"3018b05f-2f76-46c6-8efd-38c71c500d4f\" -%}\n{%- set admissionSignsSkinUlcers_unknown = \"f6cc878a-32ad-4368-b0e8-62c4bdbfbc22\" -%}\n{#- Lymphadenopathy [yes-no-unknown] -#}\n{%- set admissionSignsLymphadenopathy__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.f67dd438-63d0-4a49-8db6-402bf4abfb96\" -%}\n{%- set admissionSignsLymphadenopathy = repliesMap[admissionSignsLymphadenopathy__path]|reply_str_value -%}\n{%- set admissionSignsLymphadenopathy_yes = \"99239007-04f2-4343-a841-6d0ed8e4d20c\" -%}\n{%- set admissionSignsLymphadenopathy_no = \"feab2572-0e21-4e18-88aa-cee6192f5e10\" -%}\n{%- set admissionSignsLymphadenopathy_unknown = \"f00bd31c-7834-42a8-9306-6f414b47d544\" -%}\n{#- Bleeding (Haemorrhage) [options] -#}\n{%- set admissionHaemorrhage__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.7d60effb-357e-4495-a979-0e48dd3d1c48\" -%}\n{%- set admissionHaemorrhage = repliesMap[admissionHaemorrhage__path]|reply_str_value -%}\n{%- set admissionHaemorrhage_yes = \"a0824b00-b234-4842-adb5-8b0d6a3f4086\" -%}\n{%- set admissionHaemorrhage_no = \"7b5fc02d-8960-49e1-86ea-6496f68a174e\" -%}\n{%- set admissionHaemorrhage_unknown = \"4c53a82f-4910-4115-925f-dd55d2f2d7f1\" -%}\n{#- Specify site [value-string] -#}\n{%- set admissionHaemorrhageSpecify__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.7d60effb-357e-4495-a979-0e48dd3d1c48.a0824b00-b234-4842-adb5-8b0d6a3f4086.98e734c6-b57f-43c6-99a0-d4927dec699f\" -%}\n{%- set admissionHaemorrhageSpecify = repliesMap[admissionHaemorrhageSpecify__path]|reply_str_value -%}\n{#- Other [options] -#}\n{%- set admissionOther__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.4254a957-eb8d-458b-8e2b-31f1ab9a7b38\" -%}\n{%- set admissionOther = repliesMap[admissionOther__path]|reply_str_value -%}\n{%- set admissionOther_yes = \"1fcc9a22-172f-431a-931b-881986876b6a\" -%}\n{%- set admissionOther_no = \"593d93b6-3975-4dca-b0c6-229beb289735\" -%}\n{%- set admissionOther_unknown = \"4b55963c-fe0f-4145-9c2a-b5acf27b4115\" -%}\n{#- Specify [value-string] -#}\n{%- set admissionOtherSpecify__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.3cd993ff-eaa9-4d76-9497-efd085345e09.8ac75cea-2076-4b5d-8c6a-079d8dca2e00.4254a957-eb8d-458b-8e2b-31f1ab9a7b38.1fcc9a22-172f-431a-931b-881986876b6a.c067809d-10c0-4124-a94f-90312014ef2e\" -%}\n{%- set admissionOtherSpecify = repliesMap[admissionOtherSpecify__path]|reply_str_value -%}\n{#- Medication [section] -#}\n{%- set medication__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5\" -%}\n{%- set medication = repliesMap[medication__path]|reply_str_value -%}\n{%- set medication_open = \"dc11e59a-8f9a-4f80-999c-dd99b97d6efd\" -%}\n{#- Oral/orogastric fluids? [yes-no-unknown] -#}\n{%- set medicationOralFluids__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.817e85e3-9ae6-4c01-a71b-361d03cfe1d8\" -%}\n{%- set medicationOralFluids = repliesMap[medicationOralFluids__path]|reply_str_value -%}\n{%- set medicationOralFluids_yes = \"ebde89ac-8ff7-4a66-b63b-b498f2bdb191\" -%}\n{%- set medicationOralFluids_no = \"2c50e9ae-ad5c-47ba-8200-7e8f167dfa49\" -%}\n{%- set medicationOralFluids_unknown = \"bfd75bb8-17ad-4d2c-a94a-7102d59e1c85\" -%}\n{#- Intravenous fluids? [yes-no-unknown] -#}\n{%- set medicationIntravenousFluids__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.dc83c632-a6fe-4bba-b145-d44489e00128\" -%}\n{%- set medicationIntravenousFluids = repliesMap[medicationIntravenousFluids__path]|reply_str_value -%}\n{%- set medicationIntravenousFluids_yes = \"cba6b7d8-6d1b-46be-9c1d-537d1770d9cb\" -%}\n{%- set medicationIntravenousFluids_no = \"13df0b05-7619-4b73-b652-65c926a508dd\" -%}\n{%- set medicationIntravenousFluids_unknown = \"4ff863a3-adb0-4508-8b97-b15a5da78956\" -%}\n{#- Antiviral? [options] -#}\n{%- set medicationAntiviral__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.ba769bbb-8732-47aa-ba8a-3dac29f863b7\" -%}\n{%- set medicationAntiviral = repliesMap[medicationAntiviral__path]|reply_str_value -%}\n{%- set medicationAntiviral_yes = \"43568d29-68a5-4cec-9c1b-b7514a780f13\" -%}\n{%- set medicationAntiviral_no = \"0fb72e30-7c1b-4ffb-a20f-cc85dfeb63f2\" -%}\n{%- set medicationAntiviral_unknown = \"06da326f-5f03-42e8-9368-e4384726c434\" -%}\n{#- Specify [multichoice-list] -#}\n{%- set medicationAntiviralSpecifyN__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.ba769bbb-8732-47aa-ba8a-3dac29f863b7.43568d29-68a5-4cec-9c1b-b7514a780f13.7813486f-8ff0-4100-961a-c3a9cdc3707b\" -%}\n{%- set medicationAntiviralSpecifyN = repliesMap[medicationAntiviralSpecifyN__path]|reply_int_value -%}\n{#- Specify [multichoice-options] -#}\n{%- set medicationAntiviralSpecify__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.ba769bbb-8732-47aa-ba8a-3dac29f863b7.43568d29-68a5-4cec-9c1b-b7514a780f13.7813486f-8ff0-4100-961a-c3a9cdc3707b.index_$medicationAntiviralSpecify.5e655924-45dc-4e96-9f6d-63e17ad66188\" -%}\n{%- set medicationAntiviralSpecify = repliesMap[medicationAntiviralSpecify__path]|reply_str_value -%}\n{%- set medicationAntiviralSpecify_Ribavirin = \"13ca65d1-e66b-4a4b-ab5c-1045994bdf17\" -%}\n{%- set medicationAntiviralSpecify_Lopinavir = \"0929c9fd-fa11-41a1-b67c-6e201e400db3\" -%}\n{%- set medicationAntiviralSpecify_Inhibitor = \"14e3b712-4b20-43f4-b8ee-0bc26897f263\" -%}\n{%- set medicationAntiviralSpecify_IntAlpha = \"33b6e922-1712-4fd8-b79a-1d8a3e5b5961\" -%}\n{%- set medicationAntiviralSpecify_IntBeta = \"b571e015-01d5-4052-8731-e581c7605642\" -%}\n{%- set medicationAntiviralSpecify_Other = \"d53766e5-b1b1-456b-91ca-6958cb552cc8\" -%}\n{#- Specify [value-string] -#}\n{%- set medicationAntiviralSpecify_Other_Specify__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.ba769bbb-8732-47aa-ba8a-3dac29f863b7.43568d29-68a5-4cec-9c1b-b7514a780f13.7813486f-8ff0-4100-961a-c3a9cdc3707b.index_$medicationAntiviralSpecify.5e655924-45dc-4e96-9f6d-63e17ad66188.d53766e5-b1b1-456b-91ca-6958cb552cc8.b6063d01-25eb-4874-adbb-8130c0e5f069\" -%}\n{%- set medicationAntiviralSpecify_Other_Specify = repliesMap[medicationAntiviralSpecify_Other_Specify__path]|reply_str_value -%}\n{#- Corticosteroid? [options] -#}\n{%- set medicationCorticosteroid__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.64f6c9d0-9882-4c27-b95d-d9f86f362bd8\" -%}\n{%- set medicationCorticosteroid = repliesMap[medicationCorticosteroid__path]|reply_str_value -%}\n{%- set medicationCorticosteroid_yes = \"7bef36d5-d922-42fb-81c5-92613830dd93\" -%}\n{%- set medicationCorticosteroid_no = \"ec3e57ab-2246-40c9-84bc-fc17e7414fc7\" -%}\n{%- set medicationCorticosteroid_unknown = \"2f255b58-68c1-41ce-a50b-ec7fc874ba25\" -%}\n{#- Route [multichoice-list] -#}\n{%- set medicationCorticosteroidRouteN__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.64f6c9d0-9882-4c27-b95d-d9f86f362bd8.7bef36d5-d922-42fb-81c5-92613830dd93.b4588794-42e5-4fdf-94a5-a05c49d71a2e\" -%}\n{%- set medicationCorticosteroidRouteN = repliesMap[medicationCorticosteroidRouteN__path]|reply_int_value -%}\n{#- Route [multichoice-options] -#}\n{%- set medicationCorticosteroidRoute__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.64f6c9d0-9882-4c27-b95d-d9f86f362bd8.7bef36d5-d922-42fb-81c5-92613830dd93.b4588794-42e5-4fdf-94a5-a05c49d71a2e.index_$medicationCorticosteroidRoute.360eec27-178d-4d55-aaac-fabf6631913a\" -%}\n{%- set medicationCorticosteroidRoute = repliesMap[medicationCorticosteroidRoute__path]|reply_str_value -%}\n{%- set medicationCorticosteroidRoute_Oral = \"ffaa049d-d68e-4962-97b2-96f6fb0d806a\" -%}\n{%- set medicationCorticosteroidRoute_Intravenous = \"9a9a43ee-cde7-41f1-8937-4357cb455e9c\" -%}\n{%- set medicationCorticosteroidRoute_Inhaled = \"4800371c-13cc-41b7-b9e3-cc2aee518b63\" -%}\n{#- Agent [value-string] -#}\n{%- set medicationCorticosteroidAgent__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.64f6c9d0-9882-4c27-b95d-d9f86f362bd8.7bef36d5-d922-42fb-81c5-92613830dd93.161c5270-9e93-4394-acca-aa1268790835\" -%}\n{%- set medicationCorticosteroidAgent = repliesMap[medicationCorticosteroidAgent__path]|reply_str_value -%}\n{#- Maximum daily dose [value-string] -#}\n{%- set medicationCorticosteroidDose__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.64f6c9d0-9882-4c27-b95d-d9f86f362bd8.7bef36d5-d922-42fb-81c5-92613830dd93.06c4fa48-051c-4bca-9bfd-150e68a1e5b4\" -%}\n{%- set medicationCorticosteroidDose = repliesMap[medicationCorticosteroidDose__path]|reply_str_value -%}\n{#- Antibiotic? [yes-no-unknown] -#}\n{%- set medicationAntibiotic__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.1c513b50-6355-4e5d-8473-d29cc300fc2e\" -%}\n{%- set medicationAntibiotic = repliesMap[medicationAntibiotic__path]|reply_str_value -%}\n{%- set medicationAntibiotic_yes = \"ff99c959-7411-4b87-b444-8900d3431164\" -%}\n{%- set medicationAntibiotic_no = \"40816a50-c0f3-458e-983b-68a4c02087a2\" -%}\n{%- set medicationAntibiotic_unknown = \"dd299948-ce0b-499f-8240-03c7369bb873\" -%}\n{#- Antifungal agent? [yes-no-unknown] -#}\n{%- set medicationAntifungal__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.65177d74-1115-49d2-aa4a-2edc029115ce\" -%}\n{%- set medicationAntifungal = repliesMap[medicationAntifungal__path]|reply_str_value -%}\n{%- set medicationAntifungal_yes = \"980d6e11-39d4-4903-8c82-88bb43eb1e3e\" -%}\n{%- set medicationAntifungal_no = \"c97c3c5d-26f8-4304-8521-cde293059f64\" -%}\n{%- set medicationAntifungal_unknown = \"9efc5be4-99db-4cc2-b917-a6627c8b7019\" -%}\n{#- Antimalarial agent? [yes-no-unknown] -#}\n{%- set medicationAntimalarial__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.aaa5c7d6-cb40-4479-9165-9bae954278d2\" -%}\n{%- set medicationAntimalarial = repliesMap[medicationAntimalarial__path]|reply_str_value -%}\n{%- set medicationAntimalarial_yes = \"a1bf5b97-b4f2-4da6-b5ea-49496324df8c\" -%}\n{%- set medicationAntimalarial_no = \"98db000b-8834-47fa-b7b6-61a9617001ac\" -%}\n{%- set medicationAntimalarial_unknown = \"67a62f87-bc7c-4049-b296-623e58bb660b\" -%}\n{#- Specify [value-string] -#}\n{%- set medicationAntimalarialSpecify__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.aaa5c7d6-cb40-4479-9165-9bae954278d2.a1bf5b97-b4f2-4da6-b5ea-49496324df8c.9aa59b9b-95a2-4a3a-8efe-3ffcba1d03bf\" -%}\n{%- set medicationAntimalarialSpecify = repliesMap[medicationAntimalarialSpecify__path]|reply_str_value -%}\n{#- Experimental agent? [yes-no-unknown] -#}\n{%- set medicationExperimental__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.d4240757-a0c6-49c5-a3c7-e2e59da7b24f\" -%}\n{%- set medicationExperimental = repliesMap[medicationExperimental__path]|reply_str_value -%}\n{%- set medicationExperimental_yes = \"446baca2-f32d-4ff1-ae5a-3b47a4a77003\" -%}\n{%- set medicationExperimental_no = \"4f0170d9-1ff1-4934-b873-34c410f7c861\" -%}\n{%- set medicationExperimental_unknown = \"335716e9-335c-442f-aabc-9d4cdcce3f2a\" -%}\n{#- Specify [value-string] -#}\n{%- set medicationExperimentalSpecify__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.d4240757-a0c6-49c5-a3c7-e2e59da7b24f.446baca2-f32d-4ff1-ae5a-3b47a4a77003.231dbd18-f533-4f95-ae20-a27756c08e1e\" -%}\n{%- set medicationExperimentalSpecify = repliesMap[medicationExperimentalSpecify__path]|reply_str_value -%}\n{#- Non-steroidal anti-inflammatory (NSAID)? [yes-no-unknown] -#}\n{%- set medicationNSAID__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.aba9524d-271c-4c45-aca6-a29cd052deba\" -%}\n{%- set medicationNSAID = repliesMap[medicationNSAID__path]|reply_str_value -%}\n{%- set medicationNSAID_yes = \"00622b6f-0576-4c0c-8ff6-926b91e19f36\" -%}\n{%- set medicationNSAID_no = \"41f4c523-3332-46c3-be5d-b91157d91d62\" -%}\n{%- set medicationNSAID_unknown = \"858e4476-ffb1-43e0-bb51-a1fb6359a330\" -%}\n{#- Angiotensin converting enzyme inhibitors (ACE inhibitors)? [yes-no-unknown] -#}\n{%- set medicationACE__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.820ee024-a2ba-4539-a001-c8d2fcf634a7\" -%}\n{%- set medicationACE = repliesMap[medicationACE__path]|reply_str_value -%}\n{%- set medicationACE_yes = \"dcbed814-0d79-402f-b772-19f68b5ca0ce\" -%}\n{%- set medicationACE_no = \"ade1c554-cea9-4704-9017-25ed3f1d57da\" -%}\n{%- set medicationACE_unknown = \"4d6a1d6d-6b28-4b62-a6a8-befdbd7fd248\" -%}\n{#- Angiotensin II receptor blockers (ARBs)? [yes-no-unknown] -#}\n{%- set medicationARB__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.4758f571-af44-48ca-a5ca-02e3232dfb21\" -%}\n{%- set medicationARB = repliesMap[medicationARB__path]|reply_str_value -%}\n{%- set medicationARB_yes = \"2e0b0d5f-86fe-4ba9-beb2-e0a6ee563975\" -%}\n{%- set medicationARB_no = \"c1df8526-a7fb-4971-beb5-35d731fbff86\" -%}\n{%- set medicationARB_unknown = \"6c7caafe-07ec-432e-ab07-50a1818acd33\" -%}\n{#- Systemic anticoagulation [yes-no-unknown] -#}\n{%- set medicationAnticoagulation__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.4dbf4dff-df55-4206-bbf9-3e95e8ee9dd5.dc11e59a-8f9a-4f80-999c-dd99b97d6efd.19a1e7c9-f804-451f-be63-cd7fb3d2aaed\" -%}\n{%- set medicationAnticoagulation = repliesMap[medicationAnticoagulation__path]|reply_str_value -%}\n{%- set medicationAnticoagulation_yes = \"f6d42667-35b0-4ec7-823d-d4d2a56675a1\" -%}\n{%- set medicationAnticoagulation_no = \"c8c9d979-6cf8-408e-879e-625b3b012a8e\" -%}\n{%- set medicationAnticoagulation_unknown = \"7c40ee08-c3c2-4358-98de-08194acacdb2\" -%}\n{#- Supportive Care [section] -#}\n{%- set supportCare__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207\" -%}\n{%- set supportCare = repliesMap[supportCare__path]|reply_str_value -%}\n{%- set supportCare_open = \"bac6e386-85d1-417e-aa29-f53201be8e52\" -%}\n{#- ICU or High Dependency Unit admission? [yes-no-unknown] -#}\n{%- set supportCareICU__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.29d8b984-8271-4807-aebf-1e32553419bc\" -%}\n{%- set supportCareICU = repliesMap[supportCareICU__path]|reply_str_value -%}\n{%- set supportCareICU_yes = \"7a28e45c-024f-4d51-87b5-cf9529b3b280\" -%}\n{%- set supportCareICU_no = \"9f57b790-103f-48d7-a960-f5d7d279e478\" -%}\n{%- set supportCareICU_unknown = \"7ed863f2-2b38-4e27-909b-bbea97fcfef9\" -%}\n{#- Oxygen therapy? [yes-no-unknown] -#}\n{%- set supportCareOxygen__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.5eceaebb-90d5-44a7-b3b6-c6eb2f6b3298\" -%}\n{%- set supportCareOxygen = repliesMap[supportCareOxygen__path]|reply_str_value -%}\n{%- set supportCareOxygen_yes = \"971fc6a4-0d4e-47a3-b78f-22469b046afb\" -%}\n{%- set supportCareOxygen_no = \"29a108a0-81db-4f0a-b291-237b4eecbfaa\" -%}\n{%- set supportCareOxygen_unknown = \"cfac8888-865f-4999-8ddc-229557aa9e3e\" -%}\n{#- O₂ flow [options] -#}\n{%- set supportCareOxygenFlow__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.5eceaebb-90d5-44a7-b3b6-c6eb2f6b3298.971fc6a4-0d4e-47a3-b78f-22469b046afb.006f9b0f-2ab2-4b01-9073-6178d6bb171a\" -%}\n{%- set supportCareOxygenFlow = repliesMap[supportCareOxygenFlow__path]|reply_str_value -%}\n{%- set supportCareOxygenFlow_1to5 = \"3318fe4f-2dcf-4b7a-ae5a-cea69a080681\" -%}\n{%- set supportCareOxygenFlow_6to10 = \"969d6a80-b17d-4c62-824a-ed69d5945e9b\" -%}\n{%- set supportCareOxygenFlow_11to15 = \"e5c69880-e851-41fe-89f1-747e857f2406\" -%}\n{%- set supportCareOxygenFlow_gt15 = \"e776f463-0e89-4acd-b105-9ccae28450a6\" -%}\n{%- set supportCareOxygenFlow_Unknown = \"b6f54600-de51-40be-9661-f6b4ee620214\" -%}\n{#- Source of oxygen [options] -#}\n{%- set supportCareOxygenSource__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.5eceaebb-90d5-44a7-b3b6-c6eb2f6b3298.971fc6a4-0d4e-47a3-b78f-22469b046afb.689ad7bc-16d5-4afe-9b64-99a59378e56a\" -%}\n{%- set supportCareOxygenSource = repliesMap[supportCareOxygenSource__path]|reply_str_value -%}\n{%- set supportCareOxygenSource_Piped = \"b2ac690e-f8d1-42e7-82a8-9480ef54395c\" -%}\n{%- set supportCareOxygenSource_Cylinder = \"c1ed7b74-51b4-4f59-9aef-b0b59f1d8278\" -%}\n{%- set supportCareOxygenSource_Concentrator = \"ec27f721-a7b9-42e8-9347-f82b2aaf99ce\" -%}\n{%- set supportCareOxygenSource_Unknown = \"4d4c199a-4de2-4919-9ee3-f3f3bf31ef8a\" -%}\n{#- Interface [options] -#}\n{%- set supportCareOxygenInterface__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.5eceaebb-90d5-44a7-b3b6-c6eb2f6b3298.971fc6a4-0d4e-47a3-b78f-22469b046afb.1576d785-17b8-495f-b62f-6ce2463ac690\" -%}\n{%- set supportCareOxygenInterface = repliesMap[supportCareOxygenInterface__path]|reply_str_value -%}\n{%- set supportCareOxygenInterface_Prongs = \"ea1b2502-a3f7-45d0-8ddd-1bcd1aee3056\" -%}\n{%- set supportCareOxygenInterface_Cannula = \"3fa6efb7-0847-4ab1-97b3-3932901379e8\" -%}\n{%- set supportCareOxygenInterface_MaskWithout = \"d3de7982-0091-4b40-be42-3724a0555cc9\" -%}\n{%- set supportCareOxygenInterface_MaskWith = \"e943e683-746b-462f-a05d-485812463050\" -%}\n{%- set supportCareOxygenInterface_CPAP = \"0d828947-2b42-440a-8c52-d2017cd299d8\" -%}\n{%- set supportCareOxygenInterface_Unknown = \"3d93a648-c912-4d58-835e-87458caf939b\" -%}\n{#- Non-invasive ventilation (e.g.BIPAP/CPAP)? [yes-no-unknown] -#}\n{%- set supportCareNonInvasive__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.e4ecc059-c749-46a0-b57d-86616ba40135\" -%}\n{%- set supportCareNonInvasive = repliesMap[supportCareNonInvasive__path]|reply_str_value -%}\n{%- set supportCareNonInvasive_yes = \"6dd27d5b-c981-4803-a9a9-1fb9d6edbbc7\" -%}\n{%- set supportCareNonInvasive_no = \"e41f7266-c143-49d2-94c8-9c2633d1bbde\" -%}\n{%- set supportCareNonInvasive_unknown = \"a2baa918-36a6-409b-a28d-eea8db116ef3\" -%}\n{#- Invasive ventilation (Any)? [yes-no-unknown] -#}\n{%- set supportCareInvasive__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.ef5d1fcc-794c-4962-9111-53e9de87ae21\" -%}\n{%- set supportCareInvasive = repliesMap[supportCareInvasive__path]|reply_str_value -%}\n{%- set supportCareInvasive_yes = \"c54a421c-b1db-44e1-a230-b6d55577c28f\" -%}\n{%- set supportCareInvasive_no = \"98ff5eac-7a8c-40f7-a18a-0d259ab376b0\" -%}\n{%- set supportCareInvasive_unknown = \"07a02359-1b1c-41fe-bac1-15af64eddb76\" -%}\n{#- PEEP [cm H₂O] [value-number] -#}\n{%- set supportCareInvasive_Peep__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.ef5d1fcc-794c-4962-9111-53e9de87ae21.c54a421c-b1db-44e1-a230-b6d55577c28f.0fb8841b-31e6-4339-8b54-f82f4242a013\" -%}\n{%- set supportCareInvasive_Peep = repliesMap[supportCareInvasive_Peep__path]|reply_str_value -%}\n{#- FᵢO₂ [%] [value-number] -#}\n{%- set supportCareInvasive_FiO2__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.ef5d1fcc-794c-4962-9111-53e9de87ae21.c54a421c-b1db-44e1-a230-b6d55577c28f.9356aca2-f658-4a55-a51d-e7a985b0a920\" -%}\n{%- set supportCareInvasive_FiO2 = repliesMap[supportCareInvasive_FiO2__path]|reply_str_value -%}\n{#- Plateau pressure [cm H₂O] [value-number] -#}\n{%- set supportCareInvasive_Plateau__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.ef5d1fcc-794c-4962-9111-53e9de87ae21.c54a421c-b1db-44e1-a230-b6d55577c28f.9765b703-8c0e-47bb-9ede-d86164b394df\" -%}\n{%- set supportCareInvasive_Plateau = repliesMap[supportCareInvasive_Plateau__path]|reply_str_value -%}\n{#- PₐCO₂ [value-number] -#}\n{%- set supportCareInvasive_PaCO2__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.ef5d1fcc-794c-4962-9111-53e9de87ae21.c54a421c-b1db-44e1-a230-b6d55577c28f.8c024cf6-dfd3-4c0e-bc48-4b1dd5f0927b\" -%}\n{%- set supportCareInvasive_PaCO2 = repliesMap[supportCareInvasive_PaCO2__path]|reply_str_value -%}\n{#- PₐO₂ [value-number] -#}\n{%- set supportCareInvasive_PaO2__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.ef5d1fcc-794c-4962-9111-53e9de87ae21.c54a421c-b1db-44e1-a230-b6d55577c28f.d86cef91-28bf-4730-9064-9a94d7e8bff1\" -%}\n{%- set supportCareInvasive_PaO2 = repliesMap[supportCareInvasive_PaO2__path]|reply_str_value -%}\n{#- Inotropes/vasopressors? [yes-no-unknown] -#}\n{%- set supportCareInotropes__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.1ba9206e-4e4c-46a3-830a-7e7ff6a6deb5\" -%}\n{%- set supportCareInotropes = repliesMap[supportCareInotropes__path]|reply_str_value -%}\n{%- set supportCareInotropes_yes = \"b8532f75-dc71-43e0-83ca-efb311eb8f4e\" -%}\n{%- set supportCareInotropes_no = \"f804e7ce-0502-4150-a7ff-27f5f9d85acc\" -%}\n{%- set supportCareInotropes_unknown = \"9f985882-5460-4fb7-a023-a446e7411384\" -%}\n{#- Extracorporeal (ECMO) support? [yes-no-unknown] -#}\n{%- set supportCareECMO__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.94f818ad-a79e-42d6-aa9c-69b8623a8d11\" -%}\n{%- set supportCareECMO = repliesMap[supportCareECMO__path]|reply_str_value -%}\n{%- set supportCareECMO_yes = \"8477cc03-5a53-42ad-8dfc-e3ebdfc254a4\" -%}\n{%- set supportCareECMO_no = \"5dc28a34-5858-4ac5-af0f-a9be72398ba1\" -%}\n{%- set supportCareECMO_unknown = \"d7389a29-f10d-4f46-ac0b-2a3347ff2499\" -%}\n{#- Prone position? [yes-no-unknown] -#}\n{%- set supportCareProne__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.422ff881-b607-48bc-b0b2-354fbe7b9207.bac6e386-85d1-417e-aa29-f53201be8e52.8f725aec-1e15-4b43-9b85-c4ede6792750\" -%}\n{%- set supportCareProne = repliesMap[supportCareProne__path]|reply_str_value -%}\n{%- set supportCareProne_yes = \"489390d5-d6ae-41b7-a51b-bc67a8941c69\" -%}\n{%- set supportCareProne_no = \"4c0db426-3db1-40fe-bdd9-f7229d2b629d\" -%}\n{%- set supportCareProne_unknown = \"421261a3-e2f6-496b-a6ce-f3bc02792504\" -%}\n{#- Laboraty results on admission [section] -#}\n{%- set admissionLabResults__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0\" -%}\n{%- set admissionLabResults = repliesMap[admissionLabResults__path]|reply_str_value -%}\n{%- set admissionLabResults_open = \"bb677473-a386-4729-b9c3-0cd5d14e1856\" -%}\n{#- Haemoglobin [g/L] [lab-result] -#}\n{%- set admissionLabResults_Haemoglobin__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.c6812fd3-dbf8-4d22-8af6-b01b65fe16f7\" -%}\n{%- set admissionLabResults_Haemoglobin = repliesMap[admissionLabResults_Haemoglobin__path]|reply_str_value -%}\n{%- set admissionLabResults_Haemoglobin_done = \"b287bcf7-8661-446d-8957-f550e24f96b4\" -%}\n{%- set admissionLabResults_Haemoglobin_notdone = \"d4810199-e86b-46f6-b73b-23775f340bce\" -%}\n{%- set admissionLabResults_Haemoglobin_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.c6812fd3-dbf8-4d22-8af6-b01b65fe16f7.b287bcf7-8661-446d-8957-f550e24f96b4.f49799ad-bfc0-4d37-8e16-170156ddf577\" -%}\n{%- set admissionLabResults_Haemoglobin_value = repliesMap[admissionLabResults_Haemoglobin_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Haemoglobin_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.c6812fd3-dbf8-4d22-8af6-b01b65fe16f7.b287bcf7-8661-446d-8957-f550e24f96b4.9b5118f2-edb5-4e22-8b79-eab1215e9584\" -%}\n{%- set admissionLabResults_Haemoglobin_units = repliesMap[admissionLabResults_Haemoglobin_units__path]|reply_str_value -%}\n{#- WBC count [×10⁹/L] [lab-result] -#}\n{%- set admissionLabResults_WBC__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.f33f87e4-aad7-4e85-946d-d11bb8d2748f\" -%}\n{%- set admissionLabResults_WBC = repliesMap[admissionLabResults_WBC__path]|reply_str_value -%}\n{%- set admissionLabResults_WBC_done = \"93af6248-25e7-427d-add5-98a327ff5a5d\" -%}\n{%- set admissionLabResults_WBC_notdone = \"11a72705-0699-4fe3-9f7e-32b839f34fbf\" -%}\n{%- set admissionLabResults_WBC_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.f33f87e4-aad7-4e85-946d-d11bb8d2748f.93af6248-25e7-427d-add5-98a327ff5a5d.65de8932-ef49-43a4-b900-72af724f4932\" -%}\n{%- set admissionLabResults_WBC_value = repliesMap[admissionLabResults_WBC_value__path]|reply_str_value -%}\n{%- set admissionLabResults_WBC_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.f33f87e4-aad7-4e85-946d-d11bb8d2748f.93af6248-25e7-427d-add5-98a327ff5a5d.849f3b50-7ecd-4a8b-a94c-acc85e36f52b\" -%}\n{%- set admissionLabResults_WBC_units = repliesMap[admissionLabResults_WBC_units__path]|reply_str_value -%}\n{#- Haematocrit [%] [lab-result] -#}\n{%- set admissionLabResults_Haematocrit__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.8a8fa4bf-1253-47b2-b74c-b7b92dc983e8\" -%}\n{%- set admissionLabResults_Haematocrit = repliesMap[admissionLabResults_Haematocrit__path]|reply_str_value -%}\n{%- set admissionLabResults_Haematocrit_done = \"d0c2057e-b064-45e2-9554-6d7430f956d8\" -%}\n{%- set admissionLabResults_Haematocrit_notdone = \"7af1309c-f023-4c4c-ba78-f71ea773fba4\" -%}\n{%- set admissionLabResults_Haematocrit_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.8a8fa4bf-1253-47b2-b74c-b7b92dc983e8.d0c2057e-b064-45e2-9554-6d7430f956d8.449182de-f2cf-4b6b-ac1e-d9a6521956aa\" -%}\n{%- set admissionLabResults_Haematocrit_value = repliesMap[admissionLabResults_Haematocrit_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Haematocrit_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.8a8fa4bf-1253-47b2-b74c-b7b92dc983e8.d0c2057e-b064-45e2-9554-6d7430f956d8.bdd1b2af-7132-418a-8577-0773b3411b46\" -%}\n{%- set admissionLabResults_Haematocrit_units = repliesMap[admissionLabResults_Haematocrit_units__path]|reply_str_value -%}\n{#- Platelets [×10⁹/L] [lab-result] -#}\n{%- set admissionLabResults_Platelets__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.7af003ca-ecc4-49fc-a7a7-b08cb380855e\" -%}\n{%- set admissionLabResults_Platelets = repliesMap[admissionLabResults_Platelets__path]|reply_str_value -%}\n{%- set admissionLabResults_Platelets_done = \"d771028b-685c-4f18-986c-ed63e64c36d6\" -%}\n{%- set admissionLabResults_Platelets_notdone = \"a6af56b1-8b3a-4d03-9bc2-ec3f053401fe\" -%}\n{%- set admissionLabResults_Platelets_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.7af003ca-ecc4-49fc-a7a7-b08cb380855e.d771028b-685c-4f18-986c-ed63e64c36d6.8803ef6c-bc42-4355-92de-e931b6e6252a\" -%}\n{%- set admissionLabResults_Platelets_value = repliesMap[admissionLabResults_Platelets_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Platelets_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.7af003ca-ecc4-49fc-a7a7-b08cb380855e.d771028b-685c-4f18-986c-ed63e64c36d6.834c51cf-4146-498b-b3c6-64491851f1ca\" -%}\n{%- set admissionLabResults_Platelets_units = repliesMap[admissionLabResults_Platelets_units__path]|reply_str_value -%}\n{#- APTT/APTR [lab-result] -#}\n{%- set admissionLabResults_APTT__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.5f1fa669-a73f-442a-a017-ca9fd2ce38ed\" -%}\n{%- set admissionLabResults_APTT = repliesMap[admissionLabResults_APTT__path]|reply_str_value -%}\n{%- set admissionLabResults_APTT_done = \"a967935f-b843-463a-9b32-19d324313705\" -%}\n{%- set admissionLabResults_APTT_notdone = \"7221741f-2efe-401c-b702-7a803059c141\" -%}\n{%- set admissionLabResults_APTT_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.5f1fa669-a73f-442a-a017-ca9fd2ce38ed.a967935f-b843-463a-9b32-19d324313705.272c2dee-b043-4515-b124-9b58e5807fde\" -%}\n{%- set admissionLabResults_APTT_value = repliesMap[admissionLabResults_APTT_value__path]|reply_str_value -%}\n{%- set admissionLabResults_APTT_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.5f1fa669-a73f-442a-a017-ca9fd2ce38ed.a967935f-b843-463a-9b32-19d324313705.9c78be04-44f2-4932-a8fa-f04a9dc1c957\" -%}\n{%- set admissionLabResults_APTT_units = repliesMap[admissionLabResults_APTT_units__path]|reply_str_value -%}\n{#- PT [seconds] [lab-result] -#}\n{%- set admissionLabResults_PT__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.c6ae3c19-6e4f-44a4-9565-2a7ac80c4abd\" -%}\n{%- set admissionLabResults_PT = repliesMap[admissionLabResults_PT__path]|reply_str_value -%}\n{%- set admissionLabResults_PT_done = \"f4935357-560f-4a68-9a20-206927381438\" -%}\n{%- set admissionLabResults_PT_notdone = \"dde0b0f6-f554-429a-bf62-9eb340610393\" -%}\n{%- set admissionLabResults_PT_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.c6ae3c19-6e4f-44a4-9565-2a7ac80c4abd.f4935357-560f-4a68-9a20-206927381438.95ddae00-3069-4944-82b1-d6f773caf8f8\" -%}\n{%- set admissionLabResults_PT_value = repliesMap[admissionLabResults_PT_value__path]|reply_str_value -%}\n{%- set admissionLabResults_PT_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.c6ae3c19-6e4f-44a4-9565-2a7ac80c4abd.f4935357-560f-4a68-9a20-206927381438.0d778bda-d9f8-4efd-9e12-1d4643ae7df8\" -%}\n{%- set admissionLabResults_PT_units = repliesMap[admissionLabResults_PT_units__path]|reply_str_value -%}\n{#- INR [lab-result] -#}\n{%- set admissionLabResults_INR__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.2a207d77-e81e-4fed-a7e1-66def50bac7a\" -%}\n{%- set admissionLabResults_INR = repliesMap[admissionLabResults_INR__path]|reply_str_value -%}\n{%- set admissionLabResults_INR_done = \"6a3b4667-1708-4150-a54f-ab781dfdea34\" -%}\n{%- set admissionLabResults_INR_notdone = \"4fab0dc8-05a1-4a54-a0d7-5aaf3fa6fe3e\" -%}\n{%- set admissionLabResults_INR_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.2a207d77-e81e-4fed-a7e1-66def50bac7a.6a3b4667-1708-4150-a54f-ab781dfdea34.7cf56154-052a-432e-8a40-a6202c4fc12a\" -%}\n{%- set admissionLabResults_INR_value = repliesMap[admissionLabResults_INR_value__path]|reply_str_value -%}\n{%- set admissionLabResults_INR_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.2a207d77-e81e-4fed-a7e1-66def50bac7a.6a3b4667-1708-4150-a54f-ab781dfdea34.c8274c96-7454-4673-8410-f32f52771597\" -%}\n{%- set admissionLabResults_INR_units = repliesMap[admissionLabResults_INR_units__path]|reply_str_value -%}\n{#- ALT/SGPT [U/L] [lab-result] -#}\n{%- set admissionLabResults_ALT__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.97992a14-6b00-4dc6-915d-373044803bb0\" -%}\n{%- set admissionLabResults_ALT = repliesMap[admissionLabResults_ALT__path]|reply_str_value -%}\n{%- set admissionLabResults_ALT_done = \"5ac6c629-607f-423b-8af2-cb1f3bb67958\" -%}\n{%- set admissionLabResults_ALT_notdone = \"40133433-bb77-431e-b081-e0eaceaa597c\" -%}\n{%- set admissionLabResults_ALT_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.97992a14-6b00-4dc6-915d-373044803bb0.5ac6c629-607f-423b-8af2-cb1f3bb67958.cbd5af04-e096-450f-9cd9-645139b0071b\" -%}\n{%- set admissionLabResults_ALT_value = repliesMap[admissionLabResults_ALT_value__path]|reply_str_value -%}\n{%- set admissionLabResults_ALT_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.97992a14-6b00-4dc6-915d-373044803bb0.5ac6c629-607f-423b-8af2-cb1f3bb67958.c3ef6718-e0e8-4d0a-85f6-850e55f512b7\" -%}\n{%- set admissionLabResults_ALT_units = repliesMap[admissionLabResults_ALT_units__path]|reply_str_value -%}\n{#- Total bilirubin [µmol/L] [lab-result] -#}\n{%- set admissionLabResults_Bilirubin__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.8504e677-9ca9-4d78-8d5c-41aeaeb3b956\" -%}\n{%- set admissionLabResults_Bilirubin = repliesMap[admissionLabResults_Bilirubin__path]|reply_str_value -%}\n{%- set admissionLabResults_Bilirubin_done = \"95d23acd-5deb-4b08-a0ce-b4a82ca0cbcb\" -%}\n{%- set admissionLabResults_Bilirubin_notdone = \"0a2abde1-e347-481b-8dbd-39168a87624f\" -%}\n{%- set admissionLabResults_Bilirubin_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.8504e677-9ca9-4d78-8d5c-41aeaeb3b956.95d23acd-5deb-4b08-a0ce-b4a82ca0cbcb.fb7fefc4-1f6e-45e0-b9b5-2fe3748422dd\" -%}\n{%- set admissionLabResults_Bilirubin_value = repliesMap[admissionLabResults_Bilirubin_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Bilirubin_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.8504e677-9ca9-4d78-8d5c-41aeaeb3b956.95d23acd-5deb-4b08-a0ce-b4a82ca0cbcb.49adf884-fdf5-4ce6-9a72-a6ca4e187756\" -%}\n{%- set admissionLabResults_Bilirubin_units = repliesMap[admissionLabResults_Bilirubin_units__path]|reply_str_value -%}\n{#- AST/SGOT [U/L] [lab-result] -#}\n{%- set admissionLabResults_AST__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.b026492a-0322-4122-83e6-460905c8ea84\" -%}\n{%- set admissionLabResults_AST = repliesMap[admissionLabResults_AST__path]|reply_str_value -%}\n{%- set admissionLabResults_AST_done = \"0c03a9c5-7bfc-47c1-a4ff-59046572f39a\" -%}\n{%- set admissionLabResults_AST_notdone = \"1401ccd5-d9b1-46cd-bd6d-1624a9bc3e90\" -%}\n{%- set admissionLabResults_AST_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.b026492a-0322-4122-83e6-460905c8ea84.0c03a9c5-7bfc-47c1-a4ff-59046572f39a.ec56a32d-5124-46e0-a3ec-6eb0740e7dc2\" -%}\n{%- set admissionLabResults_AST_value = repliesMap[admissionLabResults_AST_value__path]|reply_str_value -%}\n{%- set admissionLabResults_AST_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.b026492a-0322-4122-83e6-460905c8ea84.0c03a9c5-7bfc-47c1-a4ff-59046572f39a.6d655d1d-2c18-4390-9a9c-5f1dc1213cca\" -%}\n{%- set admissionLabResults_AST_units = repliesMap[admissionLabResults_AST_units__path]|reply_str_value -%}\n{#- Urea (BUN) [mmol/L] [lab-result] -#}\n{%- set admissionLabResults_Urea__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.6f91db34-ebcf-4573-a149-68984ebf9bcb\" -%}\n{%- set admissionLabResults_Urea = repliesMap[admissionLabResults_Urea__path]|reply_str_value -%}\n{%- set admissionLabResults_Urea_done = \"fa4f4883-4d7b-440c-b42d-96736107b2de\" -%}\n{%- set admissionLabResults_Urea_notdone = \"e1fe96c8-8465-43c2-a723-993c10f93d92\" -%}\n{%- set admissionLabResults_Urea_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.6f91db34-ebcf-4573-a149-68984ebf9bcb.fa4f4883-4d7b-440c-b42d-96736107b2de.d710a8c6-13c7-4c01-86c6-b5d8cff1a716\" -%}\n{%- set admissionLabResults_Urea_value = repliesMap[admissionLabResults_Urea_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Urea_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.6f91db34-ebcf-4573-a149-68984ebf9bcb.fa4f4883-4d7b-440c-b42d-96736107b2de.11abf511-5906-4180-8d5b-e87781242613\" -%}\n{%- set admissionLabResults_Urea_units = repliesMap[admissionLabResults_Urea_units__path]|reply_str_value -%}\n{#- Lactate [mmol/L] [lab-result] -#}\n{%- set admissionLabResults_Lactate__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.2fd3a9ad-97df-44a8-b580-3b679ebdec22\" -%}\n{%- set admissionLabResults_Lactate = repliesMap[admissionLabResults_Lactate__path]|reply_str_value -%}\n{%- set admissionLabResults_Lactate_done = \"7a0cf995-ab01-471d-9247-c03ab078309f\" -%}\n{%- set admissionLabResults_Lactate_notdone = \"d8d333cb-9df2-4fbe-9303-862d5403a29d\" -%}\n{%- set admissionLabResults_Lactate_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.2fd3a9ad-97df-44a8-b580-3b679ebdec22.7a0cf995-ab01-471d-9247-c03ab078309f.6d0d30a4-8c79-43cd-8d12-30b59abf3b72\" -%}\n{%- set admissionLabResults_Lactate_value = repliesMap[admissionLabResults_Lactate_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Lactate_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.2fd3a9ad-97df-44a8-b580-3b679ebdec22.7a0cf995-ab01-471d-9247-c03ab078309f.fd6c6a88-bc60-483e-94e9-22db17721ad2\" -%}\n{%- set admissionLabResults_Lactate_units = repliesMap[admissionLabResults_Lactate_units__path]|reply_str_value -%}\n{#- Creatinine [μmol/L] [lab-result] -#}\n{%- set admissionLabResults_Creatinine__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.896da12f-c51b-4738-8b88-97f09abf2bd8\" -%}\n{%- set admissionLabResults_Creatinine = repliesMap[admissionLabResults_Creatinine__path]|reply_str_value -%}\n{%- set admissionLabResults_Creatinine_done = \"5b8582c7-9bc7-4015-a753-919aff5edbd3\" -%}\n{%- set admissionLabResults_Creatinine_notdone = \"e35f1e57-3bed-446f-9634-f5646407e380\" -%}\n{%- set admissionLabResults_Creatinine_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.896da12f-c51b-4738-8b88-97f09abf2bd8.5b8582c7-9bc7-4015-a753-919aff5edbd3.15f8cd5b-cf20-4d2c-819b-02f4f2afd669\" -%}\n{%- set admissionLabResults_Creatinine_value = repliesMap[admissionLabResults_Creatinine_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Creatinine_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.896da12f-c51b-4738-8b88-97f09abf2bd8.5b8582c7-9bc7-4015-a753-919aff5edbd3.65f0b7f1-18b1-4215-a364-52f356ad2709\" -%}\n{%- set admissionLabResults_Creatinine_units = repliesMap[admissionLabResults_Creatinine_units__path]|reply_str_value -%}\n{#- Sodium [mEq/L] [lab-result] -#}\n{%- set admissionLabResults_Sodium__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.a0f23d41-fbb3-4f98-beaa-9a92189314bf\" -%}\n{%- set admissionLabResults_Sodium = repliesMap[admissionLabResults_Sodium__path]|reply_str_value -%}\n{%- set admissionLabResults_Sodium_done = \"9b7981c9-f2d5-4c8a-83f2-c51d4d1711ed\" -%}\n{%- set admissionLabResults_Sodium_notdone = \"962088c0-1a6f-4c17-bd71-f144d513c777\" -%}\n{%- set admissionLabResults_Sodium_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.a0f23d41-fbb3-4f98-beaa-9a92189314bf.9b7981c9-f2d5-4c8a-83f2-c51d4d1711ed.93b69ea5-c54b-4e49-9c1c-9ecad77a35ab\" -%}\n{%- set admissionLabResults_Sodium_value = repliesMap[admissionLabResults_Sodium_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Sodium_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.a0f23d41-fbb3-4f98-beaa-9a92189314bf.9b7981c9-f2d5-4c8a-83f2-c51d4d1711ed.a757cf90-d270-445e-9d1d-460274183bdb\" -%}\n{%- set admissionLabResults_Sodium_units = repliesMap[admissionLabResults_Sodium_units__path]|reply_str_value -%}\n{#- Potassium [mEq/L] [lab-result] -#}\n{%- set admissionLabResults_Potassium__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.4699c94a-f941-4c97-b061-45d86c12d4b0\" -%}\n{%- set admissionLabResults_Potassium = repliesMap[admissionLabResults_Potassium__path]|reply_str_value -%}\n{%- set admissionLabResults_Potassium_done = \"471a077a-8a4c-4d0d-8e6b-d3966d6f3ed1\" -%}\n{%- set admissionLabResults_Potassium_notdone = \"42ff540f-72af-4df9-9948-8dce2ef52351\" -%}\n{%- set admissionLabResults_Potassium_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.4699c94a-f941-4c97-b061-45d86c12d4b0.471a077a-8a4c-4d0d-8e6b-d3966d6f3ed1.e0ef4b78-29d1-49aa-a4f8-c5b9385fe686\" -%}\n{%- set admissionLabResults_Potassium_value = repliesMap[admissionLabResults_Potassium_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Potassium_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.4699c94a-f941-4c97-b061-45d86c12d4b0.471a077a-8a4c-4d0d-8e6b-d3966d6f3ed1.95e4f1d1-4d53-44a5-a784-dd5b87b7e6fd\" -%}\n{%- set admissionLabResults_Potassium_units = repliesMap[admissionLabResults_Potassium_units__path]|reply_str_value -%}\n{#- Procalcitonin [ng/mL] [lab-result] -#}\n{%- set admissionLabResults_Procalcitonin__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.43d67744-219d-4d5f-9d5d-a0405431b84b\" -%}\n{%- set admissionLabResults_Procalcitonin = repliesMap[admissionLabResults_Procalcitonin__path]|reply_str_value -%}\n{%- set admissionLabResults_Procalcitonin_done = \"e00fcdcc-74e2-4a59-98d5-5ceebf14e85d\" -%}\n{%- set admissionLabResults_Procalcitonin_notdone = \"689480a8-2ae3-4ef5-87e5-b92f3def81cb\" -%}\n{%- set admissionLabResults_Procalcitonin_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.43d67744-219d-4d5f-9d5d-a0405431b84b.e00fcdcc-74e2-4a59-98d5-5ceebf14e85d.db6663f1-5103-4342-8469-381da87424f4\" -%}\n{%- set admissionLabResults_Procalcitonin_value = repliesMap[admissionLabResults_Procalcitonin_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Procalcitonin_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.43d67744-219d-4d5f-9d5d-a0405431b84b.e00fcdcc-74e2-4a59-98d5-5ceebf14e85d.e8a1d938-2712-42f6-bbc0-4bc32ed31894\" -%}\n{%- set admissionLabResults_Procalcitonin_units = repliesMap[admissionLabResults_Procalcitonin_units__path]|reply_str_value -%}\n{#- CRP [mg/L] [lab-result] -#}\n{%- set admissionLabResults_CRP__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.a1b16acb-0a28-4567-9c57-c87a8d71956c\" -%}\n{%- set admissionLabResults_CRP = repliesMap[admissionLabResults_CRP__path]|reply_str_value -%}\n{%- set admissionLabResults_CRP_done = \"1ca82c2a-8129-4821-acdc-abe6905d92fe\" -%}\n{%- set admissionLabResults_CRP_notdone = \"eb23ed30-97e9-40c2-99e5-adbaba2b505a\" -%}\n{%- set admissionLabResults_CRP_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.a1b16acb-0a28-4567-9c57-c87a8d71956c.1ca82c2a-8129-4821-acdc-abe6905d92fe.5d651fed-04c9-45d2-9581-8e6791447afd\" -%}\n{%- set admissionLabResults_CRP_value = repliesMap[admissionLabResults_CRP_value__path]|reply_str_value -%}\n{%- set admissionLabResults_CRP_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.a1b16acb-0a28-4567-9c57-c87a8d71956c.1ca82c2a-8129-4821-acdc-abe6905d92fe.2ab28a6b-43e0-42d2-a150-d2a513965d63\" -%}\n{%- set admissionLabResults_CRP_units = repliesMap[admissionLabResults_CRP_units__path]|reply_str_value -%}\n{#- LDH [U/L] [lab-result] -#}\n{%- set admissionLabResults_LDH__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.ed3f0067-808f-4c10-aa0c-38ca3bb0e7c7\" -%}\n{%- set admissionLabResults_LDH = repliesMap[admissionLabResults_LDH__path]|reply_str_value -%}\n{%- set admissionLabResults_LDH_done = \"88fe42bc-2388-4dae-9629-c8a332696f89\" -%}\n{%- set admissionLabResults_LDH_notdone = \"47d8e602-d226-4f88-b586-0366377094a5\" -%}\n{%- set admissionLabResults_LDH_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.ed3f0067-808f-4c10-aa0c-38ca3bb0e7c7.88fe42bc-2388-4dae-9629-c8a332696f89.a6bee192-1570-4160-a337-d9e0cfe5955c\" -%}\n{%- set admissionLabResults_LDH_value = repliesMap[admissionLabResults_LDH_value__path]|reply_str_value -%}\n{%- set admissionLabResults_LDH_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.ed3f0067-808f-4c10-aa0c-38ca3bb0e7c7.88fe42bc-2388-4dae-9629-c8a332696f89.30458509-ae83-4f19-99ae-97b73b8a31bd\" -%}\n{%- set admissionLabResults_LDH_units = repliesMap[admissionLabResults_LDH_units__path]|reply_str_value -%}\n{#- Creatine kinase [U/L] [lab-result] -#}\n{%- set admissionLabResults_Creatine__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.6425fd5c-01cb-4724-9565-edbfd67d9e63\" -%}\n{%- set admissionLabResults_Creatine = repliesMap[admissionLabResults_Creatine__path]|reply_str_value -%}\n{%- set admissionLabResults_Creatine_done = \"b6af59b3-5977-425e-a4db-b7536bb03f50\" -%}\n{%- set admissionLabResults_Creatine_notdone = \"f0966e54-5a25-4b4f-8a6c-99c0bc80b66e\" -%}\n{%- set admissionLabResults_Creatine_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.6425fd5c-01cb-4724-9565-edbfd67d9e63.b6af59b3-5977-425e-a4db-b7536bb03f50.1c035bfd-a5e9-432c-9f22-f9b7a27df356\" -%}\n{%- set admissionLabResults_Creatine_value = repliesMap[admissionLabResults_Creatine_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Creatine_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.6425fd5c-01cb-4724-9565-edbfd67d9e63.b6af59b3-5977-425e-a4db-b7536bb03f50.4c527033-0474-4dc4-973c-cd1550995c2f\" -%}\n{%- set admissionLabResults_Creatine_units = repliesMap[admissionLabResults_Creatine_units__path]|reply_str_value -%}\n{#- Troponin [ng/mL] [lab-result] -#}\n{%- set admissionLabResults_Troponin__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.f921614d-c464-4c58-a961-e48da113b86b\" -%}\n{%- set admissionLabResults_Troponin = repliesMap[admissionLabResults_Troponin__path]|reply_str_value -%}\n{%- set admissionLabResults_Troponin_done = \"c41bd2b3-be4e-40cc-a4ae-d55b1ce659d6\" -%}\n{%- set admissionLabResults_Troponin_notdone = \"dc8e4c2c-17b3-4b58-9ea2-928e0d69bb02\" -%}\n{%- set admissionLabResults_Troponin_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.f921614d-c464-4c58-a961-e48da113b86b.c41bd2b3-be4e-40cc-a4ae-d55b1ce659d6.20248677-dfd1-4ecf-9f92-2be9a0db625f\" -%}\n{%- set admissionLabResults_Troponin_value = repliesMap[admissionLabResults_Troponin_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Troponin_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.f921614d-c464-4c58-a961-e48da113b86b.c41bd2b3-be4e-40cc-a4ae-d55b1ce659d6.870b5793-3631-4252-b43d-569e6ff1044a\" -%}\n{%- set admissionLabResults_Troponin_units = repliesMap[admissionLabResults_Troponin_units__path]|reply_str_value -%}\n{#- ESR [mm/hr] [lab-result] -#}\n{%- set admissionLabResults_ESR__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.dfb26786-39c9-43a3-9225-682da9923fa1\" -%}\n{%- set admissionLabResults_ESR = repliesMap[admissionLabResults_ESR__path]|reply_str_value -%}\n{%- set admissionLabResults_ESR_done = \"188fcab6-a0e1-4f37-a075-ad4546693e19\" -%}\n{%- set admissionLabResults_ESR_notdone = \"eac7d00d-e5d3-4afa-8a31-d4a1063f03a9\" -%}\n{%- set admissionLabResults_ESR_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.dfb26786-39c9-43a3-9225-682da9923fa1.188fcab6-a0e1-4f37-a075-ad4546693e19.5b7b64e1-e38a-4a7b-a09c-24c535ba5c2b\" -%}\n{%- set admissionLabResults_ESR_value = repliesMap[admissionLabResults_ESR_value__path]|reply_str_value -%}\n{%- set admissionLabResults_ESR_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.dfb26786-39c9-43a3-9225-682da9923fa1.188fcab6-a0e1-4f37-a075-ad4546693e19.a28af82c-de84-44e4-b3af-69db9cccd70b\" -%}\n{%- set admissionLabResults_ESR_units = repliesMap[admissionLabResults_ESR_units__path]|reply_str_value -%}\n{#- D-dimer [mg/L] [lab-result] -#}\n{%- set admissionLabResults_Ddimer__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.87e10680-a2f2-467a-b47a-3f6c3bf7ef35\" -%}\n{%- set admissionLabResults_Ddimer = repliesMap[admissionLabResults_Ddimer__path]|reply_str_value -%}\n{%- set admissionLabResults_Ddimer_done = \"ca970f62-3695-4bbc-91ce-22eadefbcbbd\" -%}\n{%- set admissionLabResults_Ddimer_notdone = \"ed587ed9-d989-41e9-9e6f-bd798d287e0a\" -%}\n{%- set admissionLabResults_Ddimer_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.87e10680-a2f2-467a-b47a-3f6c3bf7ef35.ca970f62-3695-4bbc-91ce-22eadefbcbbd.bdd53c30-feef-419c-ae3a-ac31f8ffcbfc\" -%}\n{%- set admissionLabResults_Ddimer_value = repliesMap[admissionLabResults_Ddimer_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Ddimer_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.87e10680-a2f2-467a-b47a-3f6c3bf7ef35.ca970f62-3695-4bbc-91ce-22eadefbcbbd.48d58da4-f55e-49a7-af35-5ee286420fc8\" -%}\n{%- set admissionLabResults_Ddimer_units = repliesMap[admissionLabResults_Ddimer_units__path]|reply_str_value -%}\n{#- Ferritin [ng/mL] [lab-result] -#}\n{%- set admissionLabResults_Ferritin__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.2c6f723a-4834-4b2c-bb7b-f3dc4754e734\" -%}\n{%- set admissionLabResults_Ferritin = repliesMap[admissionLabResults_Ferritin__path]|reply_str_value -%}\n{%- set admissionLabResults_Ferritin_done = \"cb18d9e4-f5b8-4909-84b9-250dfd4688b5\" -%}\n{%- set admissionLabResults_Ferritin_notdone = \"7cadb15d-e5ee-484f-9e1e-b0240fda2635\" -%}\n{%- set admissionLabResults_Ferritin_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.2c6f723a-4834-4b2c-bb7b-f3dc4754e734.cb18d9e4-f5b8-4909-84b9-250dfd4688b5.cd2d77ea-040e-47bc-b2e5-c0496654e793\" -%}\n{%- set admissionLabResults_Ferritin_value = repliesMap[admissionLabResults_Ferritin_value__path]|reply_str_value -%}\n{%- set admissionLabResults_Ferritin_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.2c6f723a-4834-4b2c-bb7b-f3dc4754e734.cb18d9e4-f5b8-4909-84b9-250dfd4688b5.a300e2cd-3ebc-4aa9-8315-0034078167fc\" -%}\n{%- set admissionLabResults_Ferritin_units = repliesMap[admissionLabResults_Ferritin_units__path]|reply_str_value -%}\n{#- IL-6 [pg/mL] [lab-result] -#}\n{%- set admissionLabResults_IL6__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.d3b8a09d-67d6-4161-ac6b-30e9568362fc\" -%}\n{%- set admissionLabResults_IL6 = repliesMap[admissionLabResults_IL6__path]|reply_str_value -%}\n{%- set admissionLabResults_IL6_done = \"ecbc2916-89dc-443a-9af8-85eca3cab650\" -%}\n{%- set admissionLabResults_IL6_notdone = \"cda85265-ee8f-49c1-9308-0045a1ee06ef\" -%}\n{%- set admissionLabResults_IL6_value__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.d3b8a09d-67d6-4161-ac6b-30e9568362fc.ecbc2916-89dc-443a-9af8-85eca3cab650.acf28346-ea21-44ea-9b8b-9adc91060b3d\" -%}\n{%- set admissionLabResults_IL6_value = repliesMap[admissionLabResults_IL6_value__path]|reply_str_value -%}\n{%- set admissionLabResults_IL6_units__path = \"49c8091d-e0aa-45e6-8615-b09bf2fb6e81.e9b64148-8c5b-4283-bac3-8ce3615cfac0.bb677473-a386-4729-b9c3-0cd5d14e1856.d3b8a09d-67d6-4161-ac6b-30e9568362fc.ecbc2916-89dc-443a-9af8-85eca3cab650.a6cf2efd-d185-4d06-9477-e360a6397e34\" -%}\n{%- set admissionLabResults_IL6_units = repliesMap[admissionLabResults_IL6_units__path]|reply_str_value -%}\n{%- set module2N__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67\" -%}\n{%- set module2N = repliesMap[module2N__path]|reply_int_value -%}\n{#- Date of follow-up [value-date] -#}\n{%- set followupDate__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.ffa0dc72-2b51-49a4-ba76-72361fcaca88\" -%}\n{%- set followupDate = repliesMap[followupDate__path]|reply_str_value -%}\n{#- Vital signs [section] -#}\n{%- set vitalSigns__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409\" -%}\n{%- set vitalSigns = repliesMap[vitalSigns__path]|reply_str_value -%}\n{%- set vitalSigns_open = \"c04c6d80-328e-4112-b3ba-1d7ec38f562f\" -%}\n{#- Temperature [°C] [value-number] -#}\n{%- set vitalSignsTemperature__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409.c04c6d80-328e-4112-b3ba-1d7ec38f562f.7eab9a30-c950-418e-8b04-4c75c8526dab\" -%}\n{%- set vitalSignsTemperature = repliesMap[vitalSignsTemperature__path]|reply_str_value -%}\n{#- Heart rate [beats/min] [value-number] -#}\n{%- set vitalSignsHeartRate__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409.c04c6d80-328e-4112-b3ba-1d7ec38f562f.51989592-519f-4445-8a52-8cfb3c319f31\" -%}\n{%- set vitalSignsHeartRate = repliesMap[vitalSignsHeartRate__path]|reply_str_value -%}\n{#- Respiratory rate [breaths/min] [value-number] -#}\n{%- set vitalSignsRespiratoryRate__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409.c04c6d80-328e-4112-b3ba-1d7ec38f562f.e1d42490-1a7e-4a7e-89f9-9129fb5d4d9a\" -%}\n{%- set vitalSignsRespiratoryRate = repliesMap[vitalSignsRespiratoryRate__path]|reply_str_value -%}\n{#- Blood preassure (systolic) [mmHg] [value-number] -#}\n{%- set vitalSignsBPSystolic__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409.c04c6d80-328e-4112-b3ba-1d7ec38f562f.137f0136-d2d7-4973-8a2a-36c4cd0ac2a8\" -%}\n{%- set vitalSignsBPSystolic = repliesMap[vitalSignsBPSystolic__path]|reply_str_value -%}\n{#- Blood preassure (diastolic) [mmHg] [value-number] -#}\n{%- set vitalSignsBPDiastolic__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409.c04c6d80-328e-4112-b3ba-1d7ec38f562f.56a45496-f871-4a6d-92dd-87d5b710ebb3\" -%}\n{%- set vitalSignsBPDiastolic = repliesMap[vitalSignsBPDiastolic__path]|reply_str_value -%}\n{#- Severe dehydration [yes-no-unknown] -#}\n{%- set vitalSignsDehydration__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409.c04c6d80-328e-4112-b3ba-1d7ec38f562f.25715e41-eb33-4463-9217-6e59f3a8df6e\" -%}\n{%- set vitalSignsDehydration = repliesMap[vitalSignsDehydration__path]|reply_str_value -%}\n{%- set vitalSignsDehydration_yes = \"fb902a71-3aa6-4a57-a25f-74e11af01e02\" -%}\n{%- set vitalSignsDehydration_no = \"921c4613-e25f-460c-b1d5-6b973ea2f444\" -%}\n{%- set vitalSignsDehydration_unknown = \"ba795b53-e4ea-4387-bda2-aab3e33c8aa3\" -%}\n{#- Sternal capillary refill time >2seconds [yes-no-unknown] -#}\n{%- set vitalSignsSternalRefill__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409.c04c6d80-328e-4112-b3ba-1d7ec38f562f.b2608593-4c34-4b30-903c-a95b2d050527\" -%}\n{%- set vitalSignsSternalRefill = repliesMap[vitalSignsSternalRefill__path]|reply_str_value -%}\n{%- set vitalSignsSternalRefill_yes = \"0dc78a3e-313d-4283-89eb-569a29f965cd\" -%}\n{%- set vitalSignsSternalRefill_no = \"af0825ac-c66c-47ec-8f75-a6fb0ad1c1ec\" -%}\n{%- set vitalSignsSternalRefill_unknown = \"ad2ab9a0-4163-4736-8488-ca40afbbc070\" -%}\n{#- Glasgow Coma Score (GCS/15) [value-number] -#}\n{%- set vitalSignsGCS__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409.c04c6d80-328e-4112-b3ba-1d7ec38f562f.a3a52c0c-c02e-4230-b0fc-6f831d680530\" -%}\n{%- set vitalSignsGCS = repliesMap[vitalSignsGCS__path]|reply_str_value -%}\n{#- Oxygen saturation (value) [%] [value-number] -#}\n{%- set vitalSignsOxygenSatValue__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409.c04c6d80-328e-4112-b3ba-1d7ec38f562f.cca3f201-13c4-4a92-ba78-a6c91d607220\" -%}\n{%- set vitalSignsOxygenSatValue = repliesMap[vitalSignsOxygenSatValue__path]|reply_str_value -%}\n{#- Oxygen saturation (condition) [options] -#}\n{%- set vitalSignsOxygenSatCond__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409.c04c6d80-328e-4112-b3ba-1d7ec38f562f.ada7404d-a678-4754-bbc2-103d1e702b4d\" -%}\n{%- set vitalSignsOxygenSatCond = repliesMap[vitalSignsOxygenSatCond__path]|reply_str_value -%}\n{%- set vitalSignsOxygenSatCond_Room = \"4a65ff92-398a-4a14-a242-949ad3043fe1\" -%}\n{%- set vitalSignsOxygenSatCond_Therapy = \"a77ed684-c7a5-43c9-be54-5e08dbbd1f77\" -%}\n{%- set vitalSignsOxygenSatCond_Unknown = \"c844b503-cc1b-4210-9554-c20c459823b1\" -%}\n{#- AVPU scale [options] -#}\n{%- set vitalSignsAVPU__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.9cf1fe99-99f4-40aa-820a-c8e495fcb409.c04c6d80-328e-4112-b3ba-1d7ec38f562f.b82d68a2-012c-4dad-bea9-dce1a6522981\" -%}\n{%- set vitalSignsAVPU = repliesMap[vitalSignsAVPU__path]|reply_str_value -%}\n{%- set vitalSignsAVPU_A = \"4ec8aa25-7bce-415c-bbb3-25d20a1ca95a\" -%}\n{%- set vitalSignsAVPU_V = \"10b58f17-d2e8-4e60-b69d-13eed4f31881\" -%}\n{%- set vitalSignsAVPU_P = \"2703a157-18e2-4409-8bd9-08af89387d96\" -%}\n{%- set vitalSignsAVPU_U = \"164df721-fb9b-48e2-94aa-8df63312c8f0\" -%}\n{#- Daily clinical features [section] -#}\n{%- set dailyFeatures__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a\" -%}\n{%- set dailyFeatures = repliesMap[dailyFeatures__path]|reply_str_value -%}\n{%- set dailyFeatures_open = \"8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5\" -%}\n{#- Cough [yes-no-unknown] -#}\n{%- set dailyFeaturesCough__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.c8657f0d-68cf-419d-85f2-2481ba36e059\" -%}\n{%- set dailyFeaturesCough = repliesMap[dailyFeaturesCough__path]|reply_str_value -%}\n{%- set dailyFeaturesCough_yes = \"9fb4f187-c1df-4682-8e83-2a4d61ce5dbd\" -%}\n{%- set dailyFeaturesCough_no = \"77087326-df65-4b33-92ad-943a911149f3\" -%}\n{%- set dailyFeaturesCough_unknown = \"6d3e9200-d466-4116-a523-ec3b389c03c1\" -%}\n{#- Cough with sputum production [yes-no-unknown] -#}\n{%- set dailyFeaturesCoughSputum__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.c8657f0d-68cf-419d-85f2-2481ba36e059.9fb4f187-c1df-4682-8e83-2a4d61ce5dbd.78309426-00e7-492a-a347-5790fee78372\" -%}\n{%- set dailyFeaturesCoughSputum = repliesMap[dailyFeaturesCoughSputum__path]|reply_str_value -%}\n{%- set dailyFeaturesCoughSputum_yes = \"2676866a-4637-430f-b820-5d173ed527fe\" -%}\n{%- set dailyFeaturesCoughSputum_no = \"e171fab7-687e-4a1e-966a-ea514b976d54\" -%}\n{%- set dailyFeaturesCoughSputum_unknown = \"db278798-785d-423c-b4ae-c2f712b5395f\" -%}\n{#- Sore throat [yes-no-unknown] -#}\n{%- set dailyFeaturesSoreThroat__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.c3bc9c00-f4f5-4cc1-99c8-8b9a71cc3ced\" -%}\n{%- set dailyFeaturesSoreThroat = repliesMap[dailyFeaturesSoreThroat__path]|reply_str_value -%}\n{%- set dailyFeaturesSoreThroat_yes = \"a61a465a-edd0-47c7-8c36-3680fe30c96d\" -%}\n{%- set dailyFeaturesSoreThroat_no = \"42ddba2e-258a-478e-9e60-7ee67ad01042\" -%}\n{%- set dailyFeaturesSoreThroat_unknown = \"0d475e14-8cf4-4684-b443-e5e3a69c4c4b\" -%}\n{#- Chest pain [yes-no-unknown] -#}\n{%- set dailyFeaturesChestPain__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.61ec2167-ada3-494b-8b50-5f119d48ed28\" -%}\n{%- set dailyFeaturesChestPain = repliesMap[dailyFeaturesChestPain__path]|reply_str_value -%}\n{%- set dailyFeaturesChestPain_yes = \"ad74a02f-2814-42e5-84e7-4461e754f292\" -%}\n{%- set dailyFeaturesChestPain_no = \"b7b0da82-4bf3-4e58-a884-6d0b306a094b\" -%}\n{%- set dailyFeaturesChestPain_unknown = \"aa3ade6b-4c4c-4bdb-bc25-5fb46a24c200\" -%}\n{#- Shortness of breath [yes-no-unknown] -#}\n{%- set dailyFeaturesShortBreath__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.5008b7ca-20a5-40ca-b825-98d072d0cddd\" -%}\n{%- set dailyFeaturesShortBreath = repliesMap[dailyFeaturesShortBreath__path]|reply_str_value -%}\n{%- set dailyFeaturesShortBreath_yes = \"33816b12-2ff3-43eb-a1cb-39e32428ffea\" -%}\n{%- set dailyFeaturesShortBreath_no = \"58640d1d-978a-421e-b3ce-ae84cba1f9d9\" -%}\n{%- set dailyFeaturesShortBreath_unknown = \"06c629c6-a28e-4a2e-ad51-44c4c5f406e9\" -%}\n{#- Loss of taste [yes-no-unknown] -#}\n{%- set dailyFeaturesLossTaste__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.0738703f-f7d7-4383-88ef-50ba909b6475\" -%}\n{%- set dailyFeaturesLossTaste = repliesMap[dailyFeaturesLossTaste__path]|reply_str_value -%}\n{%- set dailyFeaturesLossTaste_yes = \"da0b8492-5188-46eb-bb6d-edf518db9b1e\" -%}\n{%- set dailyFeaturesLossTaste_no = \"34effa21-3bfd-42f3-82b9-ea88bd579981\" -%}\n{%- set dailyFeaturesLossTaste_unknown = \"0b30fc6d-e9aa-465a-919a-3e2496730e99\" -%}\n{#- Loss of smell [yes-no-unknown] -#}\n{%- set dailyFeaturesLossSmell__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.a7c945f8-2c25-4d8f-a097-9b4b645b7372\" -%}\n{%- set dailyFeaturesLossSmell = repliesMap[dailyFeaturesLossSmell__path]|reply_str_value -%}\n{%- set dailyFeaturesLossSmell_yes = \"11fd9f66-ac78-4008-8aa9-781b62c7a714\" -%}\n{%- set dailyFeaturesLossSmell_no = \"379d1062-1b7a-4ed2-a2d0-34ad601fc7d7\" -%}\n{%- set dailyFeaturesLossSmell_unknown = \"8a9cac2c-23b7-4bf5-8e25-93490d7722d7\" -%}\n{#- Confusion [yes-no-unknown] -#}\n{%- set dailyFeaturesConfusion__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.f2f46706-9778-4dfc-89a9-dd10ae779964\" -%}\n{%- set dailyFeaturesConfusion = repliesMap[dailyFeaturesConfusion__path]|reply_str_value -%}\n{%- set dailyFeaturesConfusion_yes = \"68b3846e-fbda-4a82-a63c-997d679aaea6\" -%}\n{%- set dailyFeaturesConfusion_no = \"edc88dec-1f21-4252-b33a-b71439bbc7ee\" -%}\n{%- set dailyFeaturesConfusion_unknown = \"5156369e-7703-4207-9477-4ba021043449\" -%}\n{#- Seizures [yes-no-unknown] -#}\n{%- set dailyFeaturesSeizures__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.ea92ac14-65cc-4603-9f83-b6965e426baa\" -%}\n{%- set dailyFeaturesSeizures = repliesMap[dailyFeaturesSeizures__path]|reply_str_value -%}\n{%- set dailyFeaturesSeizures_yes = \"f883653c-8cf7-4073-9134-170a936d9e3c\" -%}\n{%- set dailyFeaturesSeizures_no = \"f8102cac-cb1b-4cc5-87fa-c35004db716d\" -%}\n{%- set dailyFeaturesSeizures_unknown = \"997df2ef-24b1-44d0-911c-8b780c0ae7ec\" -%}\n{#- Vomiting / Nausea [yes-no-unknown] -#}\n{%- set dailyFeaturesVomit__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.26a630d0-c338-4d08-9907-50f8c983b659\" -%}\n{%- set dailyFeaturesVomit = repliesMap[dailyFeaturesVomit__path]|reply_str_value -%}\n{%- set dailyFeaturesVomit_yes = \"b726dbbc-05cd-4201-801c-9ab75d6a35e7\" -%}\n{%- set dailyFeaturesVomit_no = \"049e9a37-dfba-46de-a18c-d8ce851df0e9\" -%}\n{%- set dailyFeaturesVomit_unknown = \"47c140a6-1452-4992-8932-73a58cd73ecb\" -%}\n{#- Diarrhoea [yes-no-unknown] -#}\n{%- set dailyFeaturesDiarrhoea__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.a3b88d79-a8c0-4aee-b220-9317e847072e\" -%}\n{%- set dailyFeaturesDiarrhoea = repliesMap[dailyFeaturesDiarrhoea__path]|reply_str_value -%}\n{%- set dailyFeaturesDiarrhoea_yes = \"e7dc6a7c-5f1f-4f5b-bb4c-45d03c48000e\" -%}\n{%- set dailyFeaturesDiarrhoea_no = \"093f0d53-a6c3-477d-ba3e-e675c781b33e\" -%}\n{%- set dailyFeaturesDiarrhoea_unknown = \"8776d66d-62e3-4a14-ad45-bc600c361133\" -%}\n{#- Conjunctivitis [yes-no-unknown] -#}\n{%- set dailyFeaturesConjunctivitis__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.071ea99d-9853-44c6-ac58-5a57c7533bf1\" -%}\n{%- set dailyFeaturesConjunctivitis = repliesMap[dailyFeaturesConjunctivitis__path]|reply_str_value -%}\n{%- set dailyFeaturesConjunctivitis_yes = \"1bfceee6-9ad0-4bc5-969f-d97d7d16a92a\" -%}\n{%- set dailyFeaturesConjunctivitis_no = \"10c50697-ab95-4b81-8fab-ce34f083c663\" -%}\n{%- set dailyFeaturesConjunctivitis_unknown = \"d3e3300b-0037-42c9-bfc2-727794303214\" -%}\n{#- Myalgia [yes-no-unknown] -#}\n{%- set dailyFeaturesMyalgia__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.db351db0-0ccf-452b-9c8f-6b9171ccdea4\" -%}\n{%- set dailyFeaturesMyalgia = repliesMap[dailyFeaturesMyalgia__path]|reply_str_value -%}\n{%- set dailyFeaturesMyalgia_yes = \"9e61d7a1-dd9c-4fb4-95cb-25e53f573f33\" -%}\n{%- set dailyFeaturesMyalgia_no = \"9309c61f-0a30-4bca-b4cf-68cd15f0a010\" -%}\n{%- set dailyFeaturesMyalgia_unknown = \"2b896ae4-0649-4517-a296-9d4ada1b941e\" -%}\n{#- Other [yes-no-unknown] -#}\n{%- set dailyFeaturesOther__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.3f89ed6f-63c2-4fe1-9c01-01b15b382ff7\" -%}\n{%- set dailyFeaturesOther = repliesMap[dailyFeaturesOther__path]|reply_str_value -%}\n{%- set dailyFeaturesOther_yes = \"de5af7ac-379c-44ee-a969-35639914eda9\" -%}\n{%- set dailyFeaturesOther_no = \"2c6b6804-86d9-4409-b731-3270286c4bc1\" -%}\n{%- set dailyFeaturesOther_unknown = \"a7ab19d9-b41d-4132-bb37-84eeb242b10d\" -%}\n{#- Specify [value-string] -#}\n{%- set dailyFeaturesOther_Specify__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3335e3d4-315b-484c-b79a-82bc9f85e63a.8f9b75cd-e4f9-47a8-b5f0-9eb7746007d5.3f89ed6f-63c2-4fe1-9c01-01b15b382ff7.de5af7ac-379c-44ee-a969-35639914eda9.bbad7573-2bbd-485e-9eae-20b103feb2cf\" -%}\n{%- set dailyFeaturesOther_Specify = repliesMap[dailyFeaturesOther_Specify__path]|reply_str_value -%}\n{#- Laboraty results [section] -#}\n{%- set followupLabResults__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17\" -%}\n{%- set followupLabResults = repliesMap[followupLabResults__path]|reply_str_value -%}\n{%- set followupLabResults_open = \"d4462b9f-f66a-4d44-8d01-d0cfffd850db\" -%}\n{#- Haemoglobin [g/L] [lab-result] -#}\n{%- set followupLabResults_Haemoglobin__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.c0532426-32c4-40ee-94b3-f9a4d611045d\" -%}\n{%- set followupLabResults_Haemoglobin = repliesMap[followupLabResults_Haemoglobin__path]|reply_str_value -%}\n{%- set followupLabResults_Haemoglobin_done = \"f765a09a-2251-441f-b2c4-c4f8e0b0711d\" -%}\n{%- set followupLabResults_Haemoglobin_notdone = \"ffe2e37f-b734-4440-97bf-07c8426eba91\" -%}\n{%- set followupLabResults_Haemoglobin_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.c0532426-32c4-40ee-94b3-f9a4d611045d.f765a09a-2251-441f-b2c4-c4f8e0b0711d.b663b627-0897-40d6-ad5d-6c0642804ad1\" -%}\n{%- set followupLabResults_Haemoglobin_value = repliesMap[followupLabResults_Haemoglobin_value__path]|reply_str_value -%}\n{%- set followupLabResults_Haemoglobin_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.c0532426-32c4-40ee-94b3-f9a4d611045d.f765a09a-2251-441f-b2c4-c4f8e0b0711d.4591a421-9933-498e-a502-3c446997f3e5\" -%}\n{%- set followupLabResults_Haemoglobin_units = repliesMap[followupLabResults_Haemoglobin_units__path]|reply_str_value -%}\n{#- WBC count [×10⁹/L] [lab-result] -#}\n{%- set followupLabResults_WBC__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.f5c58d0a-c2d6-43fb-9c61-84e72e5fd318\" -%}\n{%- set followupLabResults_WBC = repliesMap[followupLabResults_WBC__path]|reply_str_value -%}\n{%- set followupLabResults_WBC_done = \"708c75e1-8060-47c3-b75a-df9184cc18e5\" -%}\n{%- set followupLabResults_WBC_notdone = \"74bb9a00-c527-429b-8328-d1491ec1cdd4\" -%}\n{%- set followupLabResults_WBC_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.f5c58d0a-c2d6-43fb-9c61-84e72e5fd318.708c75e1-8060-47c3-b75a-df9184cc18e5.ed029f13-fc31-4c83-8823-7ff52f71b3e4\" -%}\n{%- set followupLabResults_WBC_value = repliesMap[followupLabResults_WBC_value__path]|reply_str_value -%}\n{%- set followupLabResults_WBC_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.f5c58d0a-c2d6-43fb-9c61-84e72e5fd318.708c75e1-8060-47c3-b75a-df9184cc18e5.dd594528-d21d-4e95-85af-28930706cf3d\" -%}\n{%- set followupLabResults_WBC_units = repliesMap[followupLabResults_WBC_units__path]|reply_str_value -%}\n{#- Haematocrit [%] [lab-result] -#}\n{%- set followupLabResults_Haematocrit__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.62899a9b-7311-4c08-8d59-720461ec299d\" -%}\n{%- set followupLabResults_Haematocrit = repliesMap[followupLabResults_Haematocrit__path]|reply_str_value -%}\n{%- set followupLabResults_Haematocrit_done = \"4ef4b085-45b5-44f0-bedb-fbf8fd2f60c1\" -%}\n{%- set followupLabResults_Haematocrit_notdone = \"fb2592c8-fba8-481d-b759-97981152e300\" -%}\n{%- set followupLabResults_Haematocrit_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.62899a9b-7311-4c08-8d59-720461ec299d.4ef4b085-45b5-44f0-bedb-fbf8fd2f60c1.59081d66-0c77-4ee4-9fb6-394f118e9778\" -%}\n{%- set followupLabResults_Haematocrit_value = repliesMap[followupLabResults_Haematocrit_value__path]|reply_str_value -%}\n{%- set followupLabResults_Haematocrit_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.62899a9b-7311-4c08-8d59-720461ec299d.4ef4b085-45b5-44f0-bedb-fbf8fd2f60c1.75393364-ef1b-4aff-bddc-e41823636389\" -%}\n{%- set followupLabResults_Haematocrit_units = repliesMap[followupLabResults_Haematocrit_units__path]|reply_str_value -%}\n{#- Platelets [×10⁹/L] [lab-result] -#}\n{%- set followupLabResults_Platelets__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.4ce02286-ecaa-423a-a664-3535f088f70d\" -%}\n{%- set followupLabResults_Platelets = repliesMap[followupLabResults_Platelets__path]|reply_str_value -%}\n{%- set followupLabResults_Platelets_done = \"6640060a-59ee-4d56-bd61-c0ac597f8cd2\" -%}\n{%- set followupLabResults_Platelets_notdone = \"6ffa74a4-e005-41fe-a578-7dbb49d356de\" -%}\n{%- set followupLabResults_Platelets_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.4ce02286-ecaa-423a-a664-3535f088f70d.6640060a-59ee-4d56-bd61-c0ac597f8cd2.b16e7c59-a7f1-461d-981b-e7430c79436c\" -%}\n{%- set followupLabResults_Platelets_value = repliesMap[followupLabResults_Platelets_value__path]|reply_str_value -%}\n{%- set followupLabResults_Platelets_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.4ce02286-ecaa-423a-a664-3535f088f70d.6640060a-59ee-4d56-bd61-c0ac597f8cd2.0354562f-7563-4c80-92a2-5a8eaf715a22\" -%}\n{%- set followupLabResults_Platelets_units = repliesMap[followupLabResults_Platelets_units__path]|reply_str_value -%}\n{#- APTT/APTR [lab-result] -#}\n{%- set followupLabResults_APTT__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.74beda65-f2c0-4277-a707-e6e50dbad371\" -%}\n{%- set followupLabResults_APTT = repliesMap[followupLabResults_APTT__path]|reply_str_value -%}\n{%- set followupLabResults_APTT_done = \"165f0816-a297-4a00-8dc3-232208003338\" -%}\n{%- set followupLabResults_APTT_notdone = \"2ea27007-32c1-4a17-a647-b6753c5bb07d\" -%}\n{%- set followupLabResults_APTT_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.74beda65-f2c0-4277-a707-e6e50dbad371.165f0816-a297-4a00-8dc3-232208003338.65555ea8-bfec-452b-a2a8-e9a1ecc8ae9b\" -%}\n{%- set followupLabResults_APTT_value = repliesMap[followupLabResults_APTT_value__path]|reply_str_value -%}\n{%- set followupLabResults_APTT_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.74beda65-f2c0-4277-a707-e6e50dbad371.165f0816-a297-4a00-8dc3-232208003338.e26db496-46ac-432f-afc3-81548022eef0\" -%}\n{%- set followupLabResults_APTT_units = repliesMap[followupLabResults_APTT_units__path]|reply_str_value -%}\n{#- PT [seconds] [lab-result] -#}\n{%- set followupLabResults_PT__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.1375dfc2-cc61-4b0d-9f6e-f250af5551ea\" -%}\n{%- set followupLabResults_PT = repliesMap[followupLabResults_PT__path]|reply_str_value -%}\n{%- set followupLabResults_PT_done = \"42eb78c5-439a-4a2d-bd20-9ff24a7a10aa\" -%}\n{%- set followupLabResults_PT_notdone = \"0ee40e14-ccd1-42f6-aeae-a7a764622d42\" -%}\n{%- set followupLabResults_PT_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.1375dfc2-cc61-4b0d-9f6e-f250af5551ea.42eb78c5-439a-4a2d-bd20-9ff24a7a10aa.d1ef1206-f996-40da-9dad-f5f1ac785f69\" -%}\n{%- set followupLabResults_PT_value = repliesMap[followupLabResults_PT_value__path]|reply_str_value -%}\n{%- set followupLabResults_PT_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.1375dfc2-cc61-4b0d-9f6e-f250af5551ea.42eb78c5-439a-4a2d-bd20-9ff24a7a10aa.a649b16d-83e5-4382-80ee-f05757250ecd\" -%}\n{%- set followupLabResults_PT_units = repliesMap[followupLabResults_PT_units__path]|reply_str_value -%}\n{#- INR [lab-result] -#}\n{%- set followupLabResults_INR__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.ebda164e-ba2c-4f12-9ef4-54262aa09095\" -%}\n{%- set followupLabResults_INR = repliesMap[followupLabResults_INR__path]|reply_str_value -%}\n{%- set followupLabResults_INR_done = \"8a9d6fe4-e358-4436-8055-3e25b8210566\" -%}\n{%- set followupLabResults_INR_notdone = \"15117faf-f3e2-40af-a6c3-a0e7f7cd6039\" -%}\n{%- set followupLabResults_INR_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.ebda164e-ba2c-4f12-9ef4-54262aa09095.8a9d6fe4-e358-4436-8055-3e25b8210566.760de96d-0a19-4f33-bee3-02bf0b6f2f62\" -%}\n{%- set followupLabResults_INR_value = repliesMap[followupLabResults_INR_value__path]|reply_str_value -%}\n{%- set followupLabResults_INR_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.ebda164e-ba2c-4f12-9ef4-54262aa09095.8a9d6fe4-e358-4436-8055-3e25b8210566.e6e4bbbb-2e9f-4127-847e-02ffa91a639c\" -%}\n{%- set followupLabResults_INR_units = repliesMap[followupLabResults_INR_units__path]|reply_str_value -%}\n{#- ALT/SGPT [U/L] [lab-result] -#}\n{%- set followupLabResults_ALT__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.bab7677e-e3a5-48e9-baba-2232372f2916\" -%}\n{%- set followupLabResults_ALT = repliesMap[followupLabResults_ALT__path]|reply_str_value -%}\n{%- set followupLabResults_ALT_done = \"d82e8f65-0aa7-4e45-8092-a1ba51f4fa08\" -%}\n{%- set followupLabResults_ALT_notdone = \"1d136364-843c-498d-8019-eb7f441c4d41\" -%}\n{%- set followupLabResults_ALT_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.bab7677e-e3a5-48e9-baba-2232372f2916.d82e8f65-0aa7-4e45-8092-a1ba51f4fa08.d19f6fb0-4139-4a25-abb1-6079ad8a330c\" -%}\n{%- set followupLabResults_ALT_value = repliesMap[followupLabResults_ALT_value__path]|reply_str_value -%}\n{%- set followupLabResults_ALT_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.bab7677e-e3a5-48e9-baba-2232372f2916.d82e8f65-0aa7-4e45-8092-a1ba51f4fa08.dab30624-a51c-4d28-9311-4706870a7c1c\" -%}\n{%- set followupLabResults_ALT_units = repliesMap[followupLabResults_ALT_units__path]|reply_str_value -%}\n{#- Total bilirubin [µmol/L] [lab-result] -#}\n{%- set followupLabResults_Bilirubin__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.df942928-ec46-4abd-9dc5-040d2cddef9e\" -%}\n{%- set followupLabResults_Bilirubin = repliesMap[followupLabResults_Bilirubin__path]|reply_str_value -%}\n{%- set followupLabResults_Bilirubin_done = \"65efe8f6-1d32-4644-b23f-c4a7b51e48e1\" -%}\n{%- set followupLabResults_Bilirubin_notdone = \"6c4d77a8-9149-4947-8f9b-373798f951f7\" -%}\n{%- set followupLabResults_Bilirubin_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.df942928-ec46-4abd-9dc5-040d2cddef9e.65efe8f6-1d32-4644-b23f-c4a7b51e48e1.485741d2-9c07-42a0-968c-139dbc6c3cea\" -%}\n{%- set followupLabResults_Bilirubin_value = repliesMap[followupLabResults_Bilirubin_value__path]|reply_str_value -%}\n{%- set followupLabResults_Bilirubin_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.df942928-ec46-4abd-9dc5-040d2cddef9e.65efe8f6-1d32-4644-b23f-c4a7b51e48e1.1f558e93-6436-41e8-9f62-7f3e0bc67a5d\" -%}\n{%- set followupLabResults_Bilirubin_units = repliesMap[followupLabResults_Bilirubin_units__path]|reply_str_value -%}\n{#- AST/SGOT [U/L] [lab-result] -#}\n{%- set followupLabResults_AST__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.4afd084b-19e9-44b0-8396-4c2802c98602\" -%}\n{%- set followupLabResults_AST = repliesMap[followupLabResults_AST__path]|reply_str_value -%}\n{%- set followupLabResults_AST_done = \"0011698a-e208-4f52-a848-3acc2bba4eef\" -%}\n{%- set followupLabResults_AST_notdone = \"c0c77ae7-12bb-4fa3-adeb-4997c6ac2dbd\" -%}\n{%- set followupLabResults_AST_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.4afd084b-19e9-44b0-8396-4c2802c98602.0011698a-e208-4f52-a848-3acc2bba4eef.c962c0cd-8267-4ba1-a235-b740577e432e\" -%}\n{%- set followupLabResults_AST_value = repliesMap[followupLabResults_AST_value__path]|reply_str_value -%}\n{%- set followupLabResults_AST_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.4afd084b-19e9-44b0-8396-4c2802c98602.0011698a-e208-4f52-a848-3acc2bba4eef.97f815e8-930c-4033-ab39-5a3fd38609c1\" -%}\n{%- set followupLabResults_AST_units = repliesMap[followupLabResults_AST_units__path]|reply_str_value -%}\n{#- Urea (BUN) [mmol/L] [lab-result] -#}\n{%- set followupLabResults_Urea__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.8a307038-4021-4f77-a39a-a36dfaee6224\" -%}\n{%- set followupLabResults_Urea = repliesMap[followupLabResults_Urea__path]|reply_str_value -%}\n{%- set followupLabResults_Urea_done = \"037bdc47-6d60-46dc-a055-2ea682f209e8\" -%}\n{%- set followupLabResults_Urea_notdone = \"bf9d4c9f-8364-493e-9ebc-9e9e5de15a3d\" -%}\n{%- set followupLabResults_Urea_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.8a307038-4021-4f77-a39a-a36dfaee6224.037bdc47-6d60-46dc-a055-2ea682f209e8.a032c494-bf74-4d9b-920e-03303ce7fafd\" -%}\n{%- set followupLabResults_Urea_value = repliesMap[followupLabResults_Urea_value__path]|reply_str_value -%}\n{%- set followupLabResults_Urea_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.8a307038-4021-4f77-a39a-a36dfaee6224.037bdc47-6d60-46dc-a055-2ea682f209e8.e107669b-8591-4813-9a42-4fafd12e9cf6\" -%}\n{%- set followupLabResults_Urea_units = repliesMap[followupLabResults_Urea_units__path]|reply_str_value -%}\n{#- Lactate [mmol/L] [lab-result] -#}\n{%- set followupLabResults_Lactate__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.f63bbed0-a243-4cdd-897e-9835f5ac539c\" -%}\n{%- set followupLabResults_Lactate = repliesMap[followupLabResults_Lactate__path]|reply_str_value -%}\n{%- set followupLabResults_Lactate_done = \"f34b596c-e2ce-48db-9b66-9cdbe2d64612\" -%}\n{%- set followupLabResults_Lactate_notdone = \"0e363259-cc2c-433b-8a46-17abf37c6565\" -%}\n{%- set followupLabResults_Lactate_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.f63bbed0-a243-4cdd-897e-9835f5ac539c.f34b596c-e2ce-48db-9b66-9cdbe2d64612.2b2cc5ac-ab25-4c1e-8fa6-b7c501ab83b6\" -%}\n{%- set followupLabResults_Lactate_value = repliesMap[followupLabResults_Lactate_value__path]|reply_str_value -%}\n{%- set followupLabResults_Lactate_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.f63bbed0-a243-4cdd-897e-9835f5ac539c.f34b596c-e2ce-48db-9b66-9cdbe2d64612.8171c6c1-baa2-491a-af9b-80db8b7fd6f3\" -%}\n{%- set followupLabResults_Lactate_units = repliesMap[followupLabResults_Lactate_units__path]|reply_str_value -%}\n{#- Creatinine [μmol/L] [lab-result] -#}\n{%- set followupLabResults_Creatinine__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.5956b4de-eefe-4160-a674-d780d14bde0e\" -%}\n{%- set followupLabResults_Creatinine = repliesMap[followupLabResults_Creatinine__path]|reply_str_value -%}\n{%- set followupLabResults_Creatinine_done = \"16de9e3a-5fbf-47f9-8de9-690055cc6fd7\" -%}\n{%- set followupLabResults_Creatinine_notdone = \"947079e5-0bc5-43d2-927b-180c448cc349\" -%}\n{%- set followupLabResults_Creatinine_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.5956b4de-eefe-4160-a674-d780d14bde0e.16de9e3a-5fbf-47f9-8de9-690055cc6fd7.b722a0b1-1ca6-480a-9876-a8c3cc0b3604\" -%}\n{%- set followupLabResults_Creatinine_value = repliesMap[followupLabResults_Creatinine_value__path]|reply_str_value -%}\n{%- set followupLabResults_Creatinine_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.5956b4de-eefe-4160-a674-d780d14bde0e.16de9e3a-5fbf-47f9-8de9-690055cc6fd7.09ff15ba-cd13-42c5-b40a-3a7dec2a5814\" -%}\n{%- set followupLabResults_Creatinine_units = repliesMap[followupLabResults_Creatinine_units__path]|reply_str_value -%}\n{#- Sodium [mEq/L] [lab-result] -#}\n{%- set followupLabResults_Sodium__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.e9dc63bc-0c1b-4473-9a62-bda314725792\" -%}\n{%- set followupLabResults_Sodium = repliesMap[followupLabResults_Sodium__path]|reply_str_value -%}\n{%- set followupLabResults_Sodium_done = \"2a9011a5-0c43-4101-ba87-9314dde8fced\" -%}\n{%- set followupLabResults_Sodium_notdone = \"dcde460a-4a86-4693-9e06-b667614fdb98\" -%}\n{%- set followupLabResults_Sodium_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.e9dc63bc-0c1b-4473-9a62-bda314725792.2a9011a5-0c43-4101-ba87-9314dde8fced.5dfe69cd-4150-4b76-8902-9f3252500ba2\" -%}\n{%- set followupLabResults_Sodium_value = repliesMap[followupLabResults_Sodium_value__path]|reply_str_value -%}\n{%- set followupLabResults_Sodium_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.e9dc63bc-0c1b-4473-9a62-bda314725792.2a9011a5-0c43-4101-ba87-9314dde8fced.a5443db2-db10-4dea-9271-a0ab59d6e0f5\" -%}\n{%- set followupLabResults_Sodium_units = repliesMap[followupLabResults_Sodium_units__path]|reply_str_value -%}\n{#- Potassium [mEq/L] [lab-result] -#}\n{%- set followupLabResults_Potassium__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.10a09314-eea6-4c8b-a8ad-a1983d52fba2\" -%}\n{%- set followupLabResults_Potassium = repliesMap[followupLabResults_Potassium__path]|reply_str_value -%}\n{%- set followupLabResults_Potassium_done = \"400ee5c3-7e49-4494-87dd-032ac1c8663e\" -%}\n{%- set followupLabResults_Potassium_notdone = \"b3a9cb0f-0931-4fbe-a6e9-5c8b49bcfcee\" -%}\n{%- set followupLabResults_Potassium_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.10a09314-eea6-4c8b-a8ad-a1983d52fba2.400ee5c3-7e49-4494-87dd-032ac1c8663e.bb37b943-d3ff-48e4-ac8c-42c68a6a4cf1\" -%}\n{%- set followupLabResults_Potassium_value = repliesMap[followupLabResults_Potassium_value__path]|reply_str_value -%}\n{%- set followupLabResults_Potassium_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.10a09314-eea6-4c8b-a8ad-a1983d52fba2.400ee5c3-7e49-4494-87dd-032ac1c8663e.17f49bc7-c8ed-4b64-9f69-864195ca737e\" -%}\n{%- set followupLabResults_Potassium_units = repliesMap[followupLabResults_Potassium_units__path]|reply_str_value -%}\n{#- Procalcitonin [ng/mL] [lab-result] -#}\n{%- set followupLabResults_Procalcitonin__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.4692a3d9-b345-4922-b804-99df521f3f7d\" -%}\n{%- set followupLabResults_Procalcitonin = repliesMap[followupLabResults_Procalcitonin__path]|reply_str_value -%}\n{%- set followupLabResults_Procalcitonin_done = \"45da4395-cc67-435c-a946-7826fbc434c3\" -%}\n{%- set followupLabResults_Procalcitonin_notdone = \"cd4bd1ff-f4c4-4873-ae14-3a926b8ee598\" -%}\n{%- set followupLabResults_Procalcitonin_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.4692a3d9-b345-4922-b804-99df521f3f7d.45da4395-cc67-435c-a946-7826fbc434c3.c0abd293-70c0-4602-8e29-e182c2d28374\" -%}\n{%- set followupLabResults_Procalcitonin_value = repliesMap[followupLabResults_Procalcitonin_value__path]|reply_str_value -%}\n{%- set followupLabResults_Procalcitonin_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.4692a3d9-b345-4922-b804-99df521f3f7d.45da4395-cc67-435c-a946-7826fbc434c3.2af5ae96-f42d-4065-83c4-38264b62fdfc\" -%}\n{%- set followupLabResults_Procalcitonin_units = repliesMap[followupLabResults_Procalcitonin_units__path]|reply_str_value -%}\n{#- CRP [mg/L] [lab-result] -#}\n{%- set followupLabResults_CRP__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.90a6bff0-e2c3-473e-b549-ce0585695a82\" -%}\n{%- set followupLabResults_CRP = repliesMap[followupLabResults_CRP__path]|reply_str_value -%}\n{%- set followupLabResults_CRP_done = \"d181be97-4f7b-466e-a75d-d2152a0b674a\" -%}\n{%- set followupLabResults_CRP_notdone = \"438b515b-bfc9-413c-8b54-fa8f08eeefbd\" -%}\n{%- set followupLabResults_CRP_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.90a6bff0-e2c3-473e-b549-ce0585695a82.d181be97-4f7b-466e-a75d-d2152a0b674a.7d45516a-d20e-4f2c-960b-17768943a033\" -%}\n{%- set followupLabResults_CRP_value = repliesMap[followupLabResults_CRP_value__path]|reply_str_value -%}\n{%- set followupLabResults_CRP_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.90a6bff0-e2c3-473e-b549-ce0585695a82.d181be97-4f7b-466e-a75d-d2152a0b674a.047f8d9f-9faa-4d62-a45c-fca07ce97440\" -%}\n{%- set followupLabResults_CRP_units = repliesMap[followupLabResults_CRP_units__path]|reply_str_value -%}\n{#- LDH [U/L] [lab-result] -#}\n{%- set followupLabResults_LDH__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.59060352-739a-49c4-8409-9e797479edef\" -%}\n{%- set followupLabResults_LDH = repliesMap[followupLabResults_LDH__path]|reply_str_value -%}\n{%- set followupLabResults_LDH_done = \"5a609d92-540c-495f-9820-18e12fa63c1b\" -%}\n{%- set followupLabResults_LDH_notdone = \"79979cca-10de-40f5-8710-d5b8154f428e\" -%}\n{%- set followupLabResults_LDH_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.59060352-739a-49c4-8409-9e797479edef.5a609d92-540c-495f-9820-18e12fa63c1b.327ade9b-0d45-41f0-b1bd-3a520b0e1507\" -%}\n{%- set followupLabResults_LDH_value = repliesMap[followupLabResults_LDH_value__path]|reply_str_value -%}\n{%- set followupLabResults_LDH_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.59060352-739a-49c4-8409-9e797479edef.5a609d92-540c-495f-9820-18e12fa63c1b.10554eb5-31fd-4cc3-a75d-b75e049aefd3\" -%}\n{%- set followupLabResults_LDH_units = repliesMap[followupLabResults_LDH_units__path]|reply_str_value -%}\n{#- Creatine kinase [U/L] [lab-result] -#}\n{%- set followupLabResults_Creatine__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.b8c7cb1f-bc70-4d37-a786-77d034ed51f9\" -%}\n{%- set followupLabResults_Creatine = repliesMap[followupLabResults_Creatine__path]|reply_str_value -%}\n{%- set followupLabResults_Creatine_done = \"406cc170-6df8-4454-aff3-c3fa7370dcf4\" -%}\n{%- set followupLabResults_Creatine_notdone = \"fe59deb0-d333-43ce-9709-499dace48e44\" -%}\n{%- set followupLabResults_Creatine_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.b8c7cb1f-bc70-4d37-a786-77d034ed51f9.406cc170-6df8-4454-aff3-c3fa7370dcf4.02236057-f162-4493-af79-638761ec151b\" -%}\n{%- set followupLabResults_Creatine_value = repliesMap[followupLabResults_Creatine_value__path]|reply_str_value -%}\n{%- set followupLabResults_Creatine_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.b8c7cb1f-bc70-4d37-a786-77d034ed51f9.406cc170-6df8-4454-aff3-c3fa7370dcf4.a6b0bbab-28a2-4dae-8362-7bb7d37c59bd\" -%}\n{%- set followupLabResults_Creatine_units = repliesMap[followupLabResults_Creatine_units__path]|reply_str_value -%}\n{#- Troponin [ng/mL] [lab-result] -#}\n{%- set followupLabResults_Troponin__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.a97759e1-f94e-4c42-b2d7-b9509a914b17\" -%}\n{%- set followupLabResults_Troponin = repliesMap[followupLabResults_Troponin__path]|reply_str_value -%}\n{%- set followupLabResults_Troponin_done = \"074f74dc-dfc7-4185-8ddb-bafbef5f103b\" -%}\n{%- set followupLabResults_Troponin_notdone = \"ce7f16a7-f9ea-4b2e-b6d8-bbf5ef46151c\" -%}\n{%- set followupLabResults_Troponin_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.a97759e1-f94e-4c42-b2d7-b9509a914b17.074f74dc-dfc7-4185-8ddb-bafbef5f103b.aa75b91f-e0c1-4ae2-9ac5-0d63534a8991\" -%}\n{%- set followupLabResults_Troponin_value = repliesMap[followupLabResults_Troponin_value__path]|reply_str_value -%}\n{%- set followupLabResults_Troponin_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.a97759e1-f94e-4c42-b2d7-b9509a914b17.074f74dc-dfc7-4185-8ddb-bafbef5f103b.747aa14c-b0f3-480c-a6ed-b31acbea319d\" -%}\n{%- set followupLabResults_Troponin_units = repliesMap[followupLabResults_Troponin_units__path]|reply_str_value -%}\n{#- ESR [mm/hr] [lab-result] -#}\n{%- set followupLabResults_ESR__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.a8d35727-5e97-462a-b081-38968119f0c1\" -%}\n{%- set followupLabResults_ESR = repliesMap[followupLabResults_ESR__path]|reply_str_value -%}\n{%- set followupLabResults_ESR_done = \"57140cf4-d1e0-412c-aaf1-eb0ac7c65294\" -%}\n{%- set followupLabResults_ESR_notdone = \"b72d0fb9-c5ea-40d2-8f51-7705538c2358\" -%}\n{%- set followupLabResults_ESR_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.a8d35727-5e97-462a-b081-38968119f0c1.57140cf4-d1e0-412c-aaf1-eb0ac7c65294.6f907b2d-ad62-43b1-a68d-e9f7851aee55\" -%}\n{%- set followupLabResults_ESR_value = repliesMap[followupLabResults_ESR_value__path]|reply_str_value -%}\n{%- set followupLabResults_ESR_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.a8d35727-5e97-462a-b081-38968119f0c1.57140cf4-d1e0-412c-aaf1-eb0ac7c65294.52c97aca-8f18-4610-ae45-8e3c8ae71e7e\" -%}\n{%- set followupLabResults_ESR_units = repliesMap[followupLabResults_ESR_units__path]|reply_str_value -%}\n{#- D-dimer [mg/L] [lab-result] -#}\n{%- set followupLabResults_Ddimer__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.38ccd98f-495d-48bf-a78e-6fe14c80f0c5\" -%}\n{%- set followupLabResults_Ddimer = repliesMap[followupLabResults_Ddimer__path]|reply_str_value -%}\n{%- set followupLabResults_Ddimer_done = \"98af8bef-5522-4e2f-a5c7-97828cfb049a\" -%}\n{%- set followupLabResults_Ddimer_notdone = \"bf631cbe-2a83-45db-af59-2ab0dff3bf59\" -%}\n{%- set followupLabResults_Ddimer_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.38ccd98f-495d-48bf-a78e-6fe14c80f0c5.98af8bef-5522-4e2f-a5c7-97828cfb049a.bc60a26f-826c-4796-a0d0-748824bbd23c\" -%}\n{%- set followupLabResults_Ddimer_value = repliesMap[followupLabResults_Ddimer_value__path]|reply_str_value -%}\n{%- set followupLabResults_Ddimer_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.38ccd98f-495d-48bf-a78e-6fe14c80f0c5.98af8bef-5522-4e2f-a5c7-97828cfb049a.f675c493-05ae-4cca-9b73-70de108a8c77\" -%}\n{%- set followupLabResults_Ddimer_units = repliesMap[followupLabResults_Ddimer_units__path]|reply_str_value -%}\n{#- Ferritin [ng/mL] [lab-result] -#}\n{%- set followupLabResults_Ferritin__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.a4f8b2c7-564a-49ab-9271-a1c8520ab971\" -%}\n{%- set followupLabResults_Ferritin = repliesMap[followupLabResults_Ferritin__path]|reply_str_value -%}\n{%- set followupLabResults_Ferritin_done = \"d356f154-5105-479e-b653-58c15ff56c38\" -%}\n{%- set followupLabResults_Ferritin_notdone = \"fd21c913-6834-4b7e-8939-f44e842f9ab4\" -%}\n{%- set followupLabResults_Ferritin_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.a4f8b2c7-564a-49ab-9271-a1c8520ab971.d356f154-5105-479e-b653-58c15ff56c38.1bc05cfb-7d3c-4ef5-aa79-f1196094eb77\" -%}\n{%- set followupLabResults_Ferritin_value = repliesMap[followupLabResults_Ferritin_value__path]|reply_str_value -%}\n{%- set followupLabResults_Ferritin_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.a4f8b2c7-564a-49ab-9271-a1c8520ab971.d356f154-5105-479e-b653-58c15ff56c38.b230f971-3fcc-4914-9f0a-c6d234842b25\" -%}\n{%- set followupLabResults_Ferritin_units = repliesMap[followupLabResults_Ferritin_units__path]|reply_str_value -%}\n{#- IL-6 [pg/mL] [lab-result] -#}\n{%- set followupLabResults_IL6__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.8a589497-7733-49b0-8df0-df1770c7070e\" -%}\n{%- set followupLabResults_IL6 = repliesMap[followupLabResults_IL6__path]|reply_str_value -%}\n{%- set followupLabResults_IL6_done = \"8e7c5cfa-7340-409b-9890-bad43ecb117f\" -%}\n{%- set followupLabResults_IL6_notdone = \"5c7118cf-60a1-4e7a-9695-47a809d35311\" -%}\n{%- set followupLabResults_IL6_value__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.8a589497-7733-49b0-8df0-df1770c7070e.8e7c5cfa-7340-409b-9890-bad43ecb117f.5fc295de-bb11-4316-aaa1-661809952a58\" -%}\n{%- set followupLabResults_IL6_value = repliesMap[followupLabResults_IL6_value__path]|reply_str_value -%}\n{%- set followupLabResults_IL6_units__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.3202dada-b79f-4760-bc99-ce6eb0c98f17.d4462b9f-f66a-4d44-8d01-d0cfffd850db.8a589497-7733-49b0-8df0-df1770c7070e.8e7c5cfa-7340-409b-9890-bad43ecb117f.ad3d1de8-2745-4b6f-b713-c45f147d3662\" -%}\n{%- set followupLabResults_IL6_units = repliesMap[followupLabResults_IL6_units__path]|reply_str_value -%}\n{#- Medication [section] -#}\n{%- set followupMedication__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8\" -%}\n{%- set followupMedication = repliesMap[followupMedication__path]|reply_str_value -%}\n{%- set followupMedication_open = \"6f2b6cb5-4ca6-4451-90ec-78578dff5f9b\" -%}\n{#- Oral/orogastric fluids? [yes-no-unknown] -#}\n{%- set followupMedicationOralFluids__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.52ecee9f-ef97-4a74-9e0d-d2a0d6b94d8a\" -%}\n{%- set followupMedicationOralFluids = repliesMap[followupMedicationOralFluids__path]|reply_str_value -%}\n{%- set followupMedicationOralFluids_yes = \"ebd62202-3157-4097-b43a-5b3a8403c20a\" -%}\n{%- set followupMedicationOralFluids_no = \"f2a1d7d7-fde6-48d7-a720-061081e26074\" -%}\n{%- set followupMedicationOralFluids_unknown = \"618ad3c7-74e6-42a9-bea5-0a6e66556f65\" -%}\n{#- Intravenous fluids? [yes-no-unknown] -#}\n{%- set followupMedicationIntravenousFluids__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.66a4bd1a-bcb1-4ec9-bc26-5f0cecfa30ca\" -%}\n{%- set followupMedicationIntravenousFluids = repliesMap[followupMedicationIntravenousFluids__path]|reply_str_value -%}\n{%- set followupMedicationIntravenousFluids_yes = \"c5af349e-a781-4313-89f4-9e812216f124\" -%}\n{%- set followupMedicationIntravenousFluids_no = \"7ef79c24-0484-42e2-900c-85b8d79d298e\" -%}\n{%- set followupMedicationIntravenousFluids_unknown = \"bede139c-bf58-40c3-bcb0-7e83242c2d5f\" -%}\n{#- Antiviral? [options] -#}\n{%- set followupMedicationAntiviral__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.6b5e25ec-9a37-495c-a554-34abc645109d\" -%}\n{%- set followupMedicationAntiviral = repliesMap[followupMedicationAntiviral__path]|reply_str_value -%}\n{%- set followupMedicationAntiviral_yes = \"c15ad476-ff8d-4a0f-ba56-c522acba4765\" -%}\n{%- set followupMedicationAntiviral_no = \"77c53a1f-732e-4114-a490-3f759c35641b\" -%}\n{%- set followupMedicationAntiviral_unknown = \"ea0793dd-f518-41e8-b17b-76ed789e0e06\" -%}\n{#- Specify [multichoice-list] -#}\n{%- set followupMedicationAntiviralSpecifyN__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.6b5e25ec-9a37-495c-a554-34abc645109d.c15ad476-ff8d-4a0f-ba56-c522acba4765.d9173f13-c337-4a0e-bfe8-2e17e25791ed\" -%}\n{%- set followupMedicationAntiviralSpecifyN = repliesMap[followupMedicationAntiviralSpecify__path]|reply_int_value -%}\n{#- Specify [multichoice-options] -#}\n{%- set followupMedicationAntiviralSpecify__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.6b5e25ec-9a37-495c-a554-34abc645109d.c15ad476-ff8d-4a0f-ba56-c522acba4765.d9173f13-c337-4a0e-bfe8-2e17e25791ed.index_$followupMedicationAntiviralSpecify.9e6c9b4b-2ca6-4f29-99b9-58bff3ce0e53\" -%}\n{%- set followupMedicationAntiviralSpecify = repliesMap[followupMedicationAntiviralSpecify__path]|reply_str_value -%}\n{%- set followupMedicationAntiviralSpecify_Ribavirin = \"63e45bb9-659f-4c1d-b77a-9e2bdc6a71e8\" -%}\n{%- set followupMedicationAntiviralSpecify_Lopinavir = \"dd56450b-b18d-467b-9a61-cf24fe947683\" -%}\n{%- set followupMedicationAntiviralSpecify_Inhibitor = \"41af8a16-d266-44a7-98b5-8305ff04c996\" -%}\n{%- set followupMedicationAntiviralSpecify_IntAlpha = \"0002ddb6-8401-4b7c-881f-fa3bb6ea97d8\" -%}\n{%- set followupMedicationAntiviralSpecify_IntBeta = \"4712864c-cb67-41da-bed2-083f717a8ff8\" -%}\n{%- set followupMedicationAntiviralSpecify_Other = \"65b95e6d-5cdb-4c78-a57e-3e5f60eac18a\" -%}\n{#- Specify [value-string] -#}\n{%- set followupMedicationAntiviralSpecify_Other_Specify__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.6b5e25ec-9a37-495c-a554-34abc645109d.c15ad476-ff8d-4a0f-ba56-c522acba4765.d9173f13-c337-4a0e-bfe8-2e17e25791ed.index_$followupMedicationAntiviralSpecify.9e6c9b4b-2ca6-4f29-99b9-58bff3ce0e53.65b95e6d-5cdb-4c78-a57e-3e5f60eac18a.0bdab885-507c-42f6-bc64-8a711eea9bd1\" -%}\n{%- set followupMedicationAntiviralSpecify_Other_Specify = repliesMap[followupMedicationAntiviralSpecify_Other_Specify__path]|reply_str_value -%}\n{#- Corticosteroid? [options] -#}\n{%- set followupMedicationCorticosteroid__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.56f9ca08-0dd0-45d6-aeb1-b67a8b86b12a\" -%}\n{%- set followupMedicationCorticosteroid = repliesMap[followupMedicationCorticosteroid__path]|reply_str_value -%}\n{%- set followupMedicationCorticosteroid_yes = \"3c99ed48-1f57-4a08-b09c-2b7656a93ba6\" -%}\n{%- set followupMedicationCorticosteroid_no = \"83d4a1c9-fd98-458e-8d36-b516bc015ea7\" -%}\n{%- set followupMedicationCorticosteroid_unknown = \"3d4230e3-09c9-44fc-acfa-b1f95f050b87\" -%}\n{#- Route [multichoice-list] -#}\n{%- set followupMedicationCorticosteroidRouteN__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.56f9ca08-0dd0-45d6-aeb1-b67a8b86b12a.3c99ed48-1f57-4a08-b09c-2b7656a93ba6.9e55224d-6347-42c9-a984-7c21c5db8727\" -%}\n{%- set followupMedicationCorticosteroidRouteN = repliesMap[followupMedicationCorticosteroidRoute__path]|reply_str_value -%}\n{#- Route [multichoice-options] -#}\n{%- set followupMedicationCorticosteroidRoute__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.56f9ca08-0dd0-45d6-aeb1-b67a8b86b12a.3c99ed48-1f57-4a08-b09c-2b7656a93ba6.9e55224d-6347-42c9-a984-7c21c5db8727.index_$followupMedicationCorticosteroidRoute.eed59c02-0f4e-4eaa-9806-66ccedb81d9d\" -%}\n{%- set followupMedicationCorticosteroidRoute = repliesMap[followupMedicationCorticosteroidRoute__path]|reply_str_value -%}\n{%- set followupMedicationCorticosteroidRoute_Oral = \"ddc59679-5207-4642-8144-a9605469b05a\" -%}\n{%- set followupMedicationCorticosteroidRoute_Intravenous = \"fc5d779b-cb1a-474c-adbb-ffa4fa490494\" -%}\n{%- set followupMedicationCorticosteroidRoute_Inhaled = \"11d69975-e1c7-46b3-9e56-f5ebcca92977\" -%}\n{#- Agent [value-string] -#}\n{%- set followupMedicationCorticosteroidAgent__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.56f9ca08-0dd0-45d6-aeb1-b67a8b86b12a.3c99ed48-1f57-4a08-b09c-2b7656a93ba6.56344b60-b6e6-4ec0-9c66-9142a3d02750\" -%}\n{%- set followupMedicationCorticosteroidAgent = repliesMap[followupMedicationCorticosteroidAgent__path]|reply_str_value -%}\n{#- Maximum daily dose [value-string] -#}\n{%- set followupMedicationCorticosteroidDose__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.56f9ca08-0dd0-45d6-aeb1-b67a8b86b12a.3c99ed48-1f57-4a08-b09c-2b7656a93ba6.51543edf-d0f2-4ce4-8e95-545fa17dd7ba\" -%}\n{%- set followupMedicationCorticosteroidDose = repliesMap[followupMedicationCorticosteroidDose__path]|reply_str_value -%}\n{#- Antibiotic? [yes-no-unknown] -#}\n{%- set followupMedicationAntibiotic__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.5ede930a-2d43-4288-b7ea-42ffb2fb7713\" -%}\n{%- set followupMedicationAntibiotic = repliesMap[followupMedicationAntibiotic__path]|reply_str_value -%}\n{%- set followupMedicationAntibiotic_yes = \"5f144fa1-b2fd-496f-a746-aadd097d7218\" -%}\n{%- set followupMedicationAntibiotic_no = \"06d82b09-40bc-4a62-964d-d6baa12d52bf\" -%}\n{%- set followupMedicationAntibiotic_unknown = \"89569b57-f6df-423a-aa0f-c1129ffb3202\" -%}\n{#- Antifungal agent? [yes-no-unknown] -#}\n{%- set followupMedicationAntifungal__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.6dfb8d1c-78c0-486f-9250-7bfe9a75204c\" -%}\n{%- set followupMedicationAntifungal = repliesMap[followupMedicationAntifungal__path]|reply_str_value -%}\n{%- set followupMedicationAntifungal_yes = \"28497fcf-121b-4574-af98-e38e34a2f509\" -%}\n{%- set followupMedicationAntifungal_no = \"06e2919d-0fc5-45ae-a551-ce5fa6b3f02d\" -%}\n{%- set followupMedicationAntifungal_unknown = \"0f870efb-e56b-4054-9275-46eb7b4fd315\" -%}\n{#- Antimalarial agent? [yes-no-unknown] -#}\n{%- set followupMedicationAntimalarial__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.5eaf953f-1ae8-48a7-b3a5-4adb0233a588\" -%}\n{%- set followupMedicationAntimalarial = repliesMap[followupMedicationAntimalarial__path]|reply_str_value -%}\n{%- set followupMedicationAntimalarial_yes = \"d587d28c-9c2d-4b70-87db-d6e07344f2cd\" -%}\n{%- set followupMedicationAntimalarial_no = \"7ccc5595-fd9c-4ea7-8714-5c77c181eebb\" -%}\n{%- set followupMedicationAntimalarial_unknown = \"90e5d416-1c21-499a-8c2c-6dbb77455081\" -%}\n{#- Specify [value-string] -#}\n{%- set followupMedicationAntimalarialSpecify__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.5eaf953f-1ae8-48a7-b3a5-4adb0233a588.d587d28c-9c2d-4b70-87db-d6e07344f2cd.35382f21-674a-4623-af6e-fcc52bf557ed\" -%}\n{%- set followupMedicationAntimalarialSpecify = repliesMap[followupMedicationAntimalarialSpecify__path]|reply_str_value -%}\n{#- Experimental agent? [yes-no-unknown] -#}\n{%- set followupMedicationExperimental__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.2bb0903b-9b4a-4e5f-aa82-ae64402fabda\" -%}\n{%- set followupMedicationExperimental = repliesMap[followupMedicationExperimental__path]|reply_str_value -%}\n{%- set followupMedicationExperimental_yes = \"04214309-2e3b-45ce-bbd0-b996869a1f97\" -%}\n{%- set followupMedicationExperimental_no = \"5b539d9c-d885-492e-a261-fb55dd3ccfe0\" -%}\n{%- set followupMedicationExperimental_unknown = \"e98c9b98-a25b-4b8d-9905-d25a970c775a\" -%}\n{#- Specify [value-string] -#}\n{%- set followupMedicationExperimentalSpecify__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.2bb0903b-9b4a-4e5f-aa82-ae64402fabda.04214309-2e3b-45ce-bbd0-b996869a1f97.801793b3-ac57-4e9a-bc52-93fc4f0f15b7\" -%}\n{%- set followupMedicationExperimentalSpecify = repliesMap[followupMedicationExperimentalSpecify__path]|reply_str_value -%}\n{#- Non-steroidal anti-inflammatory (NSAID)? [yes-no-unknown] -#}\n{%- set followupMedicationNSAID__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.78a17f96-c6d2-46eb-85ec-3f00364e815c\" -%}\n{%- set followupMedicationNSAID = repliesMap[followupMedicationNSAID__path]|reply_str_value -%}\n{%- set followupMedicationNSAID_yes = \"b742396c-c41f-43f4-8cdc-e1d9c103043b\" -%}\n{%- set followupMedicationNSAID_no = \"4b6329c3-ce57-4714-b8a3-b6907e6aff66\" -%}\n{%- set followupMedicationNSAID_unknown = \"84572396-6371-4443-9098-d898894cb432\" -%}\n{#- Angiotensin converting enzyme inhibitors (ACE inhibitors)? [yes-no-unknown] -#}\n{%- set followupMedicationACE__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.ccb668e4-eaa9-458d-9eb2-242269bab27b\" -%}\n{%- set followupMedicationACE = repliesMap[followupMedicationACE__path]|reply_str_value -%}\n{%- set followupMedicationACE_yes = \"abe02afa-5fc3-4360-9c66-d5d3b8fc6076\" -%}\n{%- set followupMedicationACE_no = \"6f42fff2-03dc-478e-a209-631e7a47d060\" -%}\n{%- set followupMedicationACE_unknown = \"407ec099-81d4-41b9-bde7-5db228e0cca6\" -%}\n{#- Angiotensin II receptor blockers (ARBs)? [yes-no-unknown] -#}\n{%- set followupMedicationARB__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.96c36b30-9f63-4c34-8a75-28c5b5bf3935\" -%}\n{%- set followupMedicationARB = repliesMap[followupMedicationARB__path]|reply_str_value -%}\n{%- set followupMedicationARB_yes = \"ea1afb69-0596-420a-ab10-381ac7f48b2f\" -%}\n{%- set followupMedicationARB_no = \"0788c33a-d152-4c94-83cf-a4fe694bc023\" -%}\n{%- set followupMedicationARB_unknown = \"a19c73db-3a5f-45f8-b2cf-ca7259d95bcb\" -%}\n{#- Systemic anticoagulation [yes-no-unknown] -#}\n{%- set followupMedicationAnticoagulation__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.e90414fd-1938-43f6-aa8b-7083b1ecede8.6f2b6cb5-4ca6-4451-90ec-78578dff5f9b.eaa5192b-1960-4cc3-adcf-2f2ee329a43a\" -%}\n{%- set followupMedicationAnticoagulation = repliesMap[followupMedicationAnticoagulation__path]|reply_str_value -%}\n{%- set followupMedicationAnticoagulation_yes = \"999f9a9f-a161-49f1-b0ef-6a22ad426506\" -%}\n{%- set followupMedicationAnticoagulation_no = \"3826841e-5562-4dc8-a3c1-d779373179e7\" -%}\n{%- set followupMedicationAnticoagulation_unknown = \"12d0e848-f53e-43db-9f3c-8b9c5a5ef088\" -%}\n{#- Supportive care [section] -#}\n{%- set followupCare__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d\" -%}\n{%- set followupCare = repliesMap[followupCare__path]|reply_str_value -%}\n{%- set followupCare_open = \"fbce6b31-6270-48b5-9aeb-d6bc10be3faa\" -%}\n{#- ICU or High Dependency Unit admission? [yes-no-unknown] -#}\n{%- set followupCareICU__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.d0d53d4a-a8c0-4760-a373-7032d4415033\" -%}\n{%- set followupCareICU = repliesMap[followupCareICU__path]|reply_str_value -%}\n{%- set followupCareICU_yes = \"5b80610a-2c6a-4980-b504-1751fa8ef989\" -%}\n{%- set followupCareICU_no = \"1c5d0a86-c6ae-42f5-baed-d7dca5ae44b8\" -%}\n{%- set followupCareICU_unknown = \"4070453b-04c1-4a1f-a3d0-9dd05303c2bc\" -%}\n{#- Date of ICU/HDU admission [options] -#}\n{%- set followupCareICUAdmission__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.d0d53d4a-a8c0-4760-a373-7032d4415033.5b80610a-2c6a-4980-b504-1751fa8ef989.5ec453bb-ebdc-4908-ad16-c608020f1e9d\" -%}\n{%- set followupCareICUAdmission = repliesMap[followupCareICUAdmission__path]|reply_str_value -%}\n{%- set followupCareICUAdmission_Known = \"daead789-1b25-4bff-bee0-36b0833ecf23\" -%}\n{%- set followupCareICUAdmission_Unknown = \"e8c1511e-8fb2-4a0a-ab85-f117c872eea0\" -%}\n{#- Enter date of ICU/HDU admission [value-date] -#}\n{%- set followupCareICUAdmission_Known_Date__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.d0d53d4a-a8c0-4760-a373-7032d4415033.5b80610a-2c6a-4980-b504-1751fa8ef989.5ec453bb-ebdc-4908-ad16-c608020f1e9d.daead789-1b25-4bff-bee0-36b0833ecf23.be081b89-2c5d-433a-a5a1-1fbfa3327759\" -%}\n{%- set followupCareICUAdmission_Known_Date = repliesMap[followupCareICUAdmission_Known_Date__path]|reply_str_value -%}\n{#- ICU/HDU discharge date [options] -#}\n{%- set followupCareICUDischarge__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.d0d53d4a-a8c0-4760-a373-7032d4415033.5b80610a-2c6a-4980-b504-1751fa8ef989.841f16f2-256d-4c29-a50c-9647ff87f24e\" -%}\n{%- set followupCareICUDischarge = repliesMap[followupCareICUDischarge__path]|reply_str_value -%}\n{%- set followupCareICUDischarge_Known = \"55abbc4c-e74e-435f-8da1-b2b01c19954d\" -%}\n{%- set followupCareICUDischarge_NotDischarged = \"604c5f67-2de2-478f-8d07-b1e9de7437f4\" -%}\n{%- set followupCareICUDischarge_Unknown = \"91b57ef4-f97b-491d-9be8-ba2cb0f12eb2\" -%}\n{#- Enter date of ICU/HDU discharge [value-date] -#}\n{%- set followupCareICUDischarge_Known_Date__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.d0d53d4a-a8c0-4760-a373-7032d4415033.5b80610a-2c6a-4980-b504-1751fa8ef989.841f16f2-256d-4c29-a50c-9647ff87f24e.55abbc4c-e74e-435f-8da1-b2b01c19954d.1ef01284-c1e3-42ec-9d97-4eded690e2ec\" -%}\n{%- set followupCareICUDischarge_Known_Date = repliesMap[followupCareICUDischarge_Known_Date__path]|reply_str_value -%}\n{#- Oxygen therapy? [yes-no-unknown] -#}\n{%- set followupCareOxygen__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.0d4691ef-b9ae-45a0-b525-819bab4e89ee\" -%}\n{%- set followupCareOxygen = repliesMap[followupCareOxygen__path]|reply_str_value -%}\n{%- set followupCareOxygen_yes = \"385c93a0-64f6-484b-81af-5f4f5a879d73\" -%}\n{%- set followupCareOxygen_no = \"6f879cbe-246b-4a24-a1e0-a6101990afd4\" -%}\n{%- set followupCareOxygen_unknown = \"1e270359-1612-4bbe-88d3-869f440b1c62\" -%}\n{#- O₂ flow [options] -#}\n{%- set followupCareOxygenFlow__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.0d4691ef-b9ae-45a0-b525-819bab4e89ee.385c93a0-64f6-484b-81af-5f4f5a879d73.ef17935b-1519-4ff0-af65-f45815fc6ec5\" -%}\n{%- set followupCareOxygenFlow = repliesMap[followupCareOxygenFlow__path]|reply_str_value -%}\n{%- set followupCareOxygenFlow_1to5 = \"442d88ba-ba68-463e-b61f-05eb9d863866\" -%}\n{%- set followupCareOxygenFlow_6to10 = \"49bcd74c-4aaa-4034-95b5-11f9783dc814\" -%}\n{%- set followupCareOxygenFlow_11to15 = \"d3d318b4-82f3-40b8-90aa-29f9ace58a05\" -%}\n{%- set followupCareOxygenFlow_gt15 = \"98ea8dec-00b9-46c7-b561-497ce640cc00\" -%}\n{%- set followupCareOxygenFlow_Unknown = \"f6e22ffd-3b6a-442a-afd7-346b8212ea67\" -%}\n{#- Source of oxygen [options] -#}\n{%- set followupCareOxygenSource__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.0d4691ef-b9ae-45a0-b525-819bab4e89ee.385c93a0-64f6-484b-81af-5f4f5a879d73.b17bebe8-ed98-476c-a654-9b3ae27c3f65\" -%}\n{%- set followupCareOxygenSource = repliesMap[followupCareOxygenSource__path]|reply_str_value -%}\n{%- set followupCareOxygenSource_Piped = \"877d0c27-5984-4b7b-bf5f-278d905f67d8\" -%}\n{%- set followupCareOxygenSource_Cylinder = \"dc4cbdc3-45c4-4d68-8cf2-85218f9fd989\" -%}\n{%- set followupCareOxygenSource_Concentrator = \"91a742d1-bcd1-4f49-9b8e-ad75ecee749a\" -%}\n{%- set followupCareOxygenSource_Unknown = \"cbed788e-ce31-47ce-8390-3c8cff7c1984\" -%}\n{#- Interface [options] -#}\n{%- set followupCareOxygenInterface__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.0d4691ef-b9ae-45a0-b525-819bab4e89ee.385c93a0-64f6-484b-81af-5f4f5a879d73.4142e6dc-2ebf-4fb9-b058-a1ebbec99c39\" -%}\n{%- set followupCareOxygenInterface = repliesMap[followupCareOxygenInterface__path]|reply_str_value -%}\n{%- set followupCareOxygenInterface_Prongs = \"ec33332e-5daa-45b1-bbbc-17b5738768ec\" -%}\n{%- set followupCareOxygenInterface_Cannula = \"a2e4a0a5-9ef9-46f7-adf1-936523a573c2\" -%}\n{%- set followupCareOxygenInterface_MaskWithout = \"73f8fa5e-72cd-4c34-bcfc-ee9c0499c219\" -%}\n{%- set followupCareOxygenInterface_MaskWith = \"37177cec-adf7-4fcc-a486-fb9607e45031\" -%}\n{%- set followupCareOxygenInterface_CPAP = \"9f95e677-1b0b-4fc0-a654-77770930d591\" -%}\n{%- set followupCareOxygenInterface_Unknown = \"2f70b23b-34b4-4b8d-8855-d61e87f9fc42\" -%}\n{#- Non-invasive ventilation (e.g.BIPAP/CPAP)? [yes-no-unknown] -#}\n{%- set followupCareNonInvasive__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.241c414e-cb67-4685-ba09-c902cd69cc3a\" -%}\n{%- set followupCareNonInvasive = repliesMap[followupCareNonInvasive__path]|reply_str_value -%}\n{%- set followupCareNonInvasive_yes = \"b023fe39-6ce6-4237-bdeb-65c330a82ef0\" -%}\n{%- set followupCareNonInvasive_no = \"dcc98a92-5f67-4f33-a48f-a433452578c2\" -%}\n{%- set followupCareNonInvasive_unknown = \"ad2d6db0-7e4a-4150-9397-7458dbd0d27e\" -%}\n{#- Invasive ventilation (Any)? [yes-no-unknown] -#}\n{%- set followupCareInvasive__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.aa60a172-5502-48b7-a82a-bbd698db9efd\" -%}\n{%- set followupCareInvasive = repliesMap[followupCareInvasive__path]|reply_str_value -%}\n{%- set followupCareInvasive_yes = \"7c84a1f6-010f-4fca-9cbf-b8d99448caa9\" -%}\n{%- set followupCareInvasive_no = \"67dc1e19-fafc-4dbc-a445-55fb4a666cc7\" -%}\n{%- set followupCareInvasive_unknown = \"fcac6fee-c181-452f-b9ce-6ec976894853\" -%}\n{#- PEEP [cm H₂O] [value-number] -#}\n{%- set followupCareInvasive_Peep__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.aa60a172-5502-48b7-a82a-bbd698db9efd.7c84a1f6-010f-4fca-9cbf-b8d99448caa9.20a69c19-1811-4320-9862-7a4c969bc751\" -%}\n{%- set followupCareInvasive_Peep = repliesMap[followupCareInvasive_Peep__path]|reply_str_value -%}\n{#- FᵢO₂ [%] [value-number] -#}\n{%- set followupCareInvasive_FiO2__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.aa60a172-5502-48b7-a82a-bbd698db9efd.7c84a1f6-010f-4fca-9cbf-b8d99448caa9.2118c18b-f499-4231-824f-4c352a8f2696\" -%}\n{%- set followupCareInvasive_FiO2 = repliesMap[followupCareInvasive_FiO2__path]|reply_str_value -%}\n{#- Plateau pressure [cm H₂O] [value-number] -#}\n{%- set followupCareInvasive_Plateau__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.aa60a172-5502-48b7-a82a-bbd698db9efd.7c84a1f6-010f-4fca-9cbf-b8d99448caa9.b3f3bdbd-163c-4847-bdfd-9b64a2e747d4\" -%}\n{%- set followupCareInvasive_Plateau = repliesMap[followupCareInvasive_Plateau__path]|reply_str_value -%}\n{#- PₐCO₂ [value-number] -#}\n{%- set followupCareInvasive_PaCO2__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.aa60a172-5502-48b7-a82a-bbd698db9efd.7c84a1f6-010f-4fca-9cbf-b8d99448caa9.f9c05e2a-69ae-4d3c-831b-ddeec07a2e7c\" -%}\n{%- set followupCareInvasive_PaCO2 = repliesMap[followupCareInvasive_PaCO2__path]|reply_str_value -%}\n{#- PₐO₂ [value-number] -#}\n{%- set followupCareInvasive_PaO2__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.aa60a172-5502-48b7-a82a-bbd698db9efd.7c84a1f6-010f-4fca-9cbf-b8d99448caa9.921afcde-5c3c-4608-b24e-df22e17aee59\" -%}\n{%- set followupCareInvasive_PaO2 = repliesMap[followupCareInvasive_PaO2__path]|reply_str_value -%}\n{#- Inotropes/vasopressors? [yes-no-unknown] -#}\n{%- set followupCareInotropes__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.dc5ab1bb-53b4-4151-ac32-93cef5b52343\" -%}\n{%- set followupCareInotropes = repliesMap[followupCareInotropes__path]|reply_str_value -%}\n{%- set followupCareInotropes_yes = \"de7a30b8-93b6-4bde-b7eb-113a0419d38a\" -%}\n{%- set followupCareInotropes_no = \"1a08f230-8b06-4c98-bf9e-aad885184721\" -%}\n{%- set followupCareInotropes_unknown = \"1c00140d-0b83-4b74-b791-708f53028a11\" -%}\n{#- Extracorporeal (ECMO) support? [yes-no-unknown] -#}\n{%- set followupCareECMO__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.63f98c5f-c853-4e2a-8e7d-4f8a9d54f699\" -%}\n{%- set followupCareECMO = repliesMap[followupCareECMO__path]|reply_str_value -%}\n{%- set followupCareECMO_yes = \"69b8d9e1-c9b6-451a-8255-6de37a7cdb4c\" -%}\n{%- set followupCareECMO_no = \"9bf62d4e-e58f-4ebd-bc73-49bd3726ee83\" -%}\n{%- set followupCareECMO_unknown = \"e219e7b5-8b9f-46e8-8cab-9869630bcc5f\" -%}\n{#- Prone position? [yes-no-unknown] -#}\n{%- set followupCareProne__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.e3f374ea-1be1-401c-a531-ebdda03a4b84\" -%}\n{%- set followupCareProne = repliesMap[followupCareProne__path]|reply_str_value -%}\n{%- set followupCareProne_yes = \"e502aed8-d2de-414f-b578-30ab31c1151d\" -%}\n{%- set followupCareProne_no = \"e3aca47e-2de8-4b8d-b2e0-856cd92ad45d\" -%}\n{%- set followupCareProne_unknown = \"305ab86c-fd64-4901-9059-a273b3e3793a\" -%}\n{#- Renal replacement therapy (RRT) or dialysis? [yes-no-unknown] -#}\n{%- set followupCareRRT__path = \"5daf5718-a491-404c-9b19-990fd03b06c8.130c27a4-ace8-45bd-b82d-611837c69e67.index_$module2.21392c1f-364b-439f-b7a3-ff9c4b37c98d.fbce6b31-6270-48b5-9aeb-d6bc10be3faa.b561eac3-da05-474c-9530-9311467da09a\" -%}\n{%- set followupCareRRT = repliesMap[followupCareRRT__path]|reply_str_value -%}\n{%- set followupCareRRT_yes = \"0bb965b0-5259-4dbd-9e61-892676336422\" -%}\n{%- set followupCareRRT_no = \"75f74edf-362d-4bbc-99a3-61de3875dd28\" -%}\n{%- set followupCareRRT_unknown = \"a082551c-305d-4ac8-9b9e-2efb827287ef\" -%}\n{#- Diagnostic / pathogen testing [section] -#}\n{%- set pathogenTest__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5\" -%}\n{%- set pathogenTest = repliesMap[pathogenTest__path]|reply_str_value -%}\n{%- set pathogenTest_open = \"72f25b77-da12-4332-8741-adec865f54b3\" -%}\n{#- Chest X-Ray / CT performed? [yes-no-unknown] -#}\n{%- set pathogenTestXRay__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.32c33d54-fea1-4b3e-914a-29edfcfc8716\" -%}\n{%- set pathogenTestXRay = repliesMap[pathogenTestXRay__path]|reply_str_value -%}\n{%- set pathogenTestXRay_yes = \"e9ff4232-2edb-42fa-aab7-3b4f47673c52\" -%}\n{%- set pathogenTestXRay_no = \"09eaf0be-c655-4359-94c2-502d0dbb4b9b\" -%}\n{%- set pathogenTestXRay_unknown = \"47a7d2b6-1834-4452-b5d3-3d2ff24cafcc\" -%}\n{#- Infiltrates present? [yes-no-unknown] -#}\n{%- set pathogenTestXRayInfiltrates__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.32c33d54-fea1-4b3e-914a-29edfcfc8716.e9ff4232-2edb-42fa-aab7-3b4f47673c52.9b9c4d68-6492-4ace-89c4-5272852d98c1\" -%}\n{%- set pathogenTestXRayInfiltrates = repliesMap[pathogenTestXRayInfiltrates__path]|reply_str_value -%}\n{%- set pathogenTestXRayInfiltrates_yes = \"ea467f2a-9119-46b7-bc6f-d83a741fad90\" -%}\n{%- set pathogenTestXRayInfiltrates_no = \"6741e930-9522-45c0-914d-ebcef9c10724\" -%}\n{%- set pathogenTestXRayInfiltrates_unknown = \"2c50afa1-7fa0-4b9c-82c6-bbc26d4c40f6\" -%}\n{#- Was pathogen testing done during this illness episode? [yes-no-unknown] -#}\n{%- set pathogenTestDone__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0\" -%}\n{%- set pathogenTestDone = repliesMap[pathogenTestDone__path]|reply_str_value -%}\n{%- set pathogenTestDone_yes = \"7b835fd5-7197-416c-bd04-986f39e5fa9a\" -%}\n{%- set pathogenTestDone_no = \"835880a8-4d6c-4bb9-a7e8-c9d695d1536a\" -%}\n{%- set pathogenTestDone_unknown = \"6bb63e90-108a-46b3-a19a-a10403be0b40\" -%}\n{#- Influenza virus [options] -#}\n{%- set pathogenTestDoneInfluenza__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.fe24d9ba-f94c-4acf-adc0-22997ea4fdda\" -%}\n{%- set pathogenTestDoneInfluenza = repliesMap[pathogenTestDoneInfluenza__path]|reply_str_value -%}\n{%- set pathogenTestDoneInfluenza_Positive = \"d4fe544d-5ba0-4255-a3c0-1aa8bb87c885\" -%}\n{%- set pathogenTestDoneInfluenza_Negative = \"5918e21c-2002-477c-9dab-b852fe4050e8\" -%}\n{%- set pathogenTestDoneInfluenza_NotDone = \"0945d573-aec3-4038-b394-9119ca7c0d21\" -%}\n{#- Type [value-string] -#}\n{%- set pathogenTestDoneInfluenza_Positive_Type__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.fe24d9ba-f94c-4acf-adc0-22997ea4fdda.d4fe544d-5ba0-4255-a3c0-1aa8bb87c885.4e988454-815d-4b3a-95f8-47a9c531a730\" -%}\n{%- set pathogenTestDoneInfluenza_Positive_Type = repliesMap[pathogenTestDoneInfluenza_Positive_Type__path]|reply_str_value -%}\n{#- Coronavirus [options] -#}\n{%- set pathogenTestDoneCoronavirus__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.aa0ccb0d-c21a-435d-819b-9552ad32dd50\" -%}\n{%- set pathogenTestDoneCoronavirus = repliesMap[pathogenTestDoneCoronavirus__path]|reply_str_value -%}\n{%- set pathogenTestDoneCoronavirus_Positive = \"a6a8ed49-cabc-4792-b41a-0da5dd305e0b\" -%}\n{%- set pathogenTestDoneCoronavirus_Negative = \"dccfc3f1-d0c0-4866-891b-d72c181de873\" -%}\n{%- set pathogenTestDoneCoronavirus_NotDone = \"bca80119-cb9d-475e-9141-bf832c92e9d2\" -%}\n{#- Type [options] -#}\n{%- set pathogenTestDoneCoronavirus_Positive_Type__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.aa0ccb0d-c21a-435d-819b-9552ad32dd50.a6a8ed49-cabc-4792-b41a-0da5dd305e0b.ed5b3e55-4927-4109-ada5-fdbf95e136b0\" -%}\n{%- set pathogenTestDoneCoronavirus_Positive_Type = repliesMap[pathogenTestDoneCoronavirus_Positive_Type__path]|reply_str_value -%}\n{%- set pathogenTestDoneCoronavirus_Positive_MERS = \"466a753d-c01e-4c2e-8eae-36f5a39552f8\" -%}\n{%- set pathogenTestDoneCoronavirus_Positive_SARS = \"68eb3f31-b215-48fe-93ea-bc41d129edc0\" -%}\n{%- set pathogenTestDoneCoronavirus_Positive_Other = \"2ef0ebb2-2836-4f7c-a8e7-ef98195189dc\" -%}\n{#- Specify [value-string] -#}\n{%- set pathogenTestDoneCoronavirus_Positive_OtherSpecify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.aa0ccb0d-c21a-435d-819b-9552ad32dd50.a6a8ed49-cabc-4792-b41a-0da5dd305e0b.ed5b3e55-4927-4109-ada5-fdbf95e136b0.2ef0ebb2-2836-4f7c-a8e7-ef98195189dc.4c424de4-7d3f-4f01-b3fa-510e89321b51\" -%}\n{%- set pathogenTestDoneCoronavirus_Positive_OtherSpecify = repliesMap[pathogenTestDoneCoronavirus_Positive_OtherSpecify__path]|reply_str_value -%}\n{#- Other respiratory pathogen [options] -#}\n{%- set pathogenTestDoneOtherResp__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.2a1a9082-8497-4e9c-bfc3-033a5c8869b2\" -%}\n{%- set pathogenTestDoneOtherResp = repliesMap[pathogenTestDoneOtherResp__path]|reply_str_value -%}\n{%- set pathogenTestDoneOtherResp_Positive = \"3ed33a9a-4a64-46e7-b6a8-947f9a444fba\" -%}\n{%- set pathogenTestDoneOtherResp_Negative = \"11456d2c-533e-408a-91ef-f0668ef2ce4f\" -%}\n{%- set pathogenTestDoneOtherResp_NotDone = \"c572a7dd-5a41-4e9d-af5c-17e532c87f85\" -%}\n{#- Specify [value-string] -#}\n{%- set pathogenTestDoneOtherResp_Positive_Specify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.2a1a9082-8497-4e9c-bfc3-033a5c8869b2.3ed33a9a-4a64-46e7-b6a8-947f9a444fba.aa7ac60b-6947-4c79-8047-bfb4020ff80d\" -%}\n{%- set pathogenTestDoneOtherResp_Positive_Specify = repliesMap[pathogenTestDoneOtherResp_Positive_Specify__path]|reply_str_value -%}\n{#- Viral haemorrhagic fever [options] -#}\n{%- set pathogenTestDoneViralFever__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.1c0addf3-4675-4530-82d5-2908d5e7caf1\" -%}\n{%- set pathogenTestDoneViralFever = repliesMap[pathogenTestDoneViralFever__path]|reply_str_value -%}\n{%- set pathogenTestDoneViralFever_Positive = \"6f1c13d7-7e30-4112-86e6-b12a11bdbee2\" -%}\n{%- set pathogenTestDoneViralFever_Negative = \"335530b2-7adf-4ac7-a008-9c382f8477c1\" -%}\n{%- set pathogenTestDoneViralFever_NotDone = \"8dd5d403-cb4c-44a5-a85f-c098893b0129\" -%}\n{#- Specify virus [value-string] -#}\n{%- set pathogenTestDoneViralFever_Positive_Specify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.1c0addf3-4675-4530-82d5-2908d5e7caf1.6f1c13d7-7e30-4112-86e6-b12a11bdbee2.2858d533-4e39-43d0-9e65-c6661c567eef\" -%}\n{%- set pathogenTestDoneViralFever_Positive_Specify = repliesMap[pathogenTestDoneViralFever_Positive_Specify__path]|reply_str_value -%}\n{#- Other pathogen of public health interest detected [options] -#}\n{%- set pathogenTestDoneOtherPHI__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.03b0fdee-c88c-4c7e-b21b-eee7bd53e825\" -%}\n{%- set pathogenTestDoneOtherPHI = repliesMap[pathogenTestDoneOtherPHI__path]|reply_str_value -%}\n{%- set pathogenTestDoneOtherPHI_Positive = \"41fc30c7-26f8-4bbd-8d04-1e9cd5409c20\" -%}\n{%- set pathogenTestDoneOtherPHI_Negative = \"3395ac8d-77c2-450d-9217-894c1328c6a0\" -%}\n{%- set pathogenTestDoneOtherPHI_NotDone = \"50bd74a0-1aec-4f39-974b-41ac726beead\" -%}\n{#- Specify virus [value-string] -#}\n{%- set pathogenTestDoneOtherPHI_Positive_Specify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.03b0fdee-c88c-4c7e-b21b-eee7bd53e825.41fc30c7-26f8-4bbd-8d04-1e9cd5409c20.1b0f63c1-3409-436f-84f2-0b354c19f59e\" -%}\n{%- set pathogenTestDoneOtherPHI_Positive_Specify = repliesMap[pathogenTestDoneOtherPHI_Positive_Specify__path]|reply_str_value -%}\n{#- Falciparum malaria [options] -#}\n{%- set pathogenTestDoneFalciparum__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.e156d6cf-74cd-4197-859d-f6b3578282e0\" -%}\n{%- set pathogenTestDoneFalciparum = repliesMap[pathogenTestDoneFalciparum__path]|reply_str_value -%}\n{%- set pathogenTestDoneFalciparum_Positive = \"fe887afe-0ac4-4b89-8449-be1d2527c26f\" -%}\n{%- set pathogenTestDoneFalciparum_Negative = \"f73b58c8-0f78-4ca8-a160-2e8df51c6c25\" -%}\n{%- set pathogenTestDoneFalciparum_NotDone = \"4eb1bc91-b3ec-4fbd-ad55-f9e1e485ec62\" -%}\n{#- Non-falciparum malaria [options] -#}\n{%- set pathogenTestDoneNonFalciparum__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.50a53e75-9c7e-4f47-800c-20a73fad1f88\" -%}\n{%- set pathogenTestDoneNonFalciparum = repliesMap[pathogenTestDoneNonFalciparum__path]|reply_str_value -%}\n{%- set pathogenTestDoneNonFalciparum_Positive = \"6a87f873-cba1-4f0c-85ff-b825d69f301a\" -%}\n{%- set pathogenTestDoneNonFalciparum_Negative = \"ed3f2d00-5f9e-49f9-8bfe-13bdd5d3d2cb\" -%}\n{%- set pathogenTestDoneNonFalciparum_NotDone = \"c89085e5-e0f3-41fb-ad9f-6792bef2f1b6\" -%}\n{#- HIV [options] -#}\n{%- set pathogenTestDoneHIV__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.f3030089-116a-409c-a13e-b6eecc401ae5.72f25b77-da12-4332-8741-adec865f54b3.3d1830e9-ae56-484a-b0b0-8b7d4c19d8d0.7b835fd5-7197-416c-bd04-986f39e5fa9a.b0d2e5dc-3fc1-4dab-bd87-7a99f6cbec6f\" -%}\n{%- set pathogenTestDoneHIV = repliesMap[pathogenTestDoneHIV__path]|reply_str_value -%}\n{%- set pathogenTestDoneHIV_Positive = \"38338012-8b78-4cb2-855c-66ebd2db7c09\" -%}\n{%- set pathogenTestDoneHIV_Negative = \"64a9726f-7af6-4d86-a47d-924018f520f5\" -%}\n{%- set pathogenTestDoneHIV_NotDone = \"942114bc-54fe-4c8f-a920-52d3fb595e38\" -%}\n{#- Complications [section] -#}\n{%- set complications__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83\" -%}\n{%- set complications = repliesMap[complications__path]|reply_str_value -%}\n{%- set complications_open = \"64efa06c-f348-432f-b6d5-2fed98afbc35\" -%}\n{#- Shock [yes-no-unknown] -#}\n{%- set complicationsShock__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.49c35415-3e43-4ebb-890c-68e7ad3ffcf7\" -%}\n{%- set complicationsShock = repliesMap[complicationsShock__path]|reply_str_value -%}\n{%- set complicationsShock_yes = \"3d0c3fb7-e7e9-46c0-bd77-feefba568c65\" -%}\n{%- set complicationsShock_no = \"36d7410e-84d2-4005-b127-fc1f6e4be1ff\" -%}\n{%- set complicationsShock_unknown = \"5048ab5a-b607-416a-b1c2-deeced05d5b5\" -%}\n{#- Seizure [yes-no-unknown] -#}\n{%- set complicationsSeizure__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.09b51576-0ae6-4457-ab4d-a5986a6696a0\" -%}\n{%- set complicationsSeizure = repliesMap[complicationsSeizure__path]|reply_str_value -%}\n{%- set complicationsSeizure_yes = \"b6dbe0f9-7532-464e-aa51-32884c5c84ca\" -%}\n{%- set complicationsSeizure_no = \"5cca8fe3-ef3c-43ee-8b29-eac948e8158c\" -%}\n{%- set complicationsSeizure_unknown = \"41ec8990-7143-4891-8ae7-89b56552a76e\" -%}\n{#- Meningitis/Encephalitis [yes-no-unknown] -#}\n{%- set complicationsMeningitis__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.6a14b843-9f46-43ca-80e6-efca400912ef\" -%}\n{%- set complicationsMeningitis = repliesMap[complicationsMeningitis__path]|reply_str_value -%}\n{%- set complicationsMeningitis_yes = \"3d1a6ea1-79e4-4989-80d7-609d58582ea3\" -%}\n{%- set complicationsMeningitis_no = \"a713146e-841e-4f8a-a287-6e1ef91b122b\" -%}\n{%- set complicationsMeningitis_unknown = \"746aa7ac-ac13-41be-b3fc-9954c6828141\" -%}\n{#- Anaemia [yes-no-unknown] -#}\n{%- set complicationsAnaemia__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.8b461af0-150c-4c54-b10f-428a8a28c5dd\" -%}\n{%- set complicationsAnaemia = repliesMap[complicationsAnaemia__path]|reply_str_value -%}\n{%- set complicationsAnaemia_yes = \"ccd6d168-3a43-4e2a-afd7-1790913a5a97\" -%}\n{%- set complicationsAnaemia_no = \"f01601b4-ecae-4dce-a9c6-26ae9e66a364\" -%}\n{%- set complicationsAnaemia_unknown = \"a7a41a99-84bb-449c-9cfb-d0956e3bd081\" -%}\n{#- Cardiac arrhythmia [yes-no-unknown] -#}\n{%- set complicationsCardiacArrhythmia__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.ffa720fa-8e30-47c7-b889-a4d6bd0f2b70\" -%}\n{%- set complicationsCardiacArrhythmia = repliesMap[complicationsCardiacArrhythmia__path]|reply_str_value -%}\n{%- set complicationsCardiacArrhythmia_yes = \"b0a45da5-0fac-4643-87e9-aee1fac7b8cf\" -%}\n{%- set complicationsCardiacArrhythmia_no = \"fecb7dc5-df98-41e2-af21-aff9111a3e1d\" -%}\n{%- set complicationsCardiacArrhythmia_unknown = \"bdb6e405-1131-4757-b4f4-7f01dd7041e9\" -%}\n{#- Cardiac arrest [yes-no-unknown] -#}\n{%- set complicationsCardiacArrest__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.3e29d04c-0957-4a07-9dcd-af7530d63064\" -%}\n{%- set complicationsCardiacArrest = repliesMap[complicationsCardiacArrest__path]|reply_str_value -%}\n{%- set complicationsCardiacArrest_yes = \"6610dd7c-3778-4107-bf51-cb82bba45a90\" -%}\n{%- set complicationsCardiacArrest_no = \"3ef3f518-9686-435a-ac88-86c2d5296613\" -%}\n{%- set complicationsCardiacArrest_unknown = \"91792549-5186-4823-9462-079f77fc2fe6\" -%}\n{#- Pneumonia [yes-no-unknown] -#}\n{%- set complicationsPneumonia__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.1d1ebcd9-b9fc-4018-9f7c-bcc029faf836\" -%}\n{%- set complicationsPneumonia = repliesMap[complicationsPneumonia__path]|reply_str_value -%}\n{%- set complicationsPneumonia_yes = \"0dc80aa6-eed7-4dd4-9b30-dc80d09129df\" -%}\n{%- set complicationsPneumonia_no = \"db131f1b-19a2-482d-bde1-ca0f88c5aca4\" -%}\n{%- set complicationsPneumonia_unknown = \"a4cd054e-61e8-4282-8425-aadedd164a40\" -%}\n{#- Bronchiolitis [yes-no-unknown] -#}\n{%- set complicationsBronchiolitis__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.f4682450-ea49-4d50-93f5-7a45f9480023\" -%}\n{%- set complicationsBronchiolitis = repliesMap[complicationsBronchiolitis__path]|reply_str_value -%}\n{%- set complicationsBronchiolitis_yes = \"fef77657-de71-4800-98b4-c99343a58a06\" -%}\n{%- set complicationsBronchiolitis_no = \"f01a3563-8221-4039-8365-52cc444134fb\" -%}\n{%- set complicationsBronchiolitis_unknown = \"edf6dd8e-b1a7-42eb-9c7d-b42d789ec3cb\" -%}\n{#- Acute Respiratory Distress Syndrome [yes-no-unknown] -#}\n{%- set complicationsARDS__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.bd2d91c7-a965-440c-8a84-310b18c80ad5\" -%}\n{%- set complicationsARDS = repliesMap[complicationsARDS__path]|reply_str_value -%}\n{%- set complicationsARDS_yes = \"af10e342-acaf-419a-88e4-8eb61179210e\" -%}\n{%- set complicationsARDS_no = \"5ea36a47-3e2d-4145-9916-a8f7ac8603f9\" -%}\n{%- set complicationsARDS_unknown = \"a121d8d4-dc26-4a07-a4be-c65dd01178fa\" -%}\n{#- Bacteraemia [yes-no-unknown] -#}\n{%- set complicationsBacteraemia__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.5bc0a008-3812-453c-a4f2-e0be67b0ffda\" -%}\n{%- set complicationsBacteraemia = repliesMap[complicationsBacteraemia__path]|reply_str_value -%}\n{%- set complicationsBacteraemia_yes = \"4b9bbb43-53ce-4f31-899f-7f9a757214a0\" -%}\n{%- set complicationsBacteraemia_no = \"d3713ff4-864e-4cdd-acdf-5e97ac3e13a3\" -%}\n{%- set complicationsBacteraemia_unknown = \"bae47c7e-ffe8-4824-96ff-f183d0a735f4\" -%}\n{#- Bleeding [yes-no-unknown] -#}\n{%- set complicationsBleeding__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.d45a38eb-a040-4b7a-8c2c-ef378f476eb7\" -%}\n{%- set complicationsBleeding = repliesMap[complicationsBleeding__path]|reply_str_value -%}\n{%- set complicationsBleeding_yes = \"11f1b201-dbe7-4b35-879b-0a5c24ddb566\" -%}\n{%- set complicationsBleeding_no = \"d79b8681-4ca7-4885-ba6d-fd8a01810f49\" -%}\n{%- set complicationsBleeding_unknown = \"98a9b53b-90a8-436c-9880-9ebe2a7e7b8e\" -%}\n{#- Endocarditis [yes-no-unknown] -#}\n{%- set complicationsEndocarditis__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.e0e086f3-ad71-4a2e-88d1-3336c8831cd1\" -%}\n{%- set complicationsEndocarditis = repliesMap[complicationsEndocarditis__path]|reply_str_value -%}\n{%- set complicationsEndocarditis_yes = \"76c78d12-a461-424d-b66c-46ea620a4af4\" -%}\n{%- set complicationsEndocarditis_no = \"f98a7601-f971-4e7a-bc54-8a415d1f8b4f\" -%}\n{%- set complicationsEndocarditis_unknown = \"3ab30af7-6c9e-4382-a139-b03a32747f86\" -%}\n{#- Myocarditis/Pericarditis [yes-no-unknown] -#}\n{%- set complicationsMyocarditis__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.2bf7ebac-2c05-4bd5-908c-5baf6ca50ff5\" -%}\n{%- set complicationsMyocarditis = repliesMap[complicationsMyocarditis__path]|reply_str_value -%}\n{%- set complicationsMyocarditis_yes = \"13340dcd-a5d2-4337-9070-d87bcf4dc623\" -%}\n{%- set complicationsMyocarditis_no = \"58c257c8-3cf5-436a-9399-741964d5ee02\" -%}\n{%- set complicationsMyocarditis_unknown = \"ac708678-60bd-4c4b-b368-a632dce000ac\" -%}\n{#- Acute renal injury [yes-no-unknown] -#}\n{%- set complicationsARI__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.963d6938-9d72-4793-afa1-76c11be9780c\" -%}\n{%- set complicationsARI = repliesMap[complicationsARI__path]|reply_str_value -%}\n{%- set complicationsARI_yes = \"ca3abb43-46a1-497f-bcad-8eae8e82df06\" -%}\n{%- set complicationsARI_no = \"f264bc9d-2611-453c-ba31-bc1736114c20\" -%}\n{%- set complicationsARI_unknown = \"cdf6317d-ed8c-4d0c-8ab4-5826ffe72852\" -%}\n{#- Pancreatitis [yes-no-unknown] -#}\n{%- set complicationsPancreatitis__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.5d034703-a10b-4d27-b1f3-89553566f42b\" -%}\n{%- set complicationsPancreatitis = repliesMap[complicationsPancreatitis__path]|reply_str_value -%}\n{%- set complicationsPancreatitis_yes = \"c3b10d54-ceef-45e2-b08d-4fd74f959651\" -%}\n{%- set complicationsPancreatitis_no = \"75e4cba6-2040-4dbe-800c-e097ff5002e2\" -%}\n{%- set complicationsPancreatitis_unknown = \"908a47f2-15ed-4007-9af1-0b72f3d5f399\" -%}\n{#- Liver dysfunction [yes-no-unknown] -#}\n{%- set complicationsLiverDysfunction__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.0dba017e-d47d-4976-ab1e-0822b2795027\" -%}\n{%- set complicationsLiverDysfunction = repliesMap[complicationsLiverDysfunction__path]|reply_str_value -%}\n{%- set complicationsLiverDysfunction_yes = \"f0397d46-6b8d-4dd6-9f20-3f4a8d914529\" -%}\n{%- set complicationsLiverDysfunction_no = \"22ee0a7b-139b-4803-8372-cebca0ba9844\" -%}\n{%- set complicationsLiverDysfunction_unknown = \"305cb115-69f5-41b9-91e1-c57b8d55682a\" -%}\n{#- Cardiomyopathy [yes-no-unknown] -#}\n{%- set complicationsCardiomyopathy__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.239d23b6-03ab-4b18-a947-72976b35d310\" -%}\n{%- set complicationsCardiomyopathy = repliesMap[complicationsCardiomyopathy__path]|reply_str_value -%}\n{%- set complicationsCardiomyopathy_yes = \"a43b07ef-2ffd-499b-9427-46350122f126\" -%}\n{%- set complicationsCardiomyopathy_no = \"0a9048a6-d681-4d6c-9147-6987a9b89e70\" -%}\n{%- set complicationsCardiomyopathy_unknown = \"e706dfe3-0945-4052-9805-052a8e0c6ef2\" -%}\n{#- Other [yes-no-unknown] -#}\n{%- set complicationsOther__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.f369f3f1-6305-4430-808c-a265832b2814\" -%}\n{%- set complicationsOther = repliesMap[complicationsOther__path]|reply_str_value -%}\n{%- set complicationsOther_yes = \"c0617d60-3314-4204-b373-059ac2280d34\" -%}\n{%- set complicationsOther_no = \"31329e72-1758-40bf-bf34-2c2d7374e9ce\" -%}\n{%- set complicationsOther_unknown = \"14d5cbf1-3213-453e-a8be-a0b9f562df89\" -%}\n{#- Specify [value-string] -#}\n{%- set complicationsOther_Specify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.79acfc29-56d7-47bb-8a05-91f00ed7fc83.64efa06c-f348-432f-b6d5-2fed98afbc35.f369f3f1-6305-4430-808c-a265832b2814.c0617d60-3314-4204-b373-059ac2280d34.6e944e0b-47ac-4be6-b2c2-6bec30d8e435\" -%}\n{%- set complicationsOther_Specify = repliesMap[complicationsOther_Specify__path]|reply_str_value -%}\n{#- Medication [section] -#}\n{%- set dischargeMedication__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1\" -%}\n{%- set dischargeMedication = repliesMap[dischargeMedication__path]|reply_str_value -%}\n{%- set dischargeMedication_open = \"6a2b9cc5-1348-4017-af26-d634380f8c1d\" -%}\n{#- Oral/orogastric fluids? [yes-no-unknown] -#}\n{%- set dischargeMedicationOralFluids__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.1cbfe204-9f8d-41ba-8c03-4ebad108ade4\" -%}\n{%- set dischargeMedicationOralFluids = repliesMap[dischargeMedicationOralFluids__path]|reply_str_value -%}\n{%- set dischargeMedicationOralFluids_yes = \"ae2c3370-6e20-479b-8c48-9d6de0ff1195\" -%}\n{%- set dischargeMedicationOralFluids_no = \"0114aa16-760a-416d-b5f1-56a0887f872d\" -%}\n{%- set dischargeMedicationOralFluids_unknown = \"0830385b-150f-4e32-98ca-40430681a1bb\" -%}\n{#- Intravenous fluids? [yes-no-unknown] -#}\n{%- set dischargeMedicationIntravenousFluids__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.1e5054d4-b95c-4ea7-ba5a-23d11076a950\" -%}\n{%- set dischargeMedicationIntravenousFluids = repliesMap[dischargeMedicationIntravenousFluids__path]|reply_str_value -%}\n{%- set dischargeMedicationIntravenousFluids_yes = \"5281302d-0faf-4a1d-88c5-bd5bd5a58ea9\" -%}\n{%- set dischargeMedicationIntravenousFluids_no = \"6ce41ad2-514c-4e2f-9721-934e76fda9c1\" -%}\n{%- set dischargeMedicationIntravenousFluids_unknown = \"d4f52798-9149-4719-9d18-ae87ec99cdeb\" -%}\n{#- Antiviral? [options] -#}\n{%- set dischargeMedicationAntiviral__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.a1b84278-1d13-4b40-829d-c0eba34ce852\" -%}\n{%- set dischargeMedicationAntiviral = repliesMap[dischargeMedicationAntiviral__path]|reply_str_value -%}\n{%- set dischargeMedicationAntiviral_Yes = \"c2601689-8d51-4040-ba41-ad1eb21062ca\" -%}\n{%- set dischargeMedicationAntiviral_No = \"e1e61c0e-e96f-47c6-99df-ed752a0701ee\" -%}\n{%- set dischargeMedicationAntiviral_Unknown = \"2d7039d6-124b-4491-bb8d-454f0458543a\" -%}\n{#- Specify [multichoice-list] -#}\n{%- set dischargeMedicationAntiviralSpecifyN__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.a1b84278-1d13-4b40-829d-c0eba34ce852.c2601689-8d51-4040-ba41-ad1eb21062ca.2685530c-bffe-45cf-b963-b25e5477620c\" -%}\n{%- set dischargeMedicationAntiviralSpecifyN = repliesMap[dischargeMedicationAntiviralSpecifyN__path]|reply_int_value -%}\n{#- Specify [multichoice-options] -#}\n{%- set dischargeMedicationAntiviralSpecify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.a1b84278-1d13-4b40-829d-c0eba34ce852.c2601689-8d51-4040-ba41-ad1eb21062ca.2685530c-bffe-45cf-b963-b25e5477620c.index_$dischargeMedicationAntiviralSpecify.653051e7-90a3-4669-8b38-ccbe88f4b9e5\" -%}\n{%- set dischargeMedicationAntiviralSpecify = repliesMap[dischargeMedicationAntiviralSpecify__path]|reply_str_value -%}\n{%- set dischargeMedicationAntiviralSpecify_Ribavirin = \"1df8f9f6-b1a8-443f-9575-0f277d4c8486\" -%}\n{%- set dischargeMedicationAntiviralSpecify_Lopinavir = \"539532a9-1f79-48e1-a9e1-0a0da0bc875e\" -%}\n{%- set dischargeMedicationAntiviralSpecify_Inhibitor = \"16a9eece-19c1-485c-9738-024a430f8135\" -%}\n{%- set dischargeMedicationAntiviralSpecify_IntAlpha = \"c9af411c-c8f7-43d7-8214-f36a359330e0\" -%}\n{%- set dischargeMedicationAntiviralSpecify_IntBeta = \"3a1b08b9-ac32-4035-97f9-704ef45d2ecb\" -%}\n{%- set dischargeMedicationAntiviralSpecify_Other = \"39ea8387-4545-4e01-a5ef-b2802e18b2d0\" -%}\n{#- Specify [value-string] -#}\n{%- set dischargeMedicationAntiviralSpecify_Other_Specify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.a1b84278-1d13-4b40-829d-c0eba34ce852.c2601689-8d51-4040-ba41-ad1eb21062ca.2685530c-bffe-45cf-b963-b25e5477620c.index_$dischargeMedicationAntiviralSpecify.653051e7-90a3-4669-8b38-ccbe88f4b9e5.39ea8387-4545-4e01-a5ef-b2802e18b2d0.abe8a8e0-80d6-47a2-8a83-44b3092fc4f6\" -%}\n{%- set dischargeMedicationAntiviralSpecify_Other_Specify = repliesMap[dischargeMedicationAntiviralSpecify_Other_Specify__path]|reply_str_value -%}\n{#- Antibiotic? [yes-no-unknown] -#}\n{%- set dischargeMedicationAntibiotic__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.aa69f0e6-0d7b-48bf-8f10-eeab183366bc\" -%}\n{%- set dischargeMedicationAntibiotic = repliesMap[dischargeMedicationAntibiotic__path]|reply_str_value -%}\n{%- set dischargeMedicationAntibiotic_yes = \"656f775b-fea4-4cf4-a53e-db1137aa667a\" -%}\n{%- set dischargeMedicationAntibiotic_no = \"f25528bd-afc0-4485-a2cb-df0a0fc82557\" -%}\n{%- set dischargeMedicationAntibiotic_unknown = \"e455a812-d1d2-4be5-8b96-1d3104e450a3\" -%}\n{#- Specify [value-string] -#}\n{%- set dischargeMedicationAntibiotic_Specify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.aa69f0e6-0d7b-48bf-8f10-eeab183366bc.656f775b-fea4-4cf4-a53e-db1137aa667a.76fe8bc2-97a6-4410-a397-3ce08d9dacbb\" -%}\n{%- set dischargeMedicationAntibiotic_Specify = repliesMap[dischargeMedicationAntibiotic_Specify__path]|reply_str_value -%}\n{#- Corticosteroid? [options] -#}\n{%- set dischargeMedicationCorticosteroid__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.f4a02fbc-c268-4f50-977b-cc0f5d41116f\" -%}\n{%- set dischargeMedicationCorticosteroid = repliesMap[dischargeMedicationCorticosteroid__path]|reply_str_value -%}\n{%- set dischargeMedicationCorticosteroid_yes = \"b6d12417-bd94-4b30-a4a3-0d7d43326996\" -%}\n{%- set dischargeMedicationCorticosteroid_no = \"0279e7b0-d2a1-42f5-91e4-56b67bd7a918\" -%}\n{%- set dischargeMedicationCorticosteroid_unknown = \"d768d74b-1bf6-4ae7-9eda-00246d68d422\" -%}\n{#- Route [multichoice-list] -#}\n{%- set dischargeMedicationCorticosteroid_RouteN__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.f4a02fbc-c268-4f50-977b-cc0f5d41116f.b6d12417-bd94-4b30-a4a3-0d7d43326996.97d106a6-0085-42af-8155-4e542271c75e\" -%}\n{%- set dischargeMedicationCorticosteroid_RouteN = repliesMap[dischargeMedicationCorticosteroid_RouteN__path]|reply_str_value -%}\n{#- Route [multichoice-options] -#}\n{%- set dischargeMedicationCorticosteroid_Route__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.f4a02fbc-c268-4f50-977b-cc0f5d41116f.b6d12417-bd94-4b30-a4a3-0d7d43326996.97d106a6-0085-42af-8155-4e542271c75e.index_$dischargeMedicationCorticosteroid_Route.fd3788f3-76cc-4a6d-b36b-dc4126742370\" -%}\n{%- set dischargeMedicationCorticosteroid_Route = repliesMap[dischargeMedicationCorticosteroid_Route__path]|reply_str_value -%}\n{%- set dischargeMedicationCorticosteroid_Route_Oral = \"215f389a-f760-4b1b-9998-a73f109e3631\" -%}\n{%- set dischargeMedicationCorticosteroid_Route_Intravenous = \"da04bcb4-ede2-476a-ad59-27efd2c927bc\" -%}\n{%- set dischargeMedicationCorticosteroid_Route_Inhaled = \"5decd5a3-d2f3-4c2a-abf6-176574eeba1c\" -%}\n{#- Agent [value-string] -#}\n{%- set dischargeMedicationCorticosteroid_Agent__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.f4a02fbc-c268-4f50-977b-cc0f5d41116f.b6d12417-bd94-4b30-a4a3-0d7d43326996.8de682fa-4042-4dd8-a60f-1088af6c533c\" -%}\n{%- set dischargeMedicationCorticosteroid_Agent = repliesMap[dischargeMedicationCorticosteroid_Agent__path]|reply_str_value -%}\n{#- Maximum daily dose [value-string] -#}\n{%- set dischargeMedicationCorticosteroid_Dose__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.f4a02fbc-c268-4f50-977b-cc0f5d41116f.b6d12417-bd94-4b30-a4a3-0d7d43326996.d081af26-3556-4f86-9ca6-ef27e53368ad\" -%}\n{%- set dischargeMedicationCorticosteroid_Dose = repliesMap[dischargeMedicationCorticosteroid_Dose__path]|reply_str_value -%}\n{#- Antifungal agent? [yes-no-unknown] -#}\n{%- set dischargeMedicationAntifungal__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.4344150a-e964-4c98-97a2-1d38b70b544c\" -%}\n{%- set dischargeMedicationAntifungal = repliesMap[dischargeMedicationAntifungal__path]|reply_str_value -%}\n{%- set dischargeMedicationAntifungal_yes = \"42ddb949-cfff-493f-9965-8b53e06ec7c9\" -%}\n{%- set dischargeMedicationAntifungal_no = \"415b8391-2be7-43cc-92ff-f3bacf75db88\" -%}\n{%- set dischargeMedicationAntifungal_unknown = \"e417f46c-2db5-4c4c-b5c7-b892a898f40e\" -%}\n{#- Specify [value-string] -#}\n{%- set dischargeMedicationAntifungal_Specify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.4344150a-e964-4c98-97a2-1d38b70b544c.42ddb949-cfff-493f-9965-8b53e06ec7c9.ef528f8f-010f-4eed-890f-0f080cb70637\" -%}\n{%- set dischargeMedicationAntifungal_Specify = repliesMap[dischargeMedicationAntifungal_Specify__path]|reply_str_value -%}\n{#- Antimalarial agent? [yes-no-unknown] -#}\n{%- set dischargeMedicationAntimalarial__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.a74c4c2c-3159-4514-9aa3-cd0dee82c14d\" -%}\n{%- set dischargeMedicationAntimalarial = repliesMap[dischargeMedicationAntimalarial__path]|reply_str_value -%}\n{%- set dischargeMedicationAntimalarial_yes = \"2221b9a4-70e5-4576-bea9-922277903086\" -%}\n{%- set dischargeMedicationAntimalarial_no = \"1471d1e4-8cd8-4181-8414-21ce79fe5725\" -%}\n{%- set dischargeMedicationAntimalarial_unknown = \"e9a65a23-abf5-457e-939f-01630729720d\" -%}\n{#- Specify [value-string] -#}\n{%- set dischargeMedicationAntimalarial_Specify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.a74c4c2c-3159-4514-9aa3-cd0dee82c14d.2221b9a4-70e5-4576-bea9-922277903086.e5c1f567-c067-4eeb-bb13-9c4168969bfe\" -%}\n{%- set dischargeMedicationAntimalarial_Specify = repliesMap[dischargeMedicationAntimalarial_Specify__path]|reply_str_value -%}\n{#- Experimental agent? [yes-no-unknown] -#}\n{%- set dischargeMedicationExperimental__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.7a31910a-2c11-4d1a-926b-23d551dc7f04\" -%}\n{%- set dischargeMedicationExperimental = repliesMap[dischargeMedicationExperimental__path]|reply_str_value -%}\n{%- set dischargeMedicationExperimental_yes = \"abcf0541-7294-4283-8daa-d291329902d6\" -%}\n{%- set dischargeMedicationExperimental_no = \"ad0ea64b-50f9-4678-8ccb-f54f3311038b\" -%}\n{%- set dischargeMedicationExperimental_unknown = \"2485e40d-945c-4a39-83b4-4bbbca709523\" -%}\n{#- Specify [value-string] -#}\n{%- set dischargeMedicationExperimental_Specify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.7a31910a-2c11-4d1a-926b-23d551dc7f04.abcf0541-7294-4283-8daa-d291329902d6.3cd7bf84-cfe5-4944-bff7-633f0a24c0a7\" -%}\n{%- set dischargeMedicationExperimental_Specify = repliesMap[dischargeMedicationExperimental_Specify__path]|reply_str_value -%}\n{#- Non-steroidal anti-inflammatory (NSAID)? [yes-no-unknown] -#}\n{%- set dischargeMedicationNSAID__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.2ee6fcce-6948-4650-912b-106bd1b5af4f\" -%}\n{%- set dischargeMedicationNSAID = repliesMap[dischargeMedicationNSAID__path]|reply_str_value -%}\n{%- set dischargeMedicationNSAID_yes = \"19b7de32-81f8-4f58-9e8d-f35e63ce2cff\" -%}\n{%- set dischargeMedicationNSAID_no = \"8df58ab9-14a8-4360-a498-6a357c4d3565\" -%}\n{%- set dischargeMedicationNSAID_unknown = \"67897863-4d74-4983-a087-3af411178b4e\" -%}\n{#- Specify [value-string] -#}\n{%- set dischargeMedicationNSAID_Specify__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.c4e2b4d2-cba2-456e-a0fe-4d8fcc630ff1.6a2b9cc5-1348-4017-af26-d634380f8c1d.2ee6fcce-6948-4650-912b-106bd1b5af4f.19b7de32-81f8-4f58-9e8d-f35e63ce2cff.2723427d-43a8-421f-b458-ce729756eed2\" -%}\n{%- set dischargeMedicationNSAID_Specify = repliesMap[dischargeMedicationNSAID_Specify__path]|reply_str_value -%}\n{#- Supportive care [section] -#}\n{%- set dischargeCare__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea\" -%}\n{%- set dischargeCare = repliesMap[dischargeCare__path]|reply_str_value -%}\n{%- set dischargeCare_open = \"8e73d731-6b37-433a-8873-57b623d22ab1\" -%}\n{#- ICU or High Dependency Unit admission? [yes-no-unknown] -#}\n{%- set dischargeCareICU__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.96f8c34f-55b1-4614-a03d-2f33fa82206b\" -%}\n{%- set dischargeCareICU = repliesMap[dischargeCareICU__path]|reply_str_value -%}\n{%- set dischargeCareICU_yes = \"2d93a9b1-6da8-4d50-aaa9-54f5031f3724\" -%}\n{%- set dischargeCareICU_no = \"b78b0ad4-8fae-4e50-b48a-95e5beb81cf4\" -%}\n{%- set dischargeCareICU_unknown = \"80b9c62b-3559-46eb-9830-86bc447db366\" -%}\n{#- Total duration [days] [value-number] -#}\n{%- set dischargeCareICUDuration__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.96f8c34f-55b1-4614-a03d-2f33fa82206b.2d93a9b1-6da8-4d50-aaa9-54f5031f3724.f6664ddb-93b7-4aa6-9eae-dc126ec3b202\" -%}\n{%- set dischargeCareICUDuration = repliesMap[dischargeCareICUDuration__path]|reply_str_value -%}\n{#- Date of ICU/HDU admission [options] -#}\n{%- set dischargeCareICUAdmission__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.96f8c34f-55b1-4614-a03d-2f33fa82206b.2d93a9b1-6da8-4d50-aaa9-54f5031f3724.f487c23c-95a2-4177-9eb6-12368f7e103c\" -%}\n{%- set dischargeCareICUAdmission = repliesMap[dischargeCareICUAdmission__path]|reply_str_value -%}\n{%- set dischargeCareICUAdmission_Known = \"a5e8a32f-05dd-42dd-9978-2c73a0e76041\" -%}\n{%- set dischargeCareICUAdmission_Unknown = \"21a4529a-e470-4010-93d7-f598009da8e1\" -%}\n{#- Enter date of ICU/HDU admission [value-date] -#}\n{%- set dischargeCareICUAdmission_Known_Date__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.96f8c34f-55b1-4614-a03d-2f33fa82206b.2d93a9b1-6da8-4d50-aaa9-54f5031f3724.f487c23c-95a2-4177-9eb6-12368f7e103c.a5e8a32f-05dd-42dd-9978-2c73a0e76041.f1d48d5b-8eec-44cf-9744-ff87f9c6f81d\" -%}\n{%- set dischargeCareICUAdmission_Known_Date = repliesMap[dischargeCareICUAdmission_Known_Date__path]|reply_str_value -%}\n{#- Date of ICU/HDU dicharge [options] -#}\n{%- set dischargeCareICUDischarge__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.96f8c34f-55b1-4614-a03d-2f33fa82206b.2d93a9b1-6da8-4d50-aaa9-54f5031f3724.b0d01be6-1b30-4c81-916b-fcc1b921d07e\" -%}\n{%- set dischargeCareICUDischarge = repliesMap[dischargeCareICUDischarge__path]|reply_str_value -%}\n{%- set dischargeCareICUDischarge_Known = \"6c7d7f38-8256-4b06-8c98-241aca9ec2d4\" -%}\n{%- set dischargeCareICUDischarge_InICU = \"8e4d5af0-8a83-4373-9848-aae00d3997ca\" -%}\n{%- set dischargeCareICUDischarge_Unknown = \"52e31f66-04b4-46bc-82c5-ec1ae5d0269d\" -%}\n{#- Enter date of ICU/HDU discharge [value-date] -#}\n{%- set dischargeCareICUDischarge_Known_Date__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.96f8c34f-55b1-4614-a03d-2f33fa82206b.2d93a9b1-6da8-4d50-aaa9-54f5031f3724.b0d01be6-1b30-4c81-916b-fcc1b921d07e.6c7d7f38-8256-4b06-8c98-241aca9ec2d4.0b52c83e-22bf-4bf0-9940-e2d183c92870\" -%}\n{%- set dischargeCareICUDischarge_Known_Date = repliesMap[dischargeCareICUAdmission_Known_Date__path]|reply_str_value -%}\n{#- Oxygen therapy? [yes-no-unknown] -#}\n{%- set dischargeCareOxygen__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.d6d6b063-e6f2-4f8e-be90-7030c11982ad\" -%}\n{%- set dischargeCareOxygen = repliesMap[dischargeCareOxygen__path]|reply_str_value -%}\n{%- set dischargeCareOxygen_yes = \"f7919a16-b17f-4b9a-84af-11212f09f67d\" -%}\n{%- set dischargeCareOxygen_no = \"9896c6be-1332-414b-81f7-807d1b9a8147\" -%}\n{%- set dischargeCareOxygen_unknown = \"59bf683e-5682-433a-815c-6150c423e52c\" -%}\n{#- Total duration [days] [value-number] -#}\n{%- set dischargeCareOxygenDuration__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.d6d6b063-e6f2-4f8e-be90-7030c11982ad.f7919a16-b17f-4b9a-84af-11212f09f67d.6172ff76-a3fd-4418-a7ee-3bb49e43cd34\" -%}\n{%- set dischargeCareOxygenDuration = repliesMap[dischargeCareOxygenDuration__path]|reply_str_value -%}\n{#- O₂ flow [options] -#}\n{%- set dischargeCareOxygenFlow__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.d6d6b063-e6f2-4f8e-be90-7030c11982ad.f7919a16-b17f-4b9a-84af-11212f09f67d.d808e51b-b9c3-4d2d-80fe-a57c6b3eeb21\" -%}\n{%- set dischargeCareOxygenFlow = repliesMap[dischargeCareOxygenFlow__path]|reply_str_value -%}\n{%- set dischargeCareOxygenFlow_1to5 = \"4702011d-357b-4524-88db-52bc6fbd166f\" -%}\n{%- set dischargeCareOxygenFlow_6to10 = \"505a1d05-8245-4955-b7f0-a2aa60dc454a\" -%}\n{%- set dischargeCareOxygenFlow_11to15 = \"00a6b53e-bc2a-45e1-b9d7-46bc046d66c7\" -%}\n{%- set dischargeCareOxygenFlow_gt15 = \"717991b5-587b-4cbc-8ec3-fff9e6360305\" -%}\n{%- set dischargeCareOxygenFlow_Unknown = \"85e46a97-fcdd-42ef-bfc0-573cb5d3875b\" -%}\n{#- Source of oxygen [options] -#}\n{%- set dischargeCareOxygenSource__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.d6d6b063-e6f2-4f8e-be90-7030c11982ad.f7919a16-b17f-4b9a-84af-11212f09f67d.2a38e81a-171e-4a9f-b012-b00a31d22b96\" -%}\n{%- set dischargeCareOxygenSource = repliesMap[dischargeCareOxygenSource__path]|reply_str_value -%}\n{%- set dischargeCareOxygenSource_Piped = \"f68e24ac-17a6-4150-a6af-b0a4e6c20934\" -%}\n{%- set dischargeCareOxygenSource_Cylinder = \"36c1d314-7631-4840-8979-c5a3f1c6cad6\" -%}\n{%- set dischargeCareOxygenSource_Concentrator = \"419f23b8-e6b3-40d5-9107-a67d140f9aac\" -%}\n{%- set dischargeCareOxygenSource_Unknown = \"7f7154a6-776a-400d-9198-78b22b489706\" -%}\n{#- Interface [options] -#}\n{%- set dischargeCareOxygenInterface__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.d6d6b063-e6f2-4f8e-be90-7030c11982ad.f7919a16-b17f-4b9a-84af-11212f09f67d.ed40ff9b-dd10-45da-988a-1faa20898f24\" -%}\n{%- set dischargeCareOxygenInterface = repliesMap[dischargeCareOxygenInterface__path]|reply_str_value -%}\n{%- set dischargeCareOxygenInterface_Prongs = \"e5665602-b837-46d2-943f-ed5e33871fc1\" -%}\n{%- set dischargeCareOxygenInterface_Cannula = \"3ecc8bea-b1c3-4bf7-8e73-cc0888a17f0e\" -%}\n{%- set dischargeCareOxygenInterface_MaskWithout = \"ae154e2c-1d80-4801-925b-8c3647768411\" -%}\n{%- set dischargeCareOxygenInterface_MaskWith = \"2d9bd0dd-b7ab-4412-9638-6183a20d9270\" -%}\n{%- set dischargeCareOxygenInterface_CPAP = \"8ee10c53-57c9-46b7-94a7-f3aa7a01f623\" -%}\n{#- Non-invasive ventilation (e.g.BIPAP/CPAP)? [yes-no-unknown] -#}\n{%- set dischargeCareNonInvasive__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.d09c78d3-497c-4158-a348-87c005d42c08\" -%}\n{%- set dischargeCareNonInvasive = repliesMap[dischargeCareNonInvasive__path]|reply_str_value -%}\n{%- set dischargeCareNonInvasive_yes = \"5c03fd2d-60f6-486d-8b7c-f09ac72a2a27\" -%}\n{%- set dischargeCareNonInvasive_no = \"ed6bd017-303b-4000-bb62-e9bb479d5c19\" -%}\n{%- set dischargeCareNonInvasive_unknown = \"dd37f13e-1b16-4061-b8fd-bdb2a7659065\" -%}\n{#- Total duration [days] [value-number] -#}\n{%- set dischargeCareNonInvasiveDuration__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.d09c78d3-497c-4158-a348-87c005d42c08.5c03fd2d-60f6-486d-8b7c-f09ac72a2a27.229b4620-1bef-4059-8c98-805297afe08e\" -%}\n{%- set dischargeCareNonInvasiveDuration = repliesMap[dischargeCareNonInvasiveDuration__path]|reply_str_value -%}\n{#- Invasive ventilation (Any)? [yes-no-unknown] -#}\n{%- set dischargeCareInvasive__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.9f5874f9-764b-42d1-98c6-1da3cae0b616\" -%}\n{%- set dischargeCareInvasive = repliesMap[dischargeCareInvasive__path]|reply_str_value -%}\n{%- set dischargeCareInvasive_yes = \"15d67fc1-a6cc-4e45-8b8b-5d5d087bbddb\" -%}\n{%- set dischargeCareInvasive_no = \"275a68cf-a5ba-4313-a6b2-6ed1d75a41ec\" -%}\n{%- set dischargeCareInvasive_unknown = \"1b44db52-934a-45a1-983c-379f15e8cec2\" -%}\n{#- Total duration [days] [value-number] -#}\n{%- set dischargeCareInvasiveDuration__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.9f5874f9-764b-42d1-98c6-1da3cae0b616.15d67fc1-a6cc-4e45-8b8b-5d5d087bbddb.e174475d-9f6b-4ebd-bbdb-69fdf953dded\" -%}\n{%- set dischargeCareInvasiveDuration = repliesMap[dischargeCareInvasiveDuration__path]|reply_str_value -%}\n{#- Extracorporeal (ECMO) support? [yes-no-unknown] -#}\n{%- set dischargeCareECMO__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.e7c2ca11-255d-48b3-ab02-5a46db8571ad\" -%}\n{%- set dischargeCareECMO = repliesMap[dischargeCareECMO__path]|reply_str_value -%}\n{%- set dischargeCareECMO_yes = \"37dbfe26-ddef-4e19-9367-69b8553d0b6a\" -%}\n{%- set dischargeCareECMO_no = \"e8ba9d0b-5979-4cdd-ba08-ad1d8d146cd2\" -%}\n{%- set dischargeCareECMO_unknown = \"fc9a9751-c6c6-4065-9a95-6905ee9bb1db\" -%}\n{#- Total duration [days] [value-number] -#}\n{%- set dischargeCareECMODuration__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.e7c2ca11-255d-48b3-ab02-5a46db8571ad.37dbfe26-ddef-4e19-9367-69b8553d0b6a.23130fd7-f882-46db-8560-dba0b9926766\" -%}\n{%- set dischargeCareECMODuration = repliesMap[dischargeCareECMODuration__path]|reply_str_value -%}\n{#- Prone position? [yes-no-unknown] -#}\n{%- set dischargeCareProne__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.f19d6cbe-a2a0-411e-9687-aa49fe574e4a\" -%}\n{%- set dischargeCareProne = repliesMap[dischargeCareProne__path]|reply_str_value -%}\n{%- set dischargeCareProne_yes = \"95a22e32-c233-4b21-a592-1a83c113261b\" -%}\n{%- set dischargeCareProne_no = \"40cfc3c7-d16c-4a92-bec9-a1adda8fec60\" -%}\n{%- set dischargeCareProne_unknown = \"28986d29-6b81-4f2e-b462-34be84ab82ac\" -%}\n{#- Total duration [days] [value-number] -#}\n{%- set dischargeCareProneDuration__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.f19d6cbe-a2a0-411e-9687-aa49fe574e4a.95a22e32-c233-4b21-a592-1a83c113261b.f1b0e135-2358-4bed-a6cc-33c1af392ddb\" -%}\n{%- set dischargeCareProneDuration = repliesMap[dischargeCareProneDuration__path]|reply_str_value -%}\n{#- Renal replacement therapy (RRT) or dialysis? [yes-no-unknown] -#}\n{%- set dischargeCareRRT__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.118f5797-cdd1-4412-bf4a-1c4b8d883ce5\" -%}\n{%- set dischargeCareRRT = repliesMap[dischargeCareRRT__path]|reply_str_value -%}\n{%- set dischargeCareRRT_yes = \"102aca89-faa5-4c79-abe7-dc8edecdc128\" -%}\n{%- set dischargeCareRRT_no = \"07d68e3b-d56a-4df6-92d2-9508912806a1\" -%}\n{%- set dischargeCareRRT_unknown = \"dc1fc6b1-2149-4320-a06a-eea2f255dbf1\" -%}\n{#- Inotropes/vasopressors? [yes-no-unknown] -#}\n{%- set dischargeCareInotropes__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.48978571-9c0a-4fce-ae8e-f1758f7be0e8\" -%}\n{%- set dischargeCareInotropes = repliesMap[dischargeCareInotropes__path]|reply_str_value -%}\n{%- set dischargeCareInotropes_yes = \"a6f76732-0152-45c1-b7cb-58bc3dfa7913\" -%}\n{%- set dischargeCareInotropes_no = \"4ad24b24-3458-4927-a5b3-3673acdd5a45\" -%}\n{%- set dischargeCareInotropes_unknown = \"ed5dbcea-bc2f-4efb-b9d2-e4c147952ef4\" -%}\n{#- Total duration [days] [value-number] -#}\n{%- set dischargeCareInotropesDuration__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.641cc92d-ef9f-4af7-b1bc-c5428e5160ea.8e73d731-6b37-433a-8873-57b623d22ab1.48978571-9c0a-4fce-ae8e-f1758f7be0e8.a6f76732-0152-45c1-b7cb-58bc3dfa7913.e6e243f4-c6c6-4dce-b534-5c9eaab7ee53\" -%}\n{%- set dischargeCareInotropesDuration = repliesMap[dischargeCareInotropesDuration__path]|reply_str_value -%}\n{#- Outcome [section] -#}\n{%- set outcome__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.4bb28f05-0169-4ac7-8768-b38292bd57c2\" -%}\n{%- set outcome = repliesMap[outcome__path]|reply_str_value -%}\n{%- set outcome_open = \"e6418c1b-a2c8-4aa8-ab89-7dbd4f35dae4\" -%}\n{#- Outcome [options] -#}\n{%- set outcomeOutcome__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.4bb28f05-0169-4ac7-8768-b38292bd57c2.e6418c1b-a2c8-4aa8-ab89-7dbd4f35dae4.f8e51a2b-403d-4327-a85a-2d1439580a6c\" -%}\n{%- set outcomeOutcome = repliesMap[outcomeOutcome__path]|reply_str_value -%}\n{%- set outcomeOutcome_Alive = \"c10139c4-1a13-421b-a92c-23757bdcf140\" -%}\n{%- set outcomeOutcome_Hospitalized = \"3f07aac9-1c11-4dce-84be-d91dfbb07870\" -%}\n{%- set outcomeOutcome_Transfer = \"eebdef1b-278d-4447-8bfe-8b3dfb0b25d1\" -%}\n{%- set outcomeOutcome_Death = \"f3bb1486-1aa5-4d17-821f-37b6d4157782\" -%}\n{%- set outcomeOutcome_Palliative = \"deb9c0fb-e537-4f9c-82e9-e8b721021fbc\" -%}\n{%- set outcomeOutcome_Unknown = \"df1e993b-a6e6-4400-8374-62e443386c74\" -%}\n{#- Ability to self-care at discharge versus before illness [options] -#}\n{%- set outcomeOutcome_Alive_SelfCare__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.4bb28f05-0169-4ac7-8768-b38292bd57c2.e6418c1b-a2c8-4aa8-ab89-7dbd4f35dae4.f8e51a2b-403d-4327-a85a-2d1439580a6c.c10139c4-1a13-421b-a92c-23757bdcf140.738688a8-16fb-4441-b267-79c42fbb7bae\" -%}\n{%- set outcomeOutcome_Alive_SelfCare = repliesMap[outcomeOutcome_Alive_SelfCare__path]|reply_str_value -%}\n{%- set outcomeOutcome_Alive_SelfCareSame = \"1cf7e8c8-2892-47e2-8065-8c2c2342f449\" -%}\n{%- set outcomeOutcome_Alive_SelfCareWorse = \"86a3760a-2b60-4608-874e-987b472a2e42\" -%}\n{%- set outcomeOutcome_Alive_SelfCareBetter = \"8334f955-6a04-428d-8862-129e18e0d965\" -%}\n{%- set outcomeOutcome_Alive_SelfCareUnknown = \"a41ec042-2668-4c15-97a8-85f987d58fb1\" -%}\n{#- Outcome date [value-date] -#}\n{%- set outcomeOutcomeDate__path = \"ef59d974-5fde-4431-b3fb-cfce77e2d006.4bb28f05-0169-4ac7-8768-b38292bd57c2.e6418c1b-a2c8-4aa8-ab89-7dbd4f35dae4.cf6d7996-3a9c-4c9c-98c0-95d41e955e7f\" -%}\n{%- set outcomeOutcomeDate = repliesMap[outcomeOutcomeDate__path]|reply_str_value -%}"
        },
        {
            "uuid" : "969f2ab8-cc9b-417f-a5ad-4f75693cd975",
            "fileName" : "main.ttl.j2",
            "content" : "{%- import \"_mapping.j2\" as crf with context -%}\n{%- set repliesMap = ctx.questionnaireRepliesMap -%}\n@prefix obo: <http://purl.obolibrary.org/obo/> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n@prefix vodan: <http://purl.org/vodan/whocovid19crfsemdatamodel/> .\n@prefix vodan_inst: <http://purl.org/vodan/whocovid19crfsemdatamodel/instances/> .\n@prefix vodan_avpu: <http://purl.org/vodan/whocovid19crfsemdatamodel/instances/avpu-list/> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.\n# Using VODAN ontology 1.1.4\n# See: https://github.com/FAIRDataTeam/WHO-COVID-CRF\n\n<{{ ctx.config.clientUrl }}/crfs/detail/{{ ctx.questionnaireUuid }}> a vodan:who-covid-19-rapid-crf ;\n    {#- MODULE 1 #}\n    # MODULE 1 (ADMISSION)\n    obo:BFO_0000051 [\n      a vodan:Module_1 ;\n      {%- if crf.siteName %}\n      obo:BFO_0000051 [\n        a vodan:Facility_name ;\n        vodan:has_literal_value \"{{ crf.siteName }}\";\n      ] ;\n      {%- endif %}\n      {%- if crf.country__uri %}\n      obo:BFO_0000051 [\n        a vodan:Country ;\n        vodan:has_value <{{crf.country__uri}}>;\n      ] ;\n      {%- endif %}\n      {%- if crf.enrolmentDate %}\n      obo:BFO_0000051 [\n        a vodan:Enrolment ;\n        vodan:has_literal_value \"{{ crf.enrolmentDate }}\"^^xsd:date;\n      ] ;\n      {%- endif %}\n      {#- INCLUSION CRITERIA #}\n      {%- if crf.inclusionCriteria == crf.inclusionCriteria_open %}\n      # ADMISSION: INCLUSION CRITERIA\n      obo:BFO_0000051 [\n        a vodan:Inclusion ;\n        {%- if crf.pathogenPHI == crf.pathogenPHI_yes %}\n        obo:BFO_0000051 [\n          a vodan:Inclusion_pathogen ;\n          vodan:has_literal_value \"true\"^^xsd:boolean;\n        ] ;\n        {%- if crf.phiFeverHistory == crf.phiFeverHistory_yes %}\n        obo:BFO_0000051 [\n          a vodan:Inclusion_feverishness ;\n          vodan:has_literal_value \"true\"^^xsd:boolean;\n        ] ;\n        {%- elif crf.phiFeverHistory == crf.phiFeverHistory_no %}\n        obo:BFO_0000051 [\n          a vodan:Inclusion_feverishness ;\n          vodan:has_literal_value \"false\"^^xsd:boolean;\n        ] ;\n        {%- endif %}\n        {%- if crf.phiCough == crf.phiCough_yes %}\n        obo:BFO_0000051 [\n          a vodan:Inclusion_cough ;\n          vodan:has_literal_value \"true\"^^xsd:boolean;\n        ] ;\n        {%- elif crf.phiCough == crf.phiCough_no %}\n        obo:BFO_0000051 [\n          a vodan:Inclusion_cough ;\n          vodan:has_literal_value \"false\"^^xsd:boolean;\n        ] ;\n        {%- endif %}\n        {%- if crf.phiDyspnoea == crf.phiDyspnoea_yes %}\n        obo:BFO_0000051 [\n          a vodan:Inclusion_dyspnoea ;\n          vodan:has_literal_value \"true\"^^xsd:boolean;\n        ] ;\n        {%- elif crf.phiDyspnoea == crf.phiDyspnoea_no %}\n        obo:BFO_0000051 [\n          a vodan:Inclusion_dyspnoea ;\n          vodan:has_literal_value \"false\"^^xsd:boolean;\n        ] ;\n        {%- endif %}\n        {%- if crf.phiARI == crf.phiARI_yes %}\n        obo:BFO_0000051 [\n          a vodan:Inclusion_ARI ;\n          vodan:has_literal_value \"true\"^^xsd:boolean;\n        ] ;\n        {%- elif crf.phiARI == crf.phiARI_no %}\n        obo:BFO_0000051 [\n          a vodan:Inclusion_ARI ;\n          vodan:has_literal_value \"false\"^^xsd:boolean;\n        ] ;\n        {%- endif %}\n        {%- elif crf.pathogenPHI == crf.pathogenPHI_no %}\n        obo:BFO_0000051 [\n          a vodan:Inclusion_pathogen ;\n          vodan:has_literal_value \"false\"^^xsd:boolean;\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {#- DEMOGRAPHICS #}\n      {%- if crf.demographics == crf.demographics_open %}\n      # ADMISSION: DEMOGRAPHICS\n      obo:BFO_0000051 [\n        a vodan:Demographics ;\n        {#- SEX AT BIRTH #}\n        {%- if crf.sexAtBirth == crf.sexAtBirth_Male %}\n        obo:BFO_0000051 [\n          a vodan:Sex ;\n          vodan:has_value vodan_inst:C46109;\n        ] ;\n        {%- elif crf.sexAtBirth == crf.sexAtBirth_Female %}\n        obo:BFO_0000051 [\n          a vodan:Sex ;\n          vodan:has_value vodan_inst:C46110;\n        ] ;\n        {%- elif crf.sexAtBirth == crf.sexAtBirth_NotSpecified %}\n        obo:BFO_0000051 [\n          a vodan:Sex ;\n          vodan:has_value vodan_inst:C38046;\n        ] ;\n        {%- endif %}\n        {#- DATE OF BIRTH / AGE #}\n        {%- if crf.dateOfBirth == crf.dateOfBirthKnown_yes and crf.dateOfBirthDate %}\n        obo:BFO_0000051 [\n          a vodan:Birth ;\n          vodan:has_literal_value \"{{ crf.dateOfBirthDate }}\"^^xsd:date;\n        ] ;\n        {%- elif crf.dateOfBirth == crf.dateOfBirthKnown_no %}\n        {%- if crf.ageUnits == crf.ageUnits_Years and crf.ageNumber %}\n        obo:BFO_0000051 [\n          a vodan:Age_years ;\n          vodan:has_literal_value \"{{ crf.ageNumber }}\"^^xsd:integer;\n        ] ;\n        {%- elif crf.ageUnits == crf.ageUnits_Months and crf.ageNumber %}\n        obo:BFO_0000051 [\n          a vodan:Age_months ;\n          vodan:has_literal_value \"{{ crf.ageNumber }}\"^^xsd:integer;\n        ] ;\n        {%- endif %}\n        {%- endif %}\n        {#- HEALTHCARE WORKER #}\n        {%- if crf.healthCareWorker == crf.healthCareWorker_yes %}\n        obo:BFO_0000051 [\n          a vodan:Healtcare_worker ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.healthCareWorker == crf.healthCareWorker_no %}\n        obo:BFO_0000051 [\n          a vodan:Healtcare_worker ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.healthCareWorker == crf.healthCareWorker_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Healtcare_worker ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- LABORATORY WORKER #}\n        {%- if crf.laboratoryWorker == crf.laboratoryWorker_yes %}\n        obo:BFO_0000051 [\n          a vodan:Laboratory_Worker ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.laboratoryWorker == crf.laboratoryWorker_no %}\n        obo:BFO_0000051 [\n          a vodan:Laboratory_Worker ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.laboratoryWorker == crf.laboratoryWorker_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Laboratory_Worker ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- PREGNANT #}\n        {%- if crf.pregnant == crf.pregnant_yes %}\n        obo:BFO_0000051 [\n          a vodan:Pregnant ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- if crf.pregnantWeeks %}\n        obo:BFO_0000051 [\n          a vodan:Gestational_weeks ;\n          vodan:has_literal_value \"{{ crf.pregnantWeeks }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {%- elif crf.pregnant == crf.pregnant_no %}\n        obo:BFO_0000051 [\n          a vodan:Pregnant ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.pregnant == crf.pregnant_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Pregnant ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- elif crf.pregnant == crf.pregnant_na %}\n        obo:BFO_0000051 [\n          a vodan:Pregnant ;\n          vodan:has_value vodan_inst:C18902 ;\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {#- ADMISSION VITAL SIGNS #}\n      {%- if crf.onsetAdmission == crf.onsetAdmission_open %}\n      # ADMISSION: VITAL SIGNS\n      obo:BFO_0000051 [\n        a vodan:Vital_signs ;\n        {#- SYMPTOMS ONSET #}\n        {%- if crf.symptomOnset %}\n        obo:BFO_0000051 [\n          a vodan:Symptom_onset ;\n          vodan:has_literal_value \"{{ crf.symptomOnset }}\"^^xsd:date ;\n        ] ;\n        {%- endif %}\n        {#- ADMISSION DATE #}\n        {%- if crf.admissionDate %}\n        obo:BFO_0000051 [\n          a vodan:admission ;\n          vodan:has_literal_value \"{{ crf.admissionDate }}\"^^xsd:date ;\n        ] ;\n        {%- endif %}\n        {#- TEMPERATURE #}\n        {%- if crf.admissionTemperature %}\n        obo:BFO_0000051 [\n          a vodan:Temperature_admission ;\n          vodan:has_literal_value \"{{ crf.admissionTemperature }}\"^^xsd:decimal ;\n        ] ;\n        {%- endif %}\n        {#- RESPIRATORY RATE #}\n        {%- if crf.admissionRespiratoryRate %}\n        obo:BFO_0000051 [\n          a vodan:Respiratory_rate_admission ;\n          vodan:has_literal_value \"{{ crf.admissionRespiratoryRate }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {#- BLOOD PREASSURE #}\n        {%- if crf.admissionBPSystolic %}\n        obo:BFO_0000051 [\n          a vodan:BP_systolic_admission ;\n          vodan:has_literal_value \"{{ crf.admissionBPSystolic }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionBPDiastolic %}\n        obo:BFO_0000051 [\n          a vodan:BP_diastolic_admission ;\n          vodan:has_literal_value \"{{ crf.admissionBPDiastolic }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {#- SEVERE DEHYDRATION #}\n        {%- if crf.admissionDehydration == crf.admissionDehydration_yes %}\n        obo:BFO_0000051 [\n          a vodan:Severe_dehydration_admission ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionDehydration == crf.admissionDehydration_no %}\n        obo:BFO_0000051 [\n          a vodan:Severe_dehydration_admission ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionDehydration == crf.admissionDehydration_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Severe_dehydration_admission ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- STERNAL CAPILLARY REFILL TIME #}\n        {%- if crf.admissionSternalRefill == crf.admissionSternalRefill_yes %}\n        obo:BFO_0000051 [\n          a vodan:Capillary_refill_admission ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSternalRefill == crf.admissionSternalRefill_no %}\n        obo:BFO_0000051 [\n          a vodan:Capillary_refill_admission ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSternalRefill == crf.admissionSternalRefill_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Capillary_refill_admission ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- OXYGEN SATURATION #}\n        {%- if crf.admissionOxygenSatValue %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_saturation_admission ;\n          vodan:has_literal_value \"{{ crf.admissionOxygenSatValue }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionOxygenSatCond == crf.admissionOxygenSatCond_Room %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_saturation_expl_admission ;\n          vodan:has_value vodan:oxygen_therapy ;\n        ] ;\n        {%- elif crf.admissionOxygenSatCond == crf.admissionOxygenSatCond_Therapy %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_saturation_expl_admission ;\n          vodan:has_value vodan:room_air ;\n        ] ;\n        {%- elif crf.admissionOxygenSatCond == crf.admissionOxygenSatCond_Unknown %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_saturation_expl_admission ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- AVPU #}\n        {%- if crf.admissionAVPU == crf.admissionAVPU_A %}\n        obo:BFO_0000051 [\n          a vodan:AVPU_scale_admission ;\n          vodan:has_value vodan_avpu:A ;\n        ] ;\n        {%- elif crf.admissionAVPU == crf.admissionAVPU_V %}\n        obo:BFO_0000051 [\n          a vodan:AVPU_scale_admission ;\n          vodan:has_value vodan_avpu:V ;\n        ] ;\n        {%- elif crf.admissionAVPU == crf.admissionAVPU_P %}\n        obo:BFO_0000051 [\n          a vodan:AVPU_scale_admission ;\n          vodan:has_value vodan_avpu:P ;\n        ] ;\n        {%- elif crf.admissionAVPU == crf.admissionAVPU_U %}\n        obo:BFO_0000051 [\n          a vodan:AVPU_scale_admission ;\n          vodan:has_value vodan_avpu:U ;\n        ] ;\n        {%- endif %}\n        {#- GLASGOW COMA SCORE #}\n        {%- if crf.admissionGCS %}\n        obo:BFO_0000051 [\n          a vodan:GCS_admission ;\n          vodan:has_literal_value \"{{ crf.admissionGCS }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {#- Malnutrition #}\n        {%- if crf.admissionMalnutrition == crf.admissionMalnutrition_yes %}\n        obo:BFO_0000051 [\n          a vodan:Malnutrition ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionMalnutrition == crf.admissionMalnutrition_no %}\n        obo:BFO_0000051 [\n          a vodan:Malnutrition ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionMalnutrition == crf.admissionMalnutrition_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Malnutrition ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- ARM CIRCUMFERENCE #}\n        {%- if crf.admissionCircumeference %}\n        obo:BFO_0000051 [\n          a vodan:Arm ;\n          vodan:has_literal_value \"{{ crf.admissionCircumeference }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {#- HEIGHT #}\n        {%- if crf.admissionHeight %}\n        obo:BFO_0000051 [\n          a vodan:Height ;\n          vodan:has_literal_value \"{{ crf.admissionHeight }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {#- WEIGHT #}\n        {%- if crf.admissionWeight %}\n        obo:BFO_0000051 [\n          a vodan:Weight ;\n          vodan:has_literal_value \"{{ crf.admissionWeight }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {#- CO-MORBIDITIES #}\n      {%- if crf.comorbidities == crf.comorbidities_open %}\n      # ADMISSION: CO-MORBIDITIES\n      obo:BFO_0000051 [\n        a vodan:Co-morbidities ;\n        {%- if crf.comorbChronicCardiac == crf.comorbChronicCardiac_yes %}\n        obo:BFO_0000051 [\n          a vodan:Cardiac_disease ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.comorbChronicCardiac == crf.comorbChronicCardiac_no %}\n        obo:BFO_0000051 [\n          a vodan:Cardiac_disease ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbChronicCardiac == crf.comorbChronicCardiac_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Cardiac_disease ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.comorbHypertension == crf.comorbHypertension_yes %}\n        obo:BFO_0000051 [\n          a vodan:Hypertension ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.comorbHypertension == crf.comorbHypertension_no %}\n        obo:BFO_0000051 [\n          a vodan:Hypertension ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbHypertension == crf.comorbHypertension_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Hypertension ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.comorbChronicPulmonary == crf.comorbChronicPulmonary_yes %}\n        obo:BFO_0000051 [\n          a vodan:Pulmonary_disease ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.comorbChronicPulmonary == crf.comorbChronicPulmonary_no %}\n        obo:BFO_0000051 [\n          a vodan:Pulmonary_disease ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbChronicPulmonary == crf.comorbChronicPulmonary_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Pulmonary_disease ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.comorbAsthma == crf.comorbAsthma_yes %}\n        obo:BFO_0000051 [\n          a vodan:Asthma ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.comorbAsthma == crf.comorbAsthma_no %}\n        obo:BFO_0000051 [\n          a vodan:Asthma ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbAsthma == crf.comorbAsthma_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Asthma ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.comorbChronicKidney == crf.comorbChronicKidney_yes %}\n        obo:BFO_0000051 [\n          a vodan:Kidney_disease ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.comorbChronicKidney == crf.comorbChronicKidney_no %}\n        obo:BFO_0000051 [\n          a vodan:Kidney_disease ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbChronicKidney == crf.comorbChronicKidney_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Kidney_disease ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.comorbChronicNeuro == crf.comorbChronicNeuro_yes %}\n        obo:BFO_0000051 [\n          a vodan:Neurological_disorder ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.comorbChronicNeuro == crf.comorbChronicNeuro_no %}\n        obo:BFO_0000051 [\n          a vodan:Neurological_disorder ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbChronicNeuro == crf.comorbChronicNeuro_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Neurological_disorder ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.comorbHIV == crf.comorbHIV_YesART %}\n        obo:BFO_0000051 [\n          a vodan:HIV ;\n          vodan:has_value vodan:Yes-on_ART ;\n        ] ;\n        {%- elif crf.comorbHIV == crf.comorbHIV_YesNoART %}\n        obo:BFO_0000051 [\n          a vodan:HIV ;\n          vodan:has_value vodan:Yes-not_on_ART ;\n        ] ;\n        {%- elif crf.comorbHIV == crf.comorbChronicNeuro_no %}\n        obo:BFO_0000051 [\n          a vodan:HIV ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbHIV == crf.comorbHIV_Unknown %}\n        obo:BFO_0000051 [\n          a vodan:HIV ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.comorbDiabetes == crf.comorbDiabetes_yes %}\n        obo:BFO_0000051 [\n          a vodan:Diabetes ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.comorbDiabetes == crf.comorbDiabetes_no %}\n        obo:BFO_0000051 [\n          a vodan:Diabetes ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbDiabetes == crf.comorbDiabetes_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Diabetes ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.comorbSmoking == crf.comorbSmoking_yes %}\n        obo:BFO_0000051 [\n          a vodan:Smoking ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.comorbSmoking == crf.comorbSmoking_no %}\n        obo:BFO_0000051 [\n          a vodan:Smoking ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbSmoking == crf.comorbSmoking_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Smoking ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.comorbTuberculosis == crf.comorbTuberculosis_yes %}\n        obo:BFO_0000051 [\n          a vodan:Tuberculosis ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.comorbTuberculosis == crf.comorbTuberculosis_no %}\n        obo:BFO_0000051 [\n          a vodan:Tuberculosis ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbTuberculosis == crf.comorbTuberculosis_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Tuberculosis ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.comorbAsplenia == crf.comorbAsplenia_yes %}\n        obo:BFO_0000051 [\n          a vodan:Asplenia ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.comorbAsplenia == crf.comorbAsplenia_no %}\n        obo:BFO_0000051 [\n          a vodan:Asplenia ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbAsplenia == crf.comorbAsplenia_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Asplenia ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.comorbOther == crf.comorbOther_yes %}\n        obo:BFO_0000051 [\n          a vodan:Other_comorbidity ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          vodan:has_literal_value \"{{ comorbOtherSpecify }}\" ;\n        ] ;\n        {%- elif crf.comorbOther == crf.comorbOther_no %}\n        obo:BFO_0000051 [\n          a vodan:Other_comorbidity ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.comorbOther == crf.comorbOther_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Other_comorbidity ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {#- PREADMISSION #}\n      {%- if crf.preadmission == crf.preadmission_open %}\n      # ADMISSION: PRE-ADMISSION and CHRONIC MEDICATION\n      obo:BFO_0000051 [\n        a vodan:pre-admission ;\n        {%- if crf.preadmissionACE == crf.preadmissionACE_yes %}\n        obo:BFO_0000051 [\n          a vodan:ACE_inhibitors_pre_admission ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.preadmissionACE == crf.preadmissionACE_no %}\n        obo:BFO_0000051 [\n          a vodan:ACE_inhibitors_pre_admission ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.preadmissionACE == crf.preadmissionACE_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ACE_inhibitors_pre_admission ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.preadmissionARBs == crf.preadmissionARBs_yes %}\n        obo:BFO_0000051 [\n          a vodan:ARBs_pre_admission ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.preadmissionARBs == crf.preadmissionARBs_no %}\n        obo:BFO_0000051 [\n          a vodan:ARBs_pre_admission ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.preadmissionARBs == crf.preadmissionARBs_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ARBs_pre_admission ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.preadmissionNSAID == crf.preadmissionNSAID_yes %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_pre_admission ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.preadmissionNSAID == crf.preadmissionNSAID_no %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_pre_admission ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.preadmissionNSAID == crf.preadmissionNSAID_unknown %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_pre_admission ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.preadmissionNSAID == crf.preadmissionNSAID_yes %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_pre_admission ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.preadmissionNSAID == crf.preadmissionNSAID_no %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_pre_admission ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.preadmissionNSAID == crf.preadmissionNSAID_unknown %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_pre_admission ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.preadmissionAntiviral == crf.preadmissionAntiviral_Chloroquine %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Chloroquine_hydroxychloroquine ;\n          ] ;\n        ] ;\n        {%- elif crf.preadmissionAntiviral == crf.preadmissionAntiviral_Azithromycin %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Azithromycin ;\n          ] ;\n        ] ;\n        {%- elif crf.preadmissionAntiviral == crf.preadmissionAntiviral_Kaletra %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Lopinavir_Ritonavir ;\n          ] ;\n        ] ;\n        {%- elif crf.preadmissionAntiviral == crf.preadmissionAntiviral_Favipiravir %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Favipiravir ;\n          ] ;\n        ] ;\n        {%- elif crf.preadmissionAntiviral == crf.preadmissionAntiviral_Other %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Which_other_antiviral ;\n            vodan:has_literal_value \"{{ crf.preadmissionAntiviral_OtherText }}\" ;\n          ] ;\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {#- SIGNS AND SYMPTOMS ON ADMISSION #}\n      {%- if crf.admissionSigns == crf.admissionSigns_open %}\n      # ADMISSION: SIGNS AND SYMPTOMS ON ADMISSION\n      obo:BFO_0000051 [\n        a vodan:signs_and_symptoms ;\n        {%- if crf.admissionSignsFever == crf.admissionSignsFever_yes %}\n        obo:BFO_0000051 [\n          a vodan:Fever ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsFever == crf.admissionSignsFever_no %}\n        obo:BFO_0000051 [\n          a vodan:Fever ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsFever == crf.admissionSignsFever_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Fever ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsCough == crf.admissionSignsCough_yes %}\n        obo:BFO_0000051 [\n          a vodan:Cough_signs ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsCough == crf.admissionSignsCough_no %}\n        obo:BFO_0000051 [\n          a vodan:Cough_signs ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsCough == crf.admissionSignsCough_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Cough_signs ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsCoughSputum == crf.admissionSignsCoughSputum_yes %}\n        obo:BFO_0000051 [\n          a vodan:Cough_sputum_signs ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsCoughSputum == crf.admissionSignsCoughSputum_no %}\n        obo:BFO_0000051 [\n          a vodan:Cough_sputum_signs ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsCoughSputum == crf.admissionSignsCoughSputum_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Cough_sputum_signs ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsCoughHaemoptysis == crf.admissionSignsCoughHaemoptysis_yes %}\n        obo:BFO_0000051 [\n          a vodan:Cough_haemoptysis ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsCoughHaemoptysis == crf.admissionSignsCoughHaemoptysis_no %}\n        obo:BFO_0000051 [\n          a vodan:Cough_haemoptysis ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsCoughHaemoptysis == crf.admissionSignsCoughHaemoptysis_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Cough_haemoptysis ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsSoreThroat == crf.admissionSignsSoreThroat_yes %}\n        obo:BFO_0000051 [\n          a vodan:Sore_throat_signs ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsSoreThroat == crf.admissionSignsSoreThroat_no %}\n        obo:BFO_0000051 [\n          a vodan:Sore_throat_signs ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsSoreThroat == crf.admissionSignsSoreThroat_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Sore_throat_signs ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsRhinorrhoea == crf.admissionSignsRhinorrhoea_yes %}\n        obo:BFO_0000051 [\n          a vodan:Rhinorrhoea ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsRhinorrhoea == crf.admissionSignsRhinorrhoea_no %}\n        obo:BFO_0000051 [\n          a vodan:Rhinorrhoea ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsRhinorrhoea == crf.admissionSignsRhinorrhoea_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Rhinorrhoea ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsWheezing == crf.admissionSignsWheezing_yes %}\n        obo:BFO_0000051 [\n          a vodan:Wheezing ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsWheezing == crf.admissionSignsWheezing_no %}\n        obo:BFO_0000051 [\n          a vodan:Wheezing ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsWheezing == crf.admissionSignsWheezing_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Wheezing ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsChestPain == crf.admissionSignsChestPain_yes %}\n        obo:BFO_0000051 [\n          a vodan:Chest_pain_signs ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsChestPain == crf.admissionSignsChestPain_no %}\n        obo:BFO_0000051 [\n          a vodan:Chest_pain_signs ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsChestPain == crf.admissionSignsChestPain_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Chest_pain_signs ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsMyalgia == crf.admissionSignsMyalgia_yes %}\n        obo:BFO_0000051 [\n          a vodan:Myalgia_signs ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsMyalgia == crf.admissionSignsMyalgia_no %}\n        obo:BFO_0000051 [\n          a vodan:Myalgia_signs ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsMyalgia == crf.admissionSignsMyalgia_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Myalgia_signs ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsArthralgia == crf.admissionSignsArthralgia_yes %}\n        obo:BFO_0000051 [\n          a vodan:Arthralgia ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsArthralgia == crf.admissionSignsArthralgia_no %}\n        obo:BFO_0000051 [\n          a vodan:Arthralgia ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsArthralgia == crf.admissionSignsArthralgia_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Arthralgia ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsFatigue == crf.admissionSignsFatigue_yes %}\n        obo:BFO_0000051 [\n          a vodan:Fatigue ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsFatigue == crf.admissionSignsFatigue_no %}\n        obo:BFO_0000051 [\n          a vodan:Fatigue ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsFatigue == crf.admissionSignsFatigue_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Fatigue ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsLossTaste == crf.admissionSignsLossTaste_yes %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_taste_signs ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsLossTaste == crf.admissionSignsLossTaste_no %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_taste_signs ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsLossTaste == crf.admissionSignsLossTaste_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_taste_signs ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsLossSmell == crf.admissionSignsLossSmell_yes %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_smell_signs ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsLossSmell == crf.admissionSignsLossSmell_no %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_smell_signs ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsLossSmell == crf.admissionSignsLossSmell_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_smell_signs ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsBreathShortness == crf.admissionSignsBreathShortness_yes %}\n        obo:BFO_0000051 [\n          a vodan:Shortness_of_breath_signs ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsBreathShortness == crf.admissionSignsBreathShortness_no %}\n        obo:BFO_0000051 [\n          a vodan:Shortness_of_breath_signs ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsBreathShortness == crf.admissionSignsBreathShortness_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Shortness_of_breath_signs ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsInableWalk == crf.admissionSignsInableWalk_yes %}\n        obo:BFO_0000051 [\n          a vodan:Inability_to_walk ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsInableWalk == crf.admissionSignsInableWalk_no %}\n        obo:BFO_0000051 [\n          a vodan:Inability_to_walk ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsInableWalk == crf.admissionSignsInableWalk_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Inability_to_walk ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsLowerChest == crf.admissionSignsLowerChest_yes %}\n        obo:BFO_0000051 [\n          a vodan:Lower_check_wall_indrawing ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsLowerChest == crf.admissionSignsLowerChest_no %}\n        obo:BFO_0000051 [\n          a vodan:Lower_check_wall_indrawing ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsLowerChest == crf.admissionSignsLowerChest_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Lower_check_wall_indrawing ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsHeadache == crf.admissionSignsHeadache_yes %}\n        obo:BFO_0000051 [\n          a vodan:Headache ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsHeadache == crf.admissionSignsHeadache_no %}\n        obo:BFO_0000051 [\n          a vodan:Headache ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsHeadache == crf.admissionSignsHeadache_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Headache ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsConfusion == crf.admissionSignsConfusion_yes %}\n        obo:BFO_0000051 [\n          a vodan:Altered_consciousness ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsConfusion == crf.admissionSignsConfusion_no %}\n        obo:BFO_0000051 [\n          a vodan:Altered_consciousness ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsConfusion == crf.admissionSignsConfusion_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Altered_consciousness ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsSeizures == crf.admissionSignsSeizures_yes %}\n        obo:BFO_0000051 [\n          a vodan:Seizures_signs ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsSeizures == crf.admissionSignsSeizures_no %}\n        obo:BFO_0000051 [\n          a vodan:Seizures_signs ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsSeizures == crf.admissionSignsSeizures_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Seizures_signs ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsAbdominalPain == crf.admissionSignsAbdominalPain_yes %}\n        obo:BFO_0000051 [\n          a vodan:Abdominal_pain ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsAbdominalPain == crf.admissionSignsAbdominalPain_no %}\n        obo:BFO_0000051 [\n          a vodan:Abdominal_pain ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsAbdominalPain == crf.admissionSignsAbdominalPain_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Abdominal_pain ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsVomiting == crf.admissionSignsVomiting_yes %}\n        obo:BFO_0000051 [\n          a vodan:Vomiting_signs ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsVomiting == crf.admissionSignsVomiting_no %}\n        obo:BFO_0000051 [\n          a vodan:Vomiting_signs ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsVomiting == crf.admissionSignsVomiting_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Vomiting_signs ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsDiarrhoea == crf.admissionSignsDiarrhoea_yes %}\n        obo:BFO_0000051 [\n          a vodan:Diarrhoea_sign ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsDiarrhoea == crf.admissionSignsDiarrhoea_no %}\n        obo:BFO_0000051 [\n          a vodan:Diarrhoea_sign ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsDiarrhoea == crf.admissionSignsDiarrhoea_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Diarrhoea_sign ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsConjunctivitis == crf.admissionSignsConjunctivitis_yes %}\n        obo:BFO_0000051 [\n          a vodan:Conjunctivitis_sign ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsConjunctivitis == crf.admissionSignsConjunctivitis_no %}\n        obo:BFO_0000051 [\n          a vodan:Conjunctivitis_sign ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsConjunctivitis == crf.admissionSignsConjunctivitis_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Conjunctivitis_sign ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsSkinRash == crf.admissionSignsSkinRash_yes %}\n        obo:BFO_0000051 [\n          a vodan:Skin_rash ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsSkinRash == crf.admissionSignsSkinRash_no %}\n        obo:BFO_0000051 [\n          a vodan:Skin_rash ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsSkinRash == crf.admissionSignsSkinRash_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Skin_rash ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsSkinUlcers == crf.admissionSignsSkinUlcers_yes %}\n        obo:BFO_0000051 [\n          a vodan:Skin_ulcers ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsSkinUlcers == crf.admissionSignsSkinUlcers_no %}\n        obo:BFO_0000051 [\n          a vodan:Skin_ulcers ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsSkinUlcers == crf.admissionSignsSkinUlcers_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Skin_ulcers ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionSignsLymphadenopathy == crf.admissionSignsLymphadenopathy_yes %}\n        obo:BFO_0000051 [\n          a vodan:Lymphadenopathy ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.admissionSignsLymphadenopathy == crf.admissionSignsLymphadenopathy_no %}\n        obo:BFO_0000051 [\n          a vodan:Lymphadenopathy ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionSignsLymphadenopathy == crf.admissionSignsLymphadenopathy_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Lymphadenopathy ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionHaemorrhage == crf.admissionHaemorrhage_yes %}\n        obo:BFO_0000051 [\n          a vodan:Lymphadenopathy ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Site_name ;\n            vodan:has_literal_value \"{{ crf.admissionHaemorrhageSpecify }}\" ;\n          ] ;\n        ] ;\n        {%- elif crf.admissionHaemorrhage == crf.admissionHaemorrhage_no %}\n        obo:BFO_0000051 [\n          a vodan:Lymphadenopathy ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionHaemorrhage == crf.admissionHaemorrhage_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Lymphadenopathy ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionOther == crf.admissionOther_yes %}\n        obo:BFO_0000051 [\n          a vodan:Other_signs_signs ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Which_sign_or_symptom_signs ;\n            vodan:has_literal_value \"{{ crf.admissionOtherSpecify }}\" ;\n          ] ;\n        ] ;\n        {%- elif crf.admissionOther == crf.admissionOther_no %}\n        obo:BFO_0000051 [\n          a vodan:Other_signs_signs ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.admissionOther == crf.admissionOther_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Other_signs_signs ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {#- MEDICATION #}\n      {%- if crf.medication == crf.medication_open %}\n      # ADMISSION: MEDICATION\n      obo:BFO_0000051 [\n        a vodan:Medication ;\n        {%- if crf.medicationOralFluids == crf.medicationOralFluids_yes %}\n        obo:BFO_0000051 [\n          a vodan:oral_orgastric_fluids ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.medicationOralFluids == crf.medicationOralFluids_no %}\n        obo:BFO_0000051 [\n          a vodan:oral_orgastric_fluids ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationOralFluids == crf.medicationOralFluids_unknown %}\n        obo:BFO_0000051 [\n          a vodan:oral_orgastric_fluids ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.medicationIntravenousFluids == crf.medicationIntravenousFluids_yes %}\n        obo:BFO_0000051 [\n          a vodan:Intravenous_fluids ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.medicationIntravenousFluids == crf.medicationIntravenousFluids_no %}\n        obo:BFO_0000051 [\n          a vodan:Intravenous_fluids ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationIntravenousFluids == crf.medicationIntravenousFluids_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Intravenous_fluids ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.medicationAntiviral == crf.medicationAntiviral_yes %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- for i in range(crf.medicationAntiviralSpecifyN) %}\n          {%- set itemPath = crf.medicationAntiviralSpecify__path|replace(\"index_$medicationAntiviralSpecify\", i) %}\n          {%- set medicationAntiviralSpecify = repliesMap[itemPath]|reply_str_value %}\n          {%- if medicationAntiviralSpecify == crf.medicationAntiviralSpecify_Ribavirin %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Ribavirin ;\n          ] ;\n          {%- elif medicationAntiviralSpecify == crf.medicationAntiviralSpecify_Lopinavir %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Lopinavir_Ritonavir ;\n          ] ;\n          {%- elif medicationAntiviralSpecify == crf.medicationAntiviralSpecify_Inhibitor %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Neuraminidase_inhibitor ;\n          ] ;\n          {%- elif medicationAntiviralSpecify == crf.medicationAntiviralSpecify_IntAlpha %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Interferon_alpha ;\n          ] ;\n          {%- elif medicationAntiviralSpecify == crf.medicationAntiviralSpecify_IntBeta %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Interferon_beta ;\n          ] ;\n          {%- elif medicationAntiviralSpecify == crf.medicationAntiviralSpecify_Other %}\n          {%- set itemOtherPath = crf.medicationAntiviralSpecify_Other_Specify__path|replace(\"index_$medicationAntiviralSpecify\", i) %}\n          {%- set medicationAntiviralSpecify_Other_Specify = repliesMap[itemOtherPath]|reply_str_value %}\n          obo:BFO_0000051 [\n            a vodan:Which_other_antiviral ;\n            vodan:has_literal_value \"{{ medicationAntiviralSpecify_Other_Specify }}\" ;\n          ] ;\n          {%- endif %}\n          {%- endfor %}\n        ] ;\n        {%- elif crf.medicationAntiviral == crf.medicationAntiviral_no %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationAntiviral == crf.medicationAntiviral_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.medicationCorticosteroid == crf.medicationCorticosteroid_yes %}\n        obo:BFO_0000051 [\n          a vodan:Corticosteroid ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- for i in range(crf.medicationCorticosteroidRouteN) %}\n          {%- set itemPath = crf.medicationCorticosteroidRoute__path|replace(\"index_$medicationCorticosteroidRoute\", i) %}\n          {%- set medicationCorticosteroidRoute = repliesMap[itemPath]|reply_str_value %}\n          {%- if medicationCorticosteroidRoute == crf.medicationCorticosteroidRoute_Oral %}\n          obo:BFO_0000051 [\n            a vodan:Which_corticosteroid_route ;\n            vodan:has_value vodan:Oral ;\n          ] ;\n          {%- elif medicationCorticosteroidRoute == crf.medicationCorticosteroidRoute_Intravenous %}\n          obo:BFO_0000051 [\n            a vodan:Which_corticosteroid_route ;\n            vodan:has_value vodan:Intravenous ;\n          ] ;\n          {%- elif medicationCorticosteroidRoute == crf.medicationCorticosteroidRoute_Inhaled %}\n          obo:BFO_0000051 [\n            a vodan:Which_corticosteroid_route ;\n            vodan:has_value vodan:Inhaled ;\n          ] ;\n          {%- endif %}\n          {%- endfor %}\n          obo:BFO_0000051 [\n            a vodan:Maximum_daily_corticosteroid_dose ;\n            vodan:has_literal_value \"{{ medicationCorticosteroidAgent }}; {{ medicationCorticosteroidDose }}\" ;\n          ] ;\n        ] ;\n        {%- elif crf.medicationCorticosteroid == crf.medicationCorticosteroid_no %}\n        obo:BFO_0000051 [\n          a vodan:Corticosteroid ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationCorticosteroid == crf.medicationCorticosteroid_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Corticosteroid ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.medicationAntibiotic == crf.medicationAntibiotic_yes %}\n        obo:BFO_0000051 [\n          a vodan:Antibiotic ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.medicationAntibiotic == crf.medicationAntibiotic_no %}\n        obo:BFO_0000051 [\n          a vodan:Antibiotic ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationAntibiotic == crf.medicationAntibiotic_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antibiotic ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.medicationAntifungal == crf.medicationAntifungal_yes %}\n        obo:BFO_0000051 [\n          a vodan:Antifungal_agent ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.medicationAntifungal == crf.medicationAntifungal_no %}\n        obo:BFO_0000051 [\n          a vodan:Antifungal_agent ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationAntifungal == crf.medicationAntifungal_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antifungal_agent ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.medicationAntimalarial == crf.medicationAntimalarial_yes %}\n        obo:BFO_0000051 [\n          a vodan:Antimalarial ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Which_antimalarial_agent ;\n            vodan:has_literal_value \"{{ crf.medicationAntimalarialSpecify }}\" ;\n          ] ;\n        ] ;\n        {%- elif crf.medicationAntimalarial == crf.medicationAntimalarial_no %}\n        obo:BFO_0000051 [\n          a vodan:Antimalarial ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationAntimalarial == crf.medicationAntimalarial_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antimalarial ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.medicationExperimental == crf.medicationExperimental_yes %}\n        obo:BFO_0000051 [\n          a vodan:Experimental_agent ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Which_experimental_agent ;\n            vodan:has_literal_value \"{{ crf.medicationExperimentalSpecify }}\" ;\n          ] ;\n        ] ;\n        {%- elif crf.medicationExperimental == crf.medicationExperimental_no %}\n        obo:BFO_0000051 [\n          a vodan:Experimental_agent ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationExperimental == crf.medicationExperimental_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Experimental_agent ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.medicationNSAID == crf.medicationNSAID_yes %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_medication ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.medicationNSAID == crf.medicationNSAID_no %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_medication ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationNSAID == crf.medicationNSAID_unknown %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_medication ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.medicationACE == crf.medicationACE_yes %}\n        obo:BFO_0000051 [\n          a vodan:ACE_inhibitors_medication ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.medicationACE == crf.medicationACE_no %}\n        obo:BFO_0000051 [\n          a vodan:ACE_inhibitors_medication ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationACE == crf.medicationACE_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ACE_inhibitors_medication ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.medicationARB == crf.medicationARB_yes %}\n        obo:BFO_0000051 [\n          a vodan:ARBs_medication ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.medicationARB == crf.medicationARB_no %}\n        obo:BFO_0000051 [\n          a vodan:ARBs_medication ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationARB == crf.medicationARB_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ARBs_medication ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.medicationAnticoagulation == crf.medicationAnticoagulation_yes %}\n        obo:BFO_0000051 [\n          a vodan:Systemic_anticoagulation ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.medicationAnticoagulation == crf.medicationAnticoagulation_no %}\n        obo:BFO_0000051 [\n          a vodan:Systemic_anticoagulation ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.medicationAnticoagulation == crf.medicationAnticoagulation_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Systemic_anticoagulation ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {#- SUPPORTIVE CARE #}\n      {%- if crf.supportCare == crf.supportCare_open %}\n      # ADMISSION: SUPPORTIVE CARE\n      obo:BFO_0000051 [\n        a vodan:Supportive_care ;\n        {%- if crf.supportCareICU == crf.supportCareICU_yes %}\n        obo:BFO_0000051 [\n          a vodan:ICU_admission ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.supportCareICU == crf.supportCareICU_no %}\n        obo:BFO_0000051 [\n          a vodan:ICU_admission ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.supportCareICU == crf.supportCareICU_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ICU_admission ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.supportCareOxygen == crf.supportCareOxygen_yes %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_therapy ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.supportCareOxygenFlow == crf.supportCareOxygenFlow_1to5 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:1-5_L_per_min ;\n          ] ;\n          {%- elif crf.supportCareOxygenFlow == crf.supportCareOxygenFlow_6to10 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:6-10_L_per_min ;\n          ] ;\n          {%- elif crf.supportCareOxygenFlow == crf.supportCareOxygenFlow_11to15 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:11-15_L_per_min ;\n          ] ;\n          {%- elif crf.supportCareOxygenFlow == crf.supportCareOxygenFlow_gt15 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:over_15_L_per_min ;\n          ] ;\n          {%- elif crf.supportCareOxygenFlow == crf.supportCareOxygenFlow_Unknown %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n          ] ;\n          {%- endif %}\n          {%- if crf.supportCareOxygenSource == crf.supportCareOxygenSource_Piped %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan:Piped ;\n          ] ;\n          {%- elif crf.supportCareOxygenSource == crf.supportCareOxygenSource_Cylinder %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan:Cylinder ;\n          ] ;\n          {%- elif crf.supportCareOxygenSource == crf.supportCareOxygenSource_Concentrator %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan:Concentrator ;\n          ] ;\n          {%- elif crf.supportCareOxygenSource == crf.supportCareOxygenSource_Unknown %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n          ] ;\n          {%- endif %}\n          {%- if crf.supportCareOxygenInterface == crf.supportCareOxygenInterface_Prongs %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:Nasal_prongs ;\n          ] ;\n          {%- elif crf.supportCareOxygenInterface == crf.supportCareOxygenInterface_Cannula %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:HF_nasal_cannula ;\n          ] ;\n          {%- elif crf.supportCareOxygenInterface == crf.supportCareOxygenInterface_MaskWithout %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:Mask ;\n          ] ;\n          {%- elif crf.supportCareOxygenInterface == crf.supportCareOxygenInterface_MaskWith %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:Mask_with_reservoir ;\n          ] ;\n          {%- elif crf.supportCareOxygenInterface == crf.supportCareOxygenInterface_CPAP %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:CPAP_NIV_Mask ;\n          ] ;\n          {%- elif crf.supportCareOxygenInterface == crf.supportCareOxygenSource_Unknown %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.supportCareOxygen == crf.supportCareOxygen_no %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_therapy ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.supportCareOxygen == crf.supportCareOxygen_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_therapy ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.supportCareNonInvasive == crf.supportCareNonInvasive_yes %}\n        obo:BFO_0000051 [\n          a vodan:Non-invasive_ventilation ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.supportCareNonInvasive == crf.supportCareNonInvasive_no %}\n        obo:BFO_0000051 [\n          a vodan:Non-invasive_ventilation ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.supportCareNonInvasive == crf.supportCareNonInvasive_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Non-invasive_ventilation ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.supportCareInvasive == crf.supportCareInvasive_yes %}\n        obo:BFO_0000051 [\n          a vodan:Invasive_ventilation ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- if crf.supportCareInvasive_Peep %}\n        obo:BFO_0000051 [\n          a vodan:PEEP_value ;\n          vodan:has_literal_value \"{{ crf.supportCareInvasive_Peep }}\"^^xsd:float ;\n        ] ;\n        {%- endif %}\n        {%- if crf.supportCareInvasive_FiO2 %}\n        obo:BFO_0000051 [\n          a vodan:FiO2_value ;\n          vodan:has_literal_value \"{{ crf.supportCareInvasive_FiO2 }}\"^^xsd:float ;\n        ] ;\n        {%- endif %}\n        {%- if crf.supportCareInvasive_Plateau %}\n        obo:BFO_0000051 [\n          a vodan:Plateau_pressure_value ;\n          vodan:has_literal_value \"{{ crf.supportCareInvasive_Plateau }}\"^^xsd:float ;\n        ] ;\n        {%- endif %}\n        {%- if crf.supportCareInvasive_PaCO2 %}\n        obo:BFO_0000051 [\n          a vodan:PaCO2_value ;\n          vodan:has_literal_value \"{{ crf.supportCareInvasive_PaCO2 }}\"^^xsd:float ;\n        ] ;\n        {%- endif %}\n        {%- if crf.supportCareInvasive_PaO2 %}\n        obo:BFO_0000051 [\n          a vodan:PaO2_value ;\n          vodan:has_literal_value \"{{ crf.supportCareInvasive_PaO2 }}\"^^xsd:float ;\n        ] ;\n        {%- endif %}\n        {%- elif crf.supportCareInvasive == crf.supportCareInvasive_no %}\n        obo:BFO_0000051 [\n          a vodan:Invasive_ventilation ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.supportCareInvasive == crf.supportCareInvasive_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Invasive_ventilation ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.supportCareInotropes == crf.supportCareInotropes_yes %}\n        obo:BFO_0000051 [\n          a vodan:Inotropes_vasopressors ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.supportCareInotropes == crf.supportCareInotropes_no %}\n        obo:BFO_0000051 [\n          a vodan:Inotropes_vasopressors ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.supportCareInotropes == crf.supportCareInotropes_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Inotropes_vasopressors ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.supportCareECMO == crf.supportCareECMO_yes %}\n        obo:BFO_0000051 [\n          a vodan:ECMO_support ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.supportCareECMO == crf.supportCareECMO_no %}\n        obo:BFO_0000051 [\n          a vodan:ECMO_support ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.supportCareECMO == crf.supportCareECMO_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ECMO_support ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.supportCareProne == crf.supportCareProne_yes %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.supportCareProne == crf.supportCareProne_no %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.supportCareProne == crf.supportCareProne_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {#- LAB RESULTS #}\n      {%- if crf.admissionLabResults == crf.admissionLabResults_open %}\n      # ADMISSION: LABORATORY RESULTS\n      obo:BFO_0000051 [\n        a vodan:Laboratory_results ;\n        {%- if crf.admissionLabResults_Haemoglobin == crf.admissionLabResults_Haemoglobin_done and crf.admissionLabResults_Haemoglobin_value %}\n        obo:BFO_0000051 [\n          a vodan:Haemoglobin ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Haemoglobin_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Haemoglobin_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Haemoglobin_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Haemoglobin == crf.admissionLabResults_Haemoglobin_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Haemoglobin ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_WBC == crf.admissionLabResults_WBC_done and crf.admissionLabResults_WBC_value %}\n        obo:BFO_0000051 [\n          a vodan:WBC_count ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_WBC_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_WBC_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_WBC_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_WBC == crf.admissionLabResults_WBC_notdone %}\n        obo:BFO_0000051 [\n          a vodan:WBC_count ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Haematocrit == crf.admissionLabResults_Haematocrit_done and crf.admissionLabResults_Haematocrit_value %}\n        obo:BFO_0000051 [\n          a vodan:Haematocrit ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Haematocrit_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Haematocrit_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Haematocrit_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Haematocrit == crf.admissionLabResults_Haematocrit_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Haematocrit ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Platelets == crf.admissionLabResults_Platelets_done and crf.admissionLabResults_Platelets_value %}\n        obo:BFO_0000051 [\n          a vodan:Platelets ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Platelets_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Platelets_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Platelets_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Platelets == crf.admissionLabResults_Platelets_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Platelets ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_APTT == crf.admissionLabResults_APTT_done and crf.admissionLabResults_APTT_value %}\n        obo:BFO_0000051 [\n          a vodan:APTT_APTR ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_APTT_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_APTT_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_APTT_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_APTT == crf.admissionLabResults_APTT_notdone %}\n        obo:BFO_0000051 [\n          a vodan:APTT_APTR ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_PT == crf.admissionLabResults_PT_done and crf.admissionLabResults_PT_value %}\n        obo:BFO_0000051 [\n          a vodan:PT ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_PT_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_PT_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_PT_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_PT == crf.admissionLabResults_PT_notdone %}\n        obo:BFO_0000051 [\n          a vodan:PT ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_INR == crf.admissionLabResults_INR_done and crf.admissionLabResults_INR_value %}\n        obo:BFO_0000051 [\n          a vodan:INR ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_INR_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_INR_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_INR_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_INR == crf.admissionLabResults_INR_notdone %}\n        obo:BFO_0000051 [\n          a vodan:INR ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_ALT == crf.admissionLabResults_ALT_done and crf.admissionLabResults_ALT_value %}\n        obo:BFO_0000051 [\n          a vodan:ALT_SGPT ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_ALT_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_ALT_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_ALT_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_ALT == crf.admissionLabResults_ALT_notdone %}\n        obo:BFO_0000051 [\n          a vodan:ALT_SGPT ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Bilirubin == crf.admissionLabResults_Bilirubin_done and crf.admissionLabResults_Bilirubin_value %}\n        obo:BFO_0000051 [\n          a vodan:Total_bilirubin ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Bilirubin_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Bilirubin_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Bilirubin_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Bilirubin == crf.admissionLabResults_Bilirubin_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Total_bilirubin ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_AST == crf.admissionLabResults_AST_done and crf.admissionLabResults_AST_value %}\n        obo:BFO_0000051 [\n          a vodan:AST_SGOT ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_AST_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_AST_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_AST_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_AST == crf.admissionLabResults_AST_notdone %}\n        obo:BFO_0000051 [\n          a vodan:AST_SGOT ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Urea == crf.admissionLabResults_Urea_done and crf.admissionLabResults_Urea_value %}\n        obo:BFO_0000051 [\n          a vodan:Urea_BUN ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Urea_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Urea_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Urea_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Urea == crf.admissionLabResults_Urea_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Urea_BUN ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Lactate == crf.admissionLabResults_Lactate_done and crf.admissionLabResults_Lactate_value %}\n        obo:BFO_0000051 [\n          a vodan:Lactate ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Lactate_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Lactate_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Lactate_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Lactate == crf.admissionLabResults_Lactate_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Lactate ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Creatinine == crf.admissionLabResults_Creatinine_done and crf.admissionLabResults_Creatinine_value %}\n        obo:BFO_0000051 [\n          a vodan:Creatinine ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Creatinine_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Creatinine_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Creatinine_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Creatinine == crf.admissionLabResults_Creatinine_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Creatinine ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Sodium == crf.admissionLabResults_Sodium_done and crf.admissionLabResults_Sodium_value %}\n        obo:BFO_0000051 [\n          a vodan:Sodium ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Sodium_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Sodium_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Sodium_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Sodium == crf.admissionLabResults_Sodium_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Sodium ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Potassium == crf.admissionLabResults_Potassium_done and crf.admissionLabResults_Potassium_value %}\n        obo:BFO_0000051 [\n          a vodan:Potassium ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Potassium_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Potassium_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Potassium_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Potassium == crf.admissionLabResults_Potassium_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Potassium ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Procalcitonin == crf.admissionLabResults_Procalcitonin_done and crf.admissionLabResults_Procalcitonin_value %}\n        obo:BFO_0000051 [\n          a vodan:Procalcitonin ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Procalcitonin_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Procalcitonin_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Procalcitonin_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Procalcitonin == crf.admissionLabResults_Procalcitonin_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Procalcitonin ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_CRP == crf.admissionLabResults_CRP_done and crf.admissionLabResults_CRP_value %}\n        obo:BFO_0000051 [\n          a vodan:CRP ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_CRP_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_CRP_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_CRP_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_CRP == crf.admissionLabResults_CRP_notdone %}\n        obo:BFO_0000051 [\n          a vodan:CRP ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_LDH == crf.admissionLabResults_LDH_done and crf.admissionLabResults_LDH_value %}\n        obo:BFO_0000051 [\n          a vodan:LDH ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_LDH_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_LDH_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_LDH_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_LDH == crf.admissionLabResults_LDH_notdone %}\n        obo:BFO_0000051 [\n          a vodan:LDH ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Creatine == crf.admissionLabResults_Creatine_done and crf.admissionLabResults_Creatine_value %}\n        obo:BFO_0000051 [\n          a vodan:Creatine_kinase ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Creatine_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Creatine_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Creatine_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Creatine == crf.admissionLabResults_Creatine_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Creatine_kinase ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Troponin == crf.admissionLabResults_Troponin_done and crf.admissionLabResults_Troponin_value %}\n        obo:BFO_0000051 [\n          a vodan:Troponin ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Troponin_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Troponin_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Troponin_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Troponin == crf.admissionLabResults_Troponin_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Troponin ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_ESR == crf.admissionLabResults_ESR_done and crf.admissionLabResults_ESR_value %}\n        obo:BFO_0000051 [\n          a vodan:ESR ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_ESR_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_ESR_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_ESR_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_ESR == crf.admissionLabResults_ESR_notdone %}\n        obo:BFO_0000051 [\n          a vodan:ESR ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Ddimer == crf.admissionLabResults_Ddimer_done and crf.admissionLabResults_Ddimer_value %}\n        obo:BFO_0000051 [\n          a vodan:D-dimer ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Ddimer_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Ddimer_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Ddimer_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Ddimer == crf.admissionLabResults_Ddimer_notdone %}\n        obo:BFO_0000051 [\n          a vodan:D-dimer ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_Ferritin == crf.admissionLabResults_Ferritin_done and crf.admissionLabResults_Ferritin_value %}\n        obo:BFO_0000051 [\n          a vodan:Ferritin ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_Ferritin_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_Ferritin_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_Ferritin_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_Ferritin == crf.admissionLabResults_Ferritin_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Ferritin ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {%- if crf.admissionLabResults_IL6 == crf.admissionLabResults_IL6_done and crf.admissionLabResults_IL6_value %}\n        obo:BFO_0000051 [\n          a vodan:IL-6 ;\n          vodan:has_literal_value \"{{ crf.admissionLabResults_IL6_value }}\"^^xsd:float;\n          {%- if crf.admissionLabResults_IL6_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ crf.admissionLabResults_IL6_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.admissionLabResults_IL6 == crf.admissionLabResults_IL6_notdone %}\n        obo:BFO_0000051 [\n          a vodan:IL-6 ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n    ] ;\n    {#- MODULE 2 (repeated) #}\n    # MODULE 2 (FOLLOW-UPs): {{ crf.module2N }} follow-ups in total\n    {%- for followUpIndex in range(crf.module2N) %}\n    {%- set followupDate__path = crf.followupDate__path|replace(\"index_$module2\", followUpIndex) -%}\n    {%- set followupDate = repliesMap[followupDate__path]|reply_str_value -%}\n    # FOLLOW-UP #{{ followUpIndex }} (date: {{ followupDate }})\n    obo:BFO_0000051 [\n      a vodan:Module_2 ;\n      {%- if followupDate %}\n      obo:BFO_0000051 [\n        a vodan:Follow-up_date ;\n        vodan:has_literal_value \"{{ followupDate }}\"^^xsd:date ;\n      ] ;\n      {%- endif %}\n      {%- set vitalSigns__path = crf.vitalSigns__path|replace(\"index_$module2\", followUpIndex) -%}\n      {%- set vitalSigns = repliesMap[vitalSigns__path]|reply_str_value -%}\n      {%- if vitalSigns == crf.vitalSigns_open %}\n      # FOLLOW-UP #{{ followUpIndex }}: VITAL SIGNS\n      obo:BFO_0000051 [\n        a vodan:Daily_vital_signs ;\n        {#- Temperature [\u00b0C] [value-number] #}\n        {%- set vitalSignsTemperature__path = crf.vitalSignsTemperature__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set vitalSignsTemperature = repliesMap[vitalSignsTemperature__path]|reply_str_value -%}\n        {%- if vitalSignsTemperature %}\n        obo:BFO_0000051 [\n          a vodan:Temperature_vital ;\n          vodan:has_literal_value \"{{ vitalSignsTemperature }}\"^^xsd:decimal ;\n        ] ;\n        {%- endif %}\n        {#- Heart rate [beats/min] [value-number] #}\n        {%- set vitalSignsHeartRate__path = crf.vitalSignsHeartRate__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set vitalSignsHeartRate = repliesMap[vitalSignsHeartRate__path]|reply_str_value -%}\n        {%- if vitalSignsHeartRate %}\n        obo:BFO_0000051 [\n          a vodan:Heart_rate_vital ;\n          vodan:has_literal_value \"{{ vitalSignsHeartRate }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {#- Respiratory rate [breaths/min] [value-number] #}\n        {%- set vitalSignsRespiratoryRate__path = crf.vitalSignsRespiratoryRate__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set vitalSignsRespiratoryRate = repliesMap[vitalSignsRespiratoryRate__path]|reply_str_value -%}\n        {%- if vitalSignsRespiratoryRate %}\n        obo:BFO_0000051 [\n          a vodan:Respiratory_rate_vital ;\n          vodan:has_literal_value \"{{ vitalSignsRespiratoryRate }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {#- Blood preassure (systolic) [mmHg] [value-number] #}\n        {%- set vitalSignsBPSystolic__path = crf.vitalSignsBPSystolic__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set vitalSignsBPSystolic = repliesMap[vitalSignsBPSystolic__path]|reply_str_value -%}\n        {%- if vitalSignsBPSystolic %}\n        obo:BFO_0000051 [\n          a vodan:BP_systolic_vital ;\n          vodan:has_literal_value \"{{ vitalSignsBPSystolic }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {#- Blood preassure (diastolic) [mmHg] [value-number] #}\n        {%- set vitalSignsBPDiastolic__path = crf.vitalSignsBPDiastolic__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set vitalSignsBPDiastolic = repliesMap[vitalSignsBPDiastolic__path]|reply_str_value -%}\n        {%- if vitalSignsBPDiastolic %}\n        obo:BFO_0000051 [\n          a vodan:BP_diastolic_vital ;\n          vodan:has_literal_value \"{{ vitalSignsBPDiastolic }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {#- Severe dehydration [yes-no-unknown] #}\n        {%- set vitalSignsDehydration__path = crf.vitalSignsDehydration__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set vitalSignsDehydration = repliesMap[vitalSignsDehydration__path]|reply_str_value -%}\n        {%- if vitalSignsDehydration == crf.vitalSignsDehydration_yes %}\n        obo:BFO_0000051 [\n          a vodan:Severe_dehydration_vital ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif vitalSignsDehydration == crf.vitalSignsDehydration_no %}\n        obo:BFO_0000051 [\n          a vodan:Severe_dehydration_vital ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif vitalSignsDehydration == crf.vitalSignsDehydration_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Severe_dehydration_vital ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Sternal capillary refill time >2seconds [yes-no-unknown] #}\n        {%- set vitalSignsSternalRefill__path = crf.vitalSignsSternalRefill__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set vitalSignsSternalRefill = repliesMap[vitalSignsSternalRefill__path]|reply_str_value -%}\n        {%- if vitalSignsSternalRefill == crf.vitalSignsOxygenSatCond_Unknown %}\n        obo:BFO_0000051 [\n          a vodan:Capillary_refill_vital ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif vitalSignsSternalRefill == crf.vitalSignsSternalRefill_no %}\n        obo:BFO_0000051 [\n          a vodan:Capillary_refill_vital ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif vitalSignsSternalRefill == crf.vitalSignsSternalRefill_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Capillary_refill_vital ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Glasgow Coma Score (GCS/15) [value-number] #}\n        {%- set vitalSignsGCS__path = crf.vitalSignsGCS__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set vitalSignsGCS = repliesMap[vitalSignsGCS__path]|reply_str_value -%}\n        {%- if vitalSignsGCS %}\n        obo:BFO_0000051 [\n          a vodan:GCS_vital ;\n          vodan:has_literal_value \"{{ vitalSignsGCS }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {#- Oxygen saturation (value) [%] [value-number] #}\n        {%- set vitalSignsOxygenSatValue__path = crf.vitalSignsOxygenSatValue__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set vitalSignsOxygenSatValue = repliesMap[vitalSignsOxygenSatValue__path]|reply_str_value -%}\n        {%- if vitalSignsOxygenSatValue %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_saturation_vital ;\n          vodan:has_literal_value \"{{ vitalSignsOxygenSatValue }}\"^^xsd:integer ;\n        ] ;\n        {%- endif %}\n        {#- Oxygen saturation (condition) [options] #}\n        {%- set vitalSignsOxygenSatCond__path = crf.vitalSignsOxygenSatCond__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set vitalSignsOxygenSatCond = repliesMap[vitalSignsOxygenSatCond__path]|reply_str_value -%}\n        {%- if vitalSignsOxygenSatCond == crf.vitalSignsOxygenSatCond_Room %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_saturation_expl_vital ;\n          vodan:has_value vodan:oxygen_therapy ;\n        ] ;\n        {%- elif vitalSignsOxygenSatCond == crf.vitalSignsOxygenSatCond_Therapy %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_saturation_expl_vital ;\n          vodan:has_value vodan:room_air ;\n        ] ;\n        {%- elif vitalSignsOxygenSatCond == crf.vitalSignsOxygenSatCond_Unknown %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_saturation_expl_vital ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- AVPU scale [options] #}\n        {%- set vitalSignsAVPU__path = crf.vitalSignsAVPU__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set vitalSignsAVPU = repliesMap[vitalSignsAVPU__path]|reply_str_value -%}\n        {%- if vitalSignsAVPU == crf.vitalSignsAVPU_A %}\n        obo:BFO_0000051 [\n          a vodan:AVPU_scale_vital ;\n          vodan:has_value vodan_avpu:A ;\n        ] ;\n        {%- elif vitalSignsAVPU == crf.vitalSignsAVPU_V %}\n        obo:BFO_0000051 [\n          a vodan:AVPU_scale_vital ;\n          vodan:has_value vodan_avpu:V ;\n        ] ;\n        {%- elif vitalSignsAVPU == crf.vitalSignsAVPU_P %}\n        obo:BFO_0000051 [\n          a vodan:AVPU_scale_vital ;\n          vodan:has_value vodan_avpu:P ;\n        ] ;\n        {%- elif vitalSignsAVPU == crf.vitalSignsAVPU_U %}\n        obo:BFO_0000051 [\n          a vodan:AVPU_scale_vital ;\n          vodan:has_value vodan_avpu:U ;\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {%- set dailyFeatures__path = crf.dailyFeatures__path|replace(\"index_$module2\", followUpIndex) -%}\n      {%- set dailyFeatures = repliesMap[dailyFeatures__path]|reply_str_value -%}\n      {%- if dailyFeatures == crf.dailyFeatures_open %}\n      # FOLLOW-UP #{{ followUpIndex }}: DAILY_FEATURES\n      obo:BFO_0000051 [\n        a vodan:Daily_clinical_features ;\n        {#- Cough [yes-no-unknown] #}\n        {%- set dailyFeaturesCough__path = crf.dailyFeaturesCough__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesCough = repliesMap[dailyFeaturesCough__path]|reply_str_value -%}\n        {%- if dailyFeaturesCough == crf.dailyFeaturesCough_yes %}\n        obo:BFO_0000051 [\n          a vodan:Cough_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesCough == crf.dailyFeaturesCough_no %}\n        obo:BFO_0000051 [\n          a vodan:Cough_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesCough == crf.dailyFeaturesCough_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Cough_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Cough with sputum production [yes-no-unknown] #}\n        {%- set dailyFeaturesCoughSputum__path = crf.dailyFeaturesCoughSputum__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesCoughSputum = repliesMap[dailyFeaturesCoughSputum__path]|reply_str_value -%}\n        {%- if dailyFeaturesCoughSputum == crf.dailyFeaturesCoughSputum_yes %}\n        obo:BFO_0000051 [\n          a vodan:Cough_sputum_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesCoughSputum == crf.dailyFeaturesCoughSputum_no %}\n        obo:BFO_0000051 [\n          a vodan:Cough_sputum_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesCoughSputum == crf.dailyFeaturesCoughSputum_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Cough_sputum_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Sore throat [yes-no-unknown] #}\n        {%- set dailyFeaturesSoreThroat__path = crf.dailyFeaturesSoreThroat__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesSoreThroat = repliesMap[dailyFeaturesSoreThroat__path]|reply_str_value -%}\n        {%- if dailyFeaturesSoreThroat == crf.dailyFeaturesSoreThroat_yes %}\n        obo:BFO_0000051 [\n          a vodan:Sore_throat_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesSoreThroat == crf.dailyFeaturesSoreThroat_no %}\n        obo:BFO_0000051 [\n          a vodan:Sore_throat_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesSoreThroat == crf.dailyFeaturesSoreThroat_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Sore_throat_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Chest pain [yes-no-unknown] #}\n        {%- set dailyFeaturesChestPain__path = crf.dailyFeaturesChestPain__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesChestPain = repliesMap[dailyFeaturesChestPain__path]|reply_str_value -%}\n        {%- if dailyFeaturesChestPain == crf.dailyFeaturesChestPain_yes %}\n        obo:BFO_0000051 [\n          a vodan:Chest_pain_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesChestPain == crf.dailyFeaturesChestPain_no %}\n        obo:BFO_0000051 [\n          a vodan:Chest_pain_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesChestPain == crf.dailyFeaturesChestPain_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Chest_pain_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Shortness of breath [yes-no-unknown] #}\n        {%- set dailyFeaturesShortBreath__path = crf.dailyFeaturesShortBreath__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesShortBreath = repliesMap[dailyFeaturesShortBreath__path]|reply_str_value -%}\n        {%- if dailyFeaturesShortBreath == crf.dailyFeaturesShortBreath_yes %}\n        obo:BFO_0000051 [\n          a vodan:Shortness_of_breath_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesShortBreath == crf.dailyFeaturesShortBreath_no %}\n        obo:BFO_0000051 [\n          a vodan:Shortness_of_breath_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesShortBreath == crf.dailyFeaturesShortBreath_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Shortness_of_breath_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Loss of taste [yes-no-unknown] #}\n        {%- set dailyFeaturesLossTaste__path = crf.dailyFeaturesLossTaste__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesLossTaste = repliesMap[dailyFeaturesLossTaste__path]|reply_str_value -%}\n        {%- if dailyFeaturesLossTaste == crf.dailyFeaturesLossTaste_yes %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_taste_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesLossTaste == crf.dailyFeaturesLossTaste_no %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_taste_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesLossTaste == crf.dailyFeaturesLossTaste_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_taste_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Loss of smell [yes-no-unknown] #}\n        {%- set dailyFeaturesLossSmell__path = crf.dailyFeaturesLossSmell__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesLossSmell = repliesMap[dailyFeaturesLossSmell__path]|reply_str_value -%}\n        {%- if dailyFeaturesLossSmell == crf.dailyFeaturesLossSmell_yes %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_smell_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesLossSmell == crf.dailyFeaturesLossSmell_no %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_smell_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesLossSmell == crf.dailyFeaturesLossSmell_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Loss_of_smell_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Confusion [yes-no-unknown] #}\n        {%- set dailyFeaturesConfusion__path = crf.dailyFeaturesConfusion__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesConfusion = repliesMap[dailyFeaturesConfusion__path]|reply_str_value -%}\n        {%- if dailyFeaturesConfusion == crf.dailyFeaturesConfusion_yes %}\n        obo:BFO_0000051 [\n          a vodan:Confusion ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesConfusion == crf.dailyFeaturesConfusion_no %}\n        obo:BFO_0000051 [\n          a vodan:Confusion ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesConfusion == crf.dailyFeaturesConfusion_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Confusion ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Seizures [yes-no-unknown] #}\n        {%- set dailyFeaturesSeizures__path = crf.dailyFeaturesSeizures__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesSeizures = repliesMap[dailyFeaturesSeizures__path]|reply_str_value -%}\n        {%- if dailyFeaturesSeizures == crf.dailyFeaturesSeizures_yes %}\n        obo:BFO_0000051 [\n          a vodan:Seizures_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesSeizures == crf.dailyFeaturesSeizures_no %}\n        obo:BFO_0000051 [\n          a vodan:Seizures_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesSeizures == crf.dailyFeaturesSeizures_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Seizures_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Vomiting / Nausea [yes-no-unknown] #}\n        {%- set dailyFeaturesVomit__path = crf.dailyFeaturesVomit__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesVomit = repliesMap[dailyFeaturesVomit__path]|reply_str_value -%}\n        {%- if dailyFeaturesVomit == crf.dailyFeaturesVomit_yes %}\n        obo:BFO_0000051 [\n          a vodan:Vomiting_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesVomit == crf.dailyFeaturesVomit_no %}\n        obo:BFO_0000051 [\n          a vodan:Vomiting_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesVomit == crf.dailyFeaturesVomit_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Vomiting_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Diarrhoea [yes-no-unknown] #}\n        {%- set dailyFeaturesDiarrhoea__path = crf.dailyFeaturesDiarrhoea__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesDiarrhoea = repliesMap[dailyFeaturesDiarrhoea__path]|reply_str_value -%}\n        {%- if dailyFeaturesDiarrhoea == crf.dailyFeaturesDiarrhoea_yes %}\n        obo:BFO_0000051 [\n          a vodan:Diarrhoea_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesDiarrhoea == crf.dailyFeaturesDiarrhoea_no %}\n        obo:BFO_0000051 [\n          a vodan:Diarrhoea_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesDiarrhoea == crf.dailyFeaturesDiarrhoea_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Diarrhoea_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Conjunctivitis [yes-no-unknown] #}\n        {%- set dailyFeaturesConjunctivitis__path = crf.dailyFeaturesConjunctivitis__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesConjunctivitis = repliesMap[dailyFeaturesConjunctivitis__path]|reply_str_value -%}\n        {%- if dailyFeaturesConjunctivitis == crf.dailyFeaturesConjunctivitis_yes %}\n        obo:BFO_0000051 [\n          a vodan:Conjunctivitis_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesConjunctivitis == crf.dailyFeaturesConjunctivitis_no %}\n        obo:BFO_0000051 [\n          a vodan:Conjunctivitis_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesConjunctivitis == crf.dailyFeaturesConjunctivitis_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Conjunctivitis_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Myalgia [yes-no-unknown] #}\n        {%- set dailyFeaturesMyalgia__path = crf.dailyFeaturesMyalgia__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesMyalgia = repliesMap[dailyFeaturesMyalgia__path]|reply_str_value -%}\n        {%- if dailyFeaturesMyalgia == crf.dailyFeaturesMyalgia_yes %}\n        obo:BFO_0000051 [\n          a vodan:Myalgia_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif dailyFeaturesMyalgia == crf.dailyFeaturesMyalgia_no %}\n        obo:BFO_0000051 [\n          a vodan:Myalgia_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesMyalgia == crf.dailyFeaturesMyalgia_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Myalgia_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Other [yes-no-unknown] #}\n        {%- set dailyFeaturesOther__path = crf.dailyFeaturesOther__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesOther = repliesMap[dailyFeaturesOther__path]|reply_str_value -%}\n        {#- Specify [value-string] #}\n        {%- set dailyFeaturesOther_Specify__path = crf.dailyFeaturesOther_Specify__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set dailyFeaturesOther_Specify = repliesMap[dailyFeaturesOther_Specify__path]|reply_str_value -%}\n        {%- if dailyFeaturesOther == crf.dailyFeaturesOther_yes %}\n        obo:BFO_0000051 [\n          a vodan:Other_signs_daily ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Which_sign_or_symptom_daily ;\n            vodan:has_literal_value \"{{ dailyFeaturesOther_Specify }}\" ;\n          ] ;\n        ] ;\n        {%- elif dailyFeaturesOther == crf.dailyFeaturesOther_no %}\n        obo:BFO_0000051 [\n          a vodan:Other_signs_daily ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif dailyFeaturesOther == crf.dailyFeaturesOther_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Other_signs_daily ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {%- set followupLabResults__path = crf.followupLabResults__path|replace(\"index_$module2\", followUpIndex) -%}\n      {%- set followupLabResults = repliesMap[followupLabResults__path]|reply_str_value -%}\n      {%- if followupLabResults == crf.followupLabResults_open %}\n      # FOLLOW-UP #{{ followUpIndex }}: LABORATORY RESULTS\n      obo:BFO_0000051 [\n        a vodan:Laboratory_results ;\n        {#- Haemoglobin [g/L] [lab-result] #}\n        {%- set followupLabResults_Haemoglobin__path = crf.followupLabResults_Haemoglobin__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Haemoglobin = repliesMap[followupLabResults_Haemoglobin__path]|reply_str_value -%}\n        {%- set followupLabResults_Haemoglobin_value__path = crf.followupLabResults_Haemoglobin_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Haemoglobin_value = repliesMap[followupLabResults_Haemoglobin_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Haemoglobin_units__path = crf.followupLabResults_Haemoglobin_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Haemoglobin_units = repliesMap[followupLabResults_Haemoglobin_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Haemoglobin == crf.followupLabResults_Haemoglobin_done and followupLabResults_Haemoglobin_value %}\n        obo:BFO_0000051 [\n          a vodan:Haemoglobin ;\n          vodan:has_literal_value \"{{ followupLabResults_Haemoglobin_value }}\"^^xsd:float;\n          {%- if followupLabResults_Haemoglobin_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Haemoglobin_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Haemoglobin == crf.followupLabResults_Haemoglobin_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Haemoglobin ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- WBC count [\u00d710\u2079/L] [lab-result] #}\n        {%- set followupLabResults_WBC__path = crf.followupLabResults_WBC__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_WBC = repliesMap[followupLabResults_WBC__path]|reply_str_value -%}\n        {%- set followupLabResults_WBC_value__path = crf.followupLabResults_WBC_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_WBC_value = repliesMap[followupLabResults_WBC_value__path]|reply_str_value -%}\n        {%- set followupLabResults_WBC_units__path = crf.followupLabResults_WBC_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_WBC_units = repliesMap[followupLabResults_WBC_units__path]|reply_str_value -%}\n        {%- if followupLabResults_WBC == crf.followupLabResults_WBC_done and followupLabResults_WBC_value %}\n        obo:BFO_0000051 [\n          a vodan:WBC_count ;\n          vodan:has_literal_value \"{{ followupLabResults_WBC_value }}\"^^xsd:float;\n          {%- if followupLabResults_WBC_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_WBC_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_WBC == crf.followupLabResults_WBC_notdone %}\n        obo:BFO_0000051 [\n          a vodan:WBC_count ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Haematocrit [%] [lab-result] #}\n        {%- set followupLabResults_Haematocrit__path = crf.followupLabResults_Haematocrit__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Haematocrit = repliesMap[followupLabResults_Haematocrit__path]|reply_str_value -%}\n        {%- set followupLabResults_Haematocrit_value__path = crf.followupLabResults_Haematocrit_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Haematocrit_value = repliesMap[followupLabResults_Haematocrit_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Haematocrit_units__path = crf.followupLabResults_Haematocrit_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Haematocrit_units = repliesMap[followupLabResults_Haematocrit_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Haematocrit == crf.followupLabResults_Haematocrit_done and followupLabResults_Haematocrit_value %}\n        obo:BFO_0000051 [\n          a vodan:Haematocrit ;\n          vodan:has_literal_value \"{{ followupLabResults_Haematocrit_value }}\"^^xsd:float;\n          {%- if followupLabResults_Haematocrit_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Haematocrit_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Haematocrit == crf.followupLabResults_Haematocrit_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Haematocrit ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Platelets [\u00d710\u2079/L] [lab-result] #}\n        {%- set followupLabResults_Platelets__path = crf.followupLabResults_Platelets__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Platelets = repliesMap[followupLabResults_Platelets__path]|reply_str_value -%}\n        {%- set followupLabResults_Platelets_value__path = crf.followupLabResults_Platelets_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Platelets_value = repliesMap[followupLabResults_Platelets_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Platelets_units__path = crf.followupLabResults_Platelets_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Platelets_units = repliesMap[followupLabResults_Platelets_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Platelets == crf.followupLabResults_Platelets_done and followupLabResults_Platelets_value %}\n        obo:BFO_0000051 [\n          a vodan:Platelets ;\n          vodan:has_literal_value \"{{ followupLabResults_Platelets_value }}\"^^xsd:float;\n          {%- if followupLabResults_Platelets_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Platelets_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Platelets == crf.followupLabResults_Platelets_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Platelets ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- APTT/APTR [lab-result] #}\n        {%- set followupLabResults_APTT__path = crf.followupLabResults_APTT__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_APTT = repliesMap[followupLabResults_APTT__path]|reply_str_value -%}\n        {%- set followupLabResults_APTT_value__path = crf.followupLabResults_APTT_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_APTT_value = repliesMap[followupLabResults_APTT_value__path]|reply_str_value -%}\n        {%- set followupLabResults_APTT_units__path = crf.followupLabResults_APTT_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_APTT_units = repliesMap[followupLabResults_APTT_units__path]|reply_str_value -%}\n        {%- if followupLabResults_APTT == crf.followupLabResults_APTT_done and followupLabResults_APTT_value %}\n        obo:BFO_0000051 [\n          a vodan:APTT_APTR ;\n          vodan:has_literal_value \"{{ followupLabResults_APTT_value }}\"^^xsd:float;\n          {%- if followupLabResults_APTT_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_APTT_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_APTT == crf.followupLabResults_APTT_notdone %}\n        obo:BFO_0000051 [\n          a vodan:APTT_APTR ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- PT [seconds] [lab-result] #}\n        {%- set followupLabResults_PT__path = crf.followupLabResults_PT__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_PT = repliesMap[followupLabResults_PT__path]|reply_str_value -%}\n        {%- set followupLabResults_PT_value__path = crf.followupLabResults_PT_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_PT_value = repliesMap[followupLabResults_PT_value__path]|reply_str_value -%}\n        {%- set followupLabResults_PT_units__path = crf.followupLabResults_PT_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_PT_units = repliesMap[followupLabResults_PT_units__path]|reply_str_value -%}\n        {%- if followupLabResults_PT == crf.followupLabResults_PT_done and followupLabResults_PT_value %}\n        obo:BFO_0000051 [\n          a vodan:PT ;\n          vodan:has_literal_value \"{{ followupLabResults_PT_value }}\"^^xsd:float;\n          {%- if followupLabResults_PT_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_PT_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_PT == crf.followupLabResults_PT_notdone %}\n        obo:BFO_0000051 [\n          a vodan:PT ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- INR [lab-result] #}\n        {%- set followupLabResults_INR__path = crf.followupLabResults_INR__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_INR = repliesMap[followupLabResults_INR__path]|reply_str_value -%}\n        {%- set followupLabResults_INR_value__path = crf.followupLabResults_INR_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_INR_value = repliesMap[followupLabResults_INR_value__path]|reply_str_value -%}\n        {%- set followupLabResults_INR_units__path = crf.followupLabResults_INR_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_INR_units = repliesMap[followupLabResults_INR_units__path]|reply_str_value -%}\n        {%- if followupLabResults_INR == crf.followupLabResults_INR_done and followupLabResults_INR_value %}\n        obo:BFO_0000051 [\n          a vodan:INR ;\n          vodan:has_literal_value \"{{ followupLabResults_INR_value }}\"^^xsd:float;\n          {%- if followupLabResults_INR_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_INR_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_INR == crf.followupLabResults_INR_notdone %}\n        obo:BFO_0000051 [\n          a vodan:INR ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- ALT/SGPT [U/L] [lab-result] #}\n        {%- set followupLabResults_ALT__path = crf.followupLabResults_ALT__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_ALT = repliesMap[followupLabResults_ALT__path]|reply_str_value -%}\n        {%- set followupLabResults_ALT_value__path = crf.followupLabResults_ALT_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_ALT_value = repliesMap[followupLabResults_ALT_value__path]|reply_str_value -%}\n        {%- set followupLabResults_ALT_units__path = crf.followupLabResults_ALT_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_ALT_units = repliesMap[followupLabResults_ALT_units__path]|reply_str_value -%}\n        {%- if followupLabResults_ALT == crf.followupLabResults_ALT_done and followupLabResults_ALT_value %}\n        obo:BFO_0000051 [\n          a vodan:ALT_SGPT ;\n          vodan:has_literal_value \"{{ followupLabResults_ALT_value }}\"^^xsd:float;\n          {%- if followupLabResults_ALT_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_ALT_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_ALT == crf.followupLabResults_ALT_notdone %}\n        obo:BFO_0000051 [\n          a vodan:ALT_SGPT ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Total bilirubin [\u00b5mol/L] [lab-result] #}\n        {%- set followupLabResults_Bilirubin__path = crf.followupLabResults_Bilirubin__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Bilirubin = repliesMap[followupLabResults_Bilirubin__path]|reply_str_value -%}\n        {%- set followupLabResults_Bilirubin_value__path = crf.followupLabResults_Bilirubin_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Bilirubin_value = repliesMap[followupLabResults_Bilirubin_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Bilirubin_units__path = crf.followupLabResults_Bilirubin_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Bilirubin_units = repliesMap[followupLabResults_Bilirubin_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Bilirubin == crf.followupLabResults_Bilirubin_done and followupLabResults_Bilirubin_value %}\n        obo:BFO_0000051 [\n          a vodan:Total_bilirubin ;\n          vodan:has_literal_value \"{{ followupLabResults_Bilirubin_value }}\"^^xsd:float;\n          {%- if followupLabResults_Bilirubin_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Bilirubin_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Bilirubin == crf.followupLabResults_Bilirubin_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Total_bilirubin ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- AST/SGOT [U/L] [lab-result] #}\n        {%- set followupLabResults_AST__path = crf.followupLabResults_AST__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_AST = repliesMap[followupLabResults_AST__path]|reply_str_value -%}\n        {%- set followupLabResults_AST_value__path = crf.followupLabResults_AST_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_AST_value = repliesMap[followupLabResults_AST_value__path]|reply_str_value -%}\n        {%- set followupLabResults_AST_units__path = crf.followupLabResults_AST_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_AST_units = repliesMap[followupLabResults_AST_units__path]|reply_str_value -%}\n        {%- if followupLabResults_AST == crf.followupLabResults_AST_done and followupLabResults_AST_value %}\n        obo:BFO_0000051 [\n          a vodan:AST_SGOT ;\n          vodan:has_literal_value \"{{ followupLabResults_AST_value }}\"^^xsd:float;\n          {%- if followupLabResults_AST_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_AST_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_AST == crf.followupLabResults_AST_notdone %}\n        obo:BFO_0000051 [\n          a vodan:AST_SGOT ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Urea (BUN) [mmol/L] [lab-result] #}\n        {%- set followupLabResults_Urea__path = crf.followupLabResults_Urea__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Urea = repliesMap[followupLabResults_Urea__path]|reply_str_value -%}\n        {%- set followupLabResults_Urea_value__path = crf.followupLabResults_Urea_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Urea_value = repliesMap[followupLabResults_Urea_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Urea_units__path = crf.followupLabResults_Urea_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Urea_units = repliesMap[followupLabResults_Urea_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Urea == crf.followupLabResults_Urea_done and followupLabResults_Urea_value %}\n        obo:BFO_0000051 [\n          a vodan:Urea_BUN ;\n          vodan:has_literal_value \"{{ followupLabResults_Urea_value }}\"^^xsd:float;\n          {%- if followupLabResults_Urea_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Urea_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Urea == crf.followupLabResults_Urea_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Urea_BUN ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Lactate [mmol/L] [lab-result] #}\n        {%- set followupLabResults_Lactate__path = crf.followupLabResults_Lactate__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Lactate = repliesMap[followupLabResults_Lactate__path]|reply_str_value -%}\n        {%- set followupLabResults_Lactate_value__path = crf.followupLabResults_Lactate_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Lactate_value = repliesMap[followupLabResults_Lactate_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Lactate_units__path = crf.followupLabResults_Lactate_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Lactate_units = repliesMap[followupLabResults_Lactate_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Lactate == crf.followupLabResults_Lactate_done and followupLabResults_Lactate_value %}\n        obo:BFO_0000051 [\n          a vodan:Lactate ;\n          vodan:has_literal_value \"{{ followupLabResults_Lactate_value }}\"^^xsd:float;\n          {%- if followupLabResults_Lactate_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Lactate_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Lactate == crf.followupLabResults_Lactate_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Lactate ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Creatinine [\u03bcmol/L] [lab-result] #}\n        {%- set followupLabResults_Creatinine__path = crf.followupLabResults_Creatinine__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Creatinine = repliesMap[followupLabResults_Creatinine__path]|reply_str_value -%}\n        {%- set followupLabResults_Creatinine_value__path = crf.followupLabResults_Creatinine_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Creatinine_value = repliesMap[followupLabResults_Creatinine_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Creatinine_units__path = crf.followupLabResults_Creatinine_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Creatinine_units = repliesMap[followupLabResults_Creatinine_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Creatinine == crf.followupLabResults_Creatinine_done and followupLabResults_Creatinine_value %}\n        obo:BFO_0000051 [\n          a vodan:Creatinine ;\n          vodan:has_literal_value \"{{ followupLabResults_Creatinine_value }}\"^^xsd:float;\n          {%- if followupLabResults_Creatinine_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Creatinine_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Creatinine == crf.followupLabResults_Creatinine_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Creatinine ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Sodium [mEq/L] [lab-result] #}\n        {%- set followupLabResults_Sodium__path = crf.followupLabResults_Sodium__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Sodium = repliesMap[followupLabResults_Sodium__path]|reply_str_value -%}\n        {%- set followupLabResults_Sodium_value__path = crf.followupLabResults_Sodium_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Sodium_value = repliesMap[followupLabResults_Sodium_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Sodium_units__path = crf.followupLabResults_Sodium_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Sodium_units = repliesMap[followupLabResults_Sodium_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Sodium == crf.followupLabResults_Sodium_done and followupLabResults_Sodium_value %}\n        obo:BFO_0000051 [\n          a vodan:Sodium ;\n          vodan:has_literal_value \"{{ followupLabResults_Sodium_value }}\"^^xsd:float;\n          {%- if followupLabResults_Sodium_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Sodium_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Sodium == crf.followupLabResults_Sodium_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Sodium ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Potassium [mEq/L] [lab-result] #}\n        {%- set followupLabResults_Potassium__path = crf.followupLabResults_Potassium__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Potassium = repliesMap[followupLabResults_Potassium__path]|reply_str_value -%}\n        {%- set followupLabResults_Potassium_value__path = crf.followupLabResults_Potassium_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Potassium_value = repliesMap[followupLabResults_Potassium_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Potassium_units__path = crf.followupLabResults_Potassium_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Potassium_units = repliesMap[followupLabResults_Potassium_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Potassium == crf.followupLabResults_Potassium_done and followupLabResults_Potassium_value %}\n        obo:BFO_0000051 [\n          a vodan:Potassium ;\n          vodan:has_literal_value \"{{ followupLabResults_Potassium_value }}\"^^xsd:float;\n          {%- if followupLabResults_Potassium_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Potassium_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Potassium == crf.followupLabResults_Potassium_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Potassium ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Procalcitonin [ng/mL] [lab-result] #}\n        {%- set followupLabResults_Procalcitonin__path = crf.followupLabResults_Procalcitonin__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Procalcitonin = repliesMap[followupLabResults_Procalcitonin__path]|reply_str_value -%}\n        {%- set followupLabResults_Procalcitonin_value__path = crf.followupLabResults_Procalcitonin_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Procalcitonin_value = repliesMap[followupLabResults_Procalcitonin_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Procalcitonin_units__path = crf.followupLabResults_Procalcitonin_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Procalcitonin_units = repliesMap[followupLabResults_Procalcitonin_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Procalcitonin == crf.followupLabResults_Procalcitonin_done and followupLabResults_Procalcitonin_value %}\n        obo:BFO_0000051 [\n          a vodan:Procalcitonin ;\n          vodan:has_literal_value \"{{ followupLabResults_Procalcitonin_value }}\"^^xsd:float;\n          {%- if followupLabResults_Procalcitonin_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Procalcitonin_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Procalcitonin == crf.followupLabResults_Procalcitonin_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Procalcitonin ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- CRP [mg/L] [lab-result] #}\n        {%- set followupLabResults_CRP__path = crf.followupLabResults_CRP__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_CRP = repliesMap[followupLabResults_CRP__path]|reply_str_value -%}\n        {%- set followupLabResults_CRP_value__path = crf.followupLabResults_CRP_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_CRP_value = repliesMap[followupLabResults_CRP_value__path]|reply_str_value -%}\n        {%- set followupLabResults_CRP_units__path = crf.followupLabResults_CRP_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_CRP_units = repliesMap[followupLabResults_CRP_units__path]|reply_str_value -%}\n        {%- if followupLabResults_CRP == crf.followupLabResults_CRP_done and followupLabResults_CRP_value %}\n        obo:BFO_0000051 [\n          a vodan:CRP ;\n          vodan:has_literal_value \"{{ followupLabResults_CRP_value }}\"^^xsd:float;\n          {%- if followupLabResults_CRP_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_CRP_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_CRP == crf.followupLabResults_CRP_notdone %}\n        obo:BFO_0000051 [\n          a vodan:CRP ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- LDH [U/L] [lab-result] #}\n        {%- set followupLabResults_LDH__path = crf.followupLabResults_LDH__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_LDH = repliesMap[followupLabResults_LDH__path]|reply_str_value -%}\n        {%- set followupLabResults_LDH_value__path = crf.followupLabResults_LDH_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_LDH_value = repliesMap[followupLabResults_LDH_value__path]|reply_str_value -%}\n        {%- set followupLabResults_LDH_units__path = crf.followupLabResults_LDH_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_LDH_units = repliesMap[followupLabResults_LDH_units__path]|reply_str_value -%}\n        {%- if followupLabResults_LDH == crf.followupLabResults_LDH_done and followupLabResults_LDH_value %}\n        obo:BFO_0000051 [\n          a vodan:LDH ;\n          vodan:has_literal_value \"{{ followupLabResults_LDH_value }}\"^^xsd:float;\n          {%- if followupLabResults_LDH_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_LDH_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_LDH == crf.followupLabResults_LDH_notdone %}\n        obo:BFO_0000051 [\n          a vodan:LDH ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Creatine kinase [U/L] [lab-result] #}\n        {%- set followupLabResults_Creatine__path = crf.followupLabResults_Creatine__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Creatine = repliesMap[followupLabResults_Creatine__path]|reply_str_value -%}\n        {%- set followupLabResults_Creatine_value__path = crf.followupLabResults_Creatine_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Creatine_value = repliesMap[followupLabResults_Creatine_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Creatine_units__path = crf.followupLabResults_Creatine_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Creatine_units = repliesMap[followupLabResults_Creatine_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Creatine == crf.followupLabResults_Creatine_done and followupLabResults_Creatine_value %}\n        obo:BFO_0000051 [\n          a vodan:Creatine_kinase ;\n          vodan:has_literal_value \"{{ followupLabResults_Creatine_value }}\"^^xsd:float;\n          {%- if followupLabResults_Creatine_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Creatine_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Creatine == crf.followupLabResults_Creatine_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Creatine_kinase ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Troponin [ng/mL] [lab-result] #}\n        {%- set followupLabResults_Troponin__path = crf.followupLabResults_Troponin__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Troponin = repliesMap[followupLabResults_Troponin__path]|reply_str_value -%}\n        {%- set followupLabResults_Troponin_value__path = crf.followupLabResults_Troponin_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Troponin_value = repliesMap[followupLabResults_Troponin_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Troponin_units__path = crf.followupLabResults_Troponin_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Troponin_units = repliesMap[followupLabResults_Troponin_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Troponin == crf.followupLabResults_Troponin_done and followupLabResults_Troponin_value %}\n        obo:BFO_0000051 [\n          a vodan:Troponin ;\n          vodan:has_literal_value \"{{ followupLabResults_Troponin_value }}\"^^xsd:float;\n          {%- if followupLabResults_Troponin_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Troponin_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Troponin == crf.followupLabResults_Troponin_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Troponin ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- ESR [mm/hr] [lab-result] #}\n        {%- set followupLabResults_ESR__path = crf.followupLabResults_ESR__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_ESR = repliesMap[followupLabResults_ESR__path]|reply_str_value -%}\n        {%- set followupLabResults_ESR_value__path = crf.followupLabResults_ESR_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_ESR_value = repliesMap[followupLabResults_ESR_value__path]|reply_str_value -%}\n        {%- set followupLabResults_ESR_units__path = crf.followupLabResults_ESR_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_ESR_units = repliesMap[followupLabResults_ESR_units__path]|reply_str_value -%}\n        {%- if followupLabResults_ESR == crf.followupLabResults_ESR_done and followupLabResults_ESR_value %}\n        obo:BFO_0000051 [\n          a vodan:ESR ;\n          vodan:has_literal_value \"{{ followupLabResults_ESR_value }}\"^^xsd:float;\n          {%- if followupLabResults_ESR_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_ESR_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_ESR == crf.followupLabResults_ESR_notdone %}\n        obo:BFO_0000051 [\n          a vodan:ESR ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- D-dimer [mg/L] [lab-result] #}\n        {%- set followupLabResults_Ddimer__path = crf.followupLabResults_Ddimer__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Ddimer = repliesMap[followupLabResults_Ddimer__path]|reply_str_value -%}\n        {%- set followupLabResults_Ddimer_value__path = crf.followupLabResults_Ddimer_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Ddimer_value = repliesMap[followupLabResults_Ddimer_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Ddimer_units__path = crf.followupLabResults_Ddimer_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Ddimer_units = repliesMap[followupLabResults_Ddimer_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Ddimer == crf.followupLabResults_Ddimer_done and followupLabResults_Ddimer_value %}\n        obo:BFO_0000051 [\n          a vodan:D-dimer ;\n          vodan:has_literal_value \"{{ followupLabResults_Ddimer_value }}\"^^xsd:float;\n          {%- if followupLabResults_Ddimer_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Ddimer_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Ddimer == crf.followupLabResults_Ddimer_notdone %}\n        obo:BFO_0000051 [\n          a vodan:D-dimer ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- Ferritin [ng/mL] [lab-result] #}\n        {%- set followupLabResults_Ferritin__path = crf.followupLabResults_Ferritin__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Ferritin = repliesMap[followupLabResults_Ferritin__path]|reply_str_value -%}\n        {%- set followupLabResults_Ferritin_value__path = crf.followupLabResults_Ferritin_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Ferritin_value = repliesMap[followupLabResults_Ferritin_value__path]|reply_str_value -%}\n        {%- set followupLabResults_Ferritin_units__path = crf.followupLabResults_Ferritin_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_Ferritin_units = repliesMap[followupLabResults_Ferritin_units__path]|reply_str_value -%}\n        {%- if followupLabResults_Ferritin == crf.followupLabResults_Ferritin_done and followupLabResults_Ferritin_value %}\n        obo:BFO_0000051 [\n          a vodan:Ferritin ;\n          vodan:has_literal_value \"{{ followupLabResults_Ferritin_value }}\"^^xsd:float;\n          {%- if followupLabResults_Ferritin_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_Ferritin_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_Ferritin == crf.followupLabResults_Ferritin_notdone %}\n        obo:BFO_0000051 [\n          a vodan:Ferritin ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n        {#- IL-6 [pg/mL] [lab-result] #}\n        {%- set followupLabResults_IL6__path = crf.followupLabResults_IL6__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_IL6 = repliesMap[followupLabResults_IL6__path]|reply_str_value -%}\n        {%- set followupLabResults_IL6_value__path = crf.followupLabResults_IL6_value__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_IL6_value = repliesMap[followupLabResults_IL6_value__path]|reply_str_value -%}\n        {%- set followupLabResults_IL6_units__path = crf.followupLabResults_IL6_units__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupLabResults_IL6_units = repliesMap[followupLabResults_IL6_units__path]|reply_str_value -%}\n        {%- if followupLabResults_IL6 == crf.followupLabResults_IL6_done and followupLabResults_IL6_value %}\n        obo:BFO_0000051 [\n          a vodan:IL-6 ;\n          vodan:has_literal_value \"{{ followupLabResults_IL6_value }}\"^^xsd:float;\n          {%- if followupLabResults_IL6_units|length > 0 %}\n          vodan:has_other_measurement_unit_label \"{{ followupLabResults_IL6_units }}\" ;\n          {%- endif %}\n        ] ;\n        {%- elif followupLabResults_IL6 == crf.followupLabResults_IL6_notdone %}\n        obo:BFO_0000051 [\n          a vodan:IL-6 ;\n          vodan:has_literal_value \"Not done\" ;\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {%- set followupMedication__path = crf.followupMedication__path|replace(\"index_$module2\", followUpIndex) -%}\n      {%- set followupMedication = repliesMap[followupMedication__path]|reply_str_value -%}\n      {%- if followupMedication == crf.followupMedication_open %}\n      # FOLLOW-UP #{{ followUpIndex }}: MEDICATION\n      obo:BFO_0000051 [\n        a vodan:Medication ;\n        {#- Oral/orogastric fluids? [yes-no-unknown] #}\n        {%- set followupMedicationOralFluids__path = crf.followupMedicationOralFluids__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationOralFluids = repliesMap[followupMedicationOralFluids__path]|reply_str_value -%}\n        {%- if crf.followupMedicationOralFluids == crf.followupMedicationOralFluids_yes %}\n        obo:BFO_0000051 [\n          a vodan:oral_orgastric_fluids ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.followupMedicationOralFluids == crf.followupMedicationOralFluids_no %}\n        obo:BFO_0000051 [\n          a vodan:oral_orgastric_fluids ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.followupMedicationOralFluids == crf.followupMedicationOralFluids_unknown %}\n        obo:BFO_0000051 [\n          a vodan:oral_orgastric_fluids ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Intravenous fluids? [yes-no-unknown] #}\n        {%- set followupMedicationIntravenousFluids__path = crf.followupMedicationIntravenousFluids__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationIntravenousFluids = repliesMap[followupMedicationIntravenousFluids__path]|reply_str_value -%}\n        {%- if crf.followupMedicationIntravenousFluids == crf.followupMedicationIntravenousFluids_yes %}\n        obo:BFO_0000051 [\n          a vodan:Intravenous_fluids ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.followupMedicationIntravenousFluids == crf.followupMedicationIntravenousFluids_no %}\n        obo:BFO_0000051 [\n          a vodan:Intravenous_fluids ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.followupMedicationIntravenousFluids == crf.followupMedicationIntravenousFluids_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Intravenous_fluids ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Antiviral? [options] #}\n        {%- set followupMedicationAntiviral__path = crf.followupMedicationAntiviral__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationAntiviral = repliesMap[followupMedicationAntiviral__path]|reply_str_value -%}\n        {#- Specify [multichoice-list] #}\n        {%- set followupMedicationAntiviralSpecifyN__path = crf.followupMedicationAntiviralSpecifyN__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationAntiviralSpecifyN = repliesMap[followupMedicationAntiviralSpecifyN__path]|reply_str_value -%}\n        {#- Specify [multichoice-options] #}\n        {%- set followupMedicationAntiviralSpecify__path = crf.followupMedicationAntiviralSpecify__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationAntiviralSpecify = repliesMap[followupMedicationAntiviralSpecify__path]|reply_str_value -%}\n        {#- Specify [value-string] #}\n        {%- set followupMedicationAntiviralSpecify_Other_Specify__path = crf.followupMedicationAntiviralSpecify_Other_Specify__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationAntiviralSpecify_Other_Specify = repliesMap[followupMedicationAntiviralSpecify_Other_Specify__path]|reply_str_value -%}\n        {%- if followupMedicationAntiviral == crf.followupMedicationAntiviral_yes %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- for i in range(crf.followupMedicationAntiviralSpecifyN) %}\n          {%- set itemPath = followupMedicationAntiviralSpecify__path|replace(\"index_$followupMedicationAntiviralSpecify\", i) %}\n          {%- set followupMedicationAntiviralSpecify = repliesMap[itemPath]|reply_str_value %}\n          {%- if followupMedicationAntiviralSpecify == crf.followupMedicationAntiviralSpecify_Ribavirin %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Ribavirin ;\n          ] ;\n          {%- elif followupMedicationAntiviralSpecify == crf.followupMedicationAntiviralSpecify_Lopinavir %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Lopinavir_Ritonavir ;\n          ] ;\n          {%- elif followupMedicationAntiviralSpecify == crf.followupMedicationAntiviralSpecify_Inhibitor %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Neuraminidase_inhibitor ;\n          ] ;\n          {%- elif followupMedicationAntiviralSpecify == crf.followupMedicationAntiviralSpecify_IntAlpha %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Interferon_alpha ;\n          ] ;\n          {%- elif followupMedicationAntiviralSpecify == crf.followupMedicationAntiviralSpecify_IntBeta %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Interferon_beta ;\n          ] ;\n          {%- elif followupMedicationAntiviralSpecify == crf.followupMedicationAntiviralSpecify_Other %}\n          {%- set itemOtherPath = followupMedicationAntiviralSpecify_Other_Specify__path|replace(\"index_$followupMedicationAntiviralSpecify\", i) %}\n          {%- set followupMedicationAntiviralSpecify_Other_Specify = repliesMap[itemOtherPath]|reply_str_value %}\n          obo:BFO_0000051 [\n            a vodan:Which_other_antiviral ;\n            vodan:has_literal_value \"{{ followupMedicationAntiviralSpecify_Other_Specify }}\" ;\n          ] ;\n          {%- endif %}\n          {%- endfor %}\n        ] ;\n        {%- elif followupMedicationAntiviral == crf.followupMedicationAntiviral_no %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupMedicationAntiviral == crf.followupMedicationAntiviral_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Corticosteroid? [options] #}\n        {%- set followupMedicationCorticosteroid__path = crf.followupMedicationCorticosteroid__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationCorticosteroid = repliesMap[followupMedicationCorticosteroid__path]|reply_str_value -%}\n        {#- Route [multichoice-list] #}\n        {%- set followupMedicationCorticosteroidRouteN__path = crf.followupMedicationCorticosteroidRouteN__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationCorticosteroidRouteN = repliesMap[followupMedicationCorticosteroidRoute__path]|reply_str_value -%}\n        {#- Route [multichoice-options] #}\n        {%- set followupMedicationCorticosteroidRoute__path = crf.followupMedicationCorticosteroidRoute__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationCorticosteroidRoute = repliesMap[followupMedicationCorticosteroidRoute__path]|reply_str_value -%}\n        {#- Agent [value-string] #}\n        {%- set followupMedicationCorticosteroidAgent__path = crf.followupMedicationCorticosteroidAgent__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationCorticosteroidAgent = repliesMap[followupMedicationCorticosteroidAgent__path]|reply_str_value -%}\n        {#- Maximum daily dose [value-string] #}\n        {%- set followupMedicationCorticosteroidDose__path = crf.followupMedicationCorticosteroidDose__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationCorticosteroidDose = repliesMap[followupMedicationCorticosteroidDose__path]|reply_str_value -%}\n        {%- if followupMedicationCorticosteroid == crf.followupMedicationCorticosteroid_yes %}\n        obo:BFO_0000051 [\n          a vodan:Corticosteroid ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- for i in range(followupMedicationCorticosteroidRouteN) %}\n          {%- set itemPath = followupMedicationCorticosteroidRoute__path|replace(\"index_$followupMedicationCorticosteroidRoute\", i) %}\n          {%- set followupMedicationCorticosteroidRoute = repliesMap[itemPath]|reply_str_value %}\n          {%- if followupMedicationCorticosteroidRoute == crf.followupMedicationCorticosteroidRoute_Oral %}\n          obo:BFO_0000051 [\n            a vodan:Which_corticosteroid_route ;\n            vodan:has_value vodan:Oral ;\n          ] ;\n          {%- elif followupMedicationCorticosteroidRoute == crf.followupMedicationCorticosteroidRoute_Intravenous %}\n          obo:BFO_0000051 [\n            a vodan:Which_corticosteroid_route ;\n            vodan:has_value vodan:Intravenous ;\n          ] ;\n          {%- elif followupMedicationCorticosteroidRoute == crf.followupMedicationCorticosteroidRoute_Inhaled %}\n          obo:BFO_0000051 [\n            a vodan:Which_corticosteroid_route ;\n            vodan:has_value vodan:Inhaled ;\n          ] ;\n          {%- endif %}\n          {%- endfor %}\n          obo:BFO_0000051 [\n            a vodan:Maximum_daily_corticosteroid_dose ;\n            vodan:has_literal_value \"{{ followupMedicationCorticosteroidAgent }}; {{ followupMedicationCorticosteroidDose }}\" ;\n          ] ;\n        ] ;\n        {%- elif followupMedicationCorticosteroid == crf.followupMedicationCorticosteroid_no %}\n        obo:BFO_0000051 [\n          a vodan:Corticosteroid ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupMedicationCorticosteroid == crf.followupMedicationCorticosteroid_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Corticosteroid ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Antibiotic? [yes-no-unknown] #}\n        {%- set followupMedicationAntibiotic__path = crf.followupMedicationAntibiotic__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationAntibiotic = repliesMap[followupMedicationAntibiotic__path]|reply_str_value -%}\n        {%- if followupMedicationAntibiotic == crf.followupMedicationAntibiotic_yes %}\n        obo:BFO_0000051 [\n          a vodan:Antibiotic ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupMedicationAntibiotic == crf.followupMedicationAntibiotic_no %}\n        obo:BFO_0000051 [\n          a vodan:Antibiotic ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupMedicationAntibiotic == crf.followupMedicationAntibiotic_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antibiotic ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Antifungal agent? [yes-no-unknown] #}\n        {%- set followupMedicationAntifungal__path = crf.followupMedicationAntifungal__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationAntifungal = repliesMap[followupMedicationAntifungal__path]|reply_str_value -%}\n        {%- if followupMedicationAntifungal == crf.followupMedicationAntifungal_yes %}\n        obo:BFO_0000051 [\n          a vodan:Antifungal_agent ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupMedicationAntifungal == crf.followupMedicationAntifungal_no %}\n        obo:BFO_0000051 [\n          a vodan:Antifungal_agent ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupMedicationAntifungal == crf.followupMedicationAntifungal_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antifungal_agent ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Antimalarial agent? [yes-no-unknown] #}\n        {%- set followupMedicationAntimalarial__path = crf.followupMedicationAntimalarial__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationAntimalarial = repliesMap[followupMedicationAntimalarial__path]|reply_str_value -%}\n        {#- Specify [value-string] #}\n        {%- set followupMedicationAntimalarialSpecify__path = crf.followupMedicationAntimalarialSpecify__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationAntimalarialSpecify = repliesMap[followupMedicationAntimalarialSpecify__path]|reply_str_value -%}\n        {%- if followupMedicationAntimalarial == crf.followupMedicationAntimalarial_yes %}\n        obo:BFO_0000051 [\n          a vodan:Antimalarial ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Which_antimalarial_agent ;\n            vodan:has_literal_value \"{{ followupMedicationAntimalarialSpecify }}\" ;\n          ] ;\n        ] ;\n        {%- elif followupMedicationAntimalarial == crf.followupMedicationAntimalarial_no %}\n        obo:BFO_0000051 [\n          a vodan:Antimalarial ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupMedicationAntimalarial == crf.followupMedicationAntimalarial_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antimalarial ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Experimental agent? [yes-no-unknown] #}\n        {%- set followupMedicationExperimental__path = crf.followupMedicationExperimental__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationExperimental = repliesMap[followupMedicationExperimental__path]|reply_str_value -%}\n        {#- Specify [value-string] #}\n        {%- set followupMedicationExperimentalSpecify__path = crf.followupMedicationExperimentalSpecify__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationExperimentalSpecify = repliesMap[followupMedicationExperimentalSpecify__path]|reply_str_value -%}\n        {%- if followupMedicationExperimental == crf.followupMedicationExperimental_yes %}\n        obo:BFO_0000051 [\n          a vodan:Experimental_agent ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Which_experimental_agent ;\n            vodan:has_literal_value \"{{ followupMedicationExperimentalSpecify }}\" ;\n          ] ;\n        ] ;\n        {%- elif followupMedicationExperimental == crf.followupMedicationExperimental_no %}\n        obo:BFO_0000051 [\n          a vodan:Experimental_agent ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupMedicationExperimental == crf.followupMedicationExperimental_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Experimental_agent ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Non-steroidal anti-inflammatory (NSAID)? [yes-no-unknown] #}\n        {%- set followupMedicationNSAID__path = crf.followupMedicationNSAID__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationNSAID = repliesMap[followupMedicationNSAID__path]|reply_str_value -%}\n        {%- if followupMedicationNSAID == crf.followupMedicationNSAID_yes %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_medication ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupMedicationNSAID == crf.followupMedicationNSAID_no %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_medication ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupMedicationNSAID == crf.followupMedicationNSAID_unknown %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_medication ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Angiotensin converting enzyme inhibitors (ACE inhibitors)? [yes-no-unknown] #}\n        {%- set followupMedicationACE__path = crf.followupMedicationACE__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationACE = repliesMap[followupMedicationACE__path]|reply_str_value -%}\n        {%- if followupMedicationACE == crf.followupMedicationACE_yes %}\n        obo:BFO_0000051 [\n          a vodan:ACE_inhibitors_medication ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupMedicationACE == crf.followupMedicationACE_no %}\n        obo:BFO_0000051 [\n          a vodan:ACE_inhibitors_medication ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupMedicationACE == crf.followupMedicationACE_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ACE_inhibitors_medication ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Angiotensin II receptor blockers (ARBs)? [yes-no-unknown] #}\n        {%- set followupMedicationARB__path = crf.followupMedicationARB__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationARB = repliesMap[followupMedicationARB__path]|reply_str_value -%}\n        {%- if followupMedicationARB == crf.followupMedicationARB_yes %}\n        obo:BFO_0000051 [\n          a vodan:ARBs_medication ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupMedicationARB == crf.followupMedicationARB_no %}\n        obo:BFO_0000051 [\n          a vodan:ARBs_medication ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupMedicationARB == crf.followupMedicationARB_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ARBs_medication ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Systemic anticoagulation [yes-no-unknown] #}\n        {%- set followupMedicationAnticoagulation__path = crf.followupMedicationAnticoagulation__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupMedicationAnticoagulation = repliesMap[followupMedicationAnticoagulation__path]|reply_str_value -%}\n        {%- if followupMedicationAnticoagulation == crf.followupMedicationAnticoagulation_yes %}\n        obo:BFO_0000051 [\n          a vodan:Systemic_anticoagulation ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupMedicationAnticoagulation == crf.followupMedicationAnticoagulation_no %}\n        obo:BFO_0000051 [\n          a vodan:Systemic_anticoagulation ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupMedicationAnticoagulation == crf.followupMedicationAnticoagulation_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Systemic_anticoagulation ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n      ];\n      {%- endif %}\n      {%- set followupCare__path = crf.followupCare__path|replace(\"index_$module2\", followUpIndex) -%}\n      {%- set followupCare = repliesMap[followupCare__path]|reply_str_value -%}\n      {%- if followupCare == crf.followupCare_open %}\n      # FOLLOW-UP #{{ followUpIndex }}: SUPPORTIVE CARE\n      obo:BFO_0000051 [\n        a vodan:Supportive_care ;\n        {#- ICU or High Dependency Unit admission? [yes-no-unknown] -#}\n        {%- set followupCareICU__path = crf.followupCareICU__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareICU = repliesMap[followupCareICU__path]|reply_str_value -%}\n        {%- if followupCareICU == crf.followupCareICU_yes %}\n        obo:BFO_0000051 [\n          a vodan:ICU_admission ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupCareICU == crf.followupCareICU_no %}\n        obo:BFO_0000051 [\n          a vodan:ICU_admission ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupCareICU == crf.followupCareICU_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ICU_admission ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Date of ICU/HDU admission [options] -#}\n        {%- set followupCareICUAdmission__path = crf.followupCareICUAdmission__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareICUAdmission = repliesMap[followupCareICUAdmission__path]|reply_str_value -%}\n        {#- Enter date of ICU/HDU admission [value-date] -#}\n        {%- set followupCareICUAdmission_Known_Date__path = crf.followupCareICUAdmission_Known_Date__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareICUAdmission_Known_Date = repliesMap[followupCareICUAdmission_Known_Date__path]|reply_str_value -%}\n        {%- if followupCareICUAdmission == crf.followupCareICUAdmission_Known and followupCareICUAdmission_Known_Date %}\n        obo:BFO_0000051 [\n          a vodan:Date_of_ICU_admission ;\n          vodan:has_literal_value \"{{ followupCareICUAdmission_Known_Date }}\"^^xsd:date ;\n        ] ;\n        {%- endif %}\n        {#- ICU/HDU discharge date [options] -#}\n        {%- set followupCareICUDischarge__path = crf.followupCareICUDischarge__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareICUDischarge = repliesMap[followupCareICUDischarge__path]|reply_str_value -%}\n        {#- Enter date of ICU/HDU discharge [value-date] -#}\n        {%- set followupCareICUDischarge_Known_Date__path = crf.followupCareICUDischarge_Known_Date__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareICUDischarge_Known_Date = repliesMap[followupCareICUDischarge_Known_Date__path]|reply_str_value -%}\n        {%- if followupCareICUDischarge == crf.followupCareICUDischarge_Known and followupCareICUDischarge_Known_Date %}\n        obo:BFO_0000051 [\n          a vodan:Date_of_ICU_discharge ;\n          vodan:has_literal_value \"{{ followupCareICUDischarge_Known_Date }}\"^^xsd:date ;\n        ] ;\n        {%- endif %}\n        {#- Oxygen therapy? [yes-no-unknown] -#}\n        {%- set followupCareOxygen__path = crf.followupCareOxygen__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareOxygen = repliesMap[followupCareOxygen__path]|reply_str_value -%}\n        {#- O\u2082 flow [options] -#}\n        {%- set followupCareOxygenFlow__path = crf.followupCareOxygenFlow__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareOxygenFlow = repliesMap[followupCareOxygenFlow__path]|reply_str_value -%}\n        {#- Source of oxygen [options] -#}\n        {%- set followupCareOxygenSource__path = crf.followupCareOxygenSource__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareOxygenSource = repliesMap[followupCareOxygenSource__path]|reply_str_value -%}\n        {#- Interface [options] -#}\n        {%- set followupCareOxygenInterface__path = crf.followupCareOxygenInterface__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareOxygenInterface = repliesMap[followupCareOxygenInterface__path]|reply_str_value -%}\n        {%- if followupCareOxygen == crf.followupCareOxygen_yes %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_therapy ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if followupCareOxygenFlow == crf.followupCareOxygenFlow_1to5 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:1-5_L_per_min ;\n          ] ;\n          {%- elif followupCareOxygenFlow == crf.followupCareOxygenFlow_6to10 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:6-10_L_per_min ;\n          ] ;\n          {%- elif followupCareOxygenFlow == crf.followupCareOxygenFlow_11to15 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:11-15_L_per_min ;\n          ] ;\n          {%- elif followupCareOxygenFlow == crf.followupCareOxygenFlow_gt15 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:over_15_L_per_min ;\n          ] ;\n          {%- elif followupCareOxygenFlow == crf.followupCareOxygenFlow_Unknown %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n          ] ;\n          {%- endif %}\n          {%- if followupCareOxygenSource == crf.followupCareOxygenSource_Piped %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan:Piped ;\n          ] ;\n          {%- elif followupCareOxygenSource == crf.followupCareOxygenSource_Cylinder %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan:Cylinder ;\n          ] ;\n          {%- elif followupCareOxygenSource == crf.followupCareOxygenSource_Concentrator %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan:Concentrator ;\n          ] ;\n          {%- elif followupCareOxygenSource == crf.followupCareOxygenSource_Unknown %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n          ] ;\n          {%- endif %}\n          {%- if followupCareOxygenInterface == crf.followupCareOxygenInterface_Prongs %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:Nasal_prongs ;\n          ] ;\n          {%- elif followupCareOxygenInterface == crf.followupCareOxygenInterface_Cannula %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:HF_nasal_cannula ;\n          ] ;\n          {%- elif followupCareOxygenInterface == crf.followupCareOxygenInterface_MaskWithout %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:Mask ;\n          ] ;\n          {%- elif followupCareOxygenInterface == crf.followupCareOxygenInterface_MaskWith %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:Mask_with_reservoir ;\n          ] ;\n          {%- elif followupCareOxygenInterface == crf.followupCareOxygenInterface_CPAP %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:CPAP_NIV_Mask ;\n          ] ;\n          {%- elif followupCareOxygenInterface == crf.followupCareOxygenInterface_Unknown %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif followupCareOxygen == crf.followupCareOxygen_no %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_therapy ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupCareOxygen == crf.followupCareOxygen_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_therapy ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Non-invasive ventilation (e.g.BIPAP/CPAP)? [yes-no-unknown] -#}\n        {%- set followupCareNonInvasive__path = crf.followupCareNonInvasive__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareNonInvasive = repliesMap[followupCareNonInvasive__path]|reply_str_value -%}\n        {%- if followupCareNonInvasive == crf.followupCareNonInvasive_yes %}\n        obo:BFO_0000051 [\n          a vodan:Non-invasive_ventilation ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupCareNonInvasive == crf.followupCareNonInvasive_no %}\n        obo:BFO_0000051 [\n          a vodan:Non-invasive_ventilation ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupCareNonInvasive == crf.followupCareNonInvasive_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Non-invasive_ventilation ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Invasive ventilation (Any)? [yes-no-unknown] -#}\n        {%- set followupCareInvasive__path = crf.followupCareInvasive__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareInvasive = repliesMap[followupCareInvasive__path]|reply_str_value -%}\n        {#- PEEP [cm H\u2082O] [value-number] -#}\n        {%- set followupCareInvasive_Peep__path = crf.followupCareInvasive_Peep__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareInvasive_Peep = repliesMap[followupCareInvasive_Peep__path]|reply_str_value -%}\n        {#- F\u1d62O\u2082 [%] [value-number] -#}\n        {%- set followupCareInvasive_FiO2__path = crf.followupCareInvasive_FiO2__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareInvasive_FiO2 = repliesMap[followupCareInvasive_FiO2__path]|reply_str_value -%}\n        {#- Plateau pressure [cm H\u2082O] [value-number] -#}\n        {%- set followupCareInvasive_Plateau__path = crf.followupCareInvasive_Plateau__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareInvasive_Plateau = repliesMap[followupCareInvasive_Plateau__path]|reply_str_value -%}\n        {#- P\u2090CO\u2082 [value-number] -#}\n        {%- set followupCareInvasive_PaCO2__path = crf.followupCareInvasive_PaCO2__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareInvasive_PaCO2 = repliesMap[followupCareInvasive_PaCO2__path]|reply_str_value -%}\n        {#- P\u2090O\u2082 [value-number] -#}\n        {%- set followupCareInvasive_PaO2__path = crf.followupCareInvasive_PaO2__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareInvasive_PaO2 = repliesMap[followupCareInvasive_PaO2__path]|reply_str_value -%}\n        {%- if followupCareInvasive == crf.followupCareInvasive_yes %}\n        obo:BFO_0000051 [\n          a vodan:Invasive_ventilation ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- if followupCareInvasive_Peep %}\n        obo:BFO_0000051 [\n          a vodan:PEEP_value ;\n          vodan:has_literal_value \"{{ followupCareInvasive_Peep }}\"^^xsd:float ;\n        ] ;\n        {%- endif %}\n        {%- if followupCareInvasive_FiO2 %}\n        obo:BFO_0000051 [\n          a vodan:FiO2_value ;\n          vodan:has_literal_value \"{{ followupCareInvasive_FiO2 }}\"^^xsd:float ;\n        ] ;\n        {%- endif %}\n        {%- if followupCareInvasive_Plateau %}\n        obo:BFO_0000051 [\n          a vodan:Plateau_pressure_value ;\n          vodan:has_literal_value \"{{ followupCareInvasive_Plateau }}\"^^xsd:float ;\n        ] ;\n        {%- endif %}\n        {%- if followupCareInvasive_PaCO2 %}\n        obo:BFO_0000051 [\n          a vodan:PaCO2_value ;\n          vodan:has_literal_value \"{{ followupCareInvasive_PaCO2 }}\"^^xsd:float ;\n        ] ;\n        {%- endif %}\n        {%- if followupCareInvasive_PaO2 %}\n        obo:BFO_0000051 [\n          a vodan:PaO2_value ;\n          vodan:has_literal_value \"{{ followupCareInvasive_PaO2 }}\"^^xsd:float ;\n        ] ;\n        {%- endif %}\n        {%- elif followupCareInvasive == crf.followupCareInvasive_no %}\n        obo:BFO_0000051 [\n          a vodan:Invasive_ventilation ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupCareInvasive == crf.followupCareInvasive_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Invasive_ventilation ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Inotropes/vasopressors? [yes-no-unknown] -#}\n        {%- set followupCareInotropes__path = crf.followupCareInotropes__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareInotropes = repliesMap[followupCareInotropes__path]|reply_str_value -%}\n        {%- if followupCareInotropes == crf.followupCareInotropes_yes %}\n        obo:BFO_0000051 [\n          a vodan:Inotropes_vasopressors ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupCareInotropes == crf.followupCareInotropes_no %}\n        obo:BFO_0000051 [\n          a vodan:Inotropes_vasopressors ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupCareInotropes == crf.followupCareInotropes_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Inotropes_vasopressors ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Extracorporeal (ECMO) support? [yes-no-unknown] -#}\n        {%- set followupCareECMO__path = crf.followupCareECMO__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareECMO = repliesMap[followupCareECMO__path]|reply_str_value -%}\n        {%- if followupCareECMO == crf.followupCareECMO_yes %}\n        obo:BFO_0000051 [\n          a vodan:ECMO_support ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupCareECMO == crf.followupCareECMO_no %}\n        obo:BFO_0000051 [\n          a vodan:ECMO_support ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupCareECMO == crf.followupCareECMO_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ECMO_support ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Prone position? [yes-no-unknown] -#}\n        {%- set followupCareProne__path = crf.followupCareProne__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareProne = repliesMap[followupCareProne__path]|reply_str_value -%}\n        {%- if followupCareProne == crf.followupCareProne_yes %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupCareProne == crf.followupCareProne_no %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupCareProne == crf.followupCareProne_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {#- Renal replacement therapy (RRT) or dialysis? [yes-no-unknown] -#}\n        {%- set followupCareRRT__path = crf.followupCareRRT__path|replace(\"index_$module2\", followUpIndex) -%}\n        {%- set followupCareRRT = repliesMap[followupCareRRT__path]|reply_str_value -%}\n        {%- if followupCareRRT == crf.followupCareRRT_yes %}\n        obo:BFO_0000051 [\n          a vodan:RRT_or_dialysis ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif followupCareRRT == crf.followupCareRRT_no %}\n        obo:BFO_0000051 [\n          a vodan:RRT_or_dialysis ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif followupCareRRT == crf.followupCareRRT_unknown %}\n        obo:BFO_0000051 [\n          a vodan:RRT_or_dialysis ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n    ] ;\n    {%- endfor %}\n    {#- MODULE 3 #}\n    {%- if crf.pathogenTest == crf.pathogenTest_open or crf.complications == crf.complications_open or crf.dischargeMedication == crf.dischargeMedication_open or crf.dischargeCare == crf.dischargeCare_open or crf.outcome == crf.outcome_open %}\n    # MODULE 3 (ADMISSION)\n    obo:BFO_0000051 [\n      a vodan:Module_3 ;\n      {%- if crf.pathogenTest == crf.pathogenTest_open %}\n      # DISCHARGE: DIAGNOSTIC/PATHONGEN TESTING\n      obo:BFO_0000051 [\n        a vodan:pathogen_testing ;\n        {%- if crf.pathogenTestXRay == crf.pathogenTestXRay_yes %}\n        obo:BFO_0000051 [\n          a vodan:Chest_imaging ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.pathogenTestXRayInfiltrates == crf.pathogenTestXRayInfiltrates_yes %}\n          obo:BFO_0000051 [\n            a vodan:Infiltrates_present ;\n            vodan:has_value vodan_inst:C49488 ;  # YES\n          ] ;\n          {%- elif crf.pathogenTestXRayInfiltrates == crf.pathogenTestXRayInfiltrates_no %}\n          obo:BFO_0000051 [\n            a vodan:Infiltrates_present ;\n            vodan:has_value vodan_inst:C49487 ;  # NO\n          ] ;\n          {%- elif crf.pathogenTestXRayInfiltrates == crf.pathogenTestXRayInfiltrates_unknown %}\n          obo:BFO_0000051 [\n            a vodan:Infiltrates_present ;\n            vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.pathogenTestXRay == crf.pathogenTestXRay_no %}\n        obo:BFO_0000051 [\n          a vodan:Chest_imaging ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.pathogenTestXRay == crf.pathogenTestXRay_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Chest_imaging ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.pathogenTestDone == crf.pathogenTestDone_yes %}\n        obo:BFO_0000051 [\n          a vodan:Pathogen_testing ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.pathogenTestDoneInfluenza == crf.pathogenTestDoneInfluenza_Positive %}\n          obo:BFO_0000051 [\n            a vodan:Influenza_virus ;\n            vodan:has_value vodan_inst:Positive ;\n            {%- if crf.pathogenTestDoneInfluenza_Positive_Type %}\n            obo:BFO_0000051 [\n              a vodan:Influenza_virus_type ;\n              vodan:has_literal_value \"{{ crf.pathogenTestDoneInfluenza_Positive_Type }}\" ;\n            ] ;\n            {% endif %}\n          ] ;\n          {%- elif crf.pathogenTestDoneInfluenza == crf.pathogenTestDoneInfluenza_Negative %}\n          obo:BFO_0000051 [\n            a vodan:Influenza_virus ;\n            vodan:has_value vodan_inst:Negative ;\n          ] ;\n          {%- elif crf.pathogenTestDoneInfluenza == crf.pathogenTestDoneInfluenza_NotDone %}\n          obo:BFO_0000051 [\n            a vodan:Influenza_virus ;\n            vodan:has_value vodan_inst:Not_done ;\n          ] ;\n          {%- endif %}\n          {%- if crf.pathogenTestDoneCoronavirus == crf.pathogenTestDoneCoronavirus_Positive %}\n          obo:BFO_0000051 [\n            a vodan:Coronovirus ;\n            vodan:has_value vodan_inst:Positive ;\n            {%- if crf.pathogenTestDoneCoronavirus_Positive_Type == crf.pathogenTestDoneCoronavirus_Positive_MERS %}\n            obo:BFO_0000051 [\n              a vodan:Which_coronavirus ;\n              vodan:has_value vodan_inst:MERS-CoV ;\n            ] ;\n            {%- elif crf.pathogenTestDoneCoronavirus_Positive_Type == crf.pathogenTestDoneCoronavirus_Positive_SARS %}\n            obo:BFO_0000051 [\n              a vodan:Which_coronavirus ;\n              vodan:has_value vodan_inst:SARS-CoV-2 ;\n            ] ;\n            {%- elif crf.pathogenTestDoneCoronavirus_Positive_Type == crf.pathogenTestDoneCoronavirus_Positive_Other %}\n            obo:BFO_0000051 [\n              a vodan:Which_coronavirus ;\n              obo:BFO_0000051 [\n                a vodan:other_corona_virus ;\n                vodan:has_literal_value \"{{ crf.pathogenTestDoneCoronavirus_Positive_OtherSpecify }}\" ;\n              ] ;\n            ] ;\n            {%- endif %}\n          ] ;\n          {%- elif crf.pathogenTestDoneCoronavirus == crf.pathogenTestDoneCoronavirus_Negative %}\n          obo:BFO_0000051 [\n            a vodan:Coronovirus ;\n            vodan:has_value vodan_inst:Negative ;\n          ] ;\n          {%- elif crf.pathogenTestDoneCoronavirus == crf.pathogenTestDoneCoronavirus_NotDone %}\n          obo:BFO_0000051 [\n            a vodan:Coronovirus ;\n            vodan:has_value vodan_inst:Not_done ;\n          ] ;\n          {%- endif %}\n          {%- if crf.pathogenTestDoneOtherResp == crf.pathogenTestDoneOtherResp_Positive %}\n          obo:BFO_0000051 [\n            a vodan:Other_respiratory_pathogen ;\n            vodan:has_value vodan_inst:Positive ;\n            {%- if crf.pathogenTestDoneOtherResp_Positive_Specify %}\n            obo:BFO_0000051 [\n              a vodan:Which_respiratory_pathogen ;\n              vodan:has_literal_value \"{{ crf.pathogenTestDoneOtherResp_Positive_Specify }}\" ;\n            ] ;\n            {%- endif %}\n          ] ;\n          {%- elif crf.pathogenTestDoneOtherResp == crf.pathogenTestDoneOtherResp_Negative %}\n          obo:BFO_0000051 [\n            a vodan:Other_respiratory_pathogen ;\n            vodan:has_value vodan_inst:Negative ;\n          ] ;\n          {%- elif crf.pathogenTestDoneOtherResp == crf.pathogenTestDoneOtherResp_NotDone %}\n          obo:BFO_0000051 [\n            a vodan:Other_respiratory_pathogen ;\n            vodan:has_value vodan_inst:Not_done ;\n          ] ;\n          {%- endif %}\n          {%- if crf.pathogenTestDoneViralFever == crf.pathogenTestDoneViralFever_Positive %}\n          obo:BFO_0000051 [\n            a vodan:Viral_haemorrhagic_fever ;\n            vodan:has_value vodan_inst:Positive ;\n            {%- if crf.pathogenTestDoneViralFever_Positive_Specify %}\n            obo:BFO_0000051 [\n              a vodan:Which_virus ;\n              vodan:has_literal_value \"{{ crf.pathogenTestDoneViralFever_Positive_Specify }}\" ;\n            ] ;\n            {%- endif %}\n          ] ;\n          {%- elif crf.pathogenTestDoneViralFever == crf.pathogenTestDoneViralFever_Negative %}\n          obo:BFO_0000051 [\n            a vodan:Viral_haemorrhagic_fever ;\n            vodan:has_value vodan_inst:Negative ;\n          ] ;\n          {%- elif crf.pathogenTestDoneViralFever == crf.pathogenTestDoneViralFever_NotDone %}\n          obo:BFO_0000051 [\n            a vodan:Viral_haemorrhagic_fever ;\n            vodan:has_value vodan_inst:Not_done ;\n          ] ;\n          {%- endif %}\n          {%- if crf.pathogenTestDoneOtherPHI == crf.pathogenTestDoneOtherPHI_Positive %}\n          obo:BFO_0000051 [\n            a vodan:Other_pathogen_of_public_health_interest_detected ;\n            vodan:has_value vodan_inst:Positive ;\n          ] ;\n          {%- if crf.pathogenTestDoneOtherPHI_Positive_Specify %}\n          obo:BFO_0000051 [\n            a vodan:Which_other_pathogen ;\n            vodan:has_literal_value \"{{ crf.pathogenTestDoneOtherPHI_Positive_Specify }}\" ;\n          ] ;\n          {%- endif %}\n          {%- elif crf.pathogenTestDoneOtherPHI == crf.pathogenTestDoneOtherPHI_Negative %}\n          obo:BFO_0000051 [\n            a vodan:Other_pathogen_of_public_health_interest_detected ;\n            vodan:has_value vodan_inst:Negative ;\n          ] ;\n          {%- elif crf.pathogenTestDoneOtherPHI == crf.pathogenTestDoneOtherPHI_NotDone %}\n          obo:BFO_0000051 [\n            a vodan:Other_pathogen_of_public_health_interest_detected ;\n            vodan:has_value vodan_inst:Not_done ;\n          ] ;\n          {%- endif %}\n          {%- if crf.pathogenTestDoneFalciparum == crf.pathogenTestDoneFalciparum_Positive %}\n          obo:BFO_0000051 [\n            a vodan:Falciparum_malaria ;\n            vodan:has_value vodan_inst:Positive ;\n          ] ;\n          {%- elif crf.pathogenTestDoneFalciparum == crf.pathogenTestDoneFalciparum_Negative %}\n          obo:BFO_0000051 [\n            a vodan:Falciparum_malaria ;\n            vodan:has_value vodan_inst:Negative ;\n          ] ;\n          {%- elif crf.pathogenTestDoneFalciparum == crf.pathogenTestDoneFalciparum_NotDone %}\n          obo:BFO_0000051 [\n            a vodan:Falciparum_malaria ;\n            vodan:has_value vodan_inst:Not_done ;\n          ] ;\n          {%- endif %}\n          {%- if crf.pathogenTestDoneNonFalciparum == crf.pathogenTestDoneNonFalciparum_Positive %}\n          obo:BFO_0000051 [\n            a vodan:Non-Falciparum_malaria ;\n            vodan:has_value vodan_inst:Positive ;\n          ] ;\n          {%- elif crf.pathogenTestDoneNonFalciparum == crf.pathogenTestDoneNonFalciparum_Negative %}\n          obo:BFO_0000051 [\n            a vodan:Non-Falciparum_malaria ;\n            vodan:has_value vodan_inst:Negative ;\n          ] ;\n          {%- elif crf.pathogenTestDoneNonFalciparum == crf.pathogenTestDoneNonFalciparum_NotDone %}\n          obo:BFO_0000051 [\n            a vodan:Non-Falciparum_malaria ;\n            vodan:has_value vodan_inst:Not_done ;\n          ] ;\n          {%- endif %}\n          {%- if crf.pathogenTestDoneHIV == crf.pathogenTestDoneHIV_Positive %}\n          obo:BFO_0000051 [\n            a vodan:HIV_test ;\n            vodan:has_value vodan_inst:Positive ;\n          ] ;\n          {%- elif crf.pathogenTestDoneHIV == crf.pathogenTestDoneHIV_Negative %}\n          obo:BFO_0000051 [\n            a vodan:HIV_test ;\n            vodan:has_value vodan_inst:Negative ;\n          ] ;\n          {%- elif crf.pathogenTestDoneHIV == crf.pathogenTestDoneHIV_NotDone %}\n          obo:BFO_0000051 [\n            a vodan:HIV_test ;\n            vodan:has_value vodan_inst:Not_done ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.pathogenTestDone == crf.pathogenTestDone_no %}\n        obo:BFO_0000051 [\n          a vodan:Pathogen_testing ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.pathogenTestDone == crf.pathogenTestDone_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Pathogen_testing ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {%- if crf.complications == crf.complications_open %}\n      # DISCHARGE: COMPLICATIONS\n      obo:BFO_0000051 [\n        a vodan:Complications ;\n        {%- if crf.complicationsShock == crf.complicationsShock_yes %}\n        obo:BFO_0000051 [\n          a vodan:Shock ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsShock == crf.complicationsShock_no %}\n        obo:BFO_0000051 [\n          a vodan:Shock ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsShock == crf.complicationsShock_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Shock ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsSeizure == crf.complicationsSeizure_yes %}\n        obo:BFO_0000051 [\n          a vodan:Seizures_complications ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsSeizure == crf.complicationsSeizure_no %}\n        obo:BFO_0000051 [\n          a vodan:Seizures_complications ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsSeizure == crf.complicationsSeizure_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Seizures_complications ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsMeningitis == crf.complicationsMeningitis_yes %}\n        obo:BFO_0000051 [\n          a vodan:Meningitis_Encephalitis ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsMeningitis == crf.complicationsMeningitis_no %}\n        obo:BFO_0000051 [\n          a vodan:Meningitis_Encephalitis ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsMeningitis == crf.complicationsMeningitis_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Meningitis_Encephalitis ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsAnaemia == crf.complicationsAnaemia_yes %}\n        obo:BFO_0000051 [\n          a vodan:Anaemia ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsAnaemia == crf.complicationsAnaemia_no %}\n        obo:BFO_0000051 [\n          a vodan:Anaemia ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsAnaemia == crf.complicationsAnaemia_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Anaemia ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsCardiacArrhythmia == crf.complicationsCardiacArrhythmia_yes %}\n        obo:BFO_0000051 [\n          a vodan:Cardiac_arrhytmia ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsCardiacArrhythmia == crf.complicationsCardiacArrhythmia_no %}\n        obo:BFO_0000051 [\n          a vodan:Cardiac_arrhytmia ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsCardiacArrhythmia == crf.complicationsCardiacArrhythmia_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Cardiac_arrhytmia ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsCardiacArrest == crf.complicationsCardiacArrest_yes %}\n        obo:BFO_0000051 [\n          a vodan:Cardiac_arrest ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsCardiacArrest == crf.complicationsCardiacArrest_no %}\n        obo:BFO_0000051 [\n          a vodan:Cardiac_arrest ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsCardiacArrest == crf.complicationsCardiacArrest_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Cardiac_arrest ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsPneumonia == crf.complicationsPneumonia_yes %}\n        obo:BFO_0000051 [\n          a vodan:Pneumonia ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsPneumonia == crf.complicationsPneumonia_no %}\n        obo:BFO_0000051 [\n          a vodan:Pneumonia ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsPneumonia == crf.complicationsPneumonia_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Pneumonia ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsBronchiolitis == crf.complicationsBronchiolitis_yes %}\n        obo:BFO_0000051 [\n          a vodan:Bronchiolitis ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsBronchiolitis == crf.complicationsBronchiolitis_no %}\n        obo:BFO_0000051 [\n          a vodan:Bronchiolitis ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsBronchiolitis == crf.complicationsBronchiolitis_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Bronchiolitis ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsARDS == crf.complicationsARDS_yes %}\n        obo:BFO_0000051 [\n          a vodan:Acute_Respiratory_Distress_Syndrome ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsARDS == crf.complicationsARDS_no %}\n        obo:BFO_0000051 [\n          a vodan:Acute_Respiratory_Distress_Syndrome ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsARDS == crf.complicationsARDS_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Acute_Respiratory_Distress_Syndrome ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsBacteraemia == crf.complicationsBacteraemia_yes %}\n        obo:BFO_0000051 [\n          a vodan:Bacteraemia ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsBacteraemia == crf.complicationsBacteraemia_no %}\n        obo:BFO_0000051 [\n          a vodan:Bacteraemia ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsBacteraemia == crf.complicationsBacteraemia_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Bacteraemia ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsBleeding == crf.complicationsBleeding_yes %}\n        obo:BFO_0000051 [\n          a vodan:Bleeding ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsBleeding == crf.complicationsBleeding_no %}\n        obo:BFO_0000051 [\n          a vodan:Bleeding ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsBleeding == crf.complicationsBleeding_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Bleeding ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsEndocarditis == crf.complicationsEndocarditis_yes %}\n        obo:BFO_0000051 [\n          a vodan:Endocarditis ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsEndocarditis == crf.complicationsEndocarditis_no %}\n        obo:BFO_0000051 [\n          a vodan:Endocarditis ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsEndocarditis == crf.complicationsEndocarditis_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Endocarditis ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsMyocarditis == crf.complicationsMyocarditis_yes %}\n        obo:BFO_0000051 [\n          a vodan:Myocarditis_Pericarditis ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsMyocarditis == crf.complicationsMyocarditis_no %}\n        obo:BFO_0000051 [\n          a vodan:Myocarditis_Pericarditis ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsMyocarditis == crf.complicationsMyocarditis_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Myocarditis_Pericarditis ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsMyocarditis == crf.complicationsMyocarditis_yes %}\n        obo:BFO_0000051 [\n          a vodan:Myocarditis_Pericarditis ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsMyocarditis == crf.complicationsMyocarditis_no %}\n        obo:BFO_0000051 [\n          a vodan:Myocarditis_Pericarditis ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsMyocarditis == crf.complicationsMyocarditis_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Myocarditis_Pericarditis ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsARI == crf.complicationsARI_yes %}\n        obo:BFO_0000051 [\n          a vodan:Acute_renal_injury ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsARI == crf.complicationsARI_no %}\n        obo:BFO_0000051 [\n          a vodan:Acute_renal_injury ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsARI == crf.complicationsARI_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Acute_renal_injury ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsPancreatitis == crf.complicationsPancreatitis_yes %}\n        obo:BFO_0000051 [\n          a vodan:Pancreatitis ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsPancreatitis == crf.complicationsPancreatitis_no %}\n        obo:BFO_0000051 [\n          a vodan:Pancreatitis ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsPancreatitis == crf.complicationsPancreatitis_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Pancreatitis ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsLiverDysfunction == crf.complicationsLiverDysfunction_yes %}\n        obo:BFO_0000051 [\n          a vodan:Liver_dysfunction ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsLiverDysfunction == crf.complicationsLiverDysfunction_no %}\n        obo:BFO_0000051 [\n          a vodan:Liver_dysfunction ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsLiverDysfunction == crf.complicationsLiverDysfunction_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Liver_dysfunction ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsCardiomyopathy == crf.complicationsCardiomyopathy_yes %}\n        obo:BFO_0000051 [\n          a vodan:Cardiomyopathy ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.complicationsCardiomyopathy == crf.complicationsCardiomyopathy_no %}\n        obo:BFO_0000051 [\n          a vodan:Cardiomyopathy ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsCardiomyopathy == crf.complicationsCardiomyopathy_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Cardiomyopathy ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.complicationsOther == crf.complicationsOther_yes %}\n        obo:BFO_0000051 [\n          a vodan:Other_complication ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          obo:BFO_0000051 [\n            a vodan:Other_complication ;\n            vodan:has_literal_value \"{{ crf.complicationsOther_Specify }}\" ;\n          ] ;\n        ] ;\n        {%- elif crf.complicationsOther == crf.complicationsOther_no %}\n        obo:BFO_0000051 [\n          a vodan:Other_complication ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.complicationsOther == crf.complicationsOther_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Other_complication ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {%- if crf.dischargeMedication == crf.dischargeMedication_open %}\n      # DISCHARGE: MEDICATION\n      obo:BFO_0000051 [\n        a vodan:Medication ;\n        {%- if crf.dischargeMedicationOralFluids == crf.dischargeMedicationOralFluids_yes %}\n        obo:BFO_0000051 [\n          a vodan:oral_orgastric_fluids ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.dischargeMedicationOralFluids == crf.dischargeMedicationOralFluids_no %}\n        obo:BFO_0000051 [\n          a vodan:oral_orgastric_fluids ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeMedicationOralFluids == crf.dischargeMedicationOralFluids_unknown %}\n        obo:BFO_0000051 [\n          a vodan:oral_orgastric_fluids ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeMedicationIntravenousFluids == crf.dischargeMedicationIntravenousFluids_yes %}\n        obo:BFO_0000051 [\n          a vodan:Intravenous_fluids ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.dischargeMedicationIntravenousFluids == crf.dischargeMedicationIntravenousFluids_no %}\n        obo:BFO_0000051 [\n          a vodan:Intravenous_fluids ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeMedicationIntravenousFluids == crf.dischargeMedicationIntravenousFluids_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Intravenous_fluids ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeMedicationAntiviral == crf.dischargeMedicationAntiviral_Yes %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- for i in range(crf.dischargeMedicationAntiviralSpecifyN) %}\n          {%- set itemPath = crf.dischargeMedicationAntiviralSpecify__path|replace(\"index_$dischargeMedicationAntiviralSpecify\", i) %}\n          {%- set dischargeMedicationAntiviralSpecify = repliesMap[itemPath]|reply_str_value %}\n          {%- if dischargeMedicationAntiviralSpecify == crf.dischargeMedicationAntiviralSpecify_Ribavirin %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Ribavirin ;\n          ] ;\n          {%- elif dischargeMedicationAntiviralSpecify == crf.dischargeMedicationAntiviralSpecify_Lopinavir %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Lopinavir_Ritonavir ;\n          ] ;\n          {%- elif dischargeMedicationAntiviralSpecify == crf.dischargeMedicationAntiviralSpecify_Inhibitor %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Neuraminidase_inhibitor ;\n          ] ;\n          {%- elif dischargeMedicationAntiviralSpecify == crf.dischargeMedicationAntiviralSpecify_IntAlpha %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Interferon_alpha ;\n          ] ;\n          {%- elif dischargeMedicationAntiviralSpecify == crf.dischargeMedicationAntiviralSpecify_IntBeta %}\n          obo:BFO_0000051 [\n            a vodan:Which_antiviral ;\n            vodan:has_value vodan:Interferon_beta ;\n          ] ;\n          {%- elif dischargeMedicationAntiviralSpecify == crf.dischargeMedicationAntiviralSpecify_Other %}\n          {%- set itemOtherPath = crf.dischargeMedicationAntiviralSpecify_Other_Specify__path|replace(\"index_$dischargeMedicationAntiviralSpecify\", i) %}\n          {%- set dischargeMedicationAntiviralSpecify_Other_Specify = repliesMap[itemOtherPath]|reply_str_value %}\n          obo:BFO_0000051 [\n            a vodan:Which_other_antiviral ;\n            vodan:has_literal_value \"{{ dischargeMedicationAntiviralSpecify_Other_Specify }}\" ;\n          ] ;\n          {%- endif %}\n          {%- endfor %}\n        ] ;\n        {%- elif crf.dischargeMedicationAntiviral == crf.dischargeMedicationAntiviral_No %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeMedicationAntiviral == crf.dischargeMedicationAntiviral_Unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antiviral ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeMedicationCorticosteroid == crf.dischargeMedicationCorticosteroid_yes %}\n        obo:BFO_0000051 [\n          a vodan:Corticosteroid ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- for i in range(crf.dischargeMedicationCorticosteroid_RouteN) %}\n          {%- set itemPath = crf.dischargeMedicationCorticosteroid_Route__path|replace(\"index_$dischargeMedicationCorticosteroid_Route\", i) %}\n          {%- set dischargeMedicationCorticosteroid_Route = repliesMap[itemPath]|reply_str_value %}\n          {%- set dischargeMedicationCorticosteroid_Agent__path = crf.dischargeMedicationCorticosteroid_Agent__path|replace(\"index_$dischargeMedicationCorticosteroid_Route\", i) %}\n          {%- set dischargeMedicationCorticosteroid_Agent = repliesMap[dischargeMedicationCorticosteroid_Agent__path]|reply_str_value -%}\n          {%- set dischargeMedicationCorticosteroid_Dose__path = crf.dischargeMedicationCorticosteroid_Dose__path|replace(\"index_$dischargeMedicationCorticosteroid_Route\", i) %}\n          {%- set dischargeMedicationCorticosteroid_Dose = repliesMap[dischargeMedicationCorticosteroid_Dose__path]|reply_str_value -%}\n\n          {%- if dischargeMedicationCorticosteroid_Route == crf.dischargeMedicationCorticosteroid_Route_Oral %}\n          obo:BFO_0000051 [\n            a vodan:Which_corticosteroid_route ;\n            vodan:has_value vodan:Oral ;\n          ] ;\n          {%- elif dischargeMedicationCorticosteroid_Route == crf.dischargeMedicationCorticosteroid_Route_Intravenous %}\n          obo:BFO_0000051 [\n            a vodan:Which_corticosteroid_route ;\n            vodan:has_value vodan:Intravenous ;\n          ] ;\n          {%- elif dischargeMedicationCorticosteroid_Route == crf.dischargeMedicationCorticosteroid_Route_Inhaled %}\n          obo:BFO_0000051 [\n            a vodan:Which_corticosteroid_route ;\n            vodan:has_value vodan:Inhaled ;\n          ] ;\n          {%- endif %}\n          {%- endfor %}\n          obo:BFO_0000051 [\n            a vodan:Maximum_daily_corticosteroid_dose ;\n            vodan:has_literal_value \"{{ dischargeMedicationCorticosteroid_Agent }}; {{ dischargeMedicationCorticosteroid_Dose }}\" ;\n          ] ;\n        ] ;\n        {%- elif crf.dischargeMedicationCorticosteroid == crf.dischargeMedicationCorticosteroid_no %}\n        obo:BFO_0000051 [\n          a vodan:Corticosteroid ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeMedicationCorticosteroid == crf.dischargeMedicationCorticosteroid_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Corticosteroid ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeMedicationAntibiotic == crf.dischargeMedicationAntibiotic_yes %}\n        obo:BFO_0000051 [\n          a vodan:Antibiotic ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeMedicationAntibiotic_Specify %}\n          obo:BFO_0000051 [\n            a vodan:Which_antibiotic ;\n            vodan:has_literal_value \"{{ crf.dischargeMedicationAntibiotic_Specify }}\" ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeMedicationAntibiotic == crf.dischargeMedicationAntibiotic_no %}\n        obo:BFO_0000051 [\n          a vodan:Antibiotic ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeMedicationAntibiotic == crf.dischargeMedicationAntibiotic_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antibiotic ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeMedicationAntifungal == crf.dischargeMedicationAntifungal_yes %}\n        obo:BFO_0000051 [\n          a vodan:Antifungal_agent ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeMedicationAntifungal_Specify %}\n          obo:BFO_0000051 [\n            a vodan:Which_antifungal_agent ;\n            vodan:has_literal_value \"{{ crf.dischargeMedicationAntifungal_Specify }}\" ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeMedicationAntifungal == crf.dischargeMedicationAntifungal_no %}\n        obo:BFO_0000051 [\n          a vodan:Antifungal_agent ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeMedicationAntifungal == crf.dischargeMedicationAntifungal_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antifungal_agent ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeMedicationAntimalarial == crf.dischargeMedicationAntimalarial_yes %}\n        obo:BFO_0000051 [\n          a vodan:Antimalarial ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeMedicationAntimalarial_Specify %}\n          obo:BFO_0000051 [\n            a vodan:Which_antimalarial_agent ;\n            vodan:has_literal_value \"{{ crf.dischargeMedicationAntimalarial_Specify }}\" ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeMedicationAntimalarial == crf.dischargeMedicationAntimalarial_no %}\n        obo:BFO_0000051 [\n          a vodan:Antimalarial ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeMedicationAntimalarial == crf.dischargeMedicationAntimalarial_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Antimalarial ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeMedicationExperimental == crf.dischargeMedicationExperimental_yes %}\n        obo:BFO_0000051 [\n          a vodan:Experimental_agent ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeMedicationExperimental_Specify %}\n          obo:BFO_0000051 [\n            a vodan:Which_experimental_agent ;\n            vodan:has_literal_value \"{{ crf.dischargeMedicationExperimental_Specify }}\" ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeMedicationExperimental == crf.dischargeMedicationExperimental_no %}\n        obo:BFO_0000051 [\n          a vodan:Experimental_agent ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeMedicationExperimental == crf.dischargeMedicationExperimental_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Experimental_agent ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeMedicationNSAID == crf.dischargeMedicationNSAID_yes %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_medication ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeMedicationNSAID_Specify %}\n          obo:BFO_0000051 [\n            a vodan:Which_NSAID ;\n            vodan:has_literal_value \"{{ crf.dischargeMedicationNSAID_Specify }}\" ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeMedicationNSAID == crf.dischargeMedicationNSAID_no %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_medication ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeMedicationNSAID == crf.dischargeMedicationNSAID_unknown %}\n        obo:BFO_0000051 [\n          a vodan:NSAID_medication ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {%- if crf.dischargeCare == crf.dischargeCare_open %}\n      # DISCHARGE: SUPPORTIVE CARE\n      obo:BFO_0000051 [\n        a vodan:Supportive_care ;\n        {%- if crf.dischargeCareICU == crf.dischargeCareICU_yes %}\n        obo:BFO_0000051 [\n          a vodan:ICU_admission ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeCareICUDuration %}\n          obo:BFO_0000051 [\n            a vodan:89fc2ab5_2f09_4c61_ba83_68112c54ac11 ; # duration in days\n            vodan:has_literal_value \"{{ crf.dischargeCareICUDuration }}\"^^xsd:integer ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeCareICU == crf.dischargeCareICU_no %}\n        obo:BFO_0000051 [\n          a vodan:ICU_admission ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeCareICU == crf.dischargeCareICU_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ICU_admission ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeCareICUAdmission == crf.dischargeCareICUAdmission_Known and crf.dischargeCareICUAdmission_Known_Date %}\n        obo:BFO_0000051 [\n          a vodan:Date_of_ICU_admission ;\n          vodan:has_literal_value \"{{ crf.dischargeCareICUAdmission_Known_Date }}\"^^xsd:date ;\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeCareICUDischarge == crf.dischargeCareICUDischarge_Known and crf.dischargeCareICUDischarge_Known_Date %}\n        obo:BFO_0000051 [\n          a vodan:Date_of_ICU_admission ;\n          vodan:has_literal_value \"{{ crf.dischargeCareICUDischarge_Known_Date }}\"^^xsd:date ;\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeCareOxygen == crf.dischargeCareOxygen_yes %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_therapy ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeCareOxygenDuration %}\n          obo:BFO_0000051 [\n            a vodan:89fc2ab5_2f09_4c61_ba83_68112c54ac11 ; # duration in days\n            vodan:has_literal_value \"{{ crf.dischargeCareOxygenDuration }}\"^^xsd:integer ;\n          ] ;\n          {%- endif %}\n          {%- if crf.dischargeCareOxygenFlow == crf.dischargeCareOxygenFlow_1to5 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:1-5_L_per_min ;\n          ] ;\n          {%- elif crf.dischargeCareOxygenFlow == crf.dischargeCareOxygenFlow_6to10 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:6-10_L_per_min ;\n          ] ;\n          {%- elif crf.dischargeCareOxygenFlow == crf.dischargeCareOxygenFlow_11to15 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:11-15_L_per_min ;\n          ] ;\n          {%- elif crf.dischargeCareOxygenFlow == crf.dischargeCareOxygenFlow_gt15 %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan:over_15_L_per_min ;\n          ] ;\n          {%- elif crf.dischargeCareOxygenFlow == crf.dischargeCareOxygenFlow_Unknown %}\n          obo:BFO_0000051 [\n            a vodan:02_flow ;\n            vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n          ] ;\n          {%- endif %}\n          {%- if crf.dischargeCareOxygenSource == crf.dischargeCareOxygenSource_Piped %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan:Piped ;\n          ] ;\n          {%- elif crf.dischargeCareOxygenSource == crf.dischargeCareOxygenSource_Cylinder %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan:Cylinder ;\n          ] ;\n          {%- elif crf.dischargeCareOxygenSource == crf.dischargeCareOxygenSource_Concentrator %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan:Concentrator ;\n          ] ;\n          {%- elif crf.dischargeCareOxygenSource == crf.dischargeCareOxygenSource_Unknown %}\n          obo:BFO_0000051 [\n            a vodan:Source_of_oxygen ;\n            vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n          ] ;\n          {%- endif %}\n          {%- if crf.dischargeCareOxygenInterface == crf.dischargeCareOxygenInterface_Prongs %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:Nasal_prongs ;\n          ] ;\n          {%- elif crf.dischargeCareOxygenInterface == crf.dischargeCareOxygenInterface_Cannula %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:HF_nasal_cannula ;\n          ] ;\n          {%- elif crf.dischargeCareOxygenInterface == crf.dischargeCareOxygenInterface_MaskWithout %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:Mask ;\n          ] ;\n          {%- elif crf.dischargeCareOxygenInterface == crf.dischargeCareOxygenInterface_MaskWith %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:Mask_with_reservoir ;\n          ] ;\n          {%- elif crf.dischargeCareOxygenInterface == crf.dischargeCareOxygenInterface_CPAP %}\n          obo:BFO_0000051 [\n            a vodan:Oxygen_interface ;\n            vodan:has_value vodan:CPAP_NIV_Mask ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeCareOxygen == crf.dischargeCareOxygen_no %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_therapy ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeCareOxygen == crf.dischargeCareOxygen_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Oxygen_therapy ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeCareNonInvasive == crf.dischargeCareNonInvasive_yes %}\n        obo:BFO_0000051 [\n          a vodan:Non-invasive_ventilation ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeCareNonInvasiveDuration %}\n          obo:BFO_0000051 [\n            a vodan:89fc2ab5_2f09_4c61_ba83_68112c54ac11 ; # duration in days\n            vodan:has_literal_value \"{{ crf.dischargeCareNonInvasiveDuration }}\"^^xsd:integer ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeCareNonInvasive == crf.dischargeCareNonInvasive_no %}\n        obo:BFO_0000051 [\n          a vodan:Non-invasive_ventilation ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeCareNonInvasive == crf.dischargeCareNonInvasive_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Non-invasive_ventilation ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeCareInvasive == crf.dischargeCareInvasive_yes %}\n        obo:BFO_0000051 [\n          a vodan:Invasive_ventilation ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeCareInvasiveDuration %}\n          obo:BFO_0000051 [\n            a vodan:89fc2ab5_2f09_4c61_ba83_68112c54ac11 ; # duration in days\n            vodan:has_literal_value \"{{ crf.dischargeCareInvasiveDuration }}\"^^xsd:integer ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeCareInvasive == crf.dischargeCareInvasive_no %}\n        obo:BFO_0000051 [\n          a vodan:Invasive_ventilation ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeCareInvasive == crf.dischargeCareInvasive_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Invasive_ventilation ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeCareECMO == crf.dischargeCareECMO_yes %}\n        obo:BFO_0000051 [\n          a vodan:ECMO_support ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeCareECMODuration %}\n          obo:BFO_0000051 [\n            a vodan:89fc2ab5_2f09_4c61_ba83_68112c54ac11 ; # duration in days\n            vodan:has_literal_value \"{{ crf.dischargeCareECMODuration }}\"^^xsd:integer ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeCareECMO == crf.dischargeCareECMO_no %}\n        obo:BFO_0000051 [\n          a vodan:ECMO_support ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeCareECMO == crf.dischargeCareECMO_unknown %}\n        obo:BFO_0000051 [\n          a vodan:ECMO_support ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeCareProne == crf.dischargeCareProne_yes %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeCareProneDuration %}\n          obo:BFO_0000051 [\n            a vodan:89fc2ab5_2f09_4c61_ba83_68112c54ac11 ; # duration in days\n            vodan:has_literal_value \"{{ crf.dischargeCareProneDuration }}\"^^xsd:integer ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeCareProne == crf.dischargeCareProne_no %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeCareProne == crf.dischargeCareProne_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeCareRRT == crf.dischargeCareRRT_yes %}\n        obo:BFO_0000051 [\n          a vodan:RRT_or_dialysis ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n        ] ;\n        {%- elif crf.dischargeCareRRT == crf.dischargeCareRRT_no %}\n        obo:BFO_0000051 [\n          a vodan:RRT_or_dialysis ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeCareRRT == crf.dischargeCareRRT_unknown %}\n        obo:BFO_0000051 [\n          a vodan:RRT_or_dialysis ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.dischargeCareInotropes == crf.dischargeCareInotropes_yes %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C49488 ;  # YES\n          {%- if crf.dischargeCareProneDuration %}\n          obo:BFO_0000051 [\n            a vodan:89fc2ab5_2f09_4c61_ba83_68112c54ac11 ; # duration in days\n            vodan:has_literal_value \"{{ crf.dischargeCareProneDuration }}\"^^xsd:integer ;\n          ] ;\n          {%- endif %}\n        ] ;\n        {%- elif crf.dischargeCareInotropes == crf.dischargeCareInotropes_no %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C49487 ;  # NO\n        ] ;\n        {%- elif crf.dischargeCareInotropes == crf.dischargeCareInotropes_unknown %}\n        obo:BFO_0000051 [\n          a vodan:Prone_position ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n      {%- if crf.outcome == crf.outcome_open %}\n      # DISCHARGE: OUTCOME\n      obo:BFO_0000051 [\n        a vodan:Outcome ;\n        {%- if crf.outcomeOutcome == crf.outcomeOutcome_Alive %}\n        obo:BFO_0000051 [\n          a vodan:outcome_question ;\n          vodan:has_value vodan_inst:Discharged_alive ;\n        ] ;\n        {%- if crf.outcomeOutcome_Alive_SelfCare == crf.outcomeOutcome_Alive_SelfCareSame %}\n        obo:BFO_0000051 [\n          a vodan:Ability_self_care ;\n          vodan:has_value vodan_inst:Same_as_before ;\n        ] ;\n        {%- elif crf.outcomeOutcome_Alive_SelfCare == crf.outcomeOutcome_Alive_SelfCareWorse %}\n        obo:BFO_0000051 [\n          a vodan:Ability_self_care ;\n          vodan:has_value vodan_inst:Worse ;\n        ] ;\n        {%- elif crf.outcomeOutcome_Alive_SelfCare == crf.outcomeOutcome_Alive_SelfCareBetter %}\n        obo:BFO_0000051 [\n          a vodan:Ability_self_care ;\n          vodan:has_value vodan_inst:Better ;\n        ] ;\n        {%- elif crf.outcomeOutcome_Alive_SelfCare == crf.outcomeOutcome_Alive_SelfCareUnknown %}\n        obo:BFO_0000051 [\n          a vodan:Ability_self_care ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- elif crf.outcomeOutcome == crf.outcomeOutcome_Hospitalized %}\n        obo:BFO_0000051 [\n          a vodan:outcome_question ;\n          vodan:has_value vodan_inst:Hospitalized ;\n        ] ;\n        {%- elif crf.outcomeOutcome == crf.outcomeOutcome_Transfer %}\n        obo:BFO_0000051 [\n          a vodan:outcome_question ;\n          vodan:has_value vodan_inst:Transfered ;\n        ] ;\n        {%- elif crf.outcomeOutcome == crf.outcomeOutcome_Death %}\n        obo:BFO_0000051 [\n          a vodan:outcome_question ;\n          vodan:has_value vodan_inst:Death ;\n        ] ;\n        {%- elif crf.outcomeOutcome == crf.outcomeOutcome_Palliative %}\n        obo:BFO_0000051 [\n          a vodan:outcome_question ;\n          vodan:has_value vodan_inst:Palliative_discharge ;\n        ] ;\n        {%- elif crf.outcomeOutcome == crf.outcomeOutcome_Unknown %}\n        obo:BFO_0000051 [\n          a vodan:outcome_question ;\n          vodan:has_value vodan_inst:C17998 ;  # UNKNOWN\n        ] ;\n        {%- endif %}\n        {%- if crf.outcomeOutcomeDate %}\n        obo:BFO_0000051 [\n          a vodan:outcome_date ;\n          vodan:has_literal_value \"{{ crf.outcomeOutcomeDate }}\"^^xsd:date ;\n        ] ;\n        {%- endif %}\n      ] ;\n      {%- endif %}\n    ] ;\n    {%- else %}\n    # MODULE 3 (ADMISSION) - no subsection opened => skipped\n    {%- endif %}\n    {%- if crf.pid %}\n    vodan:participant_id \"{{ crf.pid }}\" ;\n    {%- else %}\n    # Participant ID is not assigned\n    {%- endif %}\n    rdfs:comment \"This is WHO COVID-19 eCRF (RDF) - VODAN.\" .\n"
        }
    ],
    "assets" : [],
    "createdAt" : ISODate("2020-07-08T14:28:20.419Z")
})

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

db.getCollection('migrations').insertMany([
{
    "number" : 1,
    "name" : "Organizations Init",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.251935 UTC"
},
{
    "number" : 2,
    "name" : "Users Init",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.279602 UTC"
},
{
    "number" : 3,
    "name" : "Book References Init",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.298273 UTC"
},
{
    "number" : 4,
    "name" : "Metrics Init",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.355183 UTC"
},
{
    "number" : 5,
    "name" : "Levels Init",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.378879 UTC"
},
{
    "number" : 6,
    "name" : "Questionnaire Visibility",
    "description" : "Questionnaire now can be private and public",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.403023 UTC"
},
{
    "number" : 7,
    "name" : "User IsActive",
    "description" : "Rename 'isActive' field to 'active' in User Entity",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.407417 UTC"
},
{
    "number" : 8,
    "name" : "Public Questionnaire Visibility",
    "description" : "Add new fields to Public Questionnaire",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.411771 UTC"
},
{
    "number" : 9,
    "name" : "Book References Markdown",
    "description" : "",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.416212 UTC"
},
{
    "number" : 10,
    "name" : "Branch Owner and Timestamps",
    "description" : "Knowledge Model in Editor has its owner and timestamps",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.457972 UTC"
},
{
    "number" : 11,
    "name" : "Update DATASTEWARD Perms",
    "description" : "Add 'PM_WRITE_PERM' to DATASTEWARD permissions",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.463923 UTC"
},
{
    "number" : 12,
    "name" : "Erase questionnaire replies",
    "description" : "Due to change replies structure, it's necessary to erase all save replies",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.468887 UTC"
},
{
    "number" : 13,
    "name" : "Questionnaire SelectedTagUuids",
    "description" : "Questionnaire can now have tags",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.474455 UTC"
},
{
    "number" : 14,
    "name" : "Purge database",
    "description" : "Purge all packages, branches and questionnaires",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.479576 UTC"
},
{
    "number" : 15,
    "name" : "Remove cached Knowledge Model",
    "description" : "Remove cached knowledge model from branches, questionnaires and migrations; Remove public questionnaire due to new public package",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.487424 UTC"
},
{
    "number" : 16,
    "name" : "Metamodel Version",
    "description" : "Add metamodel version to branch and kmMigrations",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.499707 UTC"
},
{
    "number" : 17,
    "name" : "Questionnaire Accessibility",
    "description" : "Basic Questionnaire Visibility changed to more sophisticated Accessibility",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.506119 UTC"
},
{
    "number" : 18,
    "name" : "Package Readme and CreatedAt",
    "description" : "Add readme and createdAt field to Package entity",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.513278 UTC"
},
{
    "number" : 19,
    "name" : "BSON HashMap",
    "description" : "Change BSON mapping of HashMap",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.519471 UTC"
},
{
    "number" : 20,
    "name" : "Package License",
    "description" : "Add license field to packages",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.529805 UTC"
},
{
    "number" : 21,
    "name" : "Questionnaire Labels",
    "description" : "Add labels field to questionnaire",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.535092 UTC"
},
{
    "number" : 22,
    "name" : "ForkOfPackageId and MergeCheckpointPackageId",
    "description" : "Rename and move to package - ForkOfPackageId and MergeCheckpointPackageId",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.539354 UTC"
},
{
    "number" : 23,
    "name" : "Remove item title",
    "description" : "Rename itemName from questionnaire's replies",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.547491 UTC"
},
{
    "number" : 24,
    "name" : "User name and surname",
    "description" : "Rename name and surname to firstName and lastName",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.553483 UTC"
},
{
    "number" : 25,
    "name" : "Document Preview and FormatUuid",
    "description" : "Add new 'durability' and 'questionnaireRepliesHash' fields to Document; Convert 'format' to 'formatUuid'",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.558006 UTC"
},
{
    "number" : 26,
    "name" : "Add Application Configs",
    "description" : "Add config into DB and add CFG_PERM to admin users",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.573446 UTC"
},
{
    "number" : 27,
    "name" : "Submission",
    "description" : "Add config for submission into DB and add SUBM_PERM to all users",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.611144 UTC"
},
{
    "number" : 28,
    "name" : "Questionnaire Creator",
    "description" : "Add creator to questionnaire",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.618002 UTC"
},
{
    "number" : 29,
    "name" : "Add DB Indexes",
    "description" : "Add indexes for collection",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.622717 UTC"
},
{
    "number" : 30,
    "name" : "BSON Generic",
    "description" : "Make (de)serialization generic",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.81475 UTC"
},
{
    "number" : 31,
    "name" : "User ImageURL",
    "description" : "Add 'imageUrl' to User",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.821462 UTC"
},
{
    "number" : 32,
    "name" : "AppConfig Organization Description",
    "description" : "Add 'description' to AppConfig Organization",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.825686 UTC"
},
{
    "number" : 33,
    "name" : "Remove public questionnaire",
    "description" : "Remove publicPackages coll and publicQuestionnaire from AppConfig",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.830394 UTC"
},
{
    "number" : 34,
    "name" : "AppConfig Recommended TemplateUuid",
    "description" : "Add 'recommendedTemplateUuid' to AppConfig",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.836706 UTC"
},
{
    "number" : 35,
    "name" : "Questionnaire Visibility",
    "description" : "Rename questionnaire 'accesibility' to 'visibility'",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.841584 UTC"
},
{
    "number" : 36,
    "name" : "New Templates",
    "description" : "Enhance appConfigs and refactor templates",
    "state" : "Finished",
    "createdAt" : "2020-07-08 15:50:55.938041565 UTC"
}
])

db = db.getSiblingDB('fdp')

db.getCollection("apiKey").insert({
    "uuid" : "a1c00673-24c5-4e0a-bdbe-22e961ee7548",
    "userUuid" : "7e64818d-6276-46fb-8bb1-732e6e09f7e9",
    "token" : "a274793046e34a219fd0ea6362fcca61a001500b71724f4c973a017031653c20",
    "_class" : "nl.dtls.fairdatapoint.entity.apikey.ApiKey"
})
