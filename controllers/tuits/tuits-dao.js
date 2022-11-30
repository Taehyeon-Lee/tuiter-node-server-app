import tuitsModel from "./tuits-model.js";

export const createTuit = async (tuit) => {
    const actualTuit = await tuitsModel.create(tuit);
    return actualTuit;
}
export const findTuits = async () => {
    const allTuits = await tuitsModel.find();
    return allTuits;
}
export const updateTuit = async (tid, tuit) => {
    const status = await tuitsModel.updateOne({_id:tid}, {$set: tuit});
    return status
}
export const deleteTuit = async (tid) => {
    const status = await tuitsModel.deleteOne({_id:tid});
    return status;
}