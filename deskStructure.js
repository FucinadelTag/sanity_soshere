import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
  "settingsSito"
].includes(listItem.getId())

export default () =>
    S.list()
        .title("Contenuti")
        .items([
            ...S.documentTypeListItems()
            .filter(hiddenDocTypes),
            S.listItem()
            .title("Settings")
            .child(
                S.editor()
                .id('settingsSito')
                .schemaType("settingsSito")
                .documentId("global-settings")
            )

        ]);
