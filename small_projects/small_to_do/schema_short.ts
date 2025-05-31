{
  "__schema": {
    "types": [
      {
        "kind": "SCALAR",
        "name": "BigFloat",
        "fields": null,
        "__typename": "BigFloat"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BigFloatFilter",
        "fields": null,
        "__typename": "BigFloatFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BigFloatListFilter",
        "fields": null,
        "__typename": "BigFloatListFilter"
      },
      {
        "kind": "SCALAR",
        "name": "BigInt",
        "fields": null,
        "__typename": "BigInt"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BigIntFilter",
        "fields": null,
        "__typename": "BigIntFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BigIntListFilter",
        "fields": null,
        "__typename": "BigIntListFilter"
      },
      {
        "kind": "SCALAR",
        "name": "Boolean",
        "fields": null,
        "__typename": "Boolean"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BooleanFilter",
        "fields": null,
        "__typename": "BooleanFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BooleanListFilter",
        "fields": null,
        "__typename": "BooleanListFilter"
      },
      {
        "kind": "SCALAR",
        "name": "Cursor",
        "fields": null,
        "__typename": "Cursor"
      },
      {
        "kind": "SCALAR",
        "name": "Date",
        "fields": null,
        "__typename": "Date"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateFilter",
        "fields": null,
        "__typename": "DateFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateListFilter",
        "fields": null,
        "__typename": "DateListFilter"
      },
      {
        "kind": "SCALAR",
        "name": "Datetime",
        "fields": null,
        "__typename": "Datetime"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DatetimeFilter",
        "fields": null,
        "__typename": "DatetimeFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DatetimeListFilter",
        "fields": null,
        "__typename": "DatetimeListFilter"
      },
      {
        "kind": "ENUM",
        "name": "FilterIs",
        "fields": null,
        "__typename": "FilterIs"
      },
      {
        "kind": "SCALAR",
        "name": "Float",
        "fields": null,
        "__typename": "Float"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FloatFilter",
        "fields": null,
        "__typename": "FloatFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FloatListFilter",
        "fields": null,
        "__typename": "FloatListFilter"
      },
      {
        "kind": "SCALAR",
        "name": "ID",
        "fields": null,
        "__typename": "ID"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IDFilter",
        "fields": null,
        "__typename": "IDFilter"
      },
      {
        "kind": "SCALAR",
        "name": "Int",
        "fields": null,
        "__typename": "Int"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IntFilter",
        "fields": null,
        "__typename": "IntFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IntListFilter",
        "fields": null,
        "__typename": "IntListFilter"
      },
      {
        "kind": "SCALAR",
        "name": "JSON",
        "fields": null,
        "__typename": "JSON"
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "deleteFromaudit_log_entriesCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "deleteFromaudit_log_entriesCollection",
            "description": "Deletes zero or more records from the `audit_log_entries` collection"
          },
          {
            "name": "deleteFrominstancesCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "deleteFrominstancesCollection",
            "description": "Deletes zero or more records from the `instances` collection"
          },
          {
            "name": "deleteFromlist_itemCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "deleteFromlist_itemCollection",
            "description": "Deletes zero or more records from the `list_item` collection"
          },
          {
            "name": "deleteFromrefresh_tokensCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "deleteFromrefresh_tokensCollection",
            "description": "Deletes zero or more records from the `refresh_tokens` collection"
          },
          {
            "name": "deleteFromschema_migrationsCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "deleteFromschema_migrationsCollection",
            "description": "Deletes zero or more records from the `schema_migrations` collection"
          },
          {
            "name": "deleteFromtodo_listCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "deleteFromtodo_listCollection",
            "description": "Deletes zero or more records from the `todo_list` collection"
          },
          {
            "name": "deleteFromusersCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "deleteFromusersCollection",
            "description": "Deletes zero or more records from the `users` collection"
          },
          {
            "name": "insertIntoaudit_log_entriesCollection",
            "type": {
              "kind": "OBJECT",
              "name": "audit_log_entriesInsertResponse",
              "__typename": "audit_log_entriesInsertResponse"
            },
            "__typename": "insertIntoaudit_log_entriesCollection",
            "description": "Adds one or more `audit_log_entries` records to the collection"
          },
          {
            "name": "insertIntoinstancesCollection",
            "type": {
              "kind": "OBJECT",
              "name": "instancesInsertResponse",
              "__typename": "instancesInsertResponse"
            },
            "__typename": "insertIntoinstancesCollection",
            "description": "Adds one or more `instances` records to the collection"
          },
          {
            "name": "insertIntolist_itemCollection",
            "type": {
              "kind": "OBJECT",
              "name": "list_itemInsertResponse",
              "__typename": "list_itemInsertResponse"
            },
            "__typename": "insertIntolist_itemCollection",
            "description": "Adds one or more `list_item` records to the collection"
          },
          {
            "name": "insertIntorefresh_tokensCollection",
            "type": {
              "kind": "OBJECT",
              "name": "refresh_tokensInsertResponse",
              "__typename": "refresh_tokensInsertResponse"
            },
            "__typename": "insertIntorefresh_tokensCollection",
            "description": "Adds one or more `refresh_tokens` records to the collection"
          },
          {
            "name": "insertIntoschema_migrationsCollection",
            "type": {
              "kind": "OBJECT",
              "name": "schema_migrationsInsertResponse",
              "__typename": "schema_migrationsInsertResponse"
            },
            "__typename": "insertIntoschema_migrationsCollection",
            "description": "Adds one or more `schema_migrations` records to the collection"
          },
          {
            "name": "insertIntotodo_listCollection",
            "type": {
              "kind": "OBJECT",
              "name": "todo_listInsertResponse",
              "__typename": "todo_listInsertResponse"
            },
            "__typename": "insertIntotodo_listCollection",
            "description": "Adds one or more `todo_list` records to the collection"
          },
          {
            "name": "insertIntousersCollection",
            "type": {
              "kind": "OBJECT",
              "name": "usersInsertResponse",
              "__typename": "usersInsertResponse"
            },
            "__typename": "insertIntousersCollection",
            "description": "Adds one or more `users` records to the collection"
          },
          {
            "name": "updateaudit_log_entriesCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "updateaudit_log_entriesCollection",
            "description": "Updates zero or more records in the `audit_log_entries` collection"
          },
          {
            "name": "updateinstancesCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "updateinstancesCollection",
            "description": "Updates zero or more records in the `instances` collection"
          },
          {
            "name": "updatelist_itemCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "updatelist_itemCollection",
            "description": "Updates zero or more records in the `list_item` collection"
          },
          {
            "name": "updaterefresh_tokensCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "updaterefresh_tokensCollection",
            "description": "Updates zero or more records in the `refresh_tokens` collection"
          },
          {
            "name": "updateschema_migrationsCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "updateschema_migrationsCollection",
            "description": "Updates zero or more records in the `schema_migrations` collection"
          },
          {
            "name": "updatetodo_listCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "updatetodo_listCollection",
            "description": "Updates zero or more records in the `todo_list` collection"
          },
          {
            "name": "updateusersCollection",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "updateusersCollection",
            "description": "Updates zero or more records in the `users` collection"
          }
        ],
        "__typename": "Mutation"
      },
      {
        "kind": "INTERFACE",
        "name": "Node",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "nodeId",
            "description": "Retrieves a record by `ID`"
          }
        ],
        "__typename": "Node"
      },
      {
        "kind": "SCALAR",
        "name": "Opaque",
        "fields": null,
        "__typename": "Opaque"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "OpaqueFilter",
        "fields": null,
        "__typename": "OpaqueFilter"
      },
      {
        "kind": "ENUM",
        "name": "OrderByDirection",
        "fields": null,
        "__typename": "OrderByDirection"
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "fields": [
          {
            "name": "endCursor",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "endCursor",
            "description": null
          },
          {
            "name": "hasNextPage",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "hasNextPage",
            "description": null
          },
          {
            "name": "hasPreviousPage",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "hasPreviousPage",
            "description": null
          },
          {
            "name": "startCursor",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "startCursor",
            "description": null
          }
        ],
        "__typename": "PageInfo"
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "audit_log_entriesCollection",
            "type": {
              "kind": "OBJECT",
              "name": "audit_log_entriesConnection",
              "__typename": "audit_log_entriesConnection"
            },
            "__typename": "audit_log_entriesCollection",
            "description": "A pagable collection of type `audit_log_entries`"
          },
          {
            "name": "instancesCollection",
            "type": {
              "kind": "OBJECT",
              "name": "instancesConnection",
              "__typename": "instancesConnection"
            },
            "__typename": "instancesCollection",
            "description": "A pagable collection of type `instances`"
          },
          {
            "name": "list_itemCollection",
            "type": {
              "kind": "OBJECT",
              "name": "list_itemConnection",
              "__typename": "list_itemConnection"
            },
            "__typename": "list_itemCollection",
            "description": "A pagable collection of type `list_item`"
          },
          {
            "name": "node",
            "type": {
              "kind": "INTERFACE",
              "name": "Node",
              "__typename": "Node"
            },
            "__typename": "node",
            "description": "Retrieve a record by its `ID`"
          },
          {
            "name": "refresh_tokensCollection",
            "type": {
              "kind": "OBJECT",
              "name": "refresh_tokensConnection",
              "__typename": "refresh_tokensConnection"
            },
            "__typename": "refresh_tokensCollection",
            "description": "A pagable collection of type `refresh_tokens`"
          },
          {
            "name": "schema_migrationsCollection",
            "type": {
              "kind": "OBJECT",
              "name": "schema_migrationsConnection",
              "__typename": "schema_migrationsConnection"
            },
            "__typename": "schema_migrationsCollection",
            "description": "A pagable collection of type `schema_migrations`"
          },
          {
            "name": "todo_listCollection",
            "type": {
              "kind": "OBJECT",
              "name": "todo_listConnection",
              "__typename": "todo_listConnection"
            },
            "__typename": "todo_listCollection",
            "description": "A pagable collection of type `todo_list`"
          },
          {
            "name": "usersCollection",
            "type": {
              "kind": "OBJECT",
              "name": "usersConnection",
              "__typename": "usersConnection"
            },
            "__typename": "usersCollection",
            "description": "A pagable collection of type `users`"
          }
        ],
        "__typename": "Query"
      },
      {
        "kind": "SCALAR",
        "name": "String",
        "fields": null,
        "__typename": "String"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringFilter",
        "fields": null,
        "__typename": "StringFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringListFilter",
        "fields": null,
        "__typename": "StringListFilter"
      },
      {
        "kind": "SCALAR",
        "name": "Time",
        "fields": null,
        "__typename": "Time"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TimeFilter",
        "fields": null,
        "__typename": "TimeFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TimeListFilter",
        "fields": null,
        "__typename": "TimeListFilter"
      },
      {
        "kind": "SCALAR",
        "name": "UUID",
        "fields": null,
        "__typename": "UUID"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UUIDFilter",
        "fields": null,
        "__typename": "UUIDFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UUIDListFilter",
        "fields": null,
        "__typename": "UUIDListFilter"
      },
      {
        "kind": "OBJECT",
        "name": "__Directive",
        "fields": [
          {
            "name": "args",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "args",
            "description": null
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "description",
            "description": null
          },
          {
            "name": "isRepeatable",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "isRepeatable",
            "description": null
          },
          {
            "name": "locations",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "locations",
            "description": null
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "name",
            "description": null
          }
        ],
        "__typename": "__Directive"
      },
      {
        "kind": "ENUM",
        "name": "__DirectiveLocation",
        "fields": null,
        "__typename": "__DirectiveLocation"
      },
      {
        "kind": "OBJECT",
        "name": "__EnumValue",
        "fields": [
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "deprecationReason",
            "description": null
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "description",
            "description": null
          },
          {
            "name": "isDeprecated",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "isDeprecated",
            "description": null
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "name",
            "description": null
          }
        ],
        "__typename": "__EnumValue"
      },
      {
        "kind": "OBJECT",
        "name": "__Field",
        "fields": [
          {
            "name": "args",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "args",
            "description": null
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "deprecationReason",
            "description": null
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "description",
            "description": null
          },
          {
            "name": "isDeprecated",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "isDeprecated",
            "description": null
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "name",
            "description": null
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "type",
            "description": null
          }
        ],
        "__typename": "__Field"
      },
      {
        "kind": "OBJECT",
        "name": "__InputValue",
        "fields": [
          {
            "name": "defaultValue",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "defaultValue",
            "description": "A GraphQL-formatted string representing the default value for this input value."
          },
          {
            "name": "deprecationReason",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "deprecationReason",
            "description": null
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "description",
            "description": null
          },
          {
            "name": "isDeprecated",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "isDeprecated",
            "description": null
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "name",
            "description": null
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "type",
            "description": null
          }
        ],
        "__typename": "__InputValue"
      },
      {
        "kind": "OBJECT",
        "name": "__Schema",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "description",
            "description": null
          },
          {
            "name": "directives",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "directives",
            "description": "A list of all directives supported by this server."
          },
          {
            "name": "mutationType",
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "__typename": "__Type"
            },
            "__typename": "mutationType",
            "description": "If this server supports mutation, the type that mutation operations will be rooted at."
          },
          {
            "name": "queryType",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "queryType",
            "description": "The type that query operations will be rooted at."
          },
          {
            "name": "subscriptionType",
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "__typename": "__Type"
            },
            "__typename": "subscriptionType",
            "description": "If this server support subscription, the type that subscription operations will be rooted at."
          },
          {
            "name": "types",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "types",
            "description": "A list of all types supported by this server."
          }
        ],
        "__typename": "__Schema"
      },
      {
        "kind": "OBJECT",
        "name": "__Type",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "description",
            "description": null
          },
          {
            "name": "enumValues",
            "type": {
              "kind": "LIST",
              "name": null,
              "__typename": null
            },
            "__typename": "enumValues",
            "description": null
          },
          {
            "name": "fields",
            "type": {
              "kind": "LIST",
              "name": null,
              "__typename": null
            },
            "__typename": "fields",
            "description": null
          },
          {
            "name": "inputFields",
            "type": {
              "kind": "LIST",
              "name": null,
              "__typename": null
            },
            "__typename": "inputFields",
            "description": null
          },
          {
            "name": "interfaces",
            "type": {
              "kind": "LIST",
              "name": null,
              "__typename": null
            },
            "__typename": "interfaces",
            "description": null
          },
          {
            "name": "kind",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "kind",
            "description": null
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "name",
            "description": null
          },
          {
            "name": "ofType",
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "__typename": "__Type"
            },
            "__typename": "ofType",
            "description": null
          },
          {
            "name": "possibleTypes",
            "type": {
              "kind": "LIST",
              "name": null,
              "__typename": null
            },
            "__typename": "possibleTypes",
            "description": null
          },
          {
            "name": "specifiedByURL",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "specifiedByURL",
            "description": null
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "ENUM",
        "name": "__TypeKind",
        "fields": null,
        "__typename": "__TypeKind"
      },
      {
        "kind": "OBJECT",
        "name": "audit_log_entries",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "nodeId",
            "description": "Globally Unique Record Identifier"
          },
          {
            "name": "instance_id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID",
              "__typename": "UUID"
            },
            "__typename": "instance_id",
            "description": null
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "id",
            "description": null
          },
          {
            "name": "payload",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "__typename": "JSON"
            },
            "__typename": "payload",
            "description": null
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "created_at",
            "description": null
          }
        ],
        "__typename": "audit_log_entries"
      },
      {
        "kind": "OBJECT",
        "name": "audit_log_entriesConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "edges",
            "description": null
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "pageInfo",
            "description": null
          }
        ],
        "__typename": "audit_log_entriesConnection"
      },
      {
        "kind": "OBJECT",
        "name": "audit_log_entriesDeleteResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "audit_log_entriesDeleteResponse"
      },
      {
        "kind": "OBJECT",
        "name": "audit_log_entriesEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "cursor",
            "description": null
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "node",
            "description": null
          }
        ],
        "__typename": "audit_log_entriesEdge"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "audit_log_entriesFilter",
        "fields": null,
        "__typename": "audit_log_entriesFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "audit_log_entriesInsertInput",
        "fields": null,
        "__typename": "audit_log_entriesInsertInput"
      },
      {
        "kind": "OBJECT",
        "name": "audit_log_entriesInsertResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "audit_log_entriesInsertResponse"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "audit_log_entriesOrderBy",
        "fields": null,
        "__typename": "audit_log_entriesOrderBy"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "audit_log_entriesUpdateInput",
        "fields": null,
        "__typename": "audit_log_entriesUpdateInput"
      },
      {
        "kind": "OBJECT",
        "name": "audit_log_entriesUpdateResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "audit_log_entriesUpdateResponse"
      },
      {
        "kind": "OBJECT",
        "name": "instances",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "nodeId",
            "description": "Globally Unique Record Identifier"
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "id",
            "description": null
          },
          {
            "name": "uuid",
            "type": {
              "kind": "SCALAR",
              "name": "UUID",
              "__typename": "UUID"
            },
            "__typename": "uuid",
            "description": null
          },
          {
            "name": "raw_base_config",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "raw_base_config",
            "description": null
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "created_at",
            "description": null
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "updated_at",
            "description": null
          }
        ],
        "__typename": "instances"
      },
      {
        "kind": "OBJECT",
        "name": "instancesConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "edges",
            "description": null
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "pageInfo",
            "description": null
          }
        ],
        "__typename": "instancesConnection"
      },
      {
        "kind": "OBJECT",
        "name": "instancesDeleteResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "instancesDeleteResponse"
      },
      {
        "kind": "OBJECT",
        "name": "instancesEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "cursor",
            "description": null
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "node",
            "description": null
          }
        ],
        "__typename": "instancesEdge"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "instancesFilter",
        "fields": null,
        "__typename": "instancesFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "instancesInsertInput",
        "fields": null,
        "__typename": "instancesInsertInput"
      },
      {
        "kind": "OBJECT",
        "name": "instancesInsertResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "instancesInsertResponse"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "instancesOrderBy",
        "fields": null,
        "__typename": "instancesOrderBy"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "instancesUpdateInput",
        "fields": null,
        "__typename": "instancesUpdateInput"
      },
      {
        "kind": "OBJECT",
        "name": "instancesUpdateResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "instancesUpdateResponse"
      },
      {
        "kind": "OBJECT",
        "name": "list_item",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "nodeId",
            "description": "Globally Unique Record Identifier"
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "id",
            "description": null
          },
          {
            "name": "todo_list_id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "todo_list_id",
            "description": null
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "name",
            "description": null
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "description",
            "description": null
          },
          {
            "name": "done",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "__typename": "Boolean"
            },
            "__typename": "done",
            "description": null
          },
          {
            "name": "due_date",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "__typename": "Date"
            },
            "__typename": "due_date",
            "description": null
          },
          {
            "name": "todo_list",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "todo_list",
            "description": null
          }
        ],
        "__typename": "list_item"
      },
      {
        "kind": "OBJECT",
        "name": "list_itemConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "edges",
            "description": null
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "pageInfo",
            "description": null
          }
        ],
        "__typename": "list_itemConnection"
      },
      {
        "kind": "OBJECT",
        "name": "list_itemDeleteResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "list_itemDeleteResponse"
      },
      {
        "kind": "OBJECT",
        "name": "list_itemEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "cursor",
            "description": null
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "node",
            "description": null
          }
        ],
        "__typename": "list_itemEdge"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "list_itemFilter",
        "fields": null,
        "__typename": "list_itemFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "list_itemInsertInput",
        "fields": null,
        "__typename": "list_itemInsertInput"
      },
      {
        "kind": "OBJECT",
        "name": "list_itemInsertResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "list_itemInsertResponse"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "list_itemOrderBy",
        "fields": null,
        "__typename": "list_itemOrderBy"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "list_itemUpdateInput",
        "fields": null,
        "__typename": "list_itemUpdateInput"
      },
      {
        "kind": "OBJECT",
        "name": "list_itemUpdateResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "list_itemUpdateResponse"
      },
      {
        "kind": "OBJECT",
        "name": "refresh_tokens",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "nodeId",
            "description": "Globally Unique Record Identifier"
          },
          {
            "name": "instance_id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID",
              "__typename": "UUID"
            },
            "__typename": "instance_id",
            "description": null
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "id",
            "description": null
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "token",
            "description": null
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "user_id",
            "description": null
          },
          {
            "name": "revoked",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "__typename": "Boolean"
            },
            "__typename": "revoked",
            "description": null
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "created_at",
            "description": null
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "updated_at",
            "description": null
          }
        ],
        "__typename": "refresh_tokens"
      },
      {
        "kind": "OBJECT",
        "name": "refresh_tokensConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "edges",
            "description": null
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "pageInfo",
            "description": null
          }
        ],
        "__typename": "refresh_tokensConnection"
      },
      {
        "kind": "OBJECT",
        "name": "refresh_tokensDeleteResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "refresh_tokensDeleteResponse"
      },
      {
        "kind": "OBJECT",
        "name": "refresh_tokensEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "cursor",
            "description": null
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "node",
            "description": null
          }
        ],
        "__typename": "refresh_tokensEdge"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "refresh_tokensFilter",
        "fields": null,
        "__typename": "refresh_tokensFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "refresh_tokensInsertInput",
        "fields": null,
        "__typename": "refresh_tokensInsertInput"
      },
      {
        "kind": "OBJECT",
        "name": "refresh_tokensInsertResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "refresh_tokensInsertResponse"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "refresh_tokensOrderBy",
        "fields": null,
        "__typename": "refresh_tokensOrderBy"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "refresh_tokensUpdateInput",
        "fields": null,
        "__typename": "refresh_tokensUpdateInput"
      },
      {
        "kind": "OBJECT",
        "name": "refresh_tokensUpdateResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "refresh_tokensUpdateResponse"
      },
      {
        "kind": "OBJECT",
        "name": "schema_migrations",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "nodeId",
            "description": "Globally Unique Record Identifier"
          },
          {
            "name": "version",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "version",
            "description": null
          }
        ],
        "__typename": "schema_migrations"
      },
      {
        "kind": "OBJECT",
        "name": "schema_migrationsConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "edges",
            "description": null
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "pageInfo",
            "description": null
          }
        ],
        "__typename": "schema_migrationsConnection"
      },
      {
        "kind": "OBJECT",
        "name": "schema_migrationsDeleteResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "schema_migrationsDeleteResponse"
      },
      {
        "kind": "OBJECT",
        "name": "schema_migrationsEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "cursor",
            "description": null
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "node",
            "description": null
          }
        ],
        "__typename": "schema_migrationsEdge"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "schema_migrationsFilter",
        "fields": null,
        "__typename": "schema_migrationsFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "schema_migrationsInsertInput",
        "fields": null,
        "__typename": "schema_migrationsInsertInput"
      },
      {
        "kind": "OBJECT",
        "name": "schema_migrationsInsertResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "schema_migrationsInsertResponse"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "schema_migrationsOrderBy",
        "fields": null,
        "__typename": "schema_migrationsOrderBy"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "schema_migrationsUpdateInput",
        "fields": null,
        "__typename": "schema_migrationsUpdateInput"
      },
      {
        "kind": "OBJECT",
        "name": "schema_migrationsUpdateResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "schema_migrationsUpdateResponse"
      },
      {
        "kind": "OBJECT",
        "name": "todo_list",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "nodeId",
            "description": "Globally Unique Record Identifier"
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "id",
            "description": null
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "name",
            "description": null
          },
          {
            "name": "list_itemCollection",
            "type": {
              "kind": "OBJECT",
              "name": "list_itemConnection",
              "__typename": "list_itemConnection"
            },
            "__typename": "list_itemCollection",
            "description": null
          }
        ],
        "__typename": "todo_list"
      },
      {
        "kind": "OBJECT",
        "name": "todo_listConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "edges",
            "description": null
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "pageInfo",
            "description": null
          }
        ],
        "__typename": "todo_listConnection"
      },
      {
        "kind": "OBJECT",
        "name": "todo_listDeleteResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "todo_listDeleteResponse"
      },
      {
        "kind": "OBJECT",
        "name": "todo_listEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "cursor",
            "description": null
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "node",
            "description": null
          }
        ],
        "__typename": "todo_listEdge"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "todo_listFilter",
        "fields": null,
        "__typename": "todo_listFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "todo_listInsertInput",
        "fields": null,
        "__typename": "todo_listInsertInput"
      },
      {
        "kind": "OBJECT",
        "name": "todo_listInsertResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "todo_listInsertResponse"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "todo_listOrderBy",
        "fields": null,
        "__typename": "todo_listOrderBy"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "todo_listUpdateInput",
        "fields": null,
        "__typename": "todo_listUpdateInput"
      },
      {
        "kind": "OBJECT",
        "name": "todo_listUpdateResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "todo_listUpdateResponse"
      },
      {
        "kind": "OBJECT",
        "name": "users",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "nodeId",
            "description": "Globally Unique Record Identifier"
          },
          {
            "name": "instance_id",
            "type": {
              "kind": "SCALAR",
              "name": "UUID",
              "__typename": "UUID"
            },
            "__typename": "instance_id",
            "description": null
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "id",
            "description": null
          },
          {
            "name": "aud",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "aud",
            "description": null
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "role",
            "description": null
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "email",
            "description": null
          },
          {
            "name": "encrypted_password",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "encrypted_password",
            "description": null
          },
          {
            "name": "confirmed_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "confirmed_at",
            "description": null
          },
          {
            "name": "invited_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "invited_at",
            "description": null
          },
          {
            "name": "confirmation_token",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "confirmation_token",
            "description": null
          },
          {
            "name": "confirmation_sent_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "confirmation_sent_at",
            "description": null
          },
          {
            "name": "recovery_token",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "recovery_token",
            "description": null
          },
          {
            "name": "recovery_sent_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "recovery_sent_at",
            "description": null
          },
          {
            "name": "email_change_token",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "email_change_token",
            "description": null
          },
          {
            "name": "email_change",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "__typename": "String"
            },
            "__typename": "email_change",
            "description": null
          },
          {
            "name": "email_change_sent_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "email_change_sent_at",
            "description": null
          },
          {
            "name": "last_sign_in_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "last_sign_in_at",
            "description": null
          },
          {
            "name": "raw_app_meta_data",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "__typename": "JSON"
            },
            "__typename": "raw_app_meta_data",
            "description": null
          },
          {
            "name": "raw_user_meta_data",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "__typename": "JSON"
            },
            "__typename": "raw_user_meta_data",
            "description": null
          },
          {
            "name": "is_super_admin",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "__typename": "Boolean"
            },
            "__typename": "is_super_admin",
            "description": null
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "created_at",
            "description": null
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Datetime",
              "__typename": "Datetime"
            },
            "__typename": "updated_at",
            "description": null
          }
        ],
        "__typename": "users"
      },
      {
        "kind": "OBJECT",
        "name": "usersConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "edges",
            "description": null
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "pageInfo",
            "description": null
          }
        ],
        "__typename": "usersConnection"
      },
      {
        "kind": "OBJECT",
        "name": "usersDeleteResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "usersDeleteResponse"
      },
      {
        "kind": "OBJECT",
        "name": "usersEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "cursor",
            "description": null
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "node",
            "description": null
          }
        ],
        "__typename": "usersEdge"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "usersFilter",
        "fields": null,
        "__typename": "usersFilter"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "usersInsertInput",
        "fields": null,
        "__typename": "usersInsertInput"
      },
      {
        "kind": "OBJECT",
        "name": "usersInsertResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "usersInsertResponse"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "usersOrderBy",
        "fields": null,
        "__typename": "usersOrderBy"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "usersUpdateInput",
        "fields": null,
        "__typename": "usersUpdateInput"
      },
      {
        "kind": "OBJECT",
        "name": "usersUpdateResponse",
        "fields": [
          {
            "name": "affectedCount",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "affectedCount",
            "description": "Count of the records impacted by the mutation"
          },
          {
            "name": "records",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "__typename": null
            },
            "__typename": "records",
            "description": "Array of records impacted by the mutation"
          }
        ],
        "__typename": "usersUpdateResponse"
      }
    ],
    "__typename": "__schema"
  }
}