import {commitMutation} from 'react-relay';
import {clearNotificationUpdater} from 'universal/mutations/ClearNotificationMutation';

const mutation = graphql`
  mutation ApproveToOrgMutation($dbNotificationId: ID!) {
    approveToOrg(dbNotificationId: $dbNotificationId) {
      deletedId
    }
  }
`;

const ApproveToOrgMutation = (environment, dbNotificationId, onError, onCompleted) => {
  const {viewerId} = environment;
  return commitMutation(environment, {
    mutation,
    variables: {dbNotificationId},
    updater: (store) => {
      const viewer = store.get(viewerId);
      const deletedId = store.getRootField('approveToOrg').getValue('deletedId');
      clearNotificationUpdater(viewer, [deletedId]);
    },
    optimisticUpdater: (store) => {
      const viewer = store.get(viewerId);
      clearNotificationUpdater(viewer, [dbNotificationId]);
    },
    onCompleted,
    onError
  });
};

export default ApproveToOrgMutation;
