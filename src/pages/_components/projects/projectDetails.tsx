import { useParams, Navigate } from 'react-router-dom';
import getProjects from                     './getProjects';
import AssassinsShadowProject from          '../../projects/uniTeamProject1';
import CommunityMapDevelopmentProject from  '../../projects/rtsCustomMaps';
import DestructDroid from                   '../../projects/uniTeamProject2';
import DSTMod from                          '../../projects/modDST';
import JavaOpenEngine from                  '../../projects/javaOpenGLEngine';
import Procedural from                      '../../projects/dissertation';
import ProjectVale from                     '../../projects/projectVale';
import UnityResearch from                   '../../projects/unityResearch';

// Map project IDs to their components
const PROJECT_COMPONENTS: Record<string, React.ComponentType> = {
    'assassins_shadow': AssassinsShadowProject,
    'community_map_development': CommunityMapDevelopmentProject,
    'destruct_droid': DestructDroid,
    'dst_mod': DSTMod,
    'java_opengl_engine': JavaOpenEngine,
    'procedural_material_generation': Procedural,
    'project_vale': ProjectVale,
    'unity_research': UnityResearch
};

export default function ProjectDetails() {
    const { projectId } = useParams();
    const project = getProjects().find(p => p.id === projectId);

    if (!project || !PROJECT_COMPONENTS[projectId as string]) {
        return <Navigate to="/projects" replace />;
    }

    const ProjectComponent = PROJECT_COMPONENTS[projectId as string];
    return <ProjectComponent />;
}