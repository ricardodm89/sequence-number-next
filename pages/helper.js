export const removeSpecialCharactersMask = (value) => {
    return value.replace(/[&@/\\#,+()$~%.!'":;*?<>{}[\]]/g, "");
};