db.getCollection('appConfigs').insert(
{
    "organization" : {
        "organizationId" : "global",
        "name" : "Organization",
        "affiliations" : [],
        "description" : ""
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
    "knowledgeModelRegistry" : {
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
            "defaultValue" : "PrivateQuestionnaire"
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
                "id" : "fdp",
                "name" : "FAIR Data Point",
                "description" : "",
                "props" : [],
                "supportedFormats" : [
                    {
                        "templateUuid" : "43a3fdd1-8535-42e0-81a7-5edbff296e65",
                        "formatUuid" : "d3e98eb6-344d-481f-8e37-6a67b6cd1ad2"
                    }
                ],
                "request" : {
                    "method" : "POST",
                    // (!) change to tripleStoreUrl
                    // "url" : "<triple-store-url>",
                    "url" : "https://store.vodan.fairdatapoint.org/",
                    "headers" : {
                        "Authorization" : "Bearer a274793046e34a219fd0ea6362fcca61a001500b71724f4c973a017031653c20"
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
        "recommendedTemplateUuid" : null
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
        "SUBM_PERM"
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
    "name" : "AppConfig QtnVisibility - Default Value",
    "description" : "Add 'defaultValue' to Qtn Visibility AppConfig",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.849041 UTC"
},
{
    "number" : 37,
    "name" : "AppConfig QtnVisibility - Summary Report",
    "description" : "Add 'summaryReport' to Qtn AppConfig",
    "state" : "Finished",
    "createdAt" : "2020-06-12 14:01:20.853859 UTC"
}
])

db = db.getSiblingDB('fdp')

db.getCollection("apiKey").insert({
    "uuid" : "a1c00673-24c5-4e0a-bdbe-22e961ee7548",
    "userUuid" : "7e64818d-6276-46fb-8bb1-732e6e09f7e9",
    "token" : "a274793046e34a219fd0ea6362fcca61a001500b71724f4c973a017031653c20",
    "_class" : "nl.dtls.fairdatapoint.entity.apikey.ApiKey"
})
